//Quill component which is rich text library
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function QuillEditor({ content, setContent }) {
  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <ReactQuill
      id="editor"
      style={{
        background: "#f5f5f5",
        color: "black",
      }}
      theme="snow"
      value={content}
      onChange={handleChange}
      placeholder="Write your blog"
    />
  );
}
