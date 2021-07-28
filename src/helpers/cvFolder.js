const fs = require('fs');

module.exports = isDirEmpty = (dirname) => {
    return fs.readdir(dirname, (error, files) => {
        if(error) throw error;
        return files.length === 0;
    });
}