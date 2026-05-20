# PDS - Product Design System

Documento guida per la coerenza visuale, UX e componentistica del website ReSeevo.

> Stato: direzione di design system. Non definisce ancora token finali, UI definitiva o librerie obbligatorie.

## 1. Visual Direction

ReSeevo deve avere una direzione visuale SaaS premium, moderna e concreta.

Principi guida:

- equilibrio tra dark theme premium e sezioni light ad alta leggibilita;
- look tecnologico, pulito e professionale;
- forte focus su dashboard, preview prodotto e contenuti visuali;
- sezioni ordinate, con gerarchie chiare;
- uso misurato di gradienti, profondita e glow;
- interfaccia accessibile anche a utenti non tecnici.

Il visual system deve comunicare innovazione senza diventare freddo o complesso. Il prodotto deve apparire curato, affidabile e semplice da usare.

## 2. Typography Direction

La tipografia deve sostenere una percezione moderna e SaaS.

Direzione consigliata:

- font sans-serif moderno, leggibile e web-friendly;
- headline forti, compatte e facili da leggere;
- body copy pulito, con righe non troppo lunghe;
- gerarchie chiare tra hero, sezioni, card e microcopy;
- numeri e metriche leggibili nelle dashboard preview;
- nessun uso decorativo della tipografia.

Font realistici da valutare in fase UI:

- Inter;
- Manrope;
- Satoshi, se disponibile tramite fonte legittima;
- system font stack come fallback.

La scelta finale dovra considerare performance, licenza, leggibilita e resa cross-browser.

## 3. Color Direction

La palette deve sostenere una percezione premium e tecnologica.

Direzione cromatica:

- base dark per hero, sezioni strategiche e footer;
- superfici light per vantaggi, tutorial e contenuti ad alta leggibilita;
- blu/violetto come area CTA e accenti tecnologici;
- gradienti premium usati con moderazione;
- neutri freddi per testi, bordi e superfici;
- contrasto elevato per accessibilita.

Indicazioni non definitive:

- Primary action: blu o violetto ad alta energia.
- Dark surface: navy/near black profondo.
- Light surface: bianco o grigio freddo molto chiaro.
- Text on dark: bianco e grigi chiari.
- Text on light: navy scuro e grigi tecnici.
- Accent: tonalita coerenti con prodotto, dashboard e settori.

I colori finali dovranno essere definiti come design token e verificati per contrasto WCAG.

## 4. Components Direction

### Buttons

I bottoni devono essere chiari, solidi e orientati alla conversione.

Varianti future:

- primary CTA;
- secondary outline;
- ghost/link;
- icon button per azioni leggere.

Regole:

- testo breve;
- stati hover/focus evidenti;
- dimensioni touch-friendly;
- nessun effetto eccessivo;
- gerarchia coerente tra CTA primaria e secondaria.

### Cards

Le card devono essere usate per vantaggi, settori, tutorial e contenuti ripetuti.

Regole:

- border radius controllato;
- ombre leggere o bordo sottile;
- contenuto scansionabile;
- nessun annidamento di card;
- hover morbido solo se la card e interattiva.

### Navbar

La navbar deve essere essenziale e professionale.

Regole:

- logo sempre riconoscibile;
- menu chiaro;
- CTA visibile;
- comportamento responsive ordinato;
- eventuale dropdown settori semplice e leggibile.

### Hero

La hero deve combinare messaggio strategico e preview prodotto.

Regole:

- headline forte;
- sottotitolo breve;
- CTA primaria e secondaria;
- dashboard preview dominante;
- trust indicators solo se realistici o validati;
- resa mobile semplificata.

### Dashboard Preview

La dashboard preview e un elemento chiave del brand.

Regole:

- layout credibile;
- dati placeholder non sensibili;
- superfici pulite;
- gerarchia visiva ordinata;
- possibile affiancamento mobile preview;
- evitare dettagli troppo piccoli su mobile.

### Tutorial Cards

Le card tutorial devono sembrare contenuti pratici e accessibili.

Regole:

- thumbnail leggibile;
- play icon chiara;
- durata visibile;
- titolo breve;
- CTA verso archivio tutorial;
- layout responsive senza perdita di leggibilita.

### Sector Cards

Le card settore devono combinare riconoscibilita e coerenza.

Regole:

- immagine dedicata;
- titolo settore;
- breve descrizione;
- marker visuale o icona;
- link di approfondimento;
- hover moderno e sobrio.

### Footer

Il footer deve chiudere il website con percezione professionale SaaS.

Regole:

- logo e descrizione breve;
- colonne link ordinate;
- legal;
- social/contatti futuri;
- contrasto elevato su dark surface;
- struttura compatta su mobile.

## 5. UX Consistency Rules

### Spacing

- Usare una scala coerente e progressiva.
- Mantenere aria sufficiente tra sezioni premium.
- Ridurre spacing su mobile senza comprimere contenuti.
- Evitare layout troppo densi nella homepage.

### Border Radius

- Radius medio per card, bottoni e preview.
- Evitare arrotondamenti eccessivi che rendano l'interfaccia giocosa.
- Mantenere coerenza tra componenti simili.

### Shadows and Depth

- Ombre leggere nelle sezioni light.
- Glow e profondita solo in aree premium dark o dashboard preview.
- Evitare effetti pesanti che riducono leggibilita.

### Hover Effects

- Hover morbidi e rapidi.
- Feedback chiaro su card cliccabili, link e CTA.
- Nessun movimento che sposti layout o contenuti.

### Animation Philosophy

- Animazioni leggere, funzionali e non invasive.
- Durate brevi.
- Preferire transizioni su opacity, transform e colore.
- Evitare animazioni continue se non strettamente utili.

### Responsive Consistency

- Mobile-first.
- Card stacked su schermi piccoli.
- CTA ben distanziate e touch-friendly.
- Dashboard preview adattata e non illeggibile.
- Navbar mobile semplice.
- Sezioni sempre riconoscibili anche quando cambiano layout.

## 6. Design Tokens To Define

Token futuri da formalizzare:

- colors;
- typography;
- spacing;
- radius;
- shadows;
- z-index;
- breakpoints;
- motion;
- component states.

I token dovranno essere documentati prima di stabilizzare la component library Angular.

## 7. Naming And Component Governance

Regole iniziali:

- componenti Angular standalone;
- naming descrittivo;
- separazione tra componenti UI e pagine;
- componenti riutilizzabili nel `FrameworkFrontend`;
- nessuna logica business nei componenti puramente visuali;
- documentazione minima per varianti e stati.

Il PDS dovra guidare la crescita del design system senza bloccare l'evoluzione del prodotto nelle prime fasi.
