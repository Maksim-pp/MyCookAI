export interface IFieldProps {
    className: string
    placeholder?: string
    maxLength?: number
    type: string
    value?: string
    changeHandler?: (e:any)=>void
}