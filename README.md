# Portfólio ADS — Gabriel Almeida Santos

> **Exemplo didático com dados fictícios.** Nome, contatos, instituição, datas e cursos foram inventados para demonstração em sala. Não use os dados de contato como reais.

Portfólio estático de estudante de Análise e Desenvolvimento de Sistemas, criado com HTML semântico, CSS responsivo e JavaScript sem dependências obrigatórias. Preparado para publicação gratuita no GitHub Pages.

## Funcionalidades

- Navegação por seções e menu adaptado para dispositivos móveis.
- Apresentação, resumo acadêmico, habilidades, projetos, formação e contato.
- Cartões de projetos com status explícito: acadêmico, em desenvolvimento ou proposta.
- Ilustrações CSS de interfaces e diagrama de dados; não são capturas de aplicações reais.
- Ajuste do ano no rodapé via JavaScript.
- Link para pular a navegação, foco visível e respeito à preferência por movimento reduzido.
- Sem backend, chaves secretas ou dependências JavaScript externas.

## Tecnologias

- HTML5 semântico
- CSS3: Grid, Flexbox, media queries e estados de foco
- JavaScript moderno
- Git e GitHub
- GitHub Pages

A tipografia pode carregar do Google Fonts quando houver conexão; se o serviço estiver indisponível, o site utiliza fontes de sistema.

## Estrutura

```text
portfolio_ads_gabriel/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── favicon.svg
```

## Executar localmente

1. Baixe ou clone este repositório.
2. Abra `index.html` no navegador.
3. Para uma experiência de desenvolvimento melhor, abra a pasta no Visual Studio Code e use uma extensão de servidor local, como Live Server (opcional).
4. Teste navegação, menu móvel, links e visualizações em diferentes larguras.

Não há processo de build nem instalação de pacotes.

## Personalizar antes de publicar

1. No `index.html`, substitua nome, apresentação, formação, cursos e contatos pelos dados reais do estudante.
2. Troque os links fictícios do GitHub e LinkedIn pelos perfis reais. Remova links que o estudante ainda não possui.
3. Não apresente cursos fictícios como certificações reais.
4. Mantenha o status dos projetos correto. O controle financeiro está explicitamente em desenvolvimento; só altere seu status após concluir e testar a aplicação.
5. Atualize descrições, tecnologias e aprendizados conforme o que realmente foi implementado.
6. Substitua as ilustrações CSS por capturas reais dos projetos quando estiverem funcionais. Use imagens otimizadas, texto alternativo e não exponha dados pessoais.
7. Remova o aviso de dados fictícios apenas quando todos os dados e links de demonstração tiverem sido revisados.

## Publicar no GitHub Pages

### Opção A — repositório de usuário

1. Crie ou entre em uma conta GitHub.
2. Crie um repositório público com o nome exato `SEU-USUARIO.github.io` (substitua `SEU-USUARIO` pelo seu nome de usuário).
3. Envie os arquivos e pastas deste projeto para a raiz do repositório.
4. Abra **Settings → Pages**.
5. Em **Build and deployment**, selecione **Deploy from a branch**.
6. Selecione a branch `main` e a pasta `/(root)`, e salve.
7. Aguarde a publicação indicada pelo GitHub Pages. O endereço esperado segue o formato `https://SEU-USUARIO.github.io/`.
8. Abra o endereço publicado e confira o site. A primeira publicação pode levar alguns minutos.

### Opção B — repositório com outro nome

1. Crie um repositório público, por exemplo `portfolio-ads`.
2. Envie os arquivos para a raiz.
3. Ative Pages em **Settings → Pages**, selecionando `main` e `/(root)`.
4. O endereço geralmente seguirá o formato `https://SEU-USUARIO.github.io/portfolio-ads/`.

A publicação é estática. Não inclua senhas, tokens, chaves de API ou informações privadas no repositório.

## Checklist de testes

- [ ] O título, nome e apresentação correspondem ao currículo real.
- [ ] Não há dados fictícios ou contatos de demonstração publicados por engano.
- [ ] Todos os links internos levam à seção correta.
- [ ] Links externos abrem o destino esperado.
- [ ] O menu móvel abre, fecha e atualiza `aria-expanded`.
- [ ] O conteúdo funciona em celular (320–390 px), tablet e desktop.
- [ ] É possível navegar com teclado e visualizar o foco.
- [ ] O contraste é legível e a página funciona com zoom de 200%.
- [ ] A preferência `prefers-reduced-motion` é respeitada.
- [ ] Não há erros no console do navegador.
- [ ] Os projetos têm status honesto e links para repositórios reais.
- [ ] A URL publicada no GitHub Pages funciona após o deploy.
- [ ] As imagens reais estão otimizadas e possuem texto alternativo adequado.

## Evolução sugerida

1. Concluir e documentar a lista de tarefas.
2. Implementar o controle de despesas com validação, filtros e cálculos verificáveis.
3. Publicar o modelo da biblioteca com script SQL e consultas de exemplo.
4. Adicionar testes automatizados para funções relevantes.
5. Usar commits pequenos e mensagens claras; abrir issues para melhorias.
6. Adicionar um novo projeto ao portfólio somente quando houver uma versão demonstrável e documentação suficiente.

## Licença e uso

Material educacional para personalização e estudo. Revise os dados e adicione uma licença apropriada se desejar distribuir o projeto publicamente.
