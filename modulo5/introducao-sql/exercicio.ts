/* a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.
b) b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.
O SHOW DATABASES mostra os dados de entrada do banco de dados, já o SHOW TABLES mostra as tabelas contidas nesse BD
c) O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados.
esse comando da detalhes de como são os tipos de entrada da tabela Actor, quais valores são
e o tipo de valor e se é obrigatório ou não o dado.
b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.
deu duplicação de Id pois coloquei a msm da exercício anterior
*Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta*

- c) erro me mostrou que sobra valor de entrada na query, foi passado somente 3 linhas para alterar e foi tentado alterar 5
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
d) o campo nome é obrigatório por ter o comando NOT NULL
e) valor de data incorreto, observei que tem que ser uma VARCHAR
a) Escreva uma query que retorne todas as informações das atrizes
SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";
b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos
SELECT  name, salary from Actor WHERE name = "Tony Ramos";
c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "invalid"
retornou os campos em Null
d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
SELECT id, name, salary from Actor WHERE salary <= 500.000
e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta
coluna com nome inválido, corrigi alterando pra coluna name

*/