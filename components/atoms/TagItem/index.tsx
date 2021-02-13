import React from 'react';
import Link from "next/link";

type TagItemProps = {
    tag: string;
}

function TagItem({tag}: TagItemProps) {
    return (
        <Link href={`/?page=1&tag=${tag}`}>
            <a className="tag-pill tag-default">{tag}</a>
        </Link>
    );
}

export default TagItem;