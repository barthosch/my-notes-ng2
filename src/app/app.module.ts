import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListsMenuComponent } from './components/lists-menu/lists-menu.component';
import { ListsMenuItemComponent } from './components/lists-menu-item/lists-menu-item.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NotesListControlsComponent } from './components/notes-list-controls/notes-list-controls.component';
import { NotesListItemsComponent } from './components/notes-list-items/notes-list-items.component';
import { NotesListItemComponent } from './components/notes-list-item/notes-list-item.component';
import { NotesListItemDetailComponent } from './components/notes-list-item-detail/notes-list-item-detail.component';
import { NotesListItemDetailControlsComponent } from './components/notes-list-item-detail-controls/notes-list-item-detail-controls.component';
import { NotesListItemAddComponent } from './components/notes-list-item-add/notes-list-item-add.component';
import { NotesListAddComponent } from './components/notes-list-add/notes-list-add.component';
import { NotesListDetailComponent } from './components/notes-list-detail/notes-list-detail.component';

import { NotesService } from './services/notes.service';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { AddNoteModalComponent } from './components/add-note-modal/add-note-modal.component';
import { EditNoteModalComponent } from './components/edit-note-modal/edit-note-modal.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';

const appRoutes: Routes = [
  { path: 'list/:id', component: MainViewComponent },
  { path: 'list/:id/:action/:noteId', component: MainViewComponent },


  { path: 'lists', component: MainViewComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListsMenuComponent,
    ListsMenuItemComponent,
    NotesListComponent,
    NotesListControlsComponent,
    NotesListItemsComponent,
    NotesListItemComponent,
    NotesListItemDetailComponent,
    NotesListItemDetailControlsComponent,
    NotesListItemAddComponent,
    NotesListAddComponent,
    NotesListDetailComponent,
    PageNotFoundComponent,
    MainViewComponent,
    AddNoteModalComponent,
    EditNoteModalComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
