import { IEmployee } from "./IEmployee"
import { ISearchValues } from "./ISearchValues"

export interface IMyEmployeesContext {
    data: {
        employees: IEmployee[],
        totalEmployees: number,
        numOfPages: number,
        currentPage: number
    },
    searchValues: ISearchValues
}