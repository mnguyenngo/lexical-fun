import type { NextPage } from "next";
import Editor from "../components/lexical/Editor";

const NewPage: NextPage = () => {
  return (
    <div>
      <h1>New Page</h1>
      <Editor />
    </div>
  );
};

export default NewPage;
