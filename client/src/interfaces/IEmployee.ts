import mongoose from 'mongoose';

export type Department = 'information technology' | 'human resources' | 'marketing' | 'sales' | 'security';

export interface IEmployee {
    _id: mongoose.Types.ObjectId,
    phoneNumber: string,
    name: string,
    email: string,
    department: Department,
    dateOfBirth: Date,
    gender: string,
    ethnicity: string,
    isOnVacation: boolean,
    createdAt: Date,
    updatedAt: Date,
    createdBy: mongoose.Types.ObjectId,
}