import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; // Імпорт сервісу HttpClient для виконання HTTP-запитів
import { Observable } from "rxjs"; // Імпорт Observable з бібліотеки RxJS для роботи з асинхронними потоками
import { IUser, IUserPost } from "../interfaces/user.interface"; // Імпорт інтерфейсів IUser та IUserPosts
import { urls } from "../constants/urls"; // Імпорт URL-адрес змінних для HTTP-запитів

@Injectable({
    providedIn: 'root' // Позначає, що сервіс буде доступний для всього додатку та буде автоматично створений при запуску додатку
})
export class UserService {

    constructor(private httpClient: HttpClient) {
    }

    // Метод для отримання всіх користувачів
    getAll(): Observable<IUser[]> {
        return this.httpClient.get<IUser[]>(urls.users.base); // Виконання HTTP-запиту GET для отримання користувачів за вказаним URL
    }

    // Метод для отримання всіх постів користувачів
    getPosts(id: number): Observable<IUserPost> {
        return this.httpClient.get<IUserPost>(urls.posts(id)); // Виконання HTTP-запиту GET для отримання постів за вказаним URL
    }
}
