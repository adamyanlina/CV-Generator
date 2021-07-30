const fs = require('fs'); 
const AdmZip = require('adm-zip');

const { getJson } = require('../helpers');

const pathDocuments = './src/public/cv';

exports.generateZIP = (req, res, next) => {
  if(!fs.existsSync(`${pathDocuments}cv.zip`)) {
    try {
      getJson(req, res);
  
      const file = new AdmZip();

      file.addLocalFolder(pathDocuments);
  
      const fileName = 'cv.zip';
      const fileType = 'application/zip';
  
      res.writeHead(200, {
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Type': fileType,
      });
  
      return res.end(file.toBuffer());
    } catch (error) {
      next(error);
    } 
  }
}