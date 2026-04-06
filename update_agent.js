const { Client } = require('pg');

async function main() {
  const client = new Client({
    connectionString: 'postgres://paperclip:paperclip@127.0.0.1:54329/paperclip'
  });

  try {
    await client.connect();
    console.log('Connected to database');

    // Get all tables in public schema
    const tablesRes = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
    // Sort tables so 'agents' comes first
    const tables = tablesRes.rows.map(r => r.table_name).sort((a, b) => {
      if (a === 'agents') return -1;
      if (b === 'agents') return 1;
      return 0;
    });
    console.log('Available tables in public schema:', tables.join(', '));

    let foundTable = null;
    let foundColumn = null;
    let foundKeyColumn = null;

    for (const table of tables) {
      const columnsRes = await client.query(`SELECT column_name FROM information_schema.columns WHERE table_name = '${table}'`);
      const columns = columnsRes.rows.map(r => r.column_name);
      
      const configCol = columns.find(c => c.toLowerCase().includes('config'));
      const keyCol = columns.find(c => c.toLowerCase() === 'key' || c.toLowerCase() === 'id' || c.toLowerCase() === 'name');

      if (configCol && keyCol) {
        console.log(`Found potential table: ${table} with config column: ${configCol} and key/id/name column: ${keyCol}`);
        foundTable = table;
        foundColumn = configCol;
        foundKeyColumn = keyCol;
        break;
      }
    }

    if (!foundTable) {
      console.error('Could not find any table with config-like columns');
      process.exit(1);
    }

    // Log all agents to find the correct key
    const allAgents = await client.query(`SELECT * FROM ${foundTable}`);
    console.log('All agents in table:', JSON.stringify(allAgents.rows, null, 2));

    // Try to find the CEO agent in this table
    const targetAgent = allAgents.rows.find(a => 
      (a.key && a.key.toLowerCase().includes('ceo')) || 
      (a.name && a.name.toLowerCase().includes('ceo')) ||
      (a.id && a.id.toLowerCase().includes('ceo')) ||
      (a.id && a.id.toLowerCase() === 'saraaaa-2')
    );

    if (!targetAgent) {
      console.error(`CEO agent not found in table ${foundTable}`);
      process.exit(1);
    }

    console.log('Target agent found:', JSON.stringify(targetAgent, null, 2));

    const config = targetAgent[foundColumn];
    config.command = 'D:\\Development\\paperclip\\gemini.bat';

    await client.query(`UPDATE ${foundTable} SET ${foundColumn} = $1 WHERE ${foundKeyColumn} = $2`, [config, targetAgent[foundKeyColumn]]);
    console.log(`Successfully updated CEO agent in ${foundTable} table`);

    // Try to reset status if the column exists
    const statusCol = Object.keys(targetAgent).find(k => k.toLowerCase() === 'status');
    if (statusCol) {
      await client.query(`UPDATE ${foundTable} SET ${statusCol} = 'active' WHERE ${foundKeyColumn} = $1`, [targetAgent[foundKeyColumn]]);
      console.log('Reset CEO agent status to active');
    }

  } catch (err) {
    console.error('Error updating agent:', err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

main();
