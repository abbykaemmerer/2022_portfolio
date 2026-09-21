import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Portfolio } from './portfolio/portfolio';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: About },
  { path: 'about', redirectTo: '', pathMatch: 'full' },
  { path: 'portfolio', component: Portfolio },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];
