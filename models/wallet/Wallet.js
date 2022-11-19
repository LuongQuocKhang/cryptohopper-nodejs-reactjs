const mongoose = require("mongoose");


const walletSchema = new mongoose.Schema(
    {
        wallet_id: { type: String, unique: true, required: true },
        user_id: { 
            type: String, 
            unique: true, 
            type: mongoose.Schema.Types.ObjectId,
            ref: "account",
            required: true 
        },
        wallet_address: { type: String, unique: true, required: true },
        wallet_type: { 
            type: mongoose.Schema.Types.ObjectId ,
            ref: "walletType", 
            required: true 
        } 
    }, {
        collection: 'wallet'
    }
)


module.exports = mongoose.model('wallet', walletSchema);