import { printStoryTemplate, createStyles } from '@core/utils/storybook';

import mdx from './toggle.mdx';

export default {
    title: 'Components/Atoms/Toggle',
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

const TagName = 'ui-toggle';

createStyles(
    'component-stories',
    `
    .toggle-story span {
        border: 1px dashed;
    }
`,
);

const defaultArgs = {
    checked: false,
    disabled: false,
    name: 'toogle',
    value: 'toogle-value',
    identifier: 'checkbox-id',
    accessibleLabel: 'Switch',
};

const defaultArgTypes = {};

const Template = (args): string =>
    printStoryTemplate(
        TagName,
        { ...args, class: 'toggle-story' },
        '<span>Slot Label</span>',
    );

export const Toggle = Template.bind({});

Toggle.args = { ...defaultArgs };
Toggle.argTypes = { ...defaultArgTypes };
