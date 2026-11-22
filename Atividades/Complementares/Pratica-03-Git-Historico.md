# Prática 03 — Criando um histórico com Git

## Objetivo
Praticar o fluxo básico de controle de versão em uma pasta de teste.

## Procedimento

Crie uma pasta chamada `teste-git-so`, entre nela e execute:

```bash
git init
echo "# Meu teste" > README.md
git status
git add README.md
git status
git commit -m "Cria arquivo inicial"
git log --oneline
```

Se o Git ainda não estiver configurado, defina seu nome e e-mail com `git config --global user.name` e `git config --global user.email`.

## O que observar

- O estado do arquivo antes e depois do `git add`.
- A criação do primeiro commit.
- A identificação do commit exibida pelo histórico.

## Questões

1. O que é o repositório local?
2. Qual a diferença entre `git add` e `git commit`?
3. Por que a mensagem do commit deve descrever a mudança?
