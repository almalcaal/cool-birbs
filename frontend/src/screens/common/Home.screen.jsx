import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Post from "../../components/feature-specific/Post.component.jsx";
import posts from "../../posts.js";
import axios from "axios";

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("/api/posts");
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <h1>Cool Birbs</h1>

      <Row>
        {posts.map((post) => (
          <Col key={post._id} sm={12} md={6} lg={4} xl={3}>
            <Post post={post} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
