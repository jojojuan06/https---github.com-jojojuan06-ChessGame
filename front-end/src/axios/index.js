//importe le package axios
import axios from 'axios';

//creation de l'intance par default d'axios (permet de faire la liaison entre le back et le front)
const instance = axios.create({ baseURL: 'http://localhost:3000/api/', 
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods':'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With',
    },
    credentials:true
});

//permet l'exportation du fichier    
export default instance;