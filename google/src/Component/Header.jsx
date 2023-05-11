import AppLauncherIcon from "./AppLauncherIcon";

import MenuItem from "./MenuItem";
import "../styles/header.css"
import UserImage from "./UserImage";

export default function Header() {
  return (
    <div  className="header">
      <div className="header-content">
     
      <MenuItem  text= {"Gmail"} link={"#gmail"}/>
    <MenuItem text= {"Images"}  link={"#Images"}/>
    <AppLauncherIcon />
    <UserImage/>
      </div>
    
    </div>
  )
}
