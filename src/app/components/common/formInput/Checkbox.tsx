import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@material-ui/core/Checkbox'
import { FieldProps } from 'formik'
import * as React from 'react'

export interface CheckboxProps
  extends FieldProps,
    Omit<MuiCheckboxProps,
      'form' | 'checked' | 'defaultChecked' | 'name' | 'onChange' | 'value'> {
}

export const fieldToCheckbox = ({
                                  field,
                                  form: { isSubmitting, setFieldValue },
                                  disabled,
                                  ...props
                                }: CheckboxProps): MuiCheckboxProps => {
  const onChange = () => {
    setFieldValue(field.name, !field.value);
  }

  return {
    disabled: disabled != undefined ? disabled : isSubmitting,
    ...props,
    ...field,
    // TODO handle indeterminate
    checked: field.value,
    value: field.value ? 'checked' : '',
    onChange
  }
}

export const Checkbox: React.ComponentType<CheckboxProps> = (
  props: CheckboxProps
) => <MuiCheckbox {...fieldToCheckbox(props)} />

Checkbox.displayName = 'FormikMaterialUICheckbox'
