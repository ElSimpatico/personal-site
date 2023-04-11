const { readdir, writeFileSync } = require('fs');
const { resolve } = require('path');
const { format } = require('prettier');

const path = resolve(process.cwd(), './svg-icons');

readdir(path, (error, files) => {
  if (error) throw error;

  const content = files
    .map(file => {
      const iconName = file.replace('.svg', '');
      return `'${iconName}' = 'icon-${iconName}',`;
    })
    .join('\n');

  const contentFile = `
        export enum IconNames {
            ${content}
        }
    `;

  const contentFileFormatted = format(contentFile, {
    parser: 'typescript',
  });

  writeFileSync('src/core/types/icons.ts', contentFileFormatted, 'utf-8');
});
