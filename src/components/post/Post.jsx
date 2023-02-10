import { MoreVert } from "@mui/icons-material";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/raju.jpg"
              alt="profile_pic"
              className="postProfilePic"
            />
            <span className="postUserName">Raju</span>
            <span className="postDate">5 min. ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="more-det" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">25 Din me pesa Double</span>
          <img
            src="https://mememandir.com/Resources/mememandir/Image/201909/B7BQ5NFF8Lp.jpg"
            alt="post-img"
            className="postImg"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="like-pic" />
            <img className="likeIcon" src="assets/heart.png" alt="heart-pic" />
            <span className="postLikeCounter">32 likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
