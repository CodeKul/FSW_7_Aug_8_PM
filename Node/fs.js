// File System -> create, read, append
const fs=require('fs');

// Create File
// (fileName,DataInsert,(error)=>{statement})
// fs.writeFile('NodeFile.txt','Hello Im Node',(err)=>{
//         if(err) throw err;
//         console.log('File Created !!');
// });

// Read File
// (FileName,EncodongFormate,(error,Data)=>{Statement})
fs.readFile('NodeFile.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});

// Append
// (fileName,DataInsert,(err)=>{statement})
fs.appendFile('NodeFile.txt',' Append!! ',(err)=>{
    if(err) throw err;
    console.log('Data Append !!');
})