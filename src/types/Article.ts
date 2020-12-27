export interface IArticle {
    _id?: string;
    createdAt?: Date; // ISO string
    updatedAt?: Date; // ISO sring
    title: string;
    subTitle: string;
    contents: IArticleContent[];
    thumbnailUrl: string;
    count: IArticleCount;
    category: Category;
}

export interface IArticleCount {
    like: number;
    view: number;
}

export interface IArticleContent {
    type: ArticleContentType;
    content: string;
}

export enum ArticleContentType {
    IMAGE = 'image',
    CODE = 'code',
    VIDEO = 'video',
    HTML = 'html',
}

export interface IArticlesParams {
    category: Category;
    page: number;
}

export enum Category {
    DIARY = 'DIARY',
    BLOG = 'BLOG',
    NOTICE = 'NOTICE',
}
