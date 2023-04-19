import { printStoryTemplate } from '@core/utils/storybook';

import mdx from './link.mdx';

export default {
    title: 'Components/Atoms/Link',
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

const TagName = 'ui-link';

const Template = (args): string =>
    printStoryTemplate(TagName, { ...args }, '<span>Slot text</span>');

export const Link = Template.bind({});

Link.args = {
    url: '#',
    target: '',
    accesibleLabel: 'Go to link',
};

Link.argTypes = {};
