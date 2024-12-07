# **Sobre o Projeto**
Projeto final do 2º semestre do curso de Desenvolvimento de Sistemas da instituição [SENAI Jandira][site-jandira]. Este projeto tem como objetivo aplicar tudo o que aprendemos no semestre, contendo: JavaScript, funções, Arrays e JSON, criação de APIs, métodos get, exportação de arquivos, endpoint e muito mais! Porém o objetivo principal do projeto é criar uma API do zero e jogar ele em um servidor na web.
>**node_modules** : Pasta referente a instalação dos arquivos essenciais para uma API funcionar corretamente, métodos como *express*, *cors* e *body-parser*

>**alunos.js** : Arquivo responsável pela base de dados que contém todas as informações referente aos alunos da escola, que serão acessadas em outro arquivo destinado a criação de funções. É como a raiz do programa, aqui tem exatamente todos os dados referente aos alunos que foram e que serão acessados durante todo o projeto.

>**cursos.js** :  Arquivo responsável pela base de dados que contém todas as informações referente aos cursos da escola, que serão acessadas em outro arquivo destinado a criação de funções. É como a raiz do programa, aqui tem exatamente todos os dados refernte aos cursps que foram e que serão acessados durante todo o projeto.

>**funcoes.js** : Arquivo responsável por de fato criar as funcionalidades da API, é ele quem importa os dados do alunos.js e cursos.js e faz todas essas informações funcionarem da maneira correta. Todas as alterações que são feitas no arquivo base, já são passadas automaticamente pra cá, sem a necessidade de alterar os códigos-fonte deste arquivo.

>**README.md**: Documentação do projeto contendo todas as informações do mesmo

>*Novo arquivo* **links.txt**: Arquivo responsável para o acesso aos links responáveis pela utilização da API online.

- - - 

# **Um pouco mais sobre a API**
Essa API foi desenvolvida para a escola Lion School, com o objetivo de facilitar alguma busca por alunos através de algum filtro em específico. Essa API tem o poder de mostrar todas as informações de todos os alunos ou cursos cadastrados no sistema. Essa aplicacão foi desenvolvida em poucas semanas, por isso é possível que haja atualizações futuras visando novas funcionalidades e melhor performance e experiência do usuário.

- - -

# **Tecnologias utilizadas**
- JavaScript
- Node JS
- Methods *express*, *cors*
- Git
- Markdown

### **Última atualização**
06/12/2024

### **Versão atual**
1.0.2

### **Notas da versão 1.0.2**
- A API que antes era local, agora foi jogada para um servidor web online para que seja acessada de qualquer computador através do link correto de busca. A hospedagem do site foi feita gratuitamente, e sua licença dura até 3 meses após a contratação do mesmo, depois deste prazo o serviço ficará fora do ar, então aproveite!
- Adicionado um novo arquivo .txt referentes aos links que redirecionam para a API online
- Removida a sub-pasta modulo para ser compatível com as necessidades do servidor. Arquivos como package.json que estavam dentro dela, foram movidas para o diretório raiz do projeto
- Códigos corrigidos e atualizados para se adequarem a nova versão

### **Créditos deste projeto**
[Hugo Lopes][site-linkedin]
***Está permitido a utilização dos códigos deste projeto para facilitar programas e softwares de outros criadores***

[site-jandira]: https://sp.senai.br/unidade/jandira/
[site-linkedin]: www.linkedin.com/in/hugo-lopes-souza-a25b9122a
