import { Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../page"

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
        </Routes>
    )
}
