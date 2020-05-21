import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public names: string[] = [];
  public newName: string;

  public saveName() {
    this.names.push(this.newName);
    this.newName = '';
  }
}
