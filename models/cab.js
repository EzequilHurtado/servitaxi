var mongoose = require('mongoose')
const company = require('./company')

var cabSchema = mongoose.Schema({
    cab: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    plate_num: { type: String, required: true },
    is_disable: { type: Boolean, required: true },
    company: { type: company, required: true },
    create_at: { type: Date, default: Date.now }
})

var Cab = module.exports = mongoose.model('cabs', cabSchema)

module.exports.get = function(callback, limit){
    Cab.find(callback).limit(limit)
}