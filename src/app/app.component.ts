import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CommunityBuddy';
  
  active = 0;

  onTabChange(e: any) {
    console.log(e)
  }
}
