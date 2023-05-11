import "../styles/header.css"

export default function MenuItem({text,link}) {
  return (
    <a href ={link} className="menuLink">{text}</a>
  )
}
