export interface ImageItem {
    imageUrl: string;
    imageAlt?: string;
}

export interface ProjectItem extends ImageItem {
    name: string;
    description: any;
    liveUrl: string;
    liveLabel: string;
    liveAccesibleLabel: string;
}

export interface HomeSection<T> {
    title?: string;
    description?: string;
    items?: T[];
}

export interface HomeMainContent {
    mainDescription?: any;
    avatarImageUrl?: string;
    avatarImageAlt?: string;
    technologySection?: HomeSection<ImageItem>;
}

export type HomeProjects = HomeSection<ProjectItem>;

function parseImagesList(data: any): ImageItem[] {
    return (data?.items || []).map((item) => {
        const imageItem: ImageItem = {
            imageUrl: item.url,
            imageAlt: item.description,
        };
        return imageItem;
    });
}
function parseProjectList(data: any): ProjectItem[] {
    return (data?.items || []).map((item) => {
        const projectItem: ProjectItem = {
            name: item.name,
            imageUrl: item?.thumbnail?.url,
            imageAlt: item?.thumbnail?.description,
            description: item?.description?.json,
            liveUrl: item?.liveLink?.href,
            liveLabel: item?.liveLink?.label,
            liveAccesibleLabel: item?.liveLink?.accessibleLabel,
        };
        return projectItem;
    });
}

export function parseHomeMain(data: any): HomeMainContent {
    const homeData = (data?.homeCollection?.items || []).find(
        (item: any) => item.slugId === 'home',
    );
    if (!homeData) {
        return null;
    }

    return {
        avatarImageUrl: homeData?.avatar?.url,
        avatarImageAlt: homeData?.avatar?.description,
        mainDescription: homeData?.mainDescription?.json,
        technologySection: {
            title: homeData?.technologiesTitle,
            description: homeData?.technologiesDescription,
            items: parseImagesList(homeData.technologiesImagesCollection),
        },
    };
}

export function parseHomeProjects(data: any): HomeProjects {
    const homeData = (data?.homeCollection?.items || []).find(
        (item: any) => item.slugId === 'home',
    );
    if (!homeData) {
        return null;
    }

    return {
        title: homeData?.projectsTitle,
        description: homeData?.projectsDescription,
        items: parseProjectList(homeData.projectsCardCollection),
    };
}
