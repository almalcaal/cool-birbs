import { Row, Col } from "react-bootstrap";
import Post from "../../components/feature-specific/Post.component.jsx";
import posts from "../../posts.js";
import { useGetPostsQuery } from "../../slices/postsApi.slice.js";

import Loader from "../../components/common/Loader.component.jsx";
import Message from "../../components/common/Message.component.jsx";

const HomeScreen = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
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
      )}
    </>
  );
};

export default HomeScreen;
