var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost/prefy');

var userSchema = mongoose.Schema({
	_id:  Number,
	name: String,
	mail_address: { type: String, required: '$B%a!<%k%"%I%l%9$rF~NO$7$F$/$@$5$$(B', unique: true },
	password: {type: String, required: true }
});

userSchema.plugin(uniqueValidator, { message: '$B$9$G$KEPO?$5$l$F$$$k%a!<%k%"%I%l%9$G$9(B' });
var User = mongoose.model('User', userSchema);

module.exports = User;
