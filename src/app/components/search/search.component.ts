import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * @title - The user enters a  String value into to the 'Login User' field and clicks the 'Submit' button.
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  users: any;
  loginUserName='';
  constructor(private _router: Router) { }

  searchUser() {
   var navigationExtras = {
    queryParams: { loginUserName: this.loginUserName },
   };
   //Once user hit search button redirect it to results component
    this._router.navigate(['/results'],navigationExtras);
  }
}
