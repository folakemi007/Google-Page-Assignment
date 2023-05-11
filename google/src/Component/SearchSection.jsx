import Button from "./Button"
import LanguageLink from "./LanguageLink"
import Logo from "./Logo"
import SearchBar from "./SearchBar";
import "../styles/SearchSection.css"

export default function SearchSection() {
  return (
    <div className="Search-Section-Cont"> 
      <Logo />
      <SearchBar/>
      <div className="botton-Container">
      <Button text={"Google Search"}/>
      <Button  text={"I'm Feeling Lucky"}/>
      </div>
      
      <LanguageLink/>
    </div>
  )
}
