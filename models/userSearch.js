const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSearchSchema = Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    label: {
        type: String,
        required: true,
        unique: true,
    },
    codprov: {
        type: String,
        required: true,
        unique: true,
    },
    idpob: {
        type: String,
        required: true,
        unique: true,
    },
})

module.exports = mongoose.model("UserSearch", UserSearchSchema)