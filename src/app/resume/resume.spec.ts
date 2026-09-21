import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Resume } from './resume';

describe('Resume', () => {
  let component: Resume;
  let fixture: ComponentFixture<Resume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resume],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Resume);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should link to the downloadable PDF from the resume page', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('a[href="/assets/AbbyKaemmerer_Resume_2026.pdf"]'),
    ).toBeTruthy();
    expect(compiled.querySelector('a[href="/resume"]')).toBeTruthy();
  });
});
