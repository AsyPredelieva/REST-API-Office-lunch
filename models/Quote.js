const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.model
const { String } = Schema.Types

const quoteSchema = new Schema({
    id: { type: String, unique: true, required: true },
    title: String,
    description: [String],
    _acl: {
        creator: String,
    },
    _kmd: {
        lmt: String,
        ect: String,
    },
})

module.exports = new Model('Quote', quoteSchema)
