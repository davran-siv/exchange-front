import MuiCheckbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import * as React from 'react'

import { CheckboxProps, fieldToCheckbox } from './Checkbox'

/**
 * Exclude props that are passed directly to the control
 * https://github.com/mui-org/material-ui/blob/v3.1.1/packages/material-ui/src/FormControlLabel/FormControlLabel.js#L71
 */
export interface CheckboxWithLabelProps extends CheckboxProps {
  label: string;
}

export const CheckboxWithLabel: React.ComponentType<CheckboxWithLabelProps> = ({
                                                                                 label,
                                                                                 ...props
                                                                               }) => {
  return (
    <FormControlLabel
      control={<MuiCheckbox {...fieldToCheckbox(props)} />}
      label={label}
    />
  )
}

CheckboxWithLabel.displayName = 'FormikMaterialUICheckboxWithLabel'