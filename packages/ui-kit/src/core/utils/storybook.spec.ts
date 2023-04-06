import { printStoryTemplate } from './storybook';

describe('Storybook utils', () => {
  it('printStoryTemplate return snippet code with attributes', () => {
    expect(printStoryTemplate('ui-component', { myProp: 'hello' })).toEqual('<ui-component my-prop="hello"></ui-component>');
  });
  it('printStoryTemplate return snippet code without attributes', () => {
    expect(printStoryTemplate('ui-component', {})).toEqual('<ui-component></ui-component>');
  });
});
