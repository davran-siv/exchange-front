import { Button, FormControlLabel, Radio } from '@material-ui/core'
import { TextField, RadioGroupCustom, SimpleFileUpload } from 'app/components/common/formInput'
import { AdType } from 'app/constants'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  type: Yup.string().required('Выберите категорию'),
  title: Yup.string().required('Заголовок обязателен'),
})


const CreateAdSecondStep = (props: any) => {
  return (
    <Formik
      initialValues={{
        type: AdType.service,
        title: '',
        description: '',
        images: []
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ values, errors, submitForm, setFieldValue, handleSubmit, isSubmitting }) => {
        return (
          <Form>
            <Field name="type" component={RadioGroupCustom} row>
              <FormControlLabel
                value={AdType.product}
                control={<Radio disabled={isSubmitting}/>}
                label="Товар"
                disabled={isSubmitting}
                labelPlacement="start"
              />
              <FormControlLabel
                value={AdType.service}
                control={<Radio disabled={isSubmitting}/>}
                label="Услуга"
                disabled={isSubmitting}
                labelPlacement="start"
              />
            </Field>
            <div>
              <Field
                name="title"
                label='Заголовок'
                component={TextField}
              />
            </div>
            <div>
              <Field
                name="description"
                label='Описание'
                rowsMax="4"
                multiline
                component={TextField}
              />
            </div>
            <div>
              <Field
                name="images[0]"
                component={SimpleFileUpload}
              />
            </div>
            <div>
              <Field
                name="images[1]"
                component={SimpleFileUpload}
              />
            </div>
            <Button onClick={submitForm}>Дальше</Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default CreateAdSecondStep