const { EOPNOTSUPP } = require('constants');
const fs = require('fs')

const path = require('path')

fs.mkdir(path.join(__dirname,'text'),(err)=>{
    if(err) console.log('Error')
    console.log('I am making directory')

})



// writeFile function with filename, content and callback function
fs.writeFile('newfileee', 'Learn Node FS module', function (err) {
  if (err) throw Error;
  console.log('File is created successfully.');
});
