# Prática 04 — Consultando informações do sistema

## Objetivo
Relacionar o kernel e os componentes do sistema operacional às informações exibidas pelo computador.

## Procedimento

No Linux, execute:

```bash
uname -r
uname -m
lscpu
```

No Windows, execute:

```bat
systeminfo
wmic os get Caption,Version
```

*Observação: alguns comandos WMIC podem não estar disponíveis em versões recentes do Windows.*

## Registro

| Informação | Resultado |
|---|---|
| Versão do sistema | |
| Arquitetura | |
| Processador | |
| Versão do kernel (quando disponível) | |

## Questões

1. O que a arquitetura informa?
2. Por que o sistema precisa de drivers?
3. Qual a diferença entre kernel e interface gráfica?

*Registre somente os dados que conseguir observar no seu ambiente.*
