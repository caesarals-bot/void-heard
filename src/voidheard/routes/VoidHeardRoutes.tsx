import { Route, Routes } from "react-router-dom"
import { VoidHeardPage } from "../page/VoidHeardPage"


export const VoidHeardRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<VoidHeardPage/>} />
        </Routes>
    )
}
