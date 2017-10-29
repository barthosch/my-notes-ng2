import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lists-menu-item',
  templateUrl: './lists-menu-item.component.html',
  styleUrls: ['./lists-menu-item.component.css']
})
export class ListsMenuItemComponent implements OnInit {
  @Input('notesList') notesList: any;
  @Input('active') active: boolean;
  constructor() { }

  ngOnInit() {
  }

}
