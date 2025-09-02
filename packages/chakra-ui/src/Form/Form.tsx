import { ComponentType } from 'react';
import { withTheme, FormProps } from '@snups/rjsf-core';
import { generateTheme } from '../Theme';
import { FormContextType, RJSFSchema, StrictRJSFSchema } from '@snups/rjsf-utils';

export function generateForm<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(): ComponentType<FormProps<T, S, F>> {
  return withTheme<T, S, F>(generateTheme<T, S, F>());
}

export default generateForm();
