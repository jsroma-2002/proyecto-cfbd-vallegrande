import Post from "./components/Post";
import { useEffect, useState } from "react";
import { records } from "./service/pocketbase-service";

function App() {

  const [posts, setPosts] = useState<Array<any>>([]);

  useEffect(() => {
    setPosts(records);
    console.log("App mounted");
  }, []);

  return (
    <main className="flex flex-col gap-3">
      <h1 className="bg-black text-white font-bold text-center">TIK TAK</h1>
      <section className="flex flex-row flex-wrap gap-4 items-center justify-center">
        {
          posts.map((post) => {
            return <Post
              key={post.id}
              title={post.posts_title}
              description={post.posts_description}
             />
          })
        }
      </section>
    </main>
  );
}

export default App;
