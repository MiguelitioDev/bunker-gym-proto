# Bunker Gym — protótipo de site

Landing page de apresentação da MJStudios para a Bunker Gym (Maringá, PR).
React + TypeScript + Tailwind CSS v4 + Vite. Fonte Jost autohospedada (`@fontsource-variable/jost`).

## Comandos

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # tipos + build de produção em dist/
npm run preview  # serve o build (http://localhost:4173)
npm run lint
npm test         # Vitest: horário "aberto agora", links de WhatsApp, integridade dos dados
```

## Onde editar depois do feedback do dono

Tudo o que é específico da academia está em **`src/data/site.ts`**: contatos, links (Next Fit, Instagram, Wellhub, Maps),
horários, nota do Wellhub, textos de modalidades, perguntas do FAQ e caminhos das imagens.
Fotos ficam em `public/images/` (`nome.webp` e `nome@2x.webp`); o logo em `public/images/logo-bunker-gym.webp`.

## Para confirmar com o dono antes de publicar

- Endereço completo (hoje só bairro e cidade; o mapa é uma busca no Google Maps).
- Comodidades (armários, chuveiros, vestiários, Wi-Fi) e modalidades: vieram do perfil público no Wellhub.
- Fotos em maior resolução (as públicas têm só 639 px de largura) e, se houver, vídeos/reels da academia.
- Nota do Wellhub (4,91 com 181 avaliações em 29/10/2026): atualizar em `wellhubRating`.
- Domínio final: hoje `og:image` aponta para `https://bunker-gym-proto.vercel.app/og-image.jpg`; trocar pelo domínio definitivo em `index.html`.
- Remover do rodapé a linha "Protótipo de site por MJStudios" se não for desejada.
