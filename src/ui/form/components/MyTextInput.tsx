import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string
    name: string
    type?: 'text' | 'number' | 'email' | 'password'
    placeholder?: string
    [x: string]: any 
}

export const MyTextInput = ({label, ...props}: Props) => {
    const [field] = useField(props)
    return (
        <div className='form-group'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
            {/* {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            } */}
        </div>
        
    )
}