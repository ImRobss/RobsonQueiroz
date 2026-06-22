# Portfólio — Robson Queiroz

Landing page pessoal contando a trajetória **Administração → Tecnologia → Desenvolvimento de Software**.

Stack: **Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion**. Deploy: **Vercel**.
Direção visual: dark premium, glassmorphism estilo Apple.

---

## Arquitetura (MVC)

O código separa **dados**, **lógica** e **apresentação** em três camadas independentes.
Em um frontend, o MVC se traduz assim:

```
src/
├── models/        # MODEL  — dados puros + tipos (sem React, sem lógica de UI)
│   ├── types.ts        → contratos de domínio
│   ├── profile.ts      → textos da hero e do "sobre"
│   ├── timeline.ts     → linha do tempo
│   ├── projects.ts     → lista de projetos
│   ├── stack.ts        → tecnologias por categoria
│   ├── contact.ts      → canais de contato
│   └── navigation.ts   → itens da navbar
│
├── controllers/   # CONTROLLER — hooks com o comportamento da página
│   ├── useScrolled.ts        → transparência da navbar ao rolar
│   ├── useActiveSection.ts   → seção ativa (scroll spy)
│   └── useSmoothScroll.ts    → scroll suave entre seções
│
├── views/         # VIEW — componentes de apresentação (recebem dados, não buscam)
│   ├── shared/        → primitivos reutilizáveis (GlassCard, Reveal, Section…)
│   ├── Navbar.tsx · Hero.tsx · About.tsx · Timeline.tsx
│   ├── Projects.tsx · Stack.tsx · Contact.tsx · Footer.tsx
│   └── index.ts
│
└── app/           # entrada Next.js (layout, page, estilos globais)
    ├── layout.tsx     → fontes, metadata, atmosfera de fundo
    ├── page.tsx       → orquestra as seções na ordem da narrativa
    └── globals.css
```

**Regra de ouro:** a View nunca contém regra de negócio nem dado fixo.
Para mudar o conteúdo, edite apenas a camada **Model**.

---

## Como editar o conteúdo

Tudo que é texto, projeto ou contato vive em `src/models/`:

- **Seus dados de contato** → `src/models/contact.ts` (telefone, e-mail, LinkedIn, GitHub).
- **Adicionar um projeto** → inclua um objeto em `src/models/projects.ts`.
  Coloque a imagem de preview em `public/projects/` e aponte o campo `image`.
- **Ajustar a linha do tempo** → `src/models/timeline.ts` (troque os anos `201X`/`20XX`).
- **Textos da hero e do "sobre"** → `src/models/profile.ts`.

Os componentes se atualizam sozinhos a partir desses dados.

---

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

Outros scripts:

```bash
npm run build      # build de produção
npm run typecheck  # checagem de tipos sem emitir
```

---

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Em [vercel.com](https://vercel.com), importe o repositório.
3. A Vercel detecta Next.js automaticamente — basta clicar em **Deploy**.

---

## Acessibilidade & qualidade

- Responsivo até mobile, com menu dedicado.
- `prefers-reduced-motion` respeitado (anima menos para quem prefere).
- Foco de teclado visível.
- Navegação por âncoras com scroll spy.
