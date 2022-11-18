//importe le package axios
import axios from 'axios';

//creation de l'intance par default d'axios (permet de faire la liaison entre le back et le front)
const instance = axios.create({ baseURL: 'http://localhost:3000/api/', 
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods':'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With',
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF5ZXJJZCI6ImI5MGM4ZWVmLTBkYjgtNDRjYS04MzA3LTYyMjcyMjM0MGMzOSIsImlhdCI6MTY2ODYzMjcwNCwiZXhwIjoxNjY4Njc1OTA0fQ.f_xo9P9KamGYmiPLbM9w3o6i7I1FBReJyecHIWl7hvI'
    },
    credentials:true
});

//permet l'exportation du fichier    
export default instance;