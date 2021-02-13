import React from 'react';
import Banner from "../components/atoms/Banner";
import PreviewSection from "../components/modules/PreviewSection";
import TagItem from "../components/atoms/TagItem";

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
                            <div className="tag-list">
                                <TagItem tag={'programming'}/>
                                <TagItem tag={'javascript'}/>
                                <TagItem tag={'emberjs'}/>
                                <TagItem tag={'angularjs'}/>
                                <TagItem tag={'react'}/>
                                <TagItem tag={'mean'}/>
                                <TagItem tag={'node'}/>
                                <TagItem tag={'rails'}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
