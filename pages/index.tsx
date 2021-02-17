import React from 'react';
import Banner from "../components/atoms/Banner";
import PreviewSection from "../components/modules/PreviewSection";
import TagItem from "../components/atoms/TagItem";
import TagList from "../components/modules/TagList";

export default function Home() {
    return (
        <div className="home-page">
            <Banner/>
            <div className="container page">
                <div className="row">
                    <PreviewSection/>

                    <div className="col-md-3">
                        <div className="sidebar">
                            <p>Popular Tags</p>
                            <TagList />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
