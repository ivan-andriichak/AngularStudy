// Імпорт необхідних модулів з Angular Core та інтерфейсів користувача
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";

@Component({
    selector: 'app-user', // Селектор компонента
    standalone: true, // Позначає, що компонент є самодостатнім і не потребує додаткових модулів
    imports: [], // Масив імпортів, який зараз не використовується
    templateUrl: './user.component.html', // Шлях до HTML-шаблону компонента
    styleUrl: './user.component.css' // Шлях до CSS-стилів компонента
})
export class UserComponent {
    @Input()
    user: IUser; // Вхідна властивість, приймає об'єкт користувача від батьківського компонента
    @Output() lift = new EventEmitter<IUser>(); // Вихідний еміттер подій для передачі даних батьківському компоненту
    @Output() showPosts = new EventEmitter<number>(); // Вихідний еміттер подій для відображення постів користувача

    // Метод для відправлення даних батьківському компоненту про вибраного користувача
    getDetails(): void {
        console.log(this.user)
        this.lift.emit(this.user);
    }

    // Метод для відправлення даних батьківському компоненту про пости користувача
    getPosts(): void {
        this.showPosts.emit(this.user.id);
    }
}


