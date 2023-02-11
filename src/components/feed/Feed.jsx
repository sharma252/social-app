import Post from "../post/Post";
import "./feed.css";
import { Posts } from "../../dummyData";
import Share from "./share/Share";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedwrapper">
        <Share />
        {Posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
