import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecetaListComponent } from './recetas/receta-list/receta-list.component';
import { ListasPersonalizadasComponent } from './recetas/listas-personalizadas/listas-personalizadas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecetaListComponent, ListasPersonalizadasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recetas';
}
