import OnlineFriends from "../online/OnlineFriends";
import "./rightbar.css";
import { Users } from "../../dummyData";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            src="assets/gift.png"
            className="birthdayImg"
            alt="birthdayImg"
          />
          <span className="birthdayText">
            <b>Aditi</b> and <b>3 others</b> have their birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="ad-img" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <OnlineFriends key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">Mumbai</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">Kolhapur</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Proffession: </span>
            <span className="rightbarInfoValue">Baap ka Garage</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt="friend-dp"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Aditi Bansal</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt="friend-dp"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Anupam Singh</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt="friend-dp"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Komal Baweja</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt="friend-dp"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Sneha Sharma</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt="friend-dp"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Dristhi Kumari</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt="friend-dp"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Raj Chowdary</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
