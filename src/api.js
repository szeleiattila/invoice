const fs = require('fs');
const readDataJson = (filePath, callback) => {
    fs.readFile(filePath,{encoding: "utf-8", flag: 'r'}, (err, data) => {
        callback(JSON.parse(data))
    })
}