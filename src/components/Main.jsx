import sendBtn from "../assets/send.svg"
import userIcon from "../assets/user-icon.png"
import gptImgLogo from "../assets/chatgptLogo.svg"

const Main = () => {
  return (
    <div className="main">
      <div className="chats">
        <div className="chat">
            <img className="chatImg" src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur consequuntur unde sit veniam dolorum ratione aliquam rerum doloribus voluptatibus odit.</p>
        </div>
        <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime quia adipisci facere sed autem. Placeat quis unde qui consequatur enim, deleniti asperiores ut iste blanditiis itaque repudiandae autem accusamus facere eveniet dignissimos, modi commodi molestias. At sed placeat necessitatibus consequatur reiciendis, quas ratione temporibus facere quisquam ex aliquid adipisci ducimus iste deleniti porro quis nobis libero minus vel repudiandae non similique. In nihil non voluptate quod saepe expedita impedit veritatis, provident delectus placeat reiciendis molestiae! Quisquam, praesentium! Provident quia accusantium id adipisci iure, facere iste dolorum iusto odit veritatis temporibus ratione, nesciunt asperiores quam consectetur animi eum earum assumenda!</p>
        </div>
      </div>
      <div className="chatFooter">
        <div className="inp">
            <input type="text" placeholder="Send a message" /><button className="send"><img src={sendBtn} alt="" /></button>
        </div>
        <p>ChatGPT can make mistakes. Check important info.</p>
      </div>
    </div>
  )
}

export default Main
