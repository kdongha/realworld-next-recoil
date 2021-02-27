import React from 'react';
import ArticlePreview from "../atoms/ArticlePreview";
import Article from "../../types/Article";

type ArticlePreviewListProps = {
    articleList: Article[];
}

function ArticlePreviewList({articleList}: ArticlePreviewListProps) {
    return (
        <>
            {articleList.map((article) => (
                <ArticlePreview key={`article-preview-list-${article.slug}`} article={article}/>
            ))}
        </>
    );
}

export default ArticlePreviewList;