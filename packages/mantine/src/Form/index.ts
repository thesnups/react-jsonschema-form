import { ComponentType } from 'react';
import { FormProps, withTheme } from '@snups/rjsf-core';
import { FormContextType, RJSFSchema, StrictRJSFSchema } from '@snups/rjsf-utils';

import { generateTheme } from '../Theme';

export function generateForm<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(): ComponentType<FormProps<T, S, F>> {
  return withTheme<T, S, F>(generateTheme<T, S, F>());
}

export default generateForm();
