import { Client } from 'pg';
// using connection string
const pgClient = new Client("psql 'postgresql://neondb_owner:npg_Q2zrsWI7fKRH@ep-polished-rain-ahbmxeci-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'");
// using config object
const pgClient2 = new Client({
    user: 'neondb_owner',
    password: 'npg_Q2zrsWI7fKRH',
    host: 'ep-polished-rain-ahbmxeci-pooler.c-3.us-east-1.aws.neon.tech',
    port: 5432,
    database: 'neondb',
    ssl: true
});
// this is an async operation
async function main() {
    await pgClient2.connect();
}
main();
//# sourceMappingURL=index.js.map