const netList = require('network-list');
var Table = require('cli-table');

console.reset = function () {
  return process.stdout.write('\033c');
}

console.reset();

var table = new Table({
    head: ['ip', 'Status', 'hostname', 'mac','vendor']
  , colWidths: [30,10, 50, 20,50]
});

var networkDevices = [];
netList.scanEach({}, (err, device) => {
  if(device.alive) {
	  console.log(device.hostname,device.ip)
  }
});

netList.scan({}, (err, arr) => {
	arr.filter(x => x.alive).forEach(device => {
		table.push([''+device.ip,device.alive ? 'Online' : 'Offline',''+device.hostname,''+device.mac,''+device.vendor,])
	})
	console.log(table.toString())
});




/*
netList.scan({}, (err, arr) => {
    console.log(arr); // array with all devices
});
*/
