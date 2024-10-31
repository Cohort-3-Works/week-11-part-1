import { useState, useEffect } from "react";

export function useFetch() {
  const [posts, setPosts] = useState({});

  async function getPosts() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/2"
    );
    const json = await response.json();
    setPosts(json);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return posts;
}
