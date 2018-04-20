import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: '../../shared/templates/header.html',
  styleUrls: ['../../shared/styles/header.css']
})
export class AppHeader {
  public links = [
    {
      'title':'About Us', 'link':'' 
    },
    {
      'title':'Product', 'link':''
    },
    {
      'title':'Be a Consultant', 'link':''
    },
    {
      'title':'Members Area', 'link':'', 'icon':'fas fa-lock'
    }
  ]

  public alert = false;

  title = 'My App';
}
