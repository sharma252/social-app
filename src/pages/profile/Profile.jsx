import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/siderbar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

export default function Profile() {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt="cover-img"
              />
              <img
                className="profileUserImg"
                src="assets/person/babu.jpg"
                alt="cover-img"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">BabuRao GanpatRao Apte</h4>
              <span className="profileInfoDesc">
                Dil Dariya baki sab samandar
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
}
