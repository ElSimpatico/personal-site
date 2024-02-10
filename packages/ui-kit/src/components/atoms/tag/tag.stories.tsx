import { printStoryTemplate, createStyles } from '@core/utils/storybook';

import mdx from './tag.mdx';

export default {
    title: 'Components/Atoms/Tag',
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

const TagName = 'ui-tag';

createStyles(
    'component-stories',
    `
    .my-story-class span {
        border: 1px dashed;
    }
`,
);

const defaultArgs = {};

const defaultArgTypes = {};

const Template = (args): string =>
    printStoryTemplate(
        TagName,
        { ...args, class: 'my-story-class' },
        '<span>Slot Text</span>',
    );

export const Tag = Template.bind({});

Tag.args = { ...defaultArgs };
Tag.argTypes = { ...defaultArgTypes };
