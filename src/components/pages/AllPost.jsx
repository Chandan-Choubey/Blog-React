import React, { useEffect, useState } from "react";
import service from "../../appwrite/config";
import PostCard from "../PostCard.jsx";
import Container from "../container/Container.jsx";

const AllPost = () => {
  const [post, setPost] = useState([]);
  console.log(post);

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPost(posts.documents);
      }
    });
  }, []);
  if (post.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                No Post Available
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {post.map((post) => {
            return (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;
