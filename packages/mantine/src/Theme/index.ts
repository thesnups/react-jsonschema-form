import { ThemeProps } from '@snups/rjsf-core';
import { FormContextType, RJSFSchema, StrictRJSFSchema } from '@snups/rjsf-utils';

import { generateTemplates } from '../templates';
import { generateWidgets } from '../widgets';

export function generateTheme<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(): ThemeProps<T, S, F> {
  return {
    templates: generateTemplates<T, S, F>(),
    widgets: generateWidgets<T, S, F>(),
  };
}

export default generateTheme();
