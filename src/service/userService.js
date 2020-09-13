import axios from 'axios'

let getTodo = () => {
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      console.log(response)
    })
}

getTodo()

export default {getTodo}
