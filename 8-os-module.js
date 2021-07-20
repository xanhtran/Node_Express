const os = require('os');

const user = os.userInfo()

console.log(user);
console.log(`The System Uptime is ${os.uptime()} second`);

const currentOs = {

    name: os.type(),
    release: os.realease(),
    totalMem: os.totalmem(),
    freeMen: os.freemem(),
}

console.log(currentOs);