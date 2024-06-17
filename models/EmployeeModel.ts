import mongoose from 'mongoose';
import { LOCATION, GENDER, ETHNICITY, DEPARTMENT } from '../utils/constants';

export interface IEmployee {
  name: string,
  dateOfBirth: Date,
  gender: string,
  ethnicity: string,
  department: string,
  isOnVacation: boolean,
  email: string,
  phoneNumber: string
  createdBy: mongoose.Types.ObjectId,
}

export interface IEmployeeModel extends IEmployee, Document {}

const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    gender: {
      type: String,
      enum: Object.values(GENDER),
    },
    ethnicity: {
      type: String,
      enum: Object.values(ETHNICITY),
    },
    department: {
      type: String,
      enum: Object.values(DEPARTMENT),
    },
    isOnVacation: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String
    },
    phoneNumber: {
      type: String,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default mongoose.model<IEmployeeModel>('Employee', EmployeeSchema);
