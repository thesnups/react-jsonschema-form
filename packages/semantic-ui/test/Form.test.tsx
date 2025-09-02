import { RJSFSchema } from '@snups/rjsf-utils';
import validator from '@snups/rjsf-validator-ajv8';
import renderer from 'react-test-renderer';
import { formTests } from '@snups/rjsf-snapshot-tests';

import Form from '../src';

/** Mock the `react-component-ref` component used by semantic-ui to simply render the children, otherwise tests fail */
jest.mock('@fluentui/react-component-ref', () => ({
  ...jest.requireActual('@fluentui/react-component-ref'),
  Ref: jest.fn().mockImplementation(({ children }) => children),
}));

formTests(Form);

describe('semantic-ui specific tests', () => {
  test('field with special semantic options', () => {
    const schema: RJSFSchema = {
      title: 'A registration form',
      description: 'A simple test theme form example.',
      type: 'object',
      required: ['test'],
      properties: {
        test: {
          enum: [1, 2, 3],
          title: 'test',
        },
      },
    };
    const uiSchema = {
      test: {
        'ui:options': {
          semantic: {
            fluid: true,
          },
        },
      },
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} uiSchema={uiSchema} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
