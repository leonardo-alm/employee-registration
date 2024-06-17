import Employee from '../models/EmployeeModel'
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';

type Query = {
  createdBy: string;
  gender?: string;
  ethnicity?: string;
  department?: string;
  isOnVacation?: boolean;
  name?: {};
}

interface EmployeeStats {
  'information technology': number,
  'human resources': number,
  'marketing': number,
  'sales': number,
  'security': number
}

export const getMyEmployees = async (req: Request, res: Response) => {
  const { name, gender, ethnicity, department, isOnVacation, sort } = req.query;

  const queryObject: Query = {
    createdBy: req.currentUser!.userId,
  };

  if (name) {
    queryObject.name = { $regex: name, $options: 'i' }
  }

  if (gender && gender !== 'all') {
    queryObject.gender = gender.toString();
  }

  if (ethnicity && ethnicity !== 'all') {
    queryObject.ethnicity = ethnicity.toString();
  }

  if (department && department !== 'all') {
    queryObject.department = department.toString();
  }

  if (isOnVacation && isOnVacation !== 'all') {
    queryObject.isOnVacation = isOnVacation.toString().toLocaleLowerCase() === 'yes' ? true : false;
  }

  const sortOptions: { [key: string]: string } = {
    newest: '-createdAt',
    oldest: 'createdAt',
    'a-z': 'name',
    'z-a': '-name',
  };

  const sortKey = sortOptions[sort as string] || sortOptions.newest;

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const employees = await Employee.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);

  const totalEmployees = await Employee.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalEmployees / limit);
  res
    .status(StatusCodes.OK)
    .json({ totalEmployees, numOfPages, currentPage: page, employees });
};

export const createEmployee = async (req: Request, res: Response) => {
  req.body.createdBy = req.currentUser!.userId;

  const employee = await Employee.create(req.body);

  res.status(StatusCodes.CREATED).json({ employee });
};

export const getEmployee = async (req: Request, res: Response) => {
  const employee = await Employee.findById(req.params.id);
  res.status(StatusCodes.OK).json({ employee });
};

export const updateEmployee = async (req: Request, res: Response) => {
  const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ msg: 'employee modified', employee: updatedEmployee });
};

export const deleteEmployee = async (req: Request, res: Response) => {
  const removedEmployee = await Employee.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: 'employee deleted', employee: removedEmployee });
};

export const showStats = async (req: Request, res: Response) => {
  let stats;

  try {
    stats = await Employee.aggregate([
      { $match: { createdBy: new mongoose.Types.ObjectId(req.currentUser!.userId) } },
      { $group: { _id: '$department', count: { $sum: 1 } } },
    ]);
  } catch (error) {
    console.error('Error fetching stats:', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
  }

  if (!Array.isArray(stats)) {
    console.error('Invalid stats format:', stats);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Invalid Stats Format' });
  }

  const defaultStats: EmployeeStats = {
    'information technology': 0,
    'human resources': 0,
    'marketing': 0,
    'sales': 0,
    'security': 0
  };

  stats.forEach((stat) => {
    const { _id: title, count } = stat;
    if (title === 'information technology') {
      defaultStats['information technology'] = count;
    } else if (title === 'human resources') {
      defaultStats['human resources'] = count;
    } else if (title === 'marketing') {
      defaultStats.marketing = count;
    } else if (title === 'sales') {
      defaultStats.sales = count;
    } else if (title === 'security') {
      defaultStats.security = count;
    }
  
  });

res.status(StatusCodes.OK).json({ defaultStats });
};
