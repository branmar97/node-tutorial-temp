const os = require('os')
// OS is a built in module (no need to install)

// Info about current user
const user = os.userInfo()
console.log(user)

// Method returns the system uptime in seconds
console.log(`The system uptime is: ${os.uptime()/60} minutes`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)