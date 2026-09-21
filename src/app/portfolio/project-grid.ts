import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { personalProjects, professionalProjects } from './projects';

@Component({
  selector: 'app-project-grid',
  styleUrl: './project-grid.css',
  templateUrl: './project-grid.html',
})
export class ProjectGrid {
  private readonly route = inject(ActivatedRoute);

  readonly view = toSignal(
    this.route.data.pipe(
      map((data) => (data['collection'] === 'personal' ? 'personal' : 'professional')),
    ),
    { initialValue: 'professional' as const },
  );

  readonly projects = toSignal(
    this.route.data.pipe(
      map((data) =>
        data['collection'] === 'personal' ? personalProjects : professionalProjects,
      ),
    ),
    { initialValue: professionalProjects },
  );
}
