import { Component } from '@angular/core';
import { SiteFooter } from '../../FrameworkFrontend/organisms/footer/site-footer/site-footer';
import { SiteHeader } from '../../FrameworkFrontend/organisms/header/site-header/site-header';
import { HeroSection } from '../../FrameworkFrontend/organisms/hero/hero-section/hero-section';
import { FeaturesSection } from '../../FrameworkFrontend/organisms/sections/features-section/features-section';
import { FinalCtaSection } from '../../FrameworkFrontend/organisms/sections/final-cta-section/final-cta-section';
import { SectorsSection } from '../../FrameworkFrontend/organisms/sections/sectors-section/sectors-section';
import { TutorialsSection } from '../../FrameworkFrontend/organisms/sections/tutorials-section/tutorials-section';

@Component({
  selector: 'app-dashboard-home',
  imports: [
    SiteHeader,
    HeroSection,
    FeaturesSection,
    SectorsSection,
    TutorialsSection,
    FinalCtaSection,
    SiteFooter
  ],
  templateUrl: './dashboard-home.html',
  styleUrl: './dashboard-home.scss'
})
export class DashboardHome {}
