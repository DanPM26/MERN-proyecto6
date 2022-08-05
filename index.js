const app = require('./src/app');

require('dotenv').config()
require('./src/db/mongodb')

const port = 4000

app.listen(port, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`)
})