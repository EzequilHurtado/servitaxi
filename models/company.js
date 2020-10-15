var mongoose = require('mongoose')

var companySchema = mongoose.Schema({
    company_name: { type: String, required: true },
    nit: { type: String, required: true },
    phone_number: { type: String, required: true },
    company_email: { type: String, required: true },
    is_disable: { type: Boolean, required: true },
    password: { type: String, required: true },
    create_at: { type: Date, default: Date.now }
})

var Company = module.exports = mongoose.model('company', companySchema)

module.exports.get = function(callback, limit){
    Cab.find(callback).limit(limit)
}