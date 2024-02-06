import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../../../../core/services/users.service';
import { User } from '../../modelos';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User | undefined;

  constructor(private route: ActivatedRoute, private usersService: UsersService) {}

  ngOnInit() {
    const userId = this.route.snapshot.params['id'];
    this.usersService.getUserById(userId).subscribe({
      next: (foundUser) => {
        this.user = foundUser;
      }
    });
  }
}