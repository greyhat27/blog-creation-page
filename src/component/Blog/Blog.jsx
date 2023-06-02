import QuillEditor from "../Quill/QuillEditor";
import "./Blog.css";
import { useState } from "react";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  //function to validate input fields
  const validation = () => {
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      content.trim() === ""
    ) {
      alert("All fields are mandatory");
      return false;
    }
    return true;
  };

  //function to handle submit
  const handleSubmit = () => {
    if (validation()) {
      alert("Blog has been created");
    }
  };
  return (
    <div className="blog-page">
      <div className="container">
        <form onSubmit={handleSubmit}>
          {/* title section */}
          <div className="title-sec">
            <h2>Title:</h2>
            <input
              type="text"
              placeholder="Enter title of blog"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* desscription section */}
          <div className="description-sec">
            <h2>Description:</h2>
            <input
              type="text"
              placeholder="Enter description of blog"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {/* content section */}
          <div className="content-sec">
            <h2>Content:</h2>
            <QuillEditor
              content={content}
              setContent={setContent}
              className="editor"
            />
            {console.log("content", title)}
          </div>
          {/* submit button */}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Blog;
