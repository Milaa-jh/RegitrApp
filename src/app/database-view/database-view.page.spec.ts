import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatabaseViewPage } from './database-view.page';

describe('DatabaseViewPage', () => {
  let component: DatabaseViewPage;
  let fixture: ComponentFixture<DatabaseViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
