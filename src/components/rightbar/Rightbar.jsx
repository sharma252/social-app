import "./rightbar.css";

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
            <b>Raju ITUS</b> and <b>3 others</b> have their birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="ad-img" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarFriendProfile">
              <img
                src="assets/person/shyaam.jpeg"
                alt="online-friend"
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Shyaam</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarFriendProfile">
              <img
                src="assets/person/raju.jpg"
                alt="online-friend"
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Raju</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarFriendProfile">
              <img
                src="assets/person/totla.jpg"
                alt="online-friend"
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Totla Seth</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarFriendProfile">
              <img
                src="assets/person/munna.jpeg"
                alt="online-friend"
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Munna Bhai</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarFriendProfile">
              <img
                src="assets/person/anuradha.jpeg"
                alt="online-friend"
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Anuradha</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
