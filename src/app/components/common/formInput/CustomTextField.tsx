import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField'
import { FieldProps, getIn } from 'formik'
import * as React from 'react'

export type TextFieldProps = FieldProps &
  Omit<MuiTextFieldProps, 'error' | 'name' | 'onChange' | 'value'> & {
  // Fix for the type for variant which is using union
  // https://stackoverflow.com/questions/55664421
  variant: 'standard' | 'filled' | 'outlined' | undefined;
};

export const fieldToTextField = ({
                                   field,
                                   form,
                                   disabled,
                                   ...props
                                 }: TextFieldProps): MuiTextFieldProps => {
  const { name } = field
  const { touched, errors, isSubmitting } = form

  const fieldError = getIn(errors, name)
  const showError = getIn(touched, name) && !!fieldError

  return {
    ...props,
    ...field,
    error: showError,
    margin: 'normal',
    variant: 'outlined',
    helperText: showError ? fieldError : props.helperText,
    disabled: disabled != undefined ? disabled : isSubmitting
  }
}

export const CustomTextField: React.ComponentType<TextFieldProps> = (
  {
    children,
    ...props
  }: TextFieldProps
) =>
  (
    <MuiTextField {...fieldToTextField(props)}>{children}</MuiTextField>
  )

CustomTextField.displayName = 'FormikMaterialUITextField'
