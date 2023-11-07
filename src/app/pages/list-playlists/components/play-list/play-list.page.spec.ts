import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayListPage } from './play-list.page';

describe('PlayListPage', () => {
  let component: PlayListPage;
  let fixture: ComponentFixture<PlayListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlayListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
