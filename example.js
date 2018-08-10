var arp = require('arp-a');
var tbl = { ipaddrs: {}, ifnames : {} };

arp.table(function(err, entry) {
  if (!!err) return console.log('arp: ' + err.message);
  if (!entry) return;

  tbl.ipaddrs[entry.ip] = entry.mac;
  if (!tbl.ifnames[entry.ifname]) tbl.ifnames[entry.ifname] = {};
  tbl.ifnames[entry.ifname][entry.mac] = entry.ip;
  console.log(entry)
});

console.log(tbl)