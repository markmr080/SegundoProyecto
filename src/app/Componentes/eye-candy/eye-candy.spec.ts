import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeCandyme } from './eye-candy';

describe('EyeCandyme', () => {
  let component: EyeCandyme;
  let fixture: ComponentFixture<EyeCandyme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EyeCandyme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyeCandyme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
