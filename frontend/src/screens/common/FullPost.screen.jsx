import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import posts from "../../posts.js";
import { useGetPostDetailsQuery } from "../../slices/postsApi.slice.js";

const FullPostScreen = () => {
  const { id: postId } = useParams();

  const { data: fullPost, isLoading, error } = useGetPostDetailsQuery(postId);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
          <Link to="/" className="btn btn-light my-3">
            Go Back
          </Link>

          <Row>
            <Col md={7}>
              <Image src={fullPost.image} alt={fullPost.title} fluid />
            </Col>

            <Col md={5}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{fullPost.title}</h3>
                </ListGroup.Item>

                <ListGroup.Item>{fullPost.content}</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default FullPostScreen;
