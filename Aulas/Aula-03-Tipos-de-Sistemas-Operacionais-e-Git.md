# Aula 03 — Tipos de Sistemas Operacionais e Git

## Tipos de sistemas operacionais

Existem diferentes tipos de sistemas operacionais. Cada um é desenvolvido para atender determinadas necessidades.

- **Desktop:** voltado para computadores pessoais, como Windows, Linux e macOS.
- **Servidor:** preparado para oferecer serviços a outros computadores, como armazenamento, sites e bancos de dados.
- **Dispositivos móveis:** utilizado em celulares e tablets, como Android e iOS.
- **Tempo real:** precisa responder dentro de prazos definidos. É comum em equipamentos industriais e sistemas embarcados.
- **Embarcado:** desenvolvido para funcionar em dispositivos específicos, como equipamentos eletrônicos e automóveis.
- **Distribuído:** envolve vários computadores trabalhando em conjunto e compartilhando recursos.

## Outras classificações

Um sistema também pode ser classificado como:

- Monousuário ou multiusuário.
- Monotarefa ou multitarefa.
- Com interface gráfica ou linha de comando.

Essas classificações descrevem características diferentes e podem aparecer combinadas em um mesmo sistema.

## Introdução ao Git

Git é um sistema de controle de versão. Ele permite acompanhar as mudanças feitas nos arquivos de um projeto, recuperar versões anteriores e trabalhar com outras pessoas.

O Git é muito utilizado junto com o GitHub, que é uma plataforma para hospedar repositórios e colaborar em projetos.

## Comandos básicos

| Comando | Para que serve |
|---|---|
| `git init` | Inicia um repositório Git |
| `git status` | Mostra o estado dos arquivos |
| `git add .` | Prepara as alterações para o commit |
| `git commit -m "mensagem"` | Registra as alterações |
| `git log` | Mostra o histórico de commits |
| `git clone URL` | Copia um repositório remoto |
| `git push` | Envia commits para o repositório remoto |
| `git pull` | Busca e integra atualizações do remoto |

## Fluxo básico de trabalho

```bash
git status
git add .
git commit -m "Descrição da alteração"
git push
```

## O que ficou da aula

Aprendi a diferença entre os tipos de sistemas operacionais e revisei a importância do Git para manter o histórico de um projeto. Os commits ajudam a identificar o que foi alterado e em qual momento.

---
*Anotações de estudo — Sistemas Operacionais.*

## Exemplo de escolha do sistema

Um computador de laboratório pode utilizar um sistema desktop, enquanto um servidor que hospeda um site precisa priorizar estabilidade, administração remota e disponibilidade. Um equipamento industrial pode utilizar um sistema de tempo real, no qual responder dentro do prazo é parte essencial do funcionamento.

## Prática rápida com Git

Dentro de uma pasta de estudos que já seja um repositório, execute `git status` para conferir as alterações e `git log --oneline` para visualizar o histórico de forma resumida. Não execute `git init` novamente em um repositório que já existe.

## Para revisar

1. Qual a diferença entre um sistema desktop e um sistema embarcado?
2. Em que situação um sistema de tempo real pode ser necessário?
3. Qual a diferença entre Git e GitHub?
4. Para que serve um commit?
