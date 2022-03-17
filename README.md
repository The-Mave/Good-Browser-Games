# COMO USAR O GIT NO VISUAL STUDIO CODE

Neste exemplo vou explicar como utilizar o VSCode com a extensão Git.

---

## Links
Visual Studio Code - https://code.visualstudio.com/
Git Extension for Visual Studio Code - https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github

Após a instalação do VSCode e da Extensão, note que um novo botão apareceu em seu menu lateral. Esse é o botão para modificar branches (Uma Ramificação, em controle de versão e gerenciamento de configuração de software)
![image](https://user-images.githubusercontent.com/78883240/158706074-5bca1e22-bba9-4ff0-938c-9c9a98bda3a3.png)

## Como controlar o repositório pela extensão:
---
### Etapa 1: Clonando o Repositório: 

Caso já tenha feito isso, pule para Localizando a pasta no VSCODE

1. Crie um diretório(pasta) em qualquer lugar de seu computador para clonarmos o projeto nela.
2. Ao criar a pasta, usando o explorador de arquivos do windows clique na barra de caminho do diretório e cole:
git clone https://github.com/The-Mave/Good-Browser-Games.git
3. A pasta será clonada. 
4. Após isso basta abrir o VSCode.

### Etapa 2: Localizando a pasta no VSCode
1. CLique em File > Open Folder
2. Selecione o mesmo diretório onde o projeto foi clonado na Primeira Etapa.
3. Pronto você está na pasta do projeto.

### Etapa 3: Instalando o Git Extension for Visual Studio Code
1. Após instalar o Git Extension for Visual Studio Code você precisa sincronizar ele com sua conta do GitHub (para utilizar melhor suas funções)
2. Clique no ícone do GitHub na barra lateal (O ícone de gatinho)
3. Faça o procedimento que ele te indica de efetuar login pelo navegador e autorizar o uso do mesmo no VSCode
4. Após fazer isso você estára logado.

### Etapa 4: Fazendo Pull no Projeto
1. Fazer o Pull é basicamente sincronizar o projeto que está no Github com o da sua maquina, no sentido de "baixar" os arquivos novos. É importante fazer isso sempre que for fazer alguma alteração, para que seu repositório não esteja desatualizado.
2. Para "baixar" a ultima versão do projeto, clique em "Source Control" a ferramenta que fica logo abaixo da busca.


![image](https://user-images.githubusercontent.com/78883240/158711642-091c6185-d38a-4a7d-841a-cd3a2e4fd665.png)


3. Depois disso, clique nos três pontihos no superior direito do menu do SourceControl clique em Pull, Push > Pull from ... 
4. E insira o nome da Remote que quer atualizar com seu projeto local, geralmente optamos sempre pela origin pois é a raiz de nosso projeto e é onde fica tudo que está em produção, podem existir outras remotes como, develop ou teste para fazer testes internos antes de subir para o website/produção
5. Selecione origin/main
---
1. Para começarmos a subir o versionamento é importante saber duas coisas. 
    A. ANTES DE COMEÇAR QUALQUER MODIFICAÇÃO, SEMPRE DE PULL PARA PEGAR A ULTIMA VERSÃO DO PROJETO.
    B. SEMPRE CRIE UMA BRANCH (RAMIFICAÇÃO) PARA CADA FEATURE QUE FOR IMPLEMENTAR
2.  Dando o primeiro Pull, no menu de ramificação:
![image](https://user-images.githubusercontent.com/78883240/158707711-a4cfefbf-9763-4e1c-a8d4-5813a13877c7.png)
Clique nos três pontinhos
![image](https://user-images.githubusercontent.com/78883240/158707734-6f7f52ba-b5b2-4f79-b689-b21456d948e3.png)
Pull & Push > Pull from, para selecionarmos de qual ramificação queremos sincronizar o nosso projeto (o ideal é sempre sincronizar com a main/master) 
![image](https://user-images.githubusercontent.com/78883240/158707754-ee738504-6c46-4172-aeb1-2227f4ff7b1f.png)

3.  
4. 





Primeiramente você precisa fazer o clone do projeto:
