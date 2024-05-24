import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string
    name: string
    [x: string]: any 
}

export const MyTextArea = ({label, ...props}: Props) => {
    const [field] = useField(props)
    return (
        <div className='form-group'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
        </div>
        
    )
}