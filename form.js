/*TodoForm is a component so {addTodo} passes a property of that component when its called*/
function TodoForm({addTodo}) {

    /*Use state to manages the values of the inputs*/
    const [value, setValue] = React.useState(''); //manages input values

    const handleSubmit = e => {
        e.preventDefault(); //prevents page refresh
        if (!value) return; //if there is no value then returns doing nothing
        addTodo(value);
        setValue(''); //Putting all the values to empty
      };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                className="form-control my-1 col align-self-center text-center"
                value={value}
                placeholder="Add ToDo ..."
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}