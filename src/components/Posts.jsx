import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }


  return (
    <ul className="list-group mb-2">
      {
        posts.map((post, index) => {
          return (
            <li key={index} className="list-group-item">
              <h5 className="text-secondary">{post.title}</h5>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Posts;