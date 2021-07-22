#!/usr/bin/env node
let fs=require('fs');
(function(){
let n=process.argv[2];
let name=process.argv[3];
if(typeof +n=="number" && typeof name==="string" && n>0){
  for(let i=0;i<n;i++){
    if(fs.existsSync(`${name}-${i}`)){
      fs.rmdirSync(`${name}-${i}`)
    }
    else{
      fs.mkdirSync(`${name}-${i}`)
    }
  }
}
else{
  console.log("invalid input");
return;
}
})();