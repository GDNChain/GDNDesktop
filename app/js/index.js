const $ = require('jquery');
const IPFS = require('ipfs-core');
var ipfs,id;

// var ipfs;
// console.log(IPFS)
// console.log(1)
async function  initIPFS()
{  
    try {
         ipfs = await IPFS.create()
         id = await ipfs.id()
        console.log(id.id)
        $(".right_con").load("./dash.html");
      } catch (err) {
        console.error(err)
      }
} 
initIPFS();
// console.log(4)
// // console.log(ipfs)
// // const { cid } = await ipfs.add('Hello world');

// // console.info(cid)

// $(".right_con").load("./dash.html",{cid:'sdsd'});
// $('#dash').on('click',function(){
//     $(".right_con").load("./dash.html");
// });