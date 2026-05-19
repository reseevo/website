# ReSeevo Website

Official website for ReSeevo booking and management platform.

ReSeevo sara il website vetrina ufficiale di una futura attivita di sviluppo software orientata a gestionali di prenotazione, piattaforme SaaS multi-tenant, web app, future app mobile e soluzioni digitali per attivita commerciali.

## Obiettivo

Questa repository contiene la struttura iniziale professionale del website Angular. La base e pensata per evolvere in una SPA deployabile su Firebase Hosting, mantenendo separazione tra documentazione, framework frontend interno, pagine applicative e configurazioni.

## Stack tecnologico

- Angular `20.2.x`
- Angular CLI `20.2.1`
- TypeScript `~5.9.2`
- SCSS
- Firebase Hosting predisposto per SPA Angular

## Struttura cartelle

```text
Documentation/
  BrandStrategy.md
  SpecificheFunzionali.md
  PDS.md
  AnalisiFunzionale.md
src/
  app/
    core/
    shared/
    pages/
    FrameworkFrontend/
      atoms/
      molecules/
      organisms/
      templates/
      pages/
  assets/
  environments/
public/
```

## Documentation

La cartella `Documentation/` raccoglie documenti iniziali e non definitivi:

- `BrandStrategy.md`: struttura per identita, mission, vision, target e proposta di valore.
- `SpecificheFunzionali.md`: predisposizione funzionale del website.
- `PDS.md`: base per design token e design system.
- `AnalisiFunzionale.md`: analisi della homepage/dashboard e delle sezioni future.

## FrameworkFrontend

`src/app/FrameworkFrontend/` e la futura component library interna del progetto, organizzata secondo Atomic Design:

- `atoms`: elementi UI minimi.
- `molecules`: composizioni leggere.
- `organisms`: sezioni e blocchi UI piu complessi.
- `templates`: layout riutilizzabili.
- `pages`: pagine strutturali collegate al framework.

## Angular

Il progetto usa routing Angular con caricamento lazy della pagina iniziale:

- entry point: `src/main.ts`
- configurazione app: `src/app/app.config.ts`
- routing: `src/app/app.routes.ts`
- homepage iniziale: `src/app/FrameworkFrontend/pages/dashboard-home/`

## Firebase Hosting

La predisposizione Firebase e presente nei file:

- `firebase.json`
- `.firebaserc`

La cartella di output documentata per il deploy e:

```text
dist/reseevo-website/browser
```

Comandi futuri:

```bash
firebase login
firebase init hosting
npm run build
firebase deploy --only hosting
```

Nota: `.firebaserc` contiene un project id placeholder. Sostituirlo solo quando il progetto Firebase reale sara stato creato.

## Comandi sviluppo

Installazione dipendenze:

```bash
npm install
```

Avvio locale:

```bash
npm start
```

Build produzione:

```bash
npm run build
```

Test:

```bash
npm test
```

## Prossimi step consigliati

- Validare brand strategy e contenuti.
- Definire PDS e design token.
- Estrarre header, hero, sezioni e footer in componenti riutilizzabili quando il design sara confermato.
- Definire struttura SEO e metadata.
- Collegare Firebase reale solo in fase di deploy.
- Valutare form contatti, analytics e consenso privacy in una fase successiva.
