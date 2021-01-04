import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burger-builder-react-911c3-default-rtdb.firebaseio.com/'
});

export default instance;