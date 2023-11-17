Como Criar um Banco de Dados Sqlite no React Native
Para criar um banco de dados SQLite no React Native, precisamos seguir algumas etapas simples. Vamos começar importando o pacote “react-native-sqlite-storage” em nosso arquivo JavaScript:

```javascript
import SQLite from ‘react-native-sqlite-storage’;
```

Em seguida, vamos criar uma instância do banco de dados e abrir uma conexão:

```javascript
const db = SQLite.openDatabase({ name: ‘mydatabase.db’, location: ‘default’, }); 
```

Agora que temos uma conexão aberta, podemos executar consultas SQL para criar tabelas, inserir dados e realizar outras operações no banco de dados. Por exemplo, para criar uma tabela “users” com as colunas “id” e “name”, podemos executar o seguinte código:

```javascript 
db.transaction((tx) => { tx.executeSql( ‘CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)’, [], () => { console.log(‘Tabela criada com sucesso!’); }, (error) => { console.log(‘Erro ao criar tabela:’, error); } ); }); 
```

Agora que o banco de dados está criado, podemos manipular os dados utilizando consultas SQL. Podemos inserir dados na tabela “users” da seguinte maneira:

```javascript 
db.transaction((tx) => { tx.executeSql( ‘INSERT INTO users (name) VALUES (?)’, [‘John Doe’], () => { console.log(‘Dados inseridos com sucesso!’); }, (error) => { console.log(‘Erro ao inserir dados:’, error); } ); }); 
```

Manipulando Dados no Sqlite com React Native: Inserção, Consulta, Atualização e Exclusão.

Além da inserção de dados, o SQLite também nos permite realizar consultas, atualizações e exclusões de forma simples e eficiente. Vamos explorar essas operações:

– Consulta de dados: Para realizar uma consulta no banco de dados, podemos utilizar o seguinte código:

```javascript 
db.transaction((tx) => { tx.executeSql( ‘SELECT * FROM users’, [], (tx, results) => { const { rows } = results; for (let i = 0; i < rows.length; i++) { const { id, name } = rows.item(i); console.log(`ID: ${id}, Nome: ${name}`); } }, (error) => { console.log(‘Erro ao consultar dados:’, error); } ); });
```

– Atualização de dados: Para atualizar um registro no banco de dados, podemos utilizar o seguinte código:

```javascript 
db.transaction((tx) => { tx.executeSql( ‘UPDATE users SET name = ? WHERE id = ?’, [‘John Smith’, 1], () => { console.log(‘Dados atualizados com sucesso!’); }, (error) => { console.log(‘Erro ao atualizar dados:’, error); } ); });
```

– Exclusão de dados: Para excluir um registro do banco de dados, podemos utilizar o seguinte código:

```javascript 
db.transaction((tx) => { tx.executeSql( ‘DELETE FROM users WHERE id = ?’, [1], () => { console.log(‘Dados excluídos com sucesso!’); }, (error) => { console.log(‘Erro ao excluir dados:’, error); } ); }); 
```

Com essas operações, podemos manipular os dados no SQLite de forma eficiente e segura. Lembre-se de sempre tratar os erros adequadamente e garantir a integridade dos dados em seu aplicativo.


