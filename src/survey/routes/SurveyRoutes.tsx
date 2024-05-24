import { Route, Routes } from "react-router-dom"
import { SurveyPage } from "../page/SurveyPage"


export const SurveyRoutes = () => {
    return (
        <Routes>
            <Route path="/survey-page" element={<SurveyPage />} />
        </Routes>
    )
}
