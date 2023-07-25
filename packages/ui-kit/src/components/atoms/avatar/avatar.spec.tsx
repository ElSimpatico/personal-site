import { h } from '@stencil/core';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { Avatar } from './avatar';

let page: SpecPage;
let avatar: HTMLUiAvatarElement;

beforeEach(async () => {
    page = await newSpecPage({
        components: [Avatar],
        template: () => (
            <ui-avatar imageUrl="image-url" imageAlt="image-alt"></ui-avatar>
        ),
    });
    avatar = page.root as HTMLUiAvatarElement;
});

it('should render avatar', async () => {
    expect(avatar).toEqualHtml(`
    <ui-avatar>
        <div class="avatar-image">
            <img src="image-url" alt="image-alt"></img>
        </div>
    </ui-avatar>
  `);
});
