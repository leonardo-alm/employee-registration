export interface IInputSelectProps {
    list: string[]
    name: string,
    value?: string,
    defaultValue?: string,
    labelText?: string,
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

