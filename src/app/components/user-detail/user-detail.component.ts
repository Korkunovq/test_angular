import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit{
  user: any;
  editing: boolean = false;
  editedUser: any = {};

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));

    this.userService.getUserById(userId).subscribe(data => {
      this.user = data.data;
      this.editedUser = { ...this.user };
    });
  }

  toggleEdit(): void {
    this.editing = !this.editing;
  }

  saveUser(): void {
    const userId = +this.route.snapshot.paramMap.get('id');
    this.userService.updateUser(userId, this.editedUser).subscribe(data => {
      this.user = data;
      this.editing = false;
    });
  }
}
