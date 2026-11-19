# Monitor de Sistemas Operacionais

Projeto prático da disciplina de Sistemas Operacionais. A aplicação utiliza Node.js, Express e o módulo nativo `os` para mostrar informações da máquina em uma página web.

## O que o projeto mostra

- Nome da máquina e plataforma;
- Tipo e versão do sistema operacional;
- Arquitetura e modelo do processador;
- Quantidade de processadores lógicos;
- Memória total, usada e livre;
- Tempo de atividade do sistema.

## Tecnologias

- Node.js
- Express
- Módulo nativo `os`
- HTML, CSS e JavaScript

## Como executar

É necessário ter o Node.js instalado.

1. Abra o terminal dentro desta pasta.
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm start
```

4. Abra no navegador:

```text
http://localhost:3000
```

A rota `/api/system` retorna os dados em formato JSON e a página inicial apresenta essas informações em cartões.

## Como funciona

O arquivo `server.js` utiliza funções do módulo `os`, como `os.hostname()`, `os.platform()`, `os.cpus()`, `os.totalmem()`, `os.freemem()` e `os.uptime()`.

O Express disponibiliza a página da pasta `public` e cria a rota `/api/system`. O JavaScript do navegador consulta essa rota com `fetch()` e atualiza os valores exibidos.

## Publicação no Render

1. Envie esta pasta para um repositório GitHub.
2. No Render, crie um **Web Service** e conecte o repositório.
3. Selecione o diretório do projeto caso esteja dentro de uma subpasta.
4. Configure:
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Faça o deploy e acesse o endereço gerado pelo Render.

O servidor utiliza `process.env.PORT`, então aceita a porta definida pela plataforma.

## Relação com a disciplina

O projeto permite observar na prática informações que o sistema operacional administra. A memória livre e total se relaciona ao gerenciamento de memória; a quantidade de CPUs e o uptime ajudam a observar recursos do sistema. Ao executar localmente e depois em nuvem, os dados podem mudar porque a aplicação passa a rodar em outra máquina ou ambiente virtualizado.

**Observação:** os valores dependem do ambiente em que o servidor está executando. É necessário realizar os testes no próprio computador e registrar os resultados reais antes de entregar a atividade.
