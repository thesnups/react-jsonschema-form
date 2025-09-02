import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { FormProps } from '@snups/rjsf-core';

import Form from '../src';

export default function WrappedForm(props: FormProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Form {...props} />
    </ChakraProvider>
  );
}
