import { Button, Container, Typography } from '@material-ui/core'
import Categories from 'app/containers/categories/categories'
import { Formik } from 'formik'
import React, { Fragment } from 'react'

class CreateAd extends React.Component<any> {
  render() {
    return (
      <Container>
        <Typography variant='h1'>Создание нового объявления</Typography>
        <Typography variant='h5' color='secondary'>
          Для заполнения потребуется около 5 минут
        </Typography>
        <Formik
          initialValues={{
            categoryId: null
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({ values, errors, setValues, submitForm }) => (
            <Fragment>
              <Categories onSelect={(categoryId) => setValues({ categoryId })}/>
              <Button onClick={submitForm}>Дальше</Button>
            </Fragment>
          )}
        </Formik>
      </Container>
    )
  }
}

export default CreateAd