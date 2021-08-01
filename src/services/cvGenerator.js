const fs = require('fs'); 
const path = require('path');
const AdmZip = require('adm-zip');

const { getJson } = require('../helpers');

exports.generateZIP = (req, res, next) => {
  if(!fs.existsSync(`./tmp/cv.zip`)) {
    try {
      getJson(req, res);
  
      const file = new AdmZip();

      file.addLocalFolder('./tmp');
      
      const fileName = 'cv.zip';
      const fileType = 'application/zip';

      fs.writeFileSync(`./tmp/${fileName}`, file.toBuffer());

      res.writeHead(200, {
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Type': fileType,
      });
  
      return res.sendFile(path.join(__dirname, '/tmp', fileName));
    } catch (error) {
      next(error);
    } 
  }
}