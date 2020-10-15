var mongoose = require('mongoose')
const cab = require('./cab')
const user = require('./user')

var tripSchema = mongoose.Schema({
    trip: { type: String, required: true },
    start_loc: { type: [String], required: true },
    end_loc: { type: [String], required: true },
    trip_start_time: { type: Date, required: true },
    trip_end_time: { type: Date, required: true },
    trip_payment: { type: [String], required: true },
    trip_date: { type: Date, required: true },
    evaluation: { type: [String], required: true },
    comment_driver: { type: String, required: true },
    user: { type: user, required: true },
    driver: { type: user, required: true },
    cab: { type: cab, required: true },
    create_at: { type: Date, default: Date.now }
})

var Trip = module.exports = mongoose.model('trips', tripSchema)

module.exports.get = function(callback, limit){
    Cab.find(callback).limit(limit)
}