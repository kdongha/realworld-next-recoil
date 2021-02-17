import Author from "../Author";

type Comment = {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    body: String;
    author: Author;
}

export default Comment;