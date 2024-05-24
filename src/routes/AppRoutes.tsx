import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { SurveyRoutes } from "../survey/routes/SurveyRoutes"
import { VoidHeardRoutes } from "../voidheard/routes/VoidHeardRoutes"


export const AppRoutes = () => {
    return (
        <Routes>
            {/* auth */}
            <Route path="/auth/*" element={<AuthRoutes />} />

            {/* survey */}
            <Route path="survey/*" element={<SurveyRoutes />} />

            {/* voidHeard */}
            <Route path="/*" element={<VoidHeardRoutes />} />
        </Routes>
    )
}
