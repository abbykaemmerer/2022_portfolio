import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { routes } from '../app.routes';
import { Portfolio } from './portfolio';

describe('Portfolio', () => {
  let component: Portfolio;
  let fixture: ComponentFixture<Portfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portfolio],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(Portfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate between professional, personal, and resume views', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[href="/portfolio/professional"]')).toBeTruthy();
    expect(compiled.querySelector('a[href="/portfolio/personal"]')).toBeTruthy();
    expect(compiled.querySelector('a[href="/resume"]')).toBeTruthy();
    expect(
      compiled.querySelector('a[href="/assets/AbbyKaemmerer_Resume_2026.pdf"]'),
    ).toBeFalsy();
  });
});
