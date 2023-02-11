import "./online.css";

export default function OnlineFriends({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarFriendProfile">
        <img
          src={user.profilePicture}
          alt="online-friend"
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUserName">{user.username}</span>
    </li>
  );
}
