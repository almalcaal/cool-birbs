import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import Loader from "../../components/common/Loader.component.jsx";
import FormContainer from "../../components/common/FormContainer.component.jsx";

import {
  useCreatePostMutation,
  useUploadPostImageMutation,
} from "../../slices/postsApi.slice.js";

const UploadPostScreen = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const [createPost, { isLoading: loadingCreatePost }] =
    useCreatePostMutation();

  const [uploadPostImage, { isLoading: loadingUploadPost }] =
    useUploadPostImageMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to upload this post?"));
    try {
      await createPost({
        title,
        image,
        content,
      }).unwrap();
      navigate("/");
      toast.success("Post uploaded");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    try {
      const res = await uploadPostImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <FormContainer>
      <h1>Upload new post</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="title">
          <Form.Label>Post title</Form.Label>
          <Form.Control
            type="title"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="content">
          <Form.Label>Post content</Form.Label>
          <Form.Control
            type="content"
            placeholder="Enter post content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></Form.Control>
          <Form.Control
            label="Choose file"
            onChange={uploadFileHandler}
            type="file"
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" style={{ marginTop: "1rem" }}>
          Upload
        </Button>
      </Form>
    </FormContainer>
  );
};

export default UploadPostScreen;
