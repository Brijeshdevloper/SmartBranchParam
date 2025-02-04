import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecryptedurlComponent } from './decryptedurl.component';

describe('DecryptedurlComponent', () => {
  let component: DecryptedurlComponent;
  let fixture: ComponentFixture<DecryptedurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecryptedurlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecryptedurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
