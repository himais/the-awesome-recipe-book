import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output('onSelectTab') selectedTab = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  // onSelectTab(selected) {
  //   this.selectedTab.emit(selected);
  // }

}
