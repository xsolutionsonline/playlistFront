import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ListPlaylistsPage } from './list-playlists.page';

describe('ListPlaylistsPage', () => {
  let component: ListPlaylistsPage;
  let fixture: ComponentFixture<ListPlaylistsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListPlaylistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
