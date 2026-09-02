# NtecSoftware Landing Page

Landing page responsiva em React, TypeScript, Vite e Tailwind CSS 4.

## Executar

```bash
npm install
npm run dev
```

## Produção

```bash
npm run build
npm run preview
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie estes arquivos para a branch `main`.
2. No repositório, acesse **Settings → Pages**.
3. Em **Build and deployment → Source**, selecione **GitHub Actions**.
4. Acesse a aba **Actions** e acompanhe o workflow **Publicar no GitHub Pages**.

Depois disso, cada `git push` para a branch `main` publicará uma nova versão
automaticamente. O endereço aparecerá no resumo da execução do workflow e na
seção **Settings → Pages**.

### Comandos para o primeiro envio

```bash
git init
git add .
git commit -m "Publica landing page da NtecSoftware"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```

Substitua `SEU-USUARIO` e `NOME-DO-REPOSITORIO` pelos dados do GitHub.

Antes de publicar, substitua e-mail, links de contato, redes sociais, políticas e estudos de caso pelos dados oficiais.
