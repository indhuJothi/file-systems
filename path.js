const { basename } = require('path')
const path = require('path')

console.log(path.basename('/Users/Indhu/Desktop/test.txt'))
console.log(path.dirname('/Users/Indhu/Desktop/test.txt'))
console.log(path.extname('/Users/Indhu/Desktop/basename.html'))

console.log(path.parse('/Users/Indhu/Desktop/test.txt'))

let createPath = path.format({
    root:"/",
    dir:'/Users/Indhu/Desktop',
    base:'Path.txt',
    ext:"txt",
    name:'path'
})

console.log(createPath)

console.log(path.isAbsolute('/users/unit.txt'))
console.log(path.isAbsolute('users/'))  //if a given path is zero length string means it return false
console.log(path.join('/','Users','Indhu','Test.txt'))

console.log(path.normalize('/users/joe/..//test.txt'))
console.log(path.resolve('something.txt'))

