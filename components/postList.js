// components/PostList.js
import React from 'react';
import {generatePosts} from '@/util/utils';

const PostList = ({type}) => {
    const posts = generatePosts();
    const typePost = type === 'main' ? posts.slice(0,9) : posts
    return (
        <>
            <div className="photo-post-list">
                <div className="photo-post-grid">
                    {typePost.map((post) => (
                        <div key={post.id} className="photo-post">
                            <img src={post.image} alt={`게시물 ${post.id}`}/>
                            <h2>{post.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PostList;
