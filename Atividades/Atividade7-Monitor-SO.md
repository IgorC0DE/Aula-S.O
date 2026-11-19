# Atividade 7 — Monitor de Sistemas Operacionais

**Disciplina:** Sistemas Operacionais  
**Aluno:** Igor Antonio Campos Correa

## 1. Objetivo

O objetivo desta atividade é desenvolver uma aplicação simples para consultar informações do sistema operacional. Para isso utilizei Node.js, Express e o módulo nativo `os`.

## 2. Funcionamento

O servidor consulta informações da máquina e disponibiliza os dados pela rota `/api/system`. A página HTML faz uma requisição para essa rota e mostra os resultados em cartões.

O projeto apresenta:

- Nome da máquina;
- Sistema operacional e versão;
- Arquitetura e processador;
- Quantidade de CPUs;
- Memória total, usada e livre;
- Tempo de atividade (*uptime*).

## 3. Estrutura dos arquivos

```text
Atividade7-Monitor-SO/
├── package.json
├── server.js
├── README.md
└── public/
    └── index.html
```

## 4. Como executar

Dentro da pasta do projeto, execute:

```bash
npm install
npm start
```

Depois abra `http://localhost:3000` no navegador. O botão **Atualizar** consulta novamente as informações.

## 5. Relação com os conceitos estudados

| Informação exibida | Relação com Sistemas Operacionais |
|---|---|
| Memória total, usada e livre | Gerenciamento de memória |
| Modelo e quantidade de CPUs | Hardware e gerenciamento de processador |
| Plataforma e versão | Identificação do sistema operacional |
| Uptime | Tempo desde a inicialização do sistema |
| Arquitetura | Características do processador e da plataforma |

## 6. Comparação entre execução local e nuvem

A aplicação pode ser executada no computador e publicada em um serviço de nuvem, como o Render. O código continua igual, mas as informações retornadas passam a representar o ambiente em que o servidor está rodando.

| Item | Execução local | Execução em nuvem |
|---|---|---|
| Hostname | Nome atribuído ao computador | Identificador do servidor |
| Plataforma | Sistema instalado no PC | Sistema usado pelo provedor |
| Memória | Recursos disponíveis no PC | Recursos disponíveis para a instância |
| CPUs | Processadores lógicos disponíveis localmente | CPUs virtuais ou recursos atribuídos |
| Uptime | Tempo ligado do computador | Tempo de atividade da instância |

**Importante:** esta tabela descreve o que deve ser observado. Os valores reais devem ser preenchidos depois de executar o projeto nos dois ambientes. Não considerei números de exemplo como se fossem resultados medidos.

## 7. Publicação

Para publicar no Render, envie o projeto ao GitHub e crie um Web Service conectado ao repositório. Use `npm install` como comando de build e `npm start` como comando de inicialização. A aplicação utiliza a variável `PORT` fornecida pelo ambiente.

## 8. Conclusão

Com esta atividade, é possível observar como um programa consegue consultar informações fornecidas pelo sistema operacional. O projeto também ajuda a entender a diferença entre executar uma aplicação no computador pessoal e executá-la em um ambiente de nuvem, onde os recursos são disponibilizados por uma infraestrutura remota.

## 9. Referências

- Node.js — módulo OS: https://nodejs.org/api/os.html
- Express: https://expressjs.com/
- Render: https://render.com/docs
