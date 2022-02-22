import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public pages: any[] = [
    {title: 'Dashboard', url: '/dashboard', icon: 'home'},
    {title: 'Profile', url: '/profile', icon: 'person'},
    {title: 'Opportunities', url: '/about', icon: 'information-circle'},
    // {title: 'Leads', url: '/privacy', icon: 'people'},
    {title: 'Sign Out', url: '', icon: 'log-out', route: true},
  ];

  constructor() {}

  signOut() {
    console.log('signout');
  }
}
