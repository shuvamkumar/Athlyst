import "./nav.css"
const Nav = ({ pageNumber }) => {
    return (
        <nav className="navbar">{pageNumber === 1 ? "Type" : pageNumber === 2 ? "General" : "Teams"}{" " + pageNumber + "/3"}</nav>
    )
}

export default Nav