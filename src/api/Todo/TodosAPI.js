import axios from 'axios'

const serverUrl = 'http://localhost:8080'

const urls = {
    tasks: `${serverUrl}/tasks`,
    task: `${serverUrl}/task`
}
/*
    Get All Todos API
*/
export const getTodosAPI = () => {
    return axios.get(urls.tasks)
        .then(response => response.data)
        .catch(error => {
            throw new Error(error)
        })
}
/*
    Add Todo API
*/
export const addTodosAPI = todo => {
    const {id, task, done} = todo
    return axios.post(urls.tasks, {id, task, done})
        .then(response => response.data)
        .catch(error => {
            throw new Error(error)
        })
}
/*
    Remove Todo API
*/
export const removeTodoAPI = id => {
    return axios.delete(`${urls.tasks}/${id}`)
        .then(response => response)
        .catch(error => {
            throw new Error(error)
        })
}
/*
    Update Todo API
*/
export const updateTodoAPI = todo => {
    const {id, task, done} = todo
    return axios.put(`${urls.tasks}/${todo.id}`, {id, task, done})
        .then(response => response)
        .catch(error => {
            throw new Error(error)
        })
}
