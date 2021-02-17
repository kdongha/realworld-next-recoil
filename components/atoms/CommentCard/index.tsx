import React from 'react';
import Comment from "../../../types/Comment";

type CommentCardProps = {
    comment: Comment;
}

function CommentCard({comment: {body, author, createdAt}}: CommentCardProps) {
    return (
        <div className="card">
            <div className="card-block">
                <p className="card-text">{body}</p>
            </div>
            <div className="card-footer">
                <a href="" className="comment-author">
                    <img src={author.image} className="comment-author-img"/>
                </a>
                &nbsp;
                <a href="" className="comment-author">{author.username}</a>
                <span className="date-posted">{createdAt}</span>
            </div>
        </div>
    );
}

export default CommentCard;