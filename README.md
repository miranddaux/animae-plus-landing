# ANIMAE+ Landing Page

Landing page estática do ANIMAE+. O projeto não precisa instalar dependências.

## Abrir diretamente no GitHub Pages

O repositório já contém uma automação que publica o site no GitHub Pages a cada
alteração enviada para a branch `main` ou `master`.

Para ativar uma única vez:

1. Abra o repositório no GitHub.
2. Entre em **Settings → Pages**.
3. Em **Build and deployment → Source**, escolha **GitHub Actions**.
4. Abra a aba **Actions** e selecione **Publicar no GitHub Pages**.
5. Aguarde a execução ficar verde e clique no endereço exibido em **deployments**.

Depois disso, cada novo push para a branch principal atualizará o site
automaticamente. A URL normalmente terá o formato:

```text
https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/
```

## Como abrir no Windows

O caminho `/workspace/animae-plus-landing` existe somente no ambiente onde o
projeto foi desenvolvido. No seu computador, primeiro baixe ou clone o projeto
e entre na pasta em que ele foi salvo.

Por exemplo, se a pasta estiver em `Downloads`:

```powershell
cd "$HOME\Downloads\animae-plus-landing"
npm.cmd run dev
```

Use `npm.cmd` no PowerShell para evitar o bloqueio do arquivo `npm.ps1` pela
política de execução do Windows. Não é necessário alterar a política de
segurança do sistema.

Quando aparecer a mensagem `ANIMAE+ disponível em http://localhost:4173`, abra
[http://localhost:4173](http://localhost:4173) no navegador. Para encerrar o
servidor, pressione `Ctrl+C` no terminal.

### Alternativa sem terminal

Como o site é estático, também é possível abrir `index.html` diretamente com um
navegador. O servidor local é recomendado para que todos os recursos sejam
carregados da mesma forma que em produção.

## Comandos

```powershell
# Inicia o servidor local
npm.cmd run dev

# Gera a versão de produção na pasta dist
npm.cmd run build
```

No Prompt de Comando (`cmd.exe`) ou em sistemas macOS/Linux, `npm run dev` e
`npm run build` também funcionam normalmente.
