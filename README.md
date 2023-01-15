# Submissão do teste técnico da Innovation Serviços Digitais

# Como rodar o projeto:

### Deixarei descrito duas formas diferentes de rodar o projeto. Assim você pode escolher o que lhe for mais rápido e fácil.

## Rodando com docker.

1. Primeiro de tudo, clone esse repositório;
2. Entre na pasta raiz do projeto pelo terminal;
3. Execute o comando abaixo para iniciar o docker-compose.
   ```
   docker-compose up
   ```
4. Aguarde até o processo de build terminar;
5. Assim que finalizado, a aplicação poderá ser acessada no endereço "localhost:3000"
6. Caso queira testar as rotas, deixei um script do meu insomnia na raiz do projeto, que pode ser importado e usada para fazer as requisições e analisar as responses.

## Rodando com servidor e banco locais, sem uso de docker.

Aqui eu vou partir da premissa que você já tem instalado os seguintes:

- gerenciador de pacotes: nesse projeto foi usado yarn
- node
- postgres

1. Primeiro de tudo, clone esse repositório;
2. Entre na pasta raiz do projeto pelo terminal;
3. Execute o comando abaixo para instalar as dependências;
   ```
   yarn
   ```
4. Na raiz do projeto, renomeie o arquivo ".env.example" para ".env" e preencha os valores de atribuição para os valores respectivos da sua máquina. Caso tenha dúvida, no campo environments do backend da aplicação no arquivo docker-compose, você pode encontrar um exemplo de preenchimento.
5. Execute o comando abaixo para rodar as migrations
   ```
      yarn typeorm migration:run -d src/data-source
   ```
6. Rode o comando abaixo para iniciar o servidor
   ```
   yarn dev
   ```
7. Assim que finalizado, a aplicação poderá ser acessada no endereço "localhost:3000"
8. Caso queira testar as rotas, deixei um script do meu insomnia na raiz do projeto, que pode ser importado e usada para fazer as requisições e analisar as responses.
