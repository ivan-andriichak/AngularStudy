import {Component, Input} from '@angular/core';
import {IUserPost} from "../../interfaces/user.interface";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-user-posts',
    standalone: true,
    imports: [
        NgIf
    ],
    templateUrl: './user-posts.component.html',
    styleUrl: './user-posts.component.css'
})
export class UserPostsComponent {
    @Input()
    post: IUserPost
}





