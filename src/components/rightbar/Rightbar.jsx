import OnlineFriends from "../online/OnlineFriends";
import "./rightbar.css";
import { Users } from "../../dummyData";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
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
      </div>
    </div>
  );
}
