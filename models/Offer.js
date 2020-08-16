const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.model
const { String, Number, Boolean, Object, ObjectId } = Schema.Types

const offerSchema = new Schema({
    id: { type: Number, unique: true, required: true },
    name: String,
    imgUrl: String,
    menuCategories: [
        {
            categoryId: String,
            name: String,
            menuItems: [
                {
                    itemId: String,
                    name: String,
                    count: Number,
                    price: String,
                },
            ],
        },
    ],
})

module.exports = new Model('Offer', offerSchema)
