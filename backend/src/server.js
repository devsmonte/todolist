const app = require('./app');

//Importando as variaveis de ambiente criadas em .env
const dotenv = require('dotenv');
dotenv.config();
//require('dotenv').config();

const PORT = process.env.PORT || 3333; //inicia na porta do arquivo ou  || em outra porta especifica caso indisponivel
app.listen(PORT, () => console.log(`Server running or port ${PORT}`));