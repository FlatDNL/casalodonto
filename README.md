# Casal Odontolove — Landing Page Premium

Landing page profissional, elegante e de alto padrão desenvolvida sob medida para a clínica odontológica **Casal Odontolove** (Dr. Claumir Arcanjo & Dra. Roberta Arcanjo), com posicionamento voltado à **transformação do sorriso e odontologia estética**.

---

## 💎 Identidade e Padrão Visual

- **Paleta de Cores**:
  - Fundo principal: `#111111` (Carvão / Preto profundo)
  - Superfícies e cards: `#181818` / `#141414`
  - Tipografia de texto: `#F4EFE7` (Cream)
  - Acentos e bordas de luxo: `#C7A66A` (Champagne / Ouro nobre)
- **Tipografia**:
  - Títulos e Editoriais: `Cormorant Garamond` (Serif de luxo)
  - Corpo e Leitura: `Plus Jakarta Sans` / `Inter` (Sans-serif moderna)
- **Experiência Visual**:
  - Imagens 100% reais extraídas do Instagram oficial `@casalodontolove`
  - Slider interativo Before/After com divisor ajustável
  - Faixa de autoridade editorial (+20 anos, +10 mil pacientes, +21 mil seguidores)
  - Cards editoriais de procedimentos com fotografia ampla e sem ícones genéricos
  - Botão flutuante de WhatsApp e header com efeito glassmorphism / blur no scroll
  - Adaptação mobile nativa para visualização fluida em qualquer dispositivo

---

## 📂 Estrutura do Projeto

```
Casal Odonto Love/
├── dist/                   # Build de produção pronto para GitHub Pages / Vercel
│   ├── assets/             # CSS e JS minificados e otimizados
│   ├── images/             # Fotografias reais locais otimizadas
│   └── index.html          # HTML estático compilado
├── public/
│   └── images/             # Mídias originais baixadas do Instagram
├── src/
│   ├── data.js             # Estrutura centralizada de dados reais dos posts
│   ├── main.js             # Lógica interativa (Before/After, Menu, Render)
│   └── style.css           # Estilos e Tailwind CSS
├── index.html              # Template fonte
├── vite.config.js          # Configuração do Vite com base path relativo ('./')
└── package.json            # Dependências e scripts de automação
```

---

## 🚀 Como Executar Localmente

1. Instalar as dependências:
   ```bash
   npm install
   ```

2. Executar o servidor de desenvolvimento:
   ```bash
   npx vite
   ```

3. Gerar a build de produção:
   ```bash
   npx vite build
   ```

---

## 🌐 Hospedagem

### 1. GitHub Pages
A pasta `dist` já está configurada com caminhos relativos (`base: './'`), permitindo ser publicada diretamente pelo branch `gh-pages` ou pasta raiz de documentação do GitHub.

### 2. Vercel
Para hospedar no Vercel:
1. Conecte o repositório ao dashboard da [Vercel](https://vercel.com)
2. Selecione o preset **Vite**
3. Diretório de saída: `dist`
4. Comando de build: `npm run build`
