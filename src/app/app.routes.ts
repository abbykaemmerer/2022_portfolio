import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Portfolio } from './portfolio/portfolio';

export const routes: Routes = [
  { path: '', component: About },
  { path: 'about', component: About },
  { path: 'portfolio', component: Portfolio },
  { path: 'contact', component: Contact },
];
