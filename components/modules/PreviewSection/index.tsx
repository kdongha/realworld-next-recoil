import React from 'react';
import FeedList from 'components/FeedList';
import ArticlePreviewList from '../../ArticlePreviewList';
import { selectorFamily, useRecoilValueLoadable } from 'recoil';
import axios from 'axios';
import Pagination from '../../Pagination';
import { useRouter } from 'next/router';

const PAGE_SIZE = 20;

const articleList = selectorFamily({
  key: 'articleList',
  get: ({ page, tag }: { page: number; tag?: string }) => async () => {
    return (
      await axios.get(' https://conduit.productionready.io/api/articles', {
        params: {
          tag,
          offset: (page - 1) * PAGE_SIZE,
          limit: PAGE_SIZE,
        },
      })
    ).data;
  },
});

function PreviewSection() {
  const router = useRouter();
  const { page = 1, tag = '' } = router.query;
  const { state, contents } = useRecoilValueLoadable(articleList({ page: Number(page), tag: String(tag) }));
  if (state === 'loading') {
    return <div>Loading...</div>;
  }
  const { articles, articlesCount } = contents;
  return (
    <div className="col-md-9">
      <FeedList />
      <ArticlePreviewList articleList={articles} />
      <Pagination currentPage={Number(page)} total={articlesCount} pageSize={PAGE_SIZE} tag={String(tag)} />
    </div>
  );
}

export default PreviewSection;
