import React from 'react'

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }


  return (
    <ul className="list-group mb-4">
      {
        posts.map((post, index) => {
          return <li key={index} className="list-group-item mb-1">
            <h4 className="text-secondary">{post.title}</h4>
            <p>{post.body}</p>
          </li>
        })
      }
    </ul>
  )
}

export default Posts