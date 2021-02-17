import React from 'react';
import Link from "next/link";
import Article from "../../../types/Article";

type ArticlePreviewProps = {
    article: Article
}

function ArticlePreview({
                            article: {
                                slug,
                                author,
                                createdAt,
                                favoritesCount,
                                title,
                                description,
                                tagList
                            }
                        }: ArticlePreviewProps) {
    return (
        <div className="article-preview">
            <div className="article-meta">
                <Link href={`/profile/${author.username}`}>
                    <a><img src={author.image}/></a>
                </Link>
                <div className="info">
                    <a href="" className="author">{author.username}</a>
                    <span className="date">{createdAt}</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"/> {favoritesCount}
                </button>
            </div>
            <Link href={`/article/${slug}`}>
                <a className="preview-link">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <span>Read more...</span>
                    <ul className="tag-list">
                        {tagList.map((tag, index) => <li key={`tag-list-${index}-${tag}`}
                                                         className="tag-default tag-pill tag-outline">{tag}</li>)}
                    </ul>
                </a>
            </Link>
        </div>
    );
}

export default ArticlePreview;