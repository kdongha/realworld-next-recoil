import React from 'react';
import FeedList from "../../atoms/FeedList";
import ArticlePreviewList from "../../atoms/ArticlePreviewList";
import {selectorFamily, useRecoilValueLoadable} from "recoil";
import axios from "axios";
import Pagination from "../../atoms/Pagination";
import {useRouter} from "next/router";

const PAGE_SIZE = 20;

const articleList = selectorFamily({
    key: 'articleList',
    get: (page: number) => async () => {
        return (await axios.get(' https://conduit.productionready.io/api/articles', {
            params: {
                offset: (page - 1) * PAGE_SIZE,
                limit: PAGE_SIZE,
            }
        })).data;
    }
})

function PreviewSection() {
    const router = useRouter();
    const {page = 1} = router.query;
    const {state, contents} = useRecoilValueLoadable(articleList(Number(page)));
    if (state === 'loading') {
        return <div>Loading...</div>
    }
    const {articles, articlesCount} = contents
    console.log(articles)
    return (
        <div className="col-md-9">
            <FeedList/>
            <ArticlePreviewList articleList={articles}/>
            <Pagination currentPage={Number(page)} total={articlesCount} pageSize={PAGE_SIZE}/>
        </div>
    );
}

export default PreviewSection;