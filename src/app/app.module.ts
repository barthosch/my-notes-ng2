import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotesListsComponent } from './components/notes-lists/notes-lists.component';
import { NotesListsItemComponent } from './components/notes-lists-item/notes-lists-item.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NotesListControlsComponent } from './components/notes-list-controls/notes-list-controls.component';
import { NotesListItemsComponent } from './components/notes-list-items/notes-list-items.component';
import { NotesListItemComponent } from './components/notes-list-item/notes-list-item.component';
import { NotesListItemDetailComponent } from './components/notes-list-item-detail/notes-list-item-detail.component';
import { NotesListItemDetailControlsComponent } from './components/notes-list-item-detail-controls/notes-list-item-detail-controls.component';
import { NotesListItemAddComponent } from './components/notes-list-item-add/notes-list-item-add.component';
import { NotesListAddComponent } from './components/notes-list-add/notes-list-add.component';
import { NotesListDetailComponent } from './components/notes-list-detail/notes-list-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesListsComponent,
    NotesListsItemComponent,
    NotesListComponent,
    NotesListControlsComponent,
    NotesListItemsComponent,
    NotesListItemComponent,
    NotesListItemDetailComponent,
    NotesListItemDetailControlsComponent,
    NotesListItemAddComponent,
    NotesListAddComponent,
    NotesListDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
