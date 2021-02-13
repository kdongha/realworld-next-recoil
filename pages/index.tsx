import React from 'react';
import Banner from "../components/atoms/Banner";
import PreviewSection from "../components/modules/PreviewSection";

export default function Home() {
    return (
        <div className="home-page">
            <Banner/>
            <div className="container page">
                <div className="row">
                    <PreviewSection />

                    <div className="col-md-3">
                        <div className="sidebar">
                            <p>Popular Tags</p>
                            <div className="tag-list">
                                <a href="" className="tag-pill tag-default">programming</a>
                                <a href="" className="tag-pill tag-default">javascript</a>
                                <a href="" className="tag-pill tag-default">emberjs</a>
                                <a href="" className="tag-pill tag-default">angularjs</a>
                                <a href="" className="tag-pill tag-default">react</a>
                                <a href="" className="tag-pill tag-default">mean</a>
                                <a href="" className="tag-pill tag-default">node</a>
                                <a href="" className="tag-pill tag-default">rails</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
