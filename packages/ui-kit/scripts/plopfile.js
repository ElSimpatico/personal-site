const { resolve, join } = require('path');
const componentsDir = resolve(__dirname, '../src/components');
const componentTemplateDir = resolve(__dirname, '../plop-templates/component');

module.exports = function (plop) {
    plop.setGenerator('Component', {
        description: 'Create component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component Name',
            },
            {
                type: 'list',
                name: 'type',
                message: 'Component Type',
                choices: [
                    {
                        name: 'Atom',
                        value: 'atoms',
                    },
                    {
                        name: 'Molecule',
                        value: 'molecules',
                    },
                ],
            },
        ],
        actions: [
            {
                type: 'add',
                path: join(
                    componentsDir,
                    '{{type}}/{{dashCase name}}/{{dashCase name}}.tsx',
                ),
                templateFile: join(componentTemplateDir, 'component.tsx.hbs'),
            },
            {
                type: 'add',
                path: join(
                    componentsDir,
                    '{{type}}/{{dashCase name}}/{{dashCase name}}.scss',
                ),
                templateFile: join(componentTemplateDir, 'component.scss.hbs'),
            },

            {
                type: 'add',
                path: join(
                    componentsDir,
                    '{{type}}/{{dashCase name}}/types.ts',
                ),
                templateFile: join(componentTemplateDir, 'types.ts.hbs'),
            },
            {
                type: 'add',
                path: join(
                    componentsDir,
                    '{{type}}/{{dashCase name}}/{{dashCase name}}.stories.tsx',
                ),
                templateFile: join(
                    componentTemplateDir,
                    'component.stories.tsx.hbs',
                ),
            },
            {
                type: 'add',
                path: join(
                    componentsDir,
                    '{{type}}/{{dashCase name}}/{{dashCase name}}.mdx',
                ),
                templateFile: join(componentTemplateDir, 'component.mdx.hbs'),
            },
            {
                type: 'add',
                path: join(
                    componentsDir,
                    '{{type}}/{{dashCase name}}/{{dashCase name}}.spec.tsx',
                ),
                templateFile: join(
                    componentTemplateDir,
                    'component.spec.tsx.hbs',
                ),
            },
        ],
    });
};
