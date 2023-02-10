import Post from "../post/Post";
import "./feed.css";
import Share from "./share/Share";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedwrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
