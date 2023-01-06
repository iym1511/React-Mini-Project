const Header = () => {
    return (  
        <div className="header">
            <h1>todos</h1>
            <input type="text" className="new-todo" placeholder="what needs to be done?" autoFocus />
        </div>
    );
}
 
export default Header;