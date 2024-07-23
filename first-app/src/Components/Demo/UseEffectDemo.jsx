import { useEffect, useState } from "react";

function UseEffectDemo() {
  const [toggle, setToggle] = useState(false);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("Effect works!");

    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  //   useEffect(() => {
  //     console.log("Effect works!");
  //   }, [toggle]);

  //   useEffect(() => {
  //     console.log("Effect works!");
  //     return () => {
  //       console.log("Clean Up!");
  //     };
  //   }, [toggle]);

  return (
    <>
      <h1>UseEffect in action</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <p>This paragraph will toggle</p>}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default UseEffectDemo;
