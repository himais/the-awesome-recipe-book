import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the-awesome-recipe-book';
  selectedTab: String = 'recipe';

  onClickMenu(selected) {
    this.selectedTab = selected;
  }
}
