export const getTodosFromLocalStorage = () => {
  try {
    const storedTodos = localStorage.getItem("todos");
    console.log(storedTodos);
    if(storedTodos === undefined) return [];
    return JSON.parse(storedTodos); 
  } catch (error) {
    console.log(error.message);
  }
};

export const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
