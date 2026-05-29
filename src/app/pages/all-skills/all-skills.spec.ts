import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSkills } from './all-skills';

describe('AllSkills', () => {
  let component: AllSkills;
  let fixture: ComponentFixture<AllSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSkills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
