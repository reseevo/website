import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaButton } from '../../../atoms/buttons/cta-button/cta-button';
import { BrandLogo } from '../../../atoms/icons/brand-logo/brand-logo';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, CtaButton, BrandLogo],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss'
})
export class SiteHeader {
  protected isMenuOpen = false;

  protected readonly navItems = [
    { label: 'Home', href: '/' },
    { label: 'Funzionalita', href: '#features' },
    { label: 'Settori', href: '#sectors' },
    { label: 'Tutorial', href: '#tutorial' },
    { label: 'Contatti', href: '#contact' }
  ];

  protected toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  protected closeMenu(): void {
    this.isMenuOpen = false;
  }
}
