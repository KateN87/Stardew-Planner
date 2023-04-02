import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const Schema = mongoose.Schema;
const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.statics.login = async function (userName, password) {
    if (!userName || !password) {
        throw Error('All fields must be filled');
    }

    //trying to find user in db
    const user = await this.findOne({ userName });
    //"this" refers to the User-model when its being called

    if (!user) {
        throw Error('Incorrect userName or password');
    }

    //compares password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error('Incorrect userName or password');
    }

    return user;
};

userSchema.statics.signup = async function (userName, password) {
    //checks if userName and password is put in
    if (!userName || !password) {
        throw Error('All fields must be filled');
    }

    //check if userName already exists
    const exists = await this.findOne({ userName });

    if (exists) {
        throw Error('User name already in use');
    }

    //Chcecks if password is strong enough
    if (!validator.isStrongPassword(password)) {
        throw Error(
            'Password not strong enough. Needs to be at least 8 characters and contain lower case, upper case, number and special character'
        );
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({ userName, password: hash });

    return user;
};

const User = mongoose.model('User', userSchema);

export default User;
