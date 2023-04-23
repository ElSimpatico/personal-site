import {
    printStoryTemplate,
    jsonStringifyFormatted,
} from '@core/utils/storybook';
import { LinkModel } from '@core/types';
import { links, linksSocial } from './mocks';

import mdx from './header.mdx';

export default {
    title: 'Components/Molecules/Header',
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

const TagName = 'ui-header';

const Template = (args): string => `
<div>
    ${printStoryTemplate(TagName, { ...args })}
    ${links
        .map((link: LinkModel) => {
            return `
            <div id=${link.href.replace('#', '')} style="height: 50rem">${
                link.label
            }</div>`;
        })
        .join('\n')}
</div>`;

export const Header = Template.bind({});

Header.args = {
    logoUrl:
        'https://react-portfolio-v1.netlify.app/static/media/logo.0bad282e338a9971ebc84d7e1098fd15.svg',
    logoAlt: 'logo',
    accesibleLabelMenuButton: 'Menu button',
    dataLinks: jsonStringifyFormatted(links),
    dataLinksSocial: jsonStringifyFormatted(linksSocial),
    darkMode: true,
    darkModeLabel: 'Dark Mode',
    darkModeAccessibleLabel: 'Switch theme',
};

Header.argTypes = {};
