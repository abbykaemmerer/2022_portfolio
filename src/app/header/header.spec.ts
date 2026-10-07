import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { routes } from '../app.routes';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('marks Home as the current page', async () => {
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/');
    fixture.detectChanges();

    const home = [...fixture.nativeElement.querySelectorAll('a')].find(
      (link: HTMLAnchorElement) => link.textContent?.trim() === 'Home',
    );

    expect(home?.getAttribute('aria-current')).toBe('page');
    expect(home?.classList.contains('is-active')).toBe(true);
  });
});
