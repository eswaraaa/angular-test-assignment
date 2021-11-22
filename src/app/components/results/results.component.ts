import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { UserService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

export interface UserData {
  login: string;
  avatarURL: string;
  type: string;
}

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {
  displayedColumns: string[] = ['avatarURL','login','type'];
  dataSource: MatTableDataSource<UserData>;
  users: any;
  loginUserName:any;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private userService: UserService,private activatedRoute: ActivatedRoute) {
        // set request param login user value to loginUserName varilable
    this.activatedRoute.queryParams.subscribe(params => {
      this.loginUserName = params['loginUserName'];
      console.log("loginUserName ",this.loginUserName);
    });   
  }

  ngOnInit() {
    this.retrieveUsers();
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }, 2000);
  }

  retrieveUsers() {
    //fetch the data from API by calling userService findByUser method
    this.userService.findByUser(this.loginUserName)
      .subscribe(
        data => {
          this.users = data;
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(this.users.items);
        },
        error => {
          console.log(error);
        });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


