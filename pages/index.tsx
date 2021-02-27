import React from 'react';
import Banner from 'components/Banner';
import TagList from 'components/TagList';
import { GetServerSideProps } from 'next';
import FeedList from 'components/FeedList';
import ArticlePreviewList from 'components/ArticlePreviewList';
import Pagination from 'components/Pagination';
import fetcher from 'utils/fetcher';
import Article from 'types/Article';

type HomeType = {
  articles: Article[];
  page: number;
  articlesCount: number;
  tag: string;
  tags: string[];
};

function Home({ articles, page, articlesCount, tag, tags }: HomeType): JSX.Element {
  return (
    <div className="home-page">
      <Banner />
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedList />
            <ArticlePreviewList articleList={articles} />
            <Pagination currentPage={page} total={articlesCount} pageSize={PAGE_SIZE} tag={tag} />
          </div>
          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <TagList tagList={tags} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PAGE_SIZE = 20;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tag = '', page } = context.query;
  const [articlesRes, tagRes] = await Promise.all([
    fetcher.get('/api/articles', {
      params: {
        tag,
        offset: (Number(page) - 1) * PAGE_SIZE,
        limit: PAGE_SIZE,
      },
    }),
    fetcher.get('/api/tags'),
  ]);
  const { articles, articlesCount } = articlesRes.data;
  const { tags } = tagRes.data;
  return {
    props: {
      articles,
      page: Number(page),
      articlesCount,
      tag,
      tags,
    },
  };
};

export default Home;
