import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescriptoPage } from './descripto.page';

describe('DescriptoPage', () => {
  let component: DescriptoPage;
  let fixture: ComponentFixture<DescriptoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
