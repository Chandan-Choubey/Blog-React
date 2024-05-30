import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import service from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
function EditPost() {
  const [post, setPosts] = useState();
  const slug = useParams();
  console.log(slug);
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);

  return post ? (
    <div>
      <div className="py-8">
        <Container>
          <PostForm post={post} />
        </Container>
      </div>
    </div>
  ) : null;
}

export default EditPost;
