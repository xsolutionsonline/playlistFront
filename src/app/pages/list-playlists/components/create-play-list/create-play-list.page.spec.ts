import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePlayListPage } from './create-play-list.page';

describe('CreatePlayListPage', () => {
  let component: CreatePlayListPage;
  let fixture: ComponentFixture<CreatePlayListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreatePlayListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
