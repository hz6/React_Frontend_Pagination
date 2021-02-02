import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  let [posts, setPosts] = useState([]);
  let [loading, setLoading] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
  })

  return (
    <div className="App">
      <h1>My App</h1>
    </div>
  );
}

export default App;
