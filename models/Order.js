const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.model
const { String, Number, Boolean, Object, ObjectId, Array } = Schema.Types

const orderSchema = new Schema(
    {
        order: [
            {
                name: {
                    type: String,
                    require: true,
                    index: true,
                },
                count: String,
                sum: Number,
            },
        ],
        totalSum: {
            type: Number,
            require: true,
        },
        author: {
            type: ObjectId,
            ref: 'User',
        },
    },
    { timestamps: { createdAt: 'created_at' } }
)

module.exports = new Model('Order', orderSchema)
