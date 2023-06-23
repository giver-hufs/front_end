import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

const BoardContainer = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
`;

const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  input,
  textarea {
    margin-bottom: 10px;
    padding: 5px;
  }

  textarea {
    resize: vertical;
  }
`;

const PostList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    background-color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
`;

const PostTitle = styled.h2`
  margin: 0;
`;

const PostContent = styled.p`
  margin: 0;
`;

const PostDetails = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  button {
    margin-right: 10px;
  }
`;

function List() {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  const handlePostSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: uuid(),
      title: newPostTitle,
      content: newPostContent,
    };

    setPosts([...posts, newPost]);
    setNewPostTitle("");
    setNewPostContent("");
  };

  const handlePostDelete = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <BoardContainer>
      <h1>도움 요청</h1>
      <PostForm onSubmit={handlePostSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
        />
        <textarea
          placeholder="내용"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        ></textarea>
        <button type="submit">작성</button>
      </PostForm>
      <PostList>
        {posts.map((post) => (
          <li key={post.id}>
            <div>
              <PostTitle>{post.title}</PostTitle>
              <PostContent>{post.content}</PostContent>
              <PostDetails>
                <button onClick={() => handlePostDelete(post.id)}>삭제</button>
              </PostDetails>
            </div>
          </li>
        ))}
      </PostList>
    </BoardContainer>
  );
}

export default List;
