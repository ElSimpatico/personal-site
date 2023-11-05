import {
    printStoryTemplate,
    createStyles,
    jsonStringifyFormatted,
} from '@core/utils/storybook';

import mdx from './footer.mdx';
import { linksSocial } from '../header/mocks';

export default {
    title: 'Components/Molecules/Footer',
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

const TagName = 'ui-footer';

createStyles(
    'component-stories',
    `
`,
);

const defaultArgs = {
    logoUrl:
        'https://react-portfolio-v1.netlify.app/static/media/logo.0bad282e338a9971ebc84d7e1098fd15.svg',
    logoAlt: 'Logo',
    dataLinksSocial: jsonStringifyFormatted(linksSocial),
};

const defaultArgTypes = {};

const children = `<p slot="owner">Desarrollado y diseñado por <span class="highlighted-text">Aaron Velasco Lopez</span></p>`;

const Template = (args): string =>
    printStoryTemplate(TagName, { ...args, class: 'my-story-class' }, children);

export const Footer = Template.bind({});

Footer.args = { ...defaultArgs };
Footer.argTypes = { ...defaultArgTypes };
