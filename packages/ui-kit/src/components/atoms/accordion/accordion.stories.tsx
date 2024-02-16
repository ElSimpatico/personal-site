import { printStoryTemplate, createStyles } from '@core/utils/storybook';

import mdx from './accordion.mdx';

export default {
    title: 'Components/Atoms/Accordion',
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

const TagName = 'ui-accordion';

createStyles(
    'accordion-stories',
    `
    .storyAccordion .storyAccordion__header,
    .storyAccordion .storyAccordion__body {
      border: 1px dashed;
    }

    .storyAccordion .storyAccordion__body {
      margin: 1.6rem 0;
    }
`,
);

const defaultArgs = {
    expanded: false,
    hideArrow: false,
    accessibleDescribedBy: '',
};

const defaultArgTypes = {};

const children = `
  <h1 slot="header" class="storyAccordion__header" >Header Slot</h1>
  <div slot="body" class="storyAccordion__body">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum feugiat massa, sed hendrerit libero aliquam nec. Sed id enim metus. Phasellus varius risus lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque in cursus erat, vel rhoncus tellus. Donec quis augue mi. Maecenas iaculis pharetra mollis. Sed ullamcorper tortor sed ligula hendrerit, vitae blandit enim rutrum. Donec imperdiet, arcu at congue volutpat, leo nunc efficitur nisi, sit amet venenatis lacus turpis in orci. Nulla ut sapien leo. Quisque quis est euismod, euismod massa a, rutrum ipsum.</p>    
    <p>Donec eleifend sagittis libero sit amet fermentum. Vestibulum nec risus leo. Vestibulum at sagittis felis. Duis tristique bibendum tortor at fermentum. Sed vitae lorem arcu. Mauris malesuada at lorem sed mollis. Nulla in metus mollis, dignissim eros a, interdum dui. Pellentesque et finibus mi, eget condimentum turpis. Phasellus elementum et quam non sollicitudin. Donec sit amet congue est, convallis ullamcorper quam. Maecenas vel sapien a nisl suscipit facilisis. Vivamus maximus nisl sapien, sagittis rhoncus sapien suscipit et.</p>
    <ui-link url="#">Link</ui-link>
  </div>
`;

const Template = (args): string =>
    printStoryTemplate(TagName, { ...args, class: 'storyAccordion' }, children);

export const Accordion = Template.bind({});

Accordion.args = { ...defaultArgs };
Accordion.argTypes = { ...defaultArgTypes };
