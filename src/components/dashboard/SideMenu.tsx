export function SideMenu() {
    return(
        <div className="box menu-div">
        <aside className="menu">
            <p className="menu-label">
                General
            </p>
            <ul className="menu-list">
                <li><a href="http://localhost:3000/">Dashboard</a></li>
                <li><a href="http://localhost:3000/authors">Authors</a></li>
                <li><a href="http://localhost:3000/books">Books</a></li>
            </ul>
        </aside>    
        </div>
    );
}