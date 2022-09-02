import './Todo.scss';

const Todo = (props) => {

    let { todos, deleteTodo } = props;
    const handleDeleteTodo = (todoId) => {
        deleteTodo(todoId)
    }
    return (
        <div className="todo-container">
            <p>List of todos:</p>
            {todos.map((todo, index) => {
                return (
                    <div className='todo-child' id={todo.id} key={index}>
                        {todo.id} - {todo.title} -
                        <span
                            onClick={() => handleDeleteTodo(todo.id)}
                        >X</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo;