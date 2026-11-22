# Guia de revisão — Sistemas Operacionais

Este arquivo reúne alguns conceitos das aulas e comandos simples para consultar informações do sistema operacional. A ideia é servir como material de revisão e também como apoio para testar no próprio computador.

## 1. O que o sistema operacional faz?

O sistema operacional gerencia os recursos do computador e permite que os programas sejam executados. Entre suas principais responsabilidades estão:

- **Processos:** controla os programas em execução e o tempo de uso da CPU.
- **Memória:** acompanha a memória utilizada e disponível para os aplicações.
- **Arquivos:** organiza arquivos, pastas e permissões.
- **Dispositivos:** faz a comunicação com teclado, mouse, impressora, discos e outros periféricos.
- **Segurança:** controla usuários, permissões e acesso aos recursos.

## 2. Processo e programa são a mesma coisa?

Não exatamente. Um **programa** é um conjunto de instruções armazenado em um arquivo. Um **processo** é uma instância desse programa em execução, com recursos e estado próprios.

Exemplo: o navegador instalado no computador é um programa. Quando ele é aberto, o sistema cria um ou mais processos para executá-lo.

## 3. Memória RAM e armazenamento

| Recurso | Para que serve |
|---|---|
| Memória RAM | Guarda temporariamente os dados e instruções usados pelos programas em execução. |
| Armazenamento (SSD/HD) | Mantém arquivos e programas mesmo depois que o computador é desligado. |
| Memória virtual / swap | Usa espaço de armazenamento como apoio à memória quando necessário; é mais lento que a RAM. |

A memória virtual não substitui a memória RAM. Ela é um mecanismo de apoio gerenciado pelo sistema operacional.

## 4. Kernel

O kernel é a parte central do sistema operacional. Ele atua na comunicação entre os programas e o hardware e participa do gerenciamento de processos, memória e dispositivos.

Uma forma simples de entender:

```text
Usuário
   ↓
Aplicativos
   ↓
Chamadas de sistema
   ↓
Kernel
   ↓
Hardware
```

## 5. Comandos para observar o sistema

Os comandos abaixo podem ser executados no terminal. A saída depende do sistema e da máquina utilizada.

### Linux

| Comando | Informação |
|---|---|
| `uname -a` | Informações do kernel e do sistema. |
| `lscpu` | Dados do processador. |
| `free -h` | Memória RAM e swap. |
| `df -h` | Espaço dos sistemas de arquivos. |
| `uptime` | Tempo desde a última inicialização e carga do sistema. |
| `ps aux` | Lista processos em execução. |
| `top` | Acompanha processos e uso de recursos em tempo real. |

### Windows (Prompt de Comando)

| Comando | Informação |
|---|---|
| `systeminfo` | Informações gerais do computador e do Windows. |
| `tasklist` | Lista processos em execução. |
| `ipconfig` | Configuração de rede. |
| `hostname` | Nome do computador. |
| `ver` | Versão do Windows. |

> Alguns comandos podem exigir permissões específicas ou não estar disponíveis em todas as distribuições.

## 6. Virtualização e containers

- **Máquina virtual:** simula um computador completo, com hardware virtual e um sistema operacional convidado.
- **Container:** isola aplicações e suas dependências, compartilhando o kernel do sistema hospedeiro.

A máquina virtual normalmente possui seu próprio kernel. Já os containers Linux compartilham o kernel do host, embora mantenham isolamento de processos e outros recursos.

## 7. Computação em nuvem

A computação em nuvem permite utilizar recursos computacionais pela rede, sob demanda. Exemplos de recursos são servidores, armazenamento, bancos de dados e plataformas para publicar aplicações.

Alguns modelos de serviço:

- **IaaS:** oferece infraestrutura virtual, como máquinas e redes.
- **PaaS:** oferece uma plataforma para desenvolver e executar aplicações.
- **SaaS:** disponibiliza um software pronto para uso pela internet.

## 8. Perguntas para conferir o aprendizado

1. Qual é a diferença entre programa e processo?
2. Por que a memória RAM é diferente do SSD ou HD?
3. Qual é a função do kernel?
4. O que muda entre uma máquina virtual e um container?
5. Cite dois comandos que permitem observar processos no Linux ou no Windows.
6. O que significa dizer que um serviço é oferecido no modelo SaaS?

## 9. Relação com as atividades

O guia complementa os assuntos presentes nas atividades sobre kernel, gerenciamento de memória, distribuições Linux, virtualização e monitoramento do sistema. Para aprofundar, consulte os arquivos na pasta [Atividades](../Atividades/README.md).

---

*Material de revisão organizado a partir dos assuntos estudados na disciplina.*
