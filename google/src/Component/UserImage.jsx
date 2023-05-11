import UserImg from "../Images/folakemi.jpg"
import "../styles/header.css"

export default function UserImage() {
  return (
    <div>
    <img src ={UserImg} alt = "an app launcher icon"   className="user-img"  style={{ borderRadius:"50%"}}/>
</div>
  )
}
