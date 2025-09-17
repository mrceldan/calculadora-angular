import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal',
  imports: [FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  //atributos
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  //metodo
  calcularResultadoSoma(){
    if (this.numero1 < 0 || this.numero1 > 10 || this.numero2 < 0 || this.numero2 > 10){
      alert("Precisa ser entre 0 e 10");
    }

    if(this.numero1 < 0){
      this.numero1 = 0;
    }

    if(this.numero2 < 0 || this.numero2 > 10){
      this.numero2 = 0;
    }

    this.resultado = this.numero1 + this.numero2;
    console.error(this.resultado);
  }

  calcularResultadoSub(){
    if (this.numero1 < 0 || this.numero1 > 10 || this.numero2 < 0 || this.numero2 > 10){
      alert("Precisa ser entre 0 e 10");
    }

    if(this.numero1 < 0){
      this.numero1 = 0;
    }

    if(this.numero2 < 0 || this.numero2 > 10){
      this.numero2 = 0;
    }

    this.resultado = this.numero1 - this.numero2;
    console.error(this.resultado);
  }

  calcularResultadoMulti(){
    if (this.numero1 < 0 || this.numero1 > 10 || this.numero2 < 0 || this.numero2 > 10){
      alert("Precisa ser entre 0 e 10");
    }

    if(this.numero1 < 0){
      this.numero1 = 0;
    }

    if(this.numero2 < 0 || this.numero2 > 10){
      this.numero2 = 0;
    }

    this.resultado = this.numero1 * this.numero2;
    console.error(this.resultado);
  }

  calcularResultadoDiv(){
    if (this.numero1 < 0 || this.numero1 > 10 || this.numero2 < 0 || this.numero2 > 10){
      alert("Precisa ser entre 0 e 10");
    }

    if(this.numero1 < 0){
      this.numero1 = 0;
    }

    if(this.numero2 < 0 || this.numero2 > 10){
      this.numero2 = 0;
    }

    this.resultado = this.numero1 / this.numero2;
    console.error(this.resultado);
  }
  
}

