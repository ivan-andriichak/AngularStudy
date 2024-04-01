import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service"; // Імпорт сервісу UserService для отримання даних користувачів
import { IUser, IUserPost } from "../../interfaces/user.interface"; // Імпорт інтерфейсів IUser та IUserPosts для типізації даних
import { UserComponent } from "../user/user.component"; // Імпорт компоненту UserComponent для відображення окремого користувача
import { UserDetailsComponent } from "../user-details/user-details.component"; // Імпорт компоненту UserDetailsComponent для відображення деталей користувача
import { UserPostsComponent } from "../user-posts/user-posts.component"; // Імпорт компоненту UserPostsComponent для відображення постів користувача
import { NgFor, NgIf } from "@angular/common"; // Імпорт директив NgFor та NgIf для відображення списку та перевірки умов

@Component({
    selector: 'app-users', // Селектор компоненту
    standalone: true, // Позначка, що компонент є автономним і не залежить від інших компонентів
    imports: [
        UserComponent, // Імпорт компоненту UserComponent
        NgFor, // Імпорт директиви NgFor
        UserDetailsComponent, // Імпорт компоненту UserDetailsComponent
        NgIf, // Імпорт директиви NgIf
        UserPostsComponent // Імпорт компоненту UserPostsComponent
    ],
    templateUrl: './users.component.html', // Шлях до HTML-шаблону компоненту
    styleUrl: './users.component.css' // Шлях до CSS-стилів компоненту
})
export class UsersComponent implements OnInit {
    users: IUser[]; // Масив користувачів
    post: IUserPost; // Масив постів користувачів
    usersDetails: IUser; // Деталі конкретного користувача

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        // Підписка на Observable для отримання всіх користувачів
        this.userService.getAll().subscribe(value => this.users = value);
    }

    // Метод для отримання події вибору користувача
    getUserEvent(user: IUser) {
        this.usersDetails = user; // Присвоєння обраних деталей користувача
    }

    // Метод для отримання події вибору постів користувача
    getUserEventPosts(id: number) {
        this.userService.getPosts(id).subscribe(value => this.post = value);
    }
}
