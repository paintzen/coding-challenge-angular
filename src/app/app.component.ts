import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Locations';
  locations = [
    {
      address: '8th ave.',
    },
    {
      address: '88th st.',
    },
    {
      address: 'Atlantic ave.',
    },
    {
      address: 'Broadway',
    },
    {
      address: 'Clark st.',
    },
    {
      address: 'Correl pl.',
    },
    {
      address: 'Ocean ave.',
    },
    {
      address: 'Ocean pkwy.',
    },
    {
      address: 'w38th st.',
    },
  ];
}
