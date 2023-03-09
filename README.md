## Sobre a aplicação
Aplicativo WaiterApp desenvolvido ao longo do curso JStack com modificações pessoais. O aplicativo é um estudo prático
utilizando o React Native como plataforma hibrida de desenvolvimento mobile. Em conjunto com a plataforma web e a API
desenvolvidas também ao longo do curso, tem por objetivo facilitar o atendimento do restaurante para com os clientes,
auxiliando da maneira a qual os produtos são anotados e enviados para produção. Sendo possivel através do aplicativo:

  - Selecionar a mesa;
  - Selecionar produtos e suas respectivas quantidades;
  - Enviar para o sistema web ou cancelar o pedido.
  
Pelo sistema web, é possível:
  - Alterar o status para produção ou concluído;
  - Cancelar o pedido.

## ⚒️ Tecnologias
* __[React Native](https://reactnative.dev)  + [Expo](https://expo.dev) + [Typescript](https://www.typescriptlang.org)__
* __[Styled-Components](https://styled-components.com)__ para estilização
* __[Axios](https://axios-http.com/ptbr/docs/intro)__ para acessar a API
* __[React-Native Dotenv](https://github.com/goatandsheep/react-native-dotenv)__ para variáveis de ambiente
<br />

## 🚀 Iniciando a aplicação
Baixe o repositório com git clone e entre na pasta do projeto.<br/>
Renomeie os arquivos _.env.example_ da pasta _web_ e _mobile_ para _.env_ e informe o _ip:porta_ da API.<br/>
```bash
$ git clone https://github.com/egMarshall/WaiterAppMobile
```
* Mobile
```bash
$ cd WaiterAppMobile
$ yarn
$ yarn start
```
