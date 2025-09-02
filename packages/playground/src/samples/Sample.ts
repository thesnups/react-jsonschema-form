import { UiSchema } from '@snups/rjsf-utils';
import { FormProps } from '@snups/rjsf-core';

export type UiSchemaForTheme = (theme: string) => UiSchema;

export interface Sample extends Omit<FormProps, 'validator' | 'uiSchema'> {
  uiSchema?: FormProps['uiSchema'] | UiSchemaForTheme;
}
