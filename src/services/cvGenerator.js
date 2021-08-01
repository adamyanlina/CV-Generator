const fs = require('fs'); 
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

      file.writeZip(`./tmp/${fileName}`);
      // file.pipe(res);

      res.writeHead(200, {
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Type': fileType,
      });
  
      return res.sendFile(`./tmp/${fileName}`, { root: '/'});
    } catch (error) {
      next(error);
    } 
  }
}