import React from 'react';
import Author from "../../../types/Author";

type ArticleBannerProps = {
    title: string;
    author: Author;
    createdAt: Date;
    updatedAt: Date;
    favorited: boolean;
    favoritesCount: number
}

function ArticleBanner({title, author, createdAt, favorited, favoritesCount}: ArticleBannerProps) {
    return (
        <div className="banner">
            <div className="container">
                <h1>{title}</h1>
                <div className="article-meta">
                    <a href=""><img src={author.image}/></a>
                    <div className="info">
                        <a href="" className="author">{author.username}</a>
                        <span className="date">{createdAt}</span>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary">
                        <i className="ion-plus-round"/>
                        &nbsp;
                        Follow {author.username}
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-sm btn-outline-primary">
                        <i className="ion-heart"/>
                        &nbsp;
                        Favorite Post <span className="counter">({favoritesCount})</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ArticleBanner;