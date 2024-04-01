import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from "./components/users/users.component";

@Component({
  selector: 'app-root', // Селектор елементу, за яким буде вибиратися компонент
  standalone: true, // Позначає, що компонент є автономним і не залежить від інших модулів
  imports: [RouterOutlet, UsersComponent], // Імпорт модулів, але це некоректно, imports призначений для модулів, а не компонентів
  templateUrl: './app.component.html', // Шлях до файлу шаблону компонента
  styleUrl: './app.component.css' // Шлях до файлу стилів компонента
})
export class AppComponent {
  title = 'AngularStudy'; // Властивість, яка використовується в шаблоні для відображення заголовку додатку
}
