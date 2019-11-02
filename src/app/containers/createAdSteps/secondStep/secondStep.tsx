import { Button } from '@material-ui/core'
import { Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  categoryId: Yup.string().required('Выберите категорию')
})

const CreateAdSecondStep = (props: any) => {

  return (
    <Formik
      initialValues={{
        categoryId: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ values, errors, submitForm, setFieldValue, handleSubmit }) => {
        return (

            <Button onClick={submitForm}>Дальше</Button>
        )
      }}
    </Formik>
  )
}

export default CreateAdSecondStep