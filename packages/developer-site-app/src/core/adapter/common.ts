import { TypeLink, TypeLinkFields } from '@core/content';
import { LinkModel } from '@personal-site/ui-kit-react';

export function mapToLinkModelCollection(
    contentLinkCollection: TypeLink[],
): LinkModel[] {
    return contentLinkCollection.map((link: TypeLink) => {
        const fields = link.fields as TypeLinkFields;
        return {
            href: fields.href,
            id: fields.id,
            label: fields.label,
            accesibleLabel: fields.accessibleLabel,
            target: fields.target,
        };
    });
}
