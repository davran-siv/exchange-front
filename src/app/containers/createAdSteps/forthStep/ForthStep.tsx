import { Button } from '@material-ui/core'
import { CheckboxWithLabel } from 'app/components/common/formInput'
import Categories from 'app/containers/categories/categories'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  categoryId: Yup.string().required('Выберите категорию'),
  considerOptions: Yup.bool()
})


const CreateAdForthStep = (props: any) => {
  return (
    <Formik
      initialValues={{
        categoryId: [],
        considerOptions: false
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ values, submitForm, setFieldValue }) => {
        const onCategorySelect = (categoryId) => {
          setFieldValue('categoryId', [categoryId])
        }
        const onCategoryDeselect = () => {
          setFieldValue('categoryId', [])
        }

        return (
          <Form>
            <Categories
              onSelect={onCategorySelect}
              onDeselect={onCategoryDeselect}
              value={values.categoryId && values.categoryId.length && values.categoryId[0]}
            />
            <div>
              <Field
                value='considerOptions'
                name="considerOptions"
                label={'Рассмотрю варианты'}
                component={CheckboxWithLabel}
              />
            </div>
            <Button onClick={submitForm}>Дальше</Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default CreateAdForthStep