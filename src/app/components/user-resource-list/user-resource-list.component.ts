import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-resource-list',
  imports: [CommonModule, ButtonModule, TableModule],
  templateUrl: './user-resource-list.component.html',
  styleUrl: './user-resource-list.component.css'
})
export class UserResourceListComponent implements OnInit {

  users: any[] = [];
  resources: any[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
    this.userService.getResources().subscribe(data => {
      this.resources = data.data;
    });
  }
  viewUserDetails(id: number): void {
    this.router.navigate(['/user', id]);
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data.data;
    });
  }

  deleteUser(id: number): void {
    console.log(id);
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }
}
