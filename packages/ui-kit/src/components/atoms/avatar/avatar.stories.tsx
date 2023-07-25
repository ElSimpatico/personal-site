import { printStoryTemplate } from '@core/utils/storybook';

import mdx from './avatar.mdx';

export default {
    title: 'Components/Atoms/Avatar',
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

const TagName = 'ui-avatar';

const defaultArgs = {
    imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBlcmZpbCUyMGRlJTIwdXN1YXJpb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Avatar image',
};

const defaultArgTypes = {};

const Template = (args): string => printStoryTemplate(TagName, { ...args });

export const Avatar = Template.bind({});

Avatar.args = { ...defaultArgs };
Avatar.argTypes = { ...defaultArgTypes };
