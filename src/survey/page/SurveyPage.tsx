import { Form, Formik } from "formik"

import { MyDate, MySelect, MyTextArea, MyTextInput } from "../../ui/form/components"
import { Button } from "../../ui/button/Button"
import '../styles/style.css'
export const SurveyPage = () => {
    return (
        <div className="container">
            <h1>Hijo del sol</h1>
            <h2>Encuesta de satisfaccion</h2>
            <Formik 
                initialValues={{
                                name: '',
                                tableNum: '',
                                attendedBy: '',
                                recommendation: '',
                                service:'',
                                product:'',
                                infrastructure:'',
                                date: ''
                            }} 
                onSubmit={(value) => {
                    console.log(value)
                }}
            >
                {() =>{
                    return (
                        <Form>
                            <MyDate label={"Nombre"} name={"name"} />
                            <MyTextInput label={"Mesa"} name={"tableNum"} />
                            <MyTextInput label={"Garzon"} name={"attlendeBy"} />
                            <MyTextArea label={"Recomendaciones"} name={"recommendation"} />
                            <MySelect label={"Calificacion de Servicio"} name={"service"} >
                                <option value=''>Tu servicio fue...</option>
                                <option value='excelente'>Muy Bueno</option>
                                <option value='bueno'>Bueno</option>
                                <option value='regular'>regular</option>
                                <option value='malo'>malo</option>
                            </MySelect>                       
                            <MySelect label={"Calificacion de los productos"} name={"product"} >
                                <option value=''>Tus productos...</option>
                                <option value='excelente'>Muy Bueno</option>
                                <option value='bueno'>Bueno</option>
                                <option value='regular'>regular</option>
                                <option value='malo'>malo</option>
                            </MySelect>                       
                            <MySelect label={"Calificacion de la infraestructura"} name={"infrastructure"} >
                                <option value=''>El restaurante fue...</option>
                                <option value='excelente'>Muy Bueno</option>
                                <option value='bueno'>Bueno</option>
                                <option value='regular'>regular</option>
                                <option value='malo'>malo</option>
                            </MySelect>                       
                            <Button name={"Enviar"} />                        </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
}