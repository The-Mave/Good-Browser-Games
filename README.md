PRAT PROF EM ANAL DES DE SISTEMAS 05J

Esse repositório tem como intuito facilitar o compartilhamento de arquivos entre os colaboradores do projeto /Good-Browser-Games proposto pelo professor TOMAZ MIKIO SASAKI da matéria PRAT PROF EM ANAL DES DE SISTEMAS do UPM (Universidade Presbiteriana Mackenzie)

A documentação do projeto encontra-se na pasta /doc

Todo o conteúdo presente nesse repositório é para fins educacionais.

---
title: "Especificação do Sistema Web de Vendas Solar System"
author: "Prática Profissional em ADS"
---


**Índice**

- [1. Introdução](#1-introdução)
- [2. Informações sobre a empresa](#2-informações-sobre-a-empresa)
- [3. Escopo do projeto](#3-escopo-do-projeto)
- [4. Interessados](#4-interessados)
- [5. Objetivos funcionais](#5-objetivos-funcionais)
- [6. Objetivos não-funcionais](#6-objetivos-não-funcionais)
- [7. COTS (Commercial Off-The-Shelf)](#7-cots-commercial-off-the-shelf)
- [8. Casos de uso](#8-casos-de-uso)
  - [8.1. Acessar funções restritas](#81-acessar-funções-restritas)
  - [8.2. Efetuar registro](#82-efetuar-registro)
  - [8.3. Efetuar seu próprio pedido](#83-efetuar-seu-próprio-pedido)
  - [8.4. Efetuar pedido para o cliente](#84-efetuar-pedido-para-o-cliente)
- [9. Wireframes](#9-wireframes)
- [10. Diagrama de classes de domínio](#10-diagrama-de-classes-de-domínio)



> Observação do professor: Este documento é um exemplo de parte de uma especificação de software. Não está com todos os detalhes necessários para iniciar o desenvolvimento de um software, mas serve de template para que cada grupo inicie a redação do documento do seu projeto.

> É uma adaptação, mas não uma tradução exata, de um [exemplo disponível na Universidade de Ohio](http://web.cse.ohio-state.edu/~bair.41/616/Project/Example_Document/Req_Doc_Example.html).


# 1. Introdução

Este é um documento de especificação de requisitos para um novo sistema web de avaliação de jogos. 

O sistema deverá permitir que usuários e administradores naveguem pelo catálogo de jogos cadastrados, em que usuários poderão realizar avaliações de jogos, visualizar outras avaliações e classificá-las como úteis ou não. O administrador poderá cadastrar, criar categorias de jogos e alterar seus nomes, se necessário.

Este documento descreve os requisitos não-funcionais, modela os requisitos funcionais com casos de uso e modela os conceitos do domínio do problema.



# 2. Informações sobre a empresa

A Empresa Solar Systems vende equipamentos para a geração de energia de formas alternativas e identificou tendências que causarão um aumento significativo na demanda por seus produtos.

Devido à natureza técnica e inovadora de seus produtos, a empresa possui vendedores capazes de orientar os clientes no processo de escolher um sistema de energia alternativa. A empresa possui também funcionários que têm a função de gerente do produto. O gerente do produto é um especialista em um determinado produto ou em uma determinada linha de produtos. Ele produz os *whitepapers*, documentos altamente técnicos e focados nas especificações dos produtos.


# 3. Escopo do projeto

O escopo deste projeto é um sistema web que permite que seus usuários naveguem pelo catálogo de jogos cadastrados e os avaliem.

A engine de pesquisa web será adquirida como um componente pronto para o novo sistema. Os detalhes internos desta engine não fazem parte deste projeto. Questões de segurança do site, além da proteção por senha no próprio site, também não são parte do projeto.

> Observação do professor: neste exemplo, deixei como parte do projeto somente a proteção por senha, assumindo que as demais questões de segurança serão tratadas pela equipe de operações. No caso do projeto do seu grupo, será necessário tratar destes outros aspectos de segurança.


# 4. Interessados

Aqueles que irão se beneficiar diretamente e aqueles que serão afetados pelo novo sistema:

* Usuários: Conseguirão navegar pelo site para buscar e avaliar jogos. Poderão visualizar avaliações de outros usuários e classificá-las como úteis ou não.

* Administradores: Conseguirão navegar pelo site e cadastrar jogos e categorias, além de alterar o nome e gerar relatórios sobre os jogos.


# 5. Objetivos funcionais

1. O sistema deverá permitir que usuários busquem e avaliem jogos.  
   
   Para os usuários, isso será útil para observar jogos que são realmente engajados e interessantes.

   Isto poderá facilitar a elaboração de relatórios de jogos para o administrador, visto que ele terá dados de satisfação ou não do público.

2. O sistema deverá permitir que os administradores cadastrem e criem catálogos de jogos.  
   
   Isto resultará em um sistema mais organizado, tornando a navegação mais fácil e rápida.

3. O sistema deverá permitir que os usuários visualizem outras avaliações e as classifiquem como úteis ou não.

   Isto reduzirá o tempo para um usuário de buscar jogos mais interessantes, visto que isso será filtrado de acordo com o nível de satisfação.

4. O sistema deverá permitir que sejam realizadas pesquisas em todo o texto das páginas web a que o usuário tem acesso. O sistema deverá permitir as seguintes pesquisas:
   * pesquisar todas as palavras
   * pesquisar qualquer uma das palavras
   * pesquisar a frase exata

5. O sistema deverá permitir que os *whitepapers* sejam acessados nas páginas dos próprios produtos.

   Isto permitirá que os usuários encontrem sozinhos as informações, reduzindo o custo de suporte ao cliente.

6.  O sistema deverá permitir que o status do usuário seja armazenado para a próxima vez que ele retornar à aplicação web.
    
    Isto reduzirá o tempo de visita do usuário, pois ele não precisará fornecer novamente dados que ele já entrou em uma visita anterior.

7. O sistema deverá fornecer ao administrador as informações de navegação do usuário.

   Esta informação permitirá que o administrador determine qual informação disparou a busca do jogo e ajudará a abordar usuários em potencial de forma mais efetiva, através de recomendações.



# 6. Objetivos não-funcionais

a. O sistema deverá estar completamente operacional pelo menos 99.99% do tempo.

b. O tempo fora do ar após uma falha não deverá exceder 0.5 hora.

c. O administrador deverá ser capaz de utilizar o sistema em seu trabalho após um treinamento de 2 dias.

d. Um usuário que já sabe qual jogo lhe interessa deve ser capaz de localizar e ver a página do jogo em 20 segundos.

e. O número de páginas web pelas quais o usuário precisa navegar para acessar a informação do produto a partir da página principal não deve ser maior do que 2.

f. O sistema deverá ser capaz de suportar 1000 usuários simultâneos.

g. O tempo médio para visualizar uma página web em uma conexão de 1Mbps não deverá exceder 5 segundos.

h. O tempo médio para baixar e visualizar um *whitepaper* em uma conexão de 1Mbps não deverá exceder 10 segundos.

i. O sistema deverá oferecer acesso protegido por senha para páginas web que são acessadas somente por administradores.

j. Os dados de transação devem ser transmitidos de forma criptografada.

k. O sistema deverá ser capaz de acomodar novos produtos e novas linhas de produto sem necessidade de alterações na sua implementação.

l. O site web do sistema deverá ser visível nos navegadores Mozilla Firefox (versão $\ge$ 75.0.0), Google Chrome (versão $\ge$ 81.0.0) e Microsoft Edge (versão $\ge$ 5.0.0).

m. O sistema deverá disponibilizar uma página web que explica como navegar pelo site. A página deverá ser customizada com base nas páginas que o usuário pode acessar. Esta página de ajuda deverá ser acessível a partir de todas as outras páginas.

o. O sistema deverá ter interface com

* Uma base de dados relacional para informações dos jogos e suas avaliações.
* A engine de pesquisa (a ser adquirida).


# 7. COTS (Commercial Off-The-Shelf)

Os softwares que serão adquiridos para compor o sistema são:

* Tradutor do português para o inglês e do português para o espanhol.

* Engine de pesquisa.


# 8. Casos de uso

A figura a seguir apresenta o diagrama de casos de uso:

![Diagrama de casos de uso](diagramas/casos-de-uso.png)


## 8.1. Acessar funções restritas

**Nome do caso de uso:** Acessar funções restritas

**Resumo:** Para ganhar acesso a informações restritas ou personalizadas, fazer pedidos ou outras transações especializadas, um usuário precisa se autenticar e o sistema determinará seu nível de acesso.

**Pré-condições:**
* O usuário já se registrou.

**Pós-condições:**
* O usuário pode obter informações e realizar funções disponíveis para o seu nível de acesso.

**Fluxo principal:** 

1. O usuário seleciona a operação para efetuar o login.
2. O sistema solicita o seu *username* e a sua senha.
3. O usuário entra seu *username*  e sua senha.
4. O sistema verifica que o *username* e a senha correspondem às informações de um de seus usuários registrados.
5. O sistema inicia uma sessão e apresenta uma mensagem de boas-vindas baseada nas preferências do usuário.


**Fluxos alternativos:**

Passo 4:
* Se o *username* é invalido, o caso de uso retorna para o passo 2.

Passo 4:
* Se o *username* é válido e a senha é inválida, o sistema dá uma nova oportunidade para o usuário entrar a senha. Quando o usuário entra outra senha, o caso de uso continua com o passo 4, utilizando o *username* já informado e a nova senha.


## 8.2. Efetuar registro

> (em elaboração)


## 8.3. Efetuar seu próprio pedido

> (em elaboração)

## 8.4. Efetuar pedido para o cliente

> (em elaboração)


# 9. Wireframes

> (em elaboração)


# 10. Diagrama de classes de domínio

> (em elaboração)
