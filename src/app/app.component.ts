import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  selectedHeader = 'recipe';

  onNavigate(header: string) {
    this.selectedHeader = header
  }
}
