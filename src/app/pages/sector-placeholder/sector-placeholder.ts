import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CtaButton } from '../../FrameworkFrontend/atoms/buttons/cta-button/cta-button';
import { SiteFooter } from '../../FrameworkFrontend/organisms/footer/site-footer/site-footer';
import { SiteHeader } from '../../FrameworkFrontend/organisms/header/site-header/site-header';

interface SectorContent {
  title: string;
  subtitle: string;
  focus: string[];
}

@Component({
  selector: 'app-sector-placeholder',
  imports: [SiteHeader, SiteFooter, CtaButton],
  templateUrl: './sector-placeholder.html',
  styleUrl: './sector-placeholder.scss'
})
export class SectorPlaceholder {
  private readonly route = inject(ActivatedRoute);

  protected readonly sectors: Record<string, SectorContent> = {
    padel: {
      title: 'ReSeevo per circoli di padel',
      subtitle: 'Pagina verticale predisposta per campi, lezioni, fasce orarie e prenotazioni ricorrenti.',
      focus: ['Campi e disponibilita', 'Lezioni e maestri', 'Prenotazioni rapide']
    },
    fitness: {
      title: 'ReSeevo per palestre e fitness',
      subtitle: 'Pagina verticale predisposta per corsi, personal trainer, ingressi e calendario operativo.',
      focus: ['Corsi e sale', 'Clienti e iscrizioni', 'Agenda trainer']
    },
    beauty: {
      title: 'ReSeevo per saloni di bellezza',
      subtitle: 'Pagina verticale predisposta per appuntamenti, operatori, servizi e clienti ricorrenti.',
      focus: ['Servizi beauty', 'Operatori', 'Clienti ricorrenti']
    },
    barber: {
      title: 'ReSeevo per barberie',
      subtitle: 'Pagina verticale predisposta per slot rapidi, agenda, servizi e fidelizzazione clienti.',
      focus: ['Slot rapidi', 'Servizi', 'Agenda giornaliera']
    },
    takeaway: {
      title: 'ReSeevo per take away',
      subtitle: 'Pagina verticale predisposta per ordini programmati, fasce ritiro e organizzazione operativa.',
      focus: ['Ordini programmati', 'Fasce ritiro', 'Organizzazione cucina']
    },
    sectors: {
      title: 'Settori supportati da ReSeevo',
      subtitle: 'Area predisposta per raccogliere tutte le verticali future della piattaforma.',
      focus: ['Nuovi verticali', 'Contenuti dedicati', 'CTA settore-specifiche']
    }
  };

  protected readonly content = computed(() => {
    const key = this.route.snapshot.routeConfig?.path ?? 'sectors';
    return this.sectors[key] ?? this.sectors['sectors'];
  });
}
