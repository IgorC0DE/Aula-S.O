# Atividade 4.3 — O que é Kernel?

**Disciplina:** Sistemas Operacionais  
**Aluno:** Igor Antonio Campos Correa

## 1. Conceito

O kernel é a parte central do sistema operacional. Ele faz a comunicação entre os programas e o hardware e controla recursos importantes do computador.

Podemos imaginar o sistema em camadas:

```text
Usuário
   ↓
Aplicativos
   ↓
Sistema Operacional e Kernel
   ↓
Hardware
```

## 2. Principais funções

| Função | O que faz |
|---|---|
| Gerenciamento de processos | Organiza a execução dos programas e o uso da CPU |
| Gerenciamento de memória | Reserva e libera RAM e protege os espaços dos processos |
| Dispositivos | Usa drivers para controlar teclado, vídeo, rede e outros componentes |
| Sistema de arquivos | Organiza a leitura e gravação de arquivos |
| Segurança e permissões | Controla acessos aos recursos do sistema |

## 3. Modo usuário e modo kernel

Os aplicativos comuns executam em modo usuário, com acesso limitado ao hardware. Quando precisam realizar uma operação protegida, fazem uma chamada de sistema (*system call*). O kernel executa a operação com os privilégios necessários e devolve o resultado.

Essa separação ajuda a evitar que um erro em um aplicativo afete diretamente todo o computador.

## 4. Exemplos

- **Linux:** utiliza o kernel Linux, presente em distribuições como Ubuntu e também como base do Android.
- **Windows:** utiliza a família de kernel Windows NT.
- **macOS e iOS:** utilizam o kernel XNU, que combina componentes Mach e BSD.

## 5. Conclusão

O kernel é essencial porque controla a comunicação com o hardware e organiza os recursos do computador. Sem ele, cada aplicativo teria que controlar diretamente o processador, a memória e os dispositivos, o que dificultaria muito o funcionamento e a segurança do sistema.

## 6. Referências

- TANENBAUM, Andrew S.; BOS, Herbert. *Sistemas Operacionais Modernos*. 4. ed. Pearson, 2016.
- Linux Kernel: https://www.kernel.org/
- Apple Open Source — XNU: https://github.com/apple-oss-distributions/xnu
