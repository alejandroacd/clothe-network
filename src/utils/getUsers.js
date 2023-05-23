import axios from 'axios'


const  getUsers = async () => {
 return axios.get('https://dummyjson.com/users?limit=10')

}


export default getUsers