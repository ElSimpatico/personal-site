import { IconNames } from '@core/types';
import { printStoryTemplate, createStyles } from '@core/utils/storybook';
import mdx from './icon.mdx';

export default {
  title: 'Components/Atoms/Icon',
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const TagName = 'ui-icon';

createStyles(
  'uiicon-stories',
  `
    .story-icon-list {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 3.2rem 1.6rem;
    }
    .story-icon-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      border: 1px solid;
    }
`,
);

const Template = (args): string => printStoryTemplate(TagName, args);

export const Icon = Template.bind({});

Icon.args = {
  name: IconNames.activity,
};

Icon.argTypes = {
  name: {
    type: 'select',
    options: IconNames,
  },
};

const TemplateAll = (): string => {
  const allIcons = Object.keys(IconNames)
    .map((key: string) => {
      return `<div class="story-icon-wrapper">${printStoryTemplate(TagName, { name: IconNames[key] })}
          <span>${IconNames[key]}</span>
      </div>`;
    })
    .join('\n');

  return `<div class="story-icon-list">
    ${allIcons}
  </div>`;
};

export const IconsAll = TemplateAll.bind({});
