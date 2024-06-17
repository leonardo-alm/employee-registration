export interface IInputType {
    type?: string 
    name?: string 
    value?: string 
    defaultValue?: string,
    labelText?: string 
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

