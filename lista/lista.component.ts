import { Component } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//classe para criação dos objetos
import {listaItem} from './lista';

@Component({
  selector: 'app-lista',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})

export class ListaComponent {

    produto: string = '';
    lista: listaItem[] = [];

    adicionarItem(){
      if (!this.verificar()) {
        return
      }
      //instanciando um objeto do tipo listaItens
      let itemLista = new listaItem;
      itemLista.nome = this.produto;
      itemLista.id = this.lista.length + 1;

      this.lista.push(itemLista);
      this.produto = '';

      console.table(this.lista);

    }

    limparItens(){
      this.lista = [];
    }

    verificar(){
      if(this.produto === ''){
        console.log("É necerrário digitar para adicionar algum item")
        return false;
      }
      return true;
    }
}
