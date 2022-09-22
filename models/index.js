
// * Creating an index.js allows us to export multiple models 

require('../config/db.connection') // for best practice, establish connection here

module.exports = {
    Drinks: require('./Drinks'),
    User: require('./User')
}
