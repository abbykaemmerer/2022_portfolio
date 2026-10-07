import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('leaves Send enabled so empty fields can be reported', () => {
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    const button = root.querySelector('button[type="submit"]') as HTMLButtonElement;

    expect(button.disabled).toBe(false);
    expect(root.querySelector('form')?.getAttribute('aria-labelledby')).toBe('contact-heading');
    expect(root.textContent).toContain('All fields are required');
  });
});
