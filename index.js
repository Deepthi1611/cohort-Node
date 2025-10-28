const fs = require('fs');
const {program} = require('commander');

// meta data
program
.name('my-cli-tool')
.version('1.0.0')
.description('A simple CLI tool example');

// cli arguments
program
// .option('-p, --path <string>', 'specify your file path')
.requiredOption('-p, --path <string>', 'specify your file path')
.option('-a, --age <number>', 'specify your age', 25); // default value


program.parse(process.argv);

// by default all arguments are treated as strings
const options = program.opts();
console.log(typeof(options.age), 'type of the age argument'); 

if(!options.path) {
    console.error('Error: Please provide a file path using -p or --path option.');
    process.exit(1);
} else {
    // read file content and count the number of words in it
    fs.readFile(options.path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file from path ${options.path}:`, err.message);
            process.exit(1);
        }
        const wordCount = data.split(/\s+/).filter(word => word.length > 0).length;
        console.log(`The file at path ${options.path} contains ${wordCount} words.`);
    }); 
}