# Aula 05 — Virtualização e Distribuições Linux

## O que é virtualização?

Virtualização é uma tecnologia que permite criar versões virtuais de recursos de computador. Um exemplo é executar outro sistema operacional dentro de uma máquina virtual, sem precisar instalar esse sistema diretamente no computador principal.

A máquina que executa o programa de virtualização é chamada de **host**. O sistema que funciona dentro da máquina virtual é chamado de **guest**.

## Máquina virtual

Uma máquina virtual simula um computador, com processador, memória, armazenamento e dispositivos virtuais. É possível instalar nela um sistema operacional e utilizar seus programas.

Exemplos de ferramentas:

- Oracle VirtualBox.
- VMware Workstation.
- Hyper-V.

## Vantagens da virtualização

- Testar sistemas sem alterar diretamente o sistema principal.
- Criar ambientes de laboratório.
- Executar sistemas diferentes no mesmo computador.
- Facilitar testes e estudos.
- Isolar ambientes para determinadas atividades.

É importante lembrar que a máquina virtual utiliza os recursos do computador físico. Por isso, pouca memória RAM ou pouco espaço em disco podem prejudicar o desempenho.

## Linux e distribuições

Linux é o núcleo (kernel) utilizado por diversos sistemas. Uma distribuição Linux reúne o kernel, ferramentas, programas e um gerenciador de pacotes para formar um sistema pronto para uso.

Alguns exemplos:

- **Ubuntu:** distribuição bastante conhecida e utilizada em computadores pessoais e servidores.
- **Debian:** conhecida pela estabilidade e por servir de base para outras distribuições.
- **Linux Mint:** possui uma interface amigável para quem está começando.
- **Fedora:** acompanha tecnologias recentes do ecossistema Linux.
- **Lubuntu e Xubuntu:** versões do Ubuntu que utilizam ambientes gráficos mais leves.

## Testando Linux em uma máquina virtual

Um roteiro básico de laboratório é:

1. Instalar o VirtualBox no computador.
2. Baixar a imagem ISO da distribuição escolhida.
3. Criar uma nova máquina virtual.
4. Definir memória RAM e armazenamento virtual.
5. Selecionar a ISO como mídia de inicialização.
6. Iniciar a máquina e seguir o instalador.
7. Testar o sistema depois da instalação.

## O que ficou da aula

A virtualização é muito útil para estudar sistemas operacionais com mais segurança. Com ela, consigo testar uma distribuição Linux em uma máquina virtual sem precisar substituir o sistema instalado no computador.

---
*Anotações de estudo — Sistemas Operacionais.*