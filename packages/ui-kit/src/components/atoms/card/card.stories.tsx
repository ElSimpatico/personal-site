import { printStoryTemplate, createStyles } from '@core/utils/storybook';

import mdx from './card.mdx';

export default {
    title: 'Components/Atoms/Card',
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

const TagName = 'ui-card';

createStyles(
    'card-stories',
    `
    .story-card .card-body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        border: 1px dashed;
    }
`,
);

const defaultArgs = {
    imageUrl:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Card image',
    horizontal: false,
};

const defaultArgTypes = {};

const children = `
  <div slot="card-body" class="card-body">
    <span><b>card-body</b> Slot</span>
  </div>
`;

const Template = (args): string =>
    printStoryTemplate(TagName, { ...args, class: 'story-card' }, children);

export const Card = Template.bind({});

Card.args = { ...defaultArgs };
Card.argTypes = { ...defaultArgTypes };

const childrenContent = `
  <div slot="card-body" class="card-body">
    <h2>Title Card</h2>
    <p>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
    <div>
        <ui-link url="#">Card link</ui-link>
    </div>
    </div>
`;

const TemplateContent = (args): string =>
    printStoryTemplate(TagName, { ...args }, childrenContent);

export const CardContent = TemplateContent.bind({});
CardContent.args = { ...defaultArgs };
CardContent.argTypes = { ...defaultArgTypes };
