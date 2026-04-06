const { Client } = require('pg');

async function main() {
  const client = new Client({
    connectionString: 'postgres://paperclip:paperclip@127.0.0.1:54329/paperclip'
  });

  try {
    await client.connect();
    
    // Check CEO agent status
    const agentRes = await client.query("SELECT id, status, adapter_config FROM agents WHERE name = 'CEO'");
    console.log('CEO Agent current state:', JSON.stringify(agentRes.rows, null, 2));

    // Check recent heartbeat runs
    const runsRes = await client.query("SELECT id, status, error_message, started_at FROM heartbeat_runs WHERE agent_id = $1 ORDER BY started_at DESC LIMIT 3", [agentRes.rows[0].id]);
    console.log('Recent Heartbeat Runs for CEO:', JSON.stringify(runsRes.rows, null, 2));

  } catch (err) {
    console.error('Error during verification:', err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

main();
