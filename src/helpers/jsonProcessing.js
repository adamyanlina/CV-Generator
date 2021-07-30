const fs = require('fs');
const multer = require('multer');
const PDFDocument = require('pdfkit');

const pathDocuments = './src/public/cv';

module.exports = getJson = (req, res) => {
  const storage = multer.memoryStorage({
    destination: function(req, file, callback) {
       callback(null, '');
    }
  });
  const upload = multer({ storage: storage }).any();

  upload(req, res, (err) => {
    const users = req.files[0].buffer.toString();

    generatePDF(JSON.parse(users));
  });
}

const generatePDF = (users) => {
    try {  
      fs.mkdirSync(pathDocuments, { recursive: true });

      users.map(user => {
          console.log('user: ', user);

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