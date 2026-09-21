import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Portfolio } from './portfolio/portfolio';
import { ProjectGrid } from './portfolio/project-grid';
import { Resume } from './resume/resume';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: About },
  { path: 'about', redirectTo: '', pathMatch: 'full' },
  {
    path: 'portfolio',
    component: Portfolio,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'professional' },
      {
        path: 'professional',
        component: ProjectGrid,
        data: { collection: 'professional' },
      },
      {
        path: 'personal',
        component: ProjectGrid,
        data: { collection: 'personal' },
      },
    ],
  },
  { path: 'resume', component: Resume },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];
