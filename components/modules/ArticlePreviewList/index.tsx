import React from 'react';
import {atom, selector, useRecoilValueLoadable} from "recoil";
import axios from "axios";
import ArticlePreview from "../../atoms/ArticlePreview";

const pageNumber = atom({
    key: 'pageNumber',
    default: 1,
});

const articleList = selector({
    key: 'articleList',
    get: async ({get}) => {
        const page = get(pageNumber);
        return (await axios.get(' https://conduit.productionready.io/api/articles')).data.articles;
    }
})

function ArticlePreviewList() {
    const {state, contents} = useRecoilValueLoadable(articleList);
    if (state === 'loading') {
        return <div>Loading...</div>
    }
    console.log(contents)
    return (
        <>
            {contents.map(article => (
                <ArticlePreview key={`article-preview-list-${article.slug}`} {...article} />
            ))}
        </>
    );
}

export default ArticlePreviewList;