import { Component } from '@angular/core';
import { BrandLogo } from '../../../atoms/icons/brand-logo/brand-logo';

@Component({
  selector: 'app-site-footer',
  imports: [BrandLogo],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss'
})
export class SiteFooter {
  protected readonly columns = [
    { title: 'Prodotto', links: ['Funzionalita', 'Settori', 'Tutorial', 'Sicurezza'] },
    { title: 'Azienda', links: ['Chi siamo', 'Partner', 'Contatti'] },
    { title: 'Risorse', links: ['Guide', 'FAQ', 'Blog'] },
    { title: 'Legale', links: ['Privacy Policy', 'Termini di servizio', 'Cookie Policy'] }
  ];
}
