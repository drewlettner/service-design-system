// ============================================================
// TextInput.figma.tsx
// Code Connect mapping — Text Input / Beta
// Figma file: Service-Team-UX-Design-Library
// ============================================================

import figma from '@figma/code-connect';
import TextInput from './TextInput';

figma.connect(
  TextInput,
  'https://www.figma.com/design/A3rnvq6nqChka66tV1wUZE/Service-Team-UX-Design-Library?node-id=1281-907',
  {
    props: {
      size: figma.enum('Size', {
        'Compact': 'compact',
        'Default': 'default',
        'Large':   'large',
      }),
      state: figma.enum('State', {
        'Default':  'default',
        'Focused':  'default',
        'Filled':   'default',
        'Error':    'error',
        'Disabled': 'disabled',
      }),
      leadingIcon: figma.enum('Icon', {
        'No Icon':  undefined,
        'Leading':  'search',
        'Trailing': undefined,
        'Both':     'search',
      }),
      trailingIcon: figma.enum('Icon', {
        'No Icon':  undefined,
        'Leading':  undefined,
        'Trailing': 'paperclip',
        'Both':     'paperclip',
      }),
      supportingText: figma.enum('Supporting Text', {
        'True':  'Helper text',
        'False': undefined,
      }),
    },
    example: ({ size, state, leadingIcon, trailingIcon, supportingText }) => (
      <TextInput
        label="Label"
        size={size}
        state={state}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
        supportingText={supportingText}
      />
    ),
  }
);
