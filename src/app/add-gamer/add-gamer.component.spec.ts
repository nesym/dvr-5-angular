import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGamerComponent } from './add-gamer.component';

describe('AddGamerComponent', () => {
  let component: AddGamerComponent;
  let fixture: ComponentFixture<AddGamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGamerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddGamerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
