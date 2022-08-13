const { spawn } = require("child_process")

const childPython = spawn('python', ['cc.py', '-down'])

childPython.stdout.on('data', (data) => {
    console.log(`stdount: ${data}`);
});

childPython.stderr.on('data', (data) => {
    console.log(`staderr: ${data}`)
});

childPython.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
})