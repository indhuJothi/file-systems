// synchronous eg

const fs = require ('fs')

try{
    fs.unlinkSync('helloo.txt')
    console.log('sucessfullu deleted the file')
}
catch(err){
console.log('something happened')
}


fs.unlink('mainn.txt',(err)=>{
    if(err){
        console.log('something happened....')
    }
    else{
        console.log('successfully deleted')
    }
})


fs.rename('rename.txt','newname.txt',(err)=>{
    if(err){
        console.log('error')

    }
    else{
        console.log('Renamed')
    }

})

fs.stat('main.txt',(err,stats)=>{
    if(err) throw Error;
    console.log(`stat:${JSON.stringify(stats)}`)

})

const read=fs.readFileSync('main.txt',{encoding:'utf-8',flag:'r'})

console.log(read)

fs.readFile('hello.txt','utf-8',(err,fd)=>{
    if(err) throw Error
    console.log(fd)
})

fs.copyFile('hello.txt','main.txt',(err)=>{   // copying file erase the already existing content and copy the src to dest 
    if(err){console.log('error')}
    else{
        console.log('file copied')
    }
})


fs.appendFile('appendFile.txt','I am appended this content',(err)=>{
    if(err)console.log('Error')
})