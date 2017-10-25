/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NotesListComponent } from './notes-list.component';
import { NotesListControlsComponent } from "../notes-list-controls/notes-list-controls.component";
import { NotesListItemsComponent } from "../notes-list-items/notes-list-items.component";
import { NotesListItemComponent } from "../notes-list-item/notes-list-item.component";

describe('NotesListComponent', () => {
  let component: NotesListComponent;
  let fixture: ComponentFixture<NotesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesListComponent, NotesListControlsComponent, NotesListItemsComponent, NotesListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
