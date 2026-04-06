module.exports = {
  apps: [
    {
      name: "eduecosystem-frontend",
      script: "npm.cmd",
      args: "run dev",
      cwd: "./frontend",
      watch: false,
      env: {
        NODE_ENV: "development"
      }
    },
    {
      name: "eduecosystem-backend",
      script: "../.venv/Scripts/python.exe",
      args: "-m uvicorn main:app --host 0.0.0.0 --port 8000 --reload",
      cwd: "./backend",
      watch: false
    }
  ]
};
