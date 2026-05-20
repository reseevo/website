import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
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
  private readonly document = inject(DOCUMENT);

  protected isMenuOpen = false;

  protected readonly navItems = [
    { label: 'Home', href: '#home' },
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

  protected navigateToSection(event: Event, href: string): void {
    event.preventDefault();
    this.closeMenu();

    const windowRef = this.document.defaultView;
    const target = this.document.querySelector<HTMLElement>(href);
    const header = this.document.querySelector<HTMLElement>('.site-header');

    if (!windowRef) {
      return;
    }

    if (!target) {
      windowRef.location.assign(`/${href}`);
      return;
    }

    const offset = header?.offsetHeight ?? 74;
    const top = target.getBoundingClientRect().top + windowRef.scrollY - offset + 1;
    windowRef.history.pushState(null, '', href);
    windowRef.scrollTo({ top, behavior: 'smooth' });
  }
}
