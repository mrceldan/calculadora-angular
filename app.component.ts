import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListaComponent } from './lista/lista.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrincipalComponent, HeaderComponent, FooterComponent, ListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';
}
