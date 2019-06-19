var { email, apiKey, zoneId, domain } = require('./config.json');
var cloudflareDnslink = require('cloudflare-ipfs-dnslink')(email, apiKey, zoneId, domain);

(async ()=> {
  let cid = 'QmR8bfCkYQkGJyA8W4s1wQs8dqorfNCGMCMWhpNiSsbS5m';
  let dnsRecord = await cloudflareDnslink.findDnsLinkRecord();
  if(dnsRecord) {
    // Update dnslink record
    let res = await cloudflareDnslink.update(dnsRecord, cid);
    console.log(res);
  } else {
    // Create new dnslink record
    let res = await cloudflareDnslink.create(cid);
    console.log(res);
  }
})();




// cloudflareDnslink.findDnsLinkRecord().then((record) => {
//   console.log(record);
//   if(record) {
//     console.log("Updated dnslink record")
//     cloudflareDnslink.update(record, cid).then((res)=>{
//       console.log(res);
//     }).catch((err)=> console.log(err));
//   } else {
//     console.log("Created new record for dnslink");
//     cloudflareDnslink.create(cid).then((res)=>{
//       console.log(res);
//     });
//   }
// });