import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  imagemCapa:string = "";
  @Input()
  conteudoTitulo:string = "";
  @Input()
  conteudoDescricao:string = "";
  private id:string | null = "0";

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.id =  value.get("id")
    )

    this.setValueToComponent(this.id)
  }

  setValueToComponent(id:string | null){
    const resultado = dataFake.filter(artigo => artigo.id == id)[0]
    this.conteudoTitulo = resultado.titulo;
    this.conteudoDescricao = resultado.descricao;
    this.imagemCapa = resultado.imagemCapa
  }
}
