import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

const App = () => {
  var [posts, setPosts] = useState([]);
  var [loading, setLoading] = useState(false);
  var [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // ComponentDidMount
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const doc = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(doc.data);
      setLoading(false);
    }

    fetchPost();
  }, [])

  // console.log(posts);

  // Get The Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  const setPage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blogs</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination amountPerPage={postsPerPage} totalAmount={posts.length} currentPage={currentPage} paginate={setPage} />
    </div>
  );
}

export default App;
