# Aula 06 — Gerenciamento de Memória

## O que é gerenciamento de memória?

O gerenciamento de memória é uma das funções do sistema operacional. Ele controla como a memória RAM é utilizada pelos processos e programas que estão em execução.

Como a memória é um recurso limitado, o sistema precisa organizar sua utilização para evitar conflitos e permitir que vários programas funcionem.

## Memória RAM

A RAM é uma memória de acesso rápido utilizada para guardar temporariamente dados e instruções que estão sendo usados. Quando o computador é desligado, seu conteúdo normalmente é perdido.

## Principais responsabilidades do sistema operacional

- Controlar quais áreas da memória estão livres ou ocupadas.
- Reservar memória para os processos.
- Liberar memória quando ela não é mais necessária.
- Impedir que um processo acesse indevidamente a área de outro.
- Utilizar mecanismos para aproveitar melhor a memória disponível.

## Memória virtual

A memória virtual é uma técnica que permite ao sistema operacional oferecer a cada processo um espaço de endereçamento próprio. Ela também pode utilizar parte do armazenamento como apoio quando a RAM está sob pressão.

Isso não significa que o disco seja tão rápido quanto a RAM. Quando o sistema precisa acessar dados que estão no armazenamento, o desempenho pode cair bastante.

## Paginação

Na paginação, a memória é dividida em blocos de tamanho fixo. Os blocos do espaço virtual são chamados de páginas, enquanto os blocos da memória física são chamados de quadros (frames).

A paginação facilita a organização da memória e permite que páginas de um processo sejam colocadas em diferentes regiões da memória física.

## Por que esse gerenciamento é importante?

Sem o gerenciamento de memória, os programas poderiam disputar os mesmos espaços, causar falhas e comprometer o funcionamento do computador. Esse controle ajuda a manter estabilidade, segurança e melhor utilização dos recursos.

## O que ficou da aula

Entendi que a memória RAM precisa ser organizada pelo sistema operacional. Conceitos como memória virtual e paginação ajudam a explicar como o computador consegue executar vários processos mesmo com recursos limitados.

---
*Anotações de estudo — Sistemas Operacionais.*

## Exemplo simples de uso de memória

Ao abrir vários programas ao mesmo tempo, cada processo precisa de memória para guardar dados temporários. O sistema operacional acompanha as regiões ocupadas e disponíveis e impede que um processo utilize livremente a área privada de outro.

## Termos importantes

- **Página:** bloco de tamanho fixo do espaço de memória virtual.
- **Quadro (frame):** bloco correspondente na memória física.
- **Falta de página:** situação em que uma página solicitada não está disponível na RAM e precisa ser obtida de outro local.
- **Swap:** área de armazenamento que pode ser utilizada como apoio à memória.

## Para revisar

1. Por que a RAM é considerada memória volátil?
2. Qual a diferença entre página e quadro?
3. O que pode acontecer quando o computador utiliza muito swap?
4. Por que cada processo precisa de um espaço de endereçamento protegido?
