import gptLogo from '../assets/chatgpt.svg';
import addBtn from '../assets/add-30.png';
import msgIcon from '../assets/message.svg';
import home from '../assets/home.svg';
import saved from '../assets/bookmark.svg';
import rocket from '../assets/rocket.svg';

// import './App.css';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="upperSide">
        <div className="upperSideTop">
            <img src={gptLogo} alt="" className="logo" />
            <span className='brand'>ChatGPT</span>
        </div>
        <button className="midBtn"><img src={addBtn} alt="" className="addBtn" />New Chat</button>
        <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="query" />What is Programming?</button>
            <button className="query"><img src={msgIcon} alt="query" />How to use and API?</button>
        </div>
      </div>
      <div className="lowerSide">
        <div className="listItems"><img src={home} alt="" className="listItemsImg" />Home</div>
        <div className="listItems"><img src={saved} alt="" className="listItemsImg" />Saved</div>
        <div className="listItems"><img src={rocket} alt="" className="listItemsImg" />Upgrade to Pro</div>
      </div>
    </div>
  )
}

export default Sidebar
