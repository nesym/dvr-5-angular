import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateGamerComponent } from './update-gamer.component';

describe('UpdateGamerComponent', () => {
  let component: UpdateGamerComponent;
  let fixture: ComponentFixture<UpdateGamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateGamerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateGamerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
