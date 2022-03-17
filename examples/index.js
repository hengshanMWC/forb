const { getPackagesDir } = require('../index')
getPackagesDir()
  .then(res => console.log(res))