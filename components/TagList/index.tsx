import React from 'react';
import Tag from "../../types/Tag";
import TagItem from "../atoms/TagItem";

type TagListProps = {
    tagList: Tag[]
}

function TagList({tagList}:TagListProps) {
    return (
        <div className="tag-list">
            {tagList.map((tag, index) => <TagItem key={`tag-list-${index}-${tag}`} tag={tag}/>)}
        </div>
    );
}

export default TagList;