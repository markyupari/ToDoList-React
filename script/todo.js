//properties are passed as an object using destructuring to avoid typing props.todo, props.index, props.remove
function Todo({todo, index, remove}) {
    
    function handle(){
        remove(index);
    }

    return <div className="btn btn-primary my-1 col align-self-center" onClick={handle}>{todo.text} (-)</div>
}