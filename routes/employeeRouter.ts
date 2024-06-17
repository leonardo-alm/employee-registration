import { Router } from 'express';
import { validateEmployeeInput, validateIdParam } from '../middleware/validationMiddleware';
import {
  getMyEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  showStats,
} from '../controllers/employeeController';

const router = Router();

router
  .route('/')
  .get(getMyEmployees)
  .post(validateEmployeeInput, createEmployee);

router.route('/stats').get(showStats);

router
  .route('/:id')
  .get(validateIdParam, getEmployee)
  .patch(validateEmployeeInput, validateIdParam, updateEmployee)
  .delete(validateIdParam, deleteEmployee);

export default router;