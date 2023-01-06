const Main = () => {
    return (  
        <div className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list" />
        </div>
    );
}
 
export default Main;