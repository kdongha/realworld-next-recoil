import Tag from '../Tag'
import Author from "../Author";

type Article = {
    slug: string;
    title: string;
    description: string;
    body: string
    tagList: Tag[];
    createdAt: Date;
    updatedAt: Date;
    favorited: boolean;
    favoritesCount: number;
    author: Author;
}

export default Article;