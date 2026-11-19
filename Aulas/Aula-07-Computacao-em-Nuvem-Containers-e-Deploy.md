# Aula 07 — Computação em Nuvem, Containers e Deploy

## O que é computação em nuvem?

Computação em nuvem é o uso de recursos computacionais por meio de uma rede, normalmente a internet. Em vez de manter toda a infraestrutura localmente, uma empresa ou usuário pode contratar processamento, armazenamento, bancos de dados e outros serviços de um provedor.

## Modelos de serviço

| Modelo | Descrição |
|---|---|
| IaaS | Oferece infraestrutura, como máquinas virtuais, redes e armazenamento |
| PaaS | Oferece uma plataforma para desenvolver e executar aplicações |
| SaaS | Oferece um software pronto para ser utilizado pela internet |

## Modelos de implantação

- **Nuvem pública:** infraestrutura oferecida por um provedor para diferentes clientes.
- **Nuvem privada:** ambiente dedicado a uma organização.
- **Nuvem híbrida:** combinação de ambientes públicos e privados.

## O que são containers?

Containers são uma forma de empacotar uma aplicação com suas dependências para que ela funcione de maneira mais consistente em diferentes ambientes.

Diferentemente de uma máquina virtual tradicional, um container normalmente compartilha o kernel do sistema operacional do host. Por isso, costuma ser mais leve do que executar um sistema operacional completo para cada aplicação.

## Docker

Docker é uma plataforma bastante utilizada para criar e executar containers.

Alguns conceitos importantes:

- **Imagem:** modelo utilizado para criar um container.
- **Container:** instância em execução criada a partir de uma imagem.
- **Dockerfile:** arquivo com instruções para construir uma imagem.
- **Volume:** mecanismo para persistir ou compartilhar dados.
- **Porta:** permite disponibilizar um serviço do container para acesso externo.

## O que é deploy?

Deploy é o processo de disponibilizar uma aplicação em um ambiente onde outras pessoas possam acessá-la. Pode envolver preparar o servidor, configurar variáveis de ambiente, banco de dados, domínio e monitoramento.

Um fluxo simplificado é:

1. Desenvolver e testar a aplicação localmente.
2. Preparar as dependências e configurações.
3. Criar uma imagem ou preparar o ambiente de execução.
4. Publicar a aplicação em um servidor ou plataforma.
5. Verificar se está funcionando corretamente.

## Vantagens e cuidados

A nuvem facilita o acesso a recursos e pode ajudar a escalar uma aplicação conforme a necessidade. Mesmo assim, é preciso considerar custos, segurança, disponibilidade, backups e dependência do provedor.

## O que ficou da aula

A computação em nuvem permite utilizar infraestrutura e serviços pela internet. Containers ajudam a padronizar a execução das aplicações, enquanto o deploy é a etapa de disponibilizar o sistema para os usuários.

---
*Anotações de estudo — Sistemas Operacionais.*