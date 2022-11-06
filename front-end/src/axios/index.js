//importe le package axios
import axios from 'axios';

//creation de l'intance par default d'axios (permet de faire la liaison entre le back et le front)
const instance = axios.create({ baseURL: 'http://localhost:3000/api/', 
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods':'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With',
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF5ZXJJZCI6IjE0NTUyYzI5LTRmYTYtNGRlMy05NjU3LWI4NTZmZjc3ZjVlZCIsImlhdCI6MTY2NjYyMDgyMSwiZXhwIjoxNjY2NjY0MDIxfQ.3Gs2Ia6f8T8QURkuzxfq4diM6W3nN8pbjw2usbqvyZs'
    },
    credentials:true
});

//permet l'exportation du fichier    
export default instance;