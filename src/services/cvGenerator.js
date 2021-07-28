const fs = require('fs');
const AdmZip = require('adm-zip');
const PDFDocument = require('pdfkit');

const { isDirEmpty } = require('../helpers');

const pathDocuments = './src/public/cv';

const generatePDF = async (req) => {
    try {
      if(!isDirEmpty(pathDocuments)) {
        fs.rmdirSync(pathDocuments, {
          recursive: true
        })
      }
      fs.mkdirSync(pathDocuments);
      const users = req.body;

      users.map(user => {
        const { email } = user;
        const docName = email.slice(0, email.length - 12);

        const doc = new PDFDocument();
        
        doc.pipe(fs.createWriteStream(`${pathDocuments}/${docName}.pdf`));

        doc.fontSize(16)
          .fillColor('blue')
          .text(JSON.stringify(user, null, 2), 100, 100)

        doc.end();
      });
    } catch (e) {
      throw e;
    }
}

exports.generateZIP = async (req, res, next) => {
  try {
    await generatePDF(req);

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