# Atividade 6 — Gerenciamento de Memória

**Disciplina:** Sistemas Operacionais  
**Aluno:** Igor Antonio Campos Correa

## 1. Introdução

O gerenciamento de memória é uma das funções do sistema operacional. Ele controla como a memória RAM é distribuída entre os programas, evita que um processo acesse a área de outro e libera espaço quando ele não precisa mais dela.

Sem esse controle, os programas poderiam ocupar a mesma região de memória e causar erros ou travamentos.

## 2. Tipos de memória

| Tipo | Característica | Utilização |
|---|---|---|
| Registradores | Muito rápidos e pequenos | Guardam valores usados diretamente pela CPU |
| Cache | Rápida e de pouca capacidade | Mantém dados acessados com frequência |
| RAM | Volátil e rápida | Guarda programas e dados enquanto estão em execução |
| SSD/HD | Não volátil e com maior capacidade | Armazena arquivos mesmo com o computador desligado |

A hierarquia normalmente segue esta ordem: registradores, cache, RAM e armazenamento. Quanto mais perto da CPU, mais rápida tende a ser a memória, mas menor é sua capacidade.

## 3. Funções do gerenciamento de memória

- **Alocação:** reservar espaço para um processo.
- **Liberação:** devolver o espaço quando não for mais necessário.
- **Proteção:** impedir que um processo acesse indevidamente a memória de outro.
- **Mapeamento:** relacionar endereços virtuais com endereços físicos.
- **Memória virtual:** permitir que cada processo trabalhe com um espaço de endereços próprio.

## 4. Fragmentação

A fragmentação acontece quando parte da memória acaba sendo desperdiçada.

| Tipo | Explicação | Exemplo |
|---|---|---|
| Interna | Sobra espaço dentro de um bloco já reservado | Um processo precisa de 6 KB, mas recebe um bloco de 8 KB |
| Externa | Existem espaços livres separados entre si | Há vários espaços pequenos livres, mas nenhum grande o bastante para uma solicitação |

## 5. Técnicas de gerenciamento

### Paginação

A memória virtual é dividida em páginas de tamanho fixo e a memória física em molduras. Uma tabela de páginas ajuda o sistema a localizar cada parte do processo na RAM. A paginação evita a fragmentação externa, mas ainda pode existir fragmentação interna.

### Segmentação

Divide o programa em partes lógicas, como código, dados e pilha. Os segmentos podem ter tamanhos diferentes e ajudam a organizar e proteger as partes do programa.

### Memória virtual

É uma técnica que permite que os processos tenham um espaço de endereços maior do que a RAM disponível. O sistema mantém na RAM as partes necessárias e pode buscar outras no armazenamento quando precisar. O uso excessivo pode deixar o computador lento.

### Swapping

É a movimentação de páginas ou, em alguns sistemas, de processos entre a RAM e uma área de armazenamento. Ajuda quando a memória está cheia, mas o acesso ao disco é muito mais lento que o acesso à RAM.

## 6. Windows e Linux

| Windows | Linux |
|---|---|
| Usa memória virtual e paginação | Também usa memória virtual e paginação |
| Possui arquivo de paginação, como `pagefile.sys` | Pode usar partição ou arquivo de swap |
| O Gerenciador de Tarefas mostra o uso de memória | Comandos como `free`, `top` e `vmstat` mostram informações |
| Muitas configurações são administradas automaticamente | Oferece várias opções de configuração pelo sistema |

## 7. Exemplo prático de monitoramento

No Linux, alguns comandos ajudam a observar a memória:

```bash
free -h
```

Mostra memória total, usada, livre e swap.

```bash
top
```

Mostra processos e consumo de recursos em tempo real.

No Windows, é possível abrir o Gerenciador de Tarefas com `Ctrl + Shift + Esc` e acessar a aba **Desempenho > Memória**.

## 8. Relação com o projeto Monitor de Sistemas Operacionais

O módulo nativo `os` do Node.js possui funções para consultar informações de memória:

```js
const os = require('os');

const total = os.totalmem();
const livre = os.freemem();
const usada = total - livre;

console.log('Memória total:', (total / 1024 ** 3).toFixed(2), 'GB');
console.log('Memória livre:', (livre / 1024 ** 3).toFixed(2), 'GB');
console.log('Memória usada:', (usada / 1024 ** 3).toFixed(2), 'GB');
```

Essas informações permitem acompanhar o consumo de memória do ambiente em que o Node.js está sendo executado. Os valores podem variar entre o computador local e um servidor em nuvem.

## 9. Conclusão

Aprendi que o gerenciamento de memória é importante para manter o computador funcionando sem conflitos entre os programas. Paginação, segmentação, memória virtual e swap são técnicas que ajudam o sistema a utilizar melhor os recursos disponíveis. Também percebi que podemos acompanhar parte dessas informações por ferramentas do próprio sistema ou por programas, como o monitor feito com Node.js.

## 10. Referências

- TANENBAUM, Andrew S.; BOS, Herbert. *Sistemas Operacionais Modernos*. 4. ed. Pearson, 2016.
- Documentação do Node.js — módulo `os`: https://nodejs.org/api/os.html
- Manual do Linux — comandos `free`, `top` e `vmstat`.



## Exercício de fixação

Considere um computador com 8 GB de RAM que está executando um navegador, um editor de texto e uma ferramenta de videoconferência. Ao abrir mais programas, o sistema começa a utilizar swap.

**Responda:**

1. Por que o sistema operacional precisa controlar a memória utilizada por cada processo?
2. Qual é a diferença entre RAM e swap?
3. Por que o uso intenso de swap pode deixar o computador mais lento?
4. Explique, com suas palavras, como a paginação ajuda a organizar a memória.
