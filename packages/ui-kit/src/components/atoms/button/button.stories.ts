import { printStoryTemplate, createStyles } from '@core/utils/storybook';
import { ButtonVariants } from './types';

import mdx from './button.mdx';

export default {
  title: 'Components/Atoms/Button',
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

createStyles(
  'button-stories',
  `
    .story-button span {
        border: 1px dashed;
    }
`,
);

const Template = (args): string => printStoryTemplate('ui-button', { ...args, class: 'story-button' }, '<span>Slot text</span>');

export const Button = Template.bind({});

Button.args = {
  variant: 'primary',
  disabled: false,
  accesibleLabel: 'Call to action',
  linkHref: '',
  linkTarget: '',
};

Button.argTypes = {
  variant: {
    type: 'select',
    options: ButtonVariants,
  },
};
