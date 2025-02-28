import { Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  TiArrowDownOutline,
  TiArrowDownThick,
  TiArrowUpOutline,
  TiArrowUpThick,
} from "react-icons/ti";

import {
  useUpvotePostMutation,
  useDownvotePostMutation,
} from "../../slices/postsApi.slice.js";

const Post = ({ post }) => {
  const [upvotePost] = useUpvotePostMutation();
  const [downvotePost] = useDownvotePostMutation();
  // console.log("post");
  // console.log(post.username);
  // console.log("post");
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/posts/${post._id}`}>
        <Card.Img
          src={post.image}
          style={{ width: "100%", height: "185px", objectFit: "cover" }}
          variant="top"
        />
      </Link>

      <Card.Body>
        <Link to={`/posts/${post._id}`}>
          <Card.Title as="div">
            <strong>{post.title}</strong>
          </Card.Title>
        </Link>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignContent: "center",
          }}
        >
          <Col md={1}>
            <TiArrowDownOutline
              onClick={() => downvotePost(post._id)}
              style={{ cursor: "pointer" }}
            />
          </Col>
          <Col md={1}>
            <TiArrowUpOutline
              onClick={() => upvotePost(post._id)}
              style={{ cursor: "pointer" }}
            />
          </Col>
          {/* <Col md={2} style={{ color: "red" }}>
            <p>{post.votes.downvotes}</p>
          </Col>
          /
          <Col md={2} style={{ color: "green" }}>
            <p>{post.votes.upvotes}</p>
          </Col> */}
        </Row>
        <Card.Subtitle>@{post.username}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default Post;
