const q=require('qrcode');
const fs=require('fs');
const data='tanvi paradkar';
const ofile='qr.png';
q.toFile(ofile,data,(err)=>{

if(err)
  throw err;
else
  console.log("qr code generated");

});