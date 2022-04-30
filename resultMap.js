const Keyv = require('keyv');
const resultMap = new Keyv({ serialize: (input) => { return input }, deserialize: (input) => { return input } });
module.exports = resultMap;