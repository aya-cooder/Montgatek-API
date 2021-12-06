const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: false,
    //     default: ''
    // },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // passwordHash: {
    //     type: String,
    //     required: true,
    // },
    // phone: {
    //     type: String,
    //     required: false,
    // },
    // street: {
    //     type: String,
    //     default: '',
    //     required: false,
    // },
    // apartment: {
    //     type: String,
    //     default: '',
    //     required: false,
    // },
    // zip :{
    //     type: String,
    //     default: '',
    //     required: false,
    // },
    // city: {
    //     type: String,
    //     default: '',
    //     required: false,
    // },
    // country: {
    //     type: String,
    //     default: '',
    //     required: false,
    // }

    firstName: {
        type: String,
        required: true,
        default: ''
    },
    lastName: {
        type: String,
        required: true,
        default: ''
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    },
    address: {
        type: [{
            firstName: {
                type: String,
                required: false
            },
            lastName: {
                type: String,
                required: false
            },
            governorate: {
                type: String,
                required: false
            },
            city: {
                type: String,
                required: false
            },
            area: {
                type: String,
                required: false
            },
            street: {
                type: String,
                required: false
            },
            phone: {
                type: String,
                required: false
            },
            locationType: {
                type: String,
                required: false
            },
            shippingNote: {
                type: String,
                require: false
            }
        }],
        required: false,
    },
    deliveryAddress: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    gender: {
        type: String,
        required: false,
    },
    nationality: {
        type: String,
        required: false,
    },
    birthDate: {
        type: Date,
        required: false,
    }

});

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

exports.User = mongoose.model('User', userSchema);
exports.userSchema = userSchema;
