# Service for PDF documents generation & archiving

Only domains (and subdomains) within aca.am can make requests to the service.
The service, having received a POST request with json file

- Creates PDF documents in its directory for each object in 'cv' folder
- Sends an archive(.zip) of the folder in response

## Getting started

Send a POST request to the [http://zip-pdf.herokuapp.com/api/v1.0/cv/generate]('http://zip-pdf.herokuapp.com/api/v1.0/cv/generate') by sending a json file.

You can test service by link - [http://zip-pdf.herokuapp.com/api/v1.0/test-service](http://zip-pdf.herokuapp.com/api/v1.0/test-service)

## Tech

Service uses a number of open source projects to work properly:

- [Node.js](https://nodejs.org/) - evented I/O for the backend
- [Express](https://expressjs.com/) - fast node.js network app framework [@tjholowaychuk]
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

## Documentation 

You can find the documentation by following this [Postman link](https://documenter.getpostman.com/view/13495505/TzscqTBM)

## License

MIT