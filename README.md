## Passos para buildar e subir o servidor

Instale as dependências do projeto.
> npm install


Prencha os valores das *variáveis de ambiente* no **.env** 

Inicie o conteiner do banco de dados em background.
> sudo docker-compose up -d --build

Use a flag **--build** para constuir o container na primeira vez que for usar o comando a cima.
 
Por fim:.
> npm start
