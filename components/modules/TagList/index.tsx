import React from 'react';
import {selector, useRecoilValueLoadable} from "recoil";
import axios from "axios";
import Tag from "../../../types/Tag";
import TagItem from "../../atoms/TagItem";

const tagSelector = selector({
    key: 'tagSelector',
    get: async (): Promise<Tag[]> => (await axios.get(`https://conduit.productionready.io/api/tags`)).data.tags
})

function TagList() {
    const {state, contents} = useRecoilValueLoadable(tagSelector);
    switch (state) {
        case "loading":
            return <div>Loading...</div>;
        case "hasError":
            return <div>Error!</div>;
        case "hasValue":
            return (
                <div className="tag-list">
                    {(contents as Tag[]).map((tag, index) => <TagItem key={`tag-list-${index}-${tag}`} tag={tag}/>)}
                </div>
            );
    }
}

export default TagList;