import { printStoryTemplate, createStyles } from '@core/utils/storybook';

import mdx from './theme-toggle.mdx';

export default {
    title: 'Components/Molecules/Theme Toggle',
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

const TagName = 'ui-theme-toggle';

createStyles(
    'component-stories',
    `
    .my-story-class span {
        border: 1px dashed;
    }
`,
);

const defaultArgs = {
    darkMode: false,
    accessibleLabel: 'Dark mode',
};

const defaultArgTypes = {};

const Template = (args): string =>
    printStoryTemplate(TagName, { ...args, class: 'my-story-class' });

export const ThemeToggle = Template.bind({});

ThemeToggle.args = { ...defaultArgs };
ThemeToggle.argTypes = { ...defaultArgTypes };
