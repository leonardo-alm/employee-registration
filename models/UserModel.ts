import mongoose from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  password: string;
  company: string;
}

export interface IUserModel extends IUser, Document {}

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  company: {
    type: String,
    default: 'company',
  },
});

UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model<IUserModel>('User', UserSchema);
