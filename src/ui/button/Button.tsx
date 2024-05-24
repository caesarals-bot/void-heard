import { FC } from "react"

interface ButtonProps {
    name: string,
}

export const Button: FC<ButtonProps>= ({name}) => {
    return (
        <>
            <button type='submit'>{name}</button>
        </>
    )
}
