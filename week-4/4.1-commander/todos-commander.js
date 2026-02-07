const fs = require('fs');
const {program} = require('commander');
const path = require('path');

// meta data
program
.name('my-cli-tool')
.version('1.0.0')
.description('Todo app using CLI');

function parseId(value) {
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) {
    throw new commander.InvalidOptionArgumentError('ID must be a number.');
  }
  return parsed;
}

// cli arguments
program
  .requiredOption('-a, --action <string>', 'Action to perform: add, remove, update')
  .requiredOption('-i, --id <number>', 'Enter id of todo item', parseId)
  .option('-t, --title <string>', 'Enter title of todo item');


program.parse(process.argv);

const options = program.opts();

// Path to todos.json
const filePath = path.join(__dirname, 'todos.json');

// Ensure file exists
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([])); // create empty array
  console.log('Created todos.json file');
}

// Read existing todos
let todos = JSON.parse(fs.readFileSync(filePath, 'utf8'));


// Perform actions
switch (options.action.toLowerCase()) {
  case 'add':
    if (!options.title) {
      console.error('Please provide a title using --title');
      process.exit(1);
    }
    // Check if ID already exists
    if (todos.some(todo => todo.id === options.id)) {
      console.error('A todo with this ID already exists.');
      process.exit(1);
    }
    todos.push({ id: options.id, title: options.title });
    console.log(`Added todo: [${options.id}] ${options.title}`);
    break;

  case 'remove':
    const initialLength = todos.length;
    todos = todos.filter(todo => todo.id !== options.id);
    if (todos.length === initialLength) {
      console.error('No todo found with that ID.');
      process.exit(1);
    }
    console.log(`Removed todo with ID ${options.id}`);
    break;

  case 'update':
    const todoToUpdate = todos.find(todo => todo.id === options.id);
    if (!todoToUpdate) {
      console.error('No todo found with that ID.');
      process.exit(1);
    }
    if (!options.title) {
      console.error('Please provide a new title using --title');
      process.exit(1);
    }
    todoToUpdate.title = options.title;
    console.log(`Updated todo [${options.id}] → ${options.title}`);
    break;

  default:
    console.error('Invalid action. Use add, remove, or update.');
    process.exit(1);
}

// Write back updated todos
fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));