import { IUser } from "./IUser";

export interface IDashboardContextValue {
    user: IUser;
    showModal: boolean;
    toggleModal: () => void;
    logoutUser: () => void;
}
