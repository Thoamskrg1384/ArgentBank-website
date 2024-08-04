import chat from "../../../../backend/designs/img/icon-chat.png";
import money from "../../../../backend/designs/img/icon-money.png";
import security from "../../../../backend/designs/img/icon-security.png";
import Item from "../feature/item"
import "./style.scss";

export default function Features() {
  return (
    <div className="features__section">
      <Item image={chat}>
        <h3>You are our #1 priority</h3>
        <span>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</span>
      </Item>
      <Item image={money}>
        <h3>More savings means higher rates</h3>
        <span>The more you save with us, the higher your interest rate will be!</span>
      </Item>
      <Item image={security}>
        <h3>Security you can trust</h3>
        <span>We use top of the line encryption to make sure your data and money is always safe.</span>
      </Item>
    </div>
  )
}
