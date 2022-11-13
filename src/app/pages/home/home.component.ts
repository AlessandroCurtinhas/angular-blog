import { Component, OnInit } from '@angular/core';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.responsive.component.css']
})
export class HomeComponent implements OnInit {

  listaConteudo:any [] = [];

  constructor() { }

  ngOnInit(): void {
    dataFake.forEach(element => {
      this.listaConteudo.push(element)
    });
  }
}
