import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: '',
    autoria: '',
    modelo: ','
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert("Novo pensamento criado");
    this.pensamento.autoria = '';
    this.pensamento.conteudo = '';
  }

  cancelarPensamento(){
    alert("Ação cancelada!");
    event?.preventDefault();
    this.pensamento.autoria = '';
    this.pensamento.conteudo = '';
  }

}
