import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: '../../shared/templates/header.html',
  styleUrls: ['../../shared/styles/header.css']
})



export class AppHeader {
  title = 'app';
  public links = [
    {
      'title':'Institucional', 'link':'' 
    },
    {
      'title':'Produto', 'link':''
    },
    {
      'title':'Seja um(a) consultor(a)', 'link':''
    },
    {
      'title':'Lojas', 'link':''
    },
    {
      'title':'Eventos', 'link':''
    },
    {
      'title':'Área Consultor(a)', 'link':'', 'icon':'fas fa-lock'
    }
  ]

  public alert = true;

  constructor() { }

  ngOnInit() {
  }
  
}
