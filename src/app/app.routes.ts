import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Portfolio } from './portfolio/portfolio';
import { ProjectGrid } from './portfolio/project-grid';
import { Resume } from './resume/resume';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: About, title: 'Abby Kaemmerer | Software Engineer' },
  { path: 'about', redirectTo: '', pathMatch: 'full' },
  { path: 'portfolio', pathMatch: 'full', redirectTo: '' },
  {
    path: 'portfolio',
    component: Portfolio,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/' },
      {
        path: 'professional',
        component: ProjectGrid,
        title: 'Professional Work | Abby Kaemmerer',
        data: { collection: 'professional' },
      },
      {
        path: 'personal',
        component: ProjectGrid,
        title: 'Personal Projects | Abby Kaemmerer',
        data: { collection: 'personal' },
      },
    ],
  },
  { path: 'resume', component: Resume, title: 'Resume | Abby Kaemmerer' },
  { path: 'contact', component: Contact, title: 'Contact | Abby Kaemmerer' },
  { path: '**', redirectTo: '' },
];
