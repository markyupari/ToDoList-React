function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    },
    {
      text: 'another todo',
      isCompleted: false,
    }
  ])

  /*function to handle the submit of the form so it can add the new ToDo to the array ToDos through the function setTodos*/
  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}];
    setTodos(newTodos);
  }
  
  /*Track the onClick event on any of the div (created to show a ToDo) and taking its index in the array ToDos, splice it from the list*/
  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index,1); //removing (1) item selected according to its index
    setTodos(temp);
  };

  return(
    <div className="app" >
      <div className="d-grid gap-2 col-6 mx-auto"  >
        {/* Mapping the items in the array 'todos' to create a div for each with properties:
        index = which is the index of the item in the 'todos' array
        todo = the single todo object containing text and isCompleted key/values
        remove = callback the removeTodo function to delete an element of the 'todos' array guided by its index*/}
        {todos.map((todo, i) => 
          <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}
        
        {/*return the Form component with the function to add a new ToDo to the array 'todos' */}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
