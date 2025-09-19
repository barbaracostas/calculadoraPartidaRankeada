# Calculadora de Partidas Rankeadas 🎮

## Descrição do Projeto

Este repositório contém a solução para o desafio "Calculadora de Partidas Rankeadas", que foi realizado como parte do processo de aprendizado na DIO (Digital Innovation One). A ideia é utilizar conceitos de programação para desenvolver uma função que calcula o **saldo de vitórias** e determina o **nível do jogador**.

Através deste desafio, você pratica:

- Variáveis  
- Operadores  
- Laços de repetição  
- Estruturas de decisão  
- Funções  

---

## Como Funciona

A função principal do projeto recebe como parâmetros a quantidade de **vitórias** e **derrotas** de um jogador e retorna:

1. O **saldo de vitórias** (`vitórias - derrotas`)  
2. O **nível do jogador**, baseado na quantidade de vitórias:

| Vitórias           | Nível      |
|-------------------|------------|
| < 10              | Ferro      |
| 11 a 20           | Bronze     |
| 21 a 50           | Prata      |
| 51 a 80           | Ouro       |
| 81 a 90           | Diamante   |
| 91 a 100          | Lendário   |
| ≥ 101             | Imortal    |

Ao final, o programa deve exibir a seguinte mensagem:

```javascript
O Herói tem o saldo de {vitorias} vitórias e está no nível {nivel}

```
