import React from 'react';
import {useRouter} from "next/router";
import {selectorFamily, useRecoilValueLoadable} from "recoil";
import axios from "axios";
import ArticleBanner from "../../atoms/ArticleBanner";
import Article from "../../../types/Article";
import Link from "next/link";

const article = selectorFamily({
    key: 'articleSelector',
    get: (slug: string) => async (): Promise<Article> => (await axios.get(`https://conduit.productionready.io/api/articles/${slug}`)).data.article
})

function ArticleDetailSection() {
    const router = useRouter();
    const {slug} = router.query;
    const {state, contents} = useRecoilValueLoadable(article(String(slug)));
    if (state === 'loading') {
        return <div>Loading...</div>
    }
    const {body, author, createdAt, favorited, favoritesCount, title, updatedAt} = contents as Article;
    return (
        <div className="article-page">
            <ArticleBanner author={author} createdAt={createdAt} favorited={favorited} favoritesCount={favoritesCount}
                           title={title} updatedAt={updatedAt}/>
            <div className="container page">
                <div className="row article-content">
                    <div className="col-md-12">
                        <p>{body}</p>
                    </div>
                </div>
                <hr/>
                <div className="article-actions">
                    <div className="article-meta">
                        <Link href={`/profile`}>
                            <a>
                                <img src={author.image}/>
                            </a>
                        </Link>
                        <div className="info">
                            <a href="" className="author">{author.username}</a>
                            <span className="date">{createdAt}</span>
                        </div>
                        <button className="btn btn-sm btn-outline-secondary">
                            <i className="ion-plus-round"/>
                            &nbsp;
                            Follow {author.username}
                        </button>
                        &nbsp;
                        <button className="btn btn-sm btn-outline-primary">
                            <i className="ion-heart"/>
                            &nbsp;
                            Favorite Post <span className="counter">({favoritesCount})</span>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-8 offset-md-2">
                        <form className="card comment-form">
                            <div className="card-block">
                                <textarea className="form-control" placeholder="Write a comment..." rows={3}/>
                            </div>
                            <div className="card-footer">
                                <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img"/>
                                <button className="btn btn-sm btn-primary">
                                    Post Comment
                                </button>
                            </div>
                        </form>
                        <div className="card">
                            <div className="card-block">
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                            </div>
                            <div className="card-footer">
                                <a href="" className="comment-author">
                                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img"/>
                                </a>
                                &nbsp;
                                <a href="" className="comment-author">Jacob Schmidt</a>
                                <span className="date-posted">Dec 29th</span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-block">
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                            </div>
                            <div className="card-footer">
                                <a href="" className="comment-author">
                                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img"/>
                                </a>
                                &nbsp;
                                <a href="" className="comment-author">Jacob Schmidt</a>
                                <span className="date-posted">Dec 29th</span>
                                <span className="mod-options">
                                  <i className="ion-edit"/>
                                  <i className="ion-trash-a"/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleDetailSection;