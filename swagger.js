const swaggerAutoGen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'Contacts Api',
    description: 'Contacts Api for my Byu Class'
  },
  host: 'localhost:3004',
  schemes: ['https', 'http']
}

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.js']


//generate swagger file
swaggerAutoGen(outputFile, endpointsFiles, doc)

