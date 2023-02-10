import { Bookmarks, Chat, Event, Groups, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@mui/icons-material'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
            <li className="sidebarListItem">
                    <RssFeed className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Feed
                    </span>
                </li>
                <li className="sidebarListItem">
                    <Chat className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Chat
                    </span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircleFilledOutlined className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Videos
                    </span>
                </li>
                <li className="sidebarListItem">
                    <Groups className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Groups
                    </span>
                </li>
                <li className="sidebarListItem">
                    <Bookmarks className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Bookmarks
                    </span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutline className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Questions
                    </span>
                </li>
                <li className="sidebarListItem">
                    <WorkOutline className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Jobs
                    </span>
                </li>
                <li className="sidebarListItem">
                    <Event className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Events
                    </span>
                </li>
                <li className="sidebarListItem">
                    <School className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Courses
                    </span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className='sidebarHr' />
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src="/assets/person/raju.jpg" alt="friend_img" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Raju</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/shyaam.jpeg" alt="friend_img" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Shyaam</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/anuradha.jpeg" alt="friend_img" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Anuradha</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/pappu.jpg" alt="friend_img" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Pappu</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/kachraSeth.jpg" alt="friend_img" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Kachra</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/totla.jpg" alt="friend_img" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Totla</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/munimKiBeti.jpg" alt="friend_img" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Anjali</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/munna.jpeg" alt="friend_img" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Munna Bhai</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
