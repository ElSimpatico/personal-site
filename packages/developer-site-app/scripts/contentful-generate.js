const { execSync } = require('child_process');
const { resolve, join } = require('path');
const { config } = require('dotenv');
config({ path: '.env.dev' });

const SPACE_ID = process.env.CONTENTFULL_SPACE;
const ROOT_DIR = resolve(__dirname, '../src/core/content');

const EXPORT_DIR = join(ROOT_DIR, 'schema');
const EXPORT_FILENAME = 'export.json';
const EXPORT_FILE_PATH = join(EXPORT_DIR, EXPORT_FILENAME);

const TYPES_DIR = join(ROOT_DIR, 'types');

execSync(
    `contentful space export --space-id ${SPACE_ID} --export-dir ${EXPORT_DIR} --content-file ${EXPORT_FILENAME}`,
    { stdio: 'inherit' },
);

execSync(`cf-content-types-generator ${EXPORT_FILE_PATH} -o ${TYPES_DIR}`, {
    stdio: 'inherit',
});
