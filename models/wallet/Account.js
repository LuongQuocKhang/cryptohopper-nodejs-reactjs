const mongoose = require("mongoose");
var bcrypt = require('bcrypt');
const wallet = require("./wallet");

const accountSchema = new mongoose.Schema(
    {
        user_id: { type: String, unique: true, required: true },
        username: { type: String, unique: true, required: true },
        hash_password: { type: String, required: true },
        email: { type: String, lowercase: true, trim: true },
        created_date: String,
        first_name: String,
        last_name: String,
        birth_date: String,
        gender: String,
        avatar: String,
        last_login_time: String,
        user_Type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userType"
        },
        wallets : [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: wallet
            }
        ]
    }, {
        collection: 'account'
    }
)

// comparePassword
UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password)
}

module.exports = mongoose.model('account', accountSchema);