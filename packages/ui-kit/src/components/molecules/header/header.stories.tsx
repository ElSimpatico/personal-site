import {
    printStoryTemplate,
    jsonStringifyFormatted,
    createStyles,
} from '@core/utils/storybook';
import { linksSocial } from './mocks';

import mdx from './header.mdx';

export default {
    title: 'Components/Molecules/Header',
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

createStyles(
    'header-stories',
    `
      .story-header .external-link {
          border: 0.1rem dashed var(--theme-color-text-body);
          color: var(--theme-color-text-body);
      }
  `,
);

const TagName = 'ui-header';

const children = `
    <a slot="main-link" class="external-link" href="#link1" aria-label="Go to page 1">Slot link</a>
    <a slot="main-link" class="external-link" href="#link1" aria-label="Go to page 1">Slot link</a>
    <a slot="main-link" class="external-link" href="#link1" aria-label="Go to page 1">Slot link</a>
    <a slot="main-link" class="external-link" href="#link1" aria-label="Go to page 1">Slot link</a>
    <a slot="main-link" class="external-link" href="#link1" aria-label="Go to page 1">Slot link</a>
`;

const Template = (args): string =>
    printStoryTemplate(TagName, { ...args, class: 'story-header' }, children);

export const Header = Template.bind({});

Header.args = {
    logoUrl:
        'https://react-portfolio-v1.netlify.app/static/media/logo.0bad282e338a9971ebc84d7e1098fd15.svg',
    logoAlt: 'logo',
    accesibleLabelMenuButton: 'Menu button',
    dataLinksSocial: jsonStringifyFormatted(linksSocial),
    darkMode: true,
    darkModeAccessibleLabel: 'Switch theme',
};

Header.argTypes = {};
