import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('offers a skip link to the main content', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    const skip = root.querySelector('.skip-link');

    expect(skip?.textContent).toContain('Skip to main content');
    expect(skip?.getAttribute('href')).toBe('#main');
    expect(root.querySelector('main')?.id).toBe('main');
  });

  it('names the contact page in the document title', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    fixture.detectChanges();

    await router.navigateByUrl('/contact');
    await fixture.whenStable();

    expect(document.title).toBe('Contact | Abby Kaemmerer');
  });
});
