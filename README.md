# Service for PDF documents generation & archiving

The service, having received a POST request with json data

- Creates PDF documents in its directory for each object in 'cv' folder
- Sends an archive(.zip) of the folder in response

## Getting started

Send a request to the service
  ```JS
   const users = require('./users.json');
  
   const getZip = async (req, res, next) => {
    const serviceURL = 'http://example.com/service/v1.0/cv/generate';

    try {
        const response = await fetch(serviceURL, { 
            method: 'POST', 
            body: JSON.stringify(users), 
            headers: {'Content-Type': 'application/json'}
        });
        const buffer = await response.buffer();
        // To do something...
    } catch (error) {
        next(error);
    }
}
  ```

## Tech

Service uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [PDFKit](https://www.npmjs.com/package/pdfkit) - JavaScript PDF generation library for Node and the browser
- [ADM-ZIP](https://www.npmjs.com/package/adm-zip) - pure JavaScript implementation for zip data compression for NodeJS.

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/adamyanlina/CV-Generator.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a .env file and add the following variables in it 
   ```shell
    PORT=8080
    SERVICE_VERSION=/service/v1.0
    ```

## License

MIT