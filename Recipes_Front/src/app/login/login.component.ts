import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/User';
import { UserService } from '../user.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Recipe } from 'src/models/Recipe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errMessage: string;
  userlogin: User;
  //routRegister:string="/login";

  constructor(public userServ: UserService, public rout: Router, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {

    this.matIconRegistry.addSvgIcon(
      "unicorn",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/unicorn_icon.svg")
    );
  }

  loginGet() {
    this.userServ.login(this.username, this.password).subscribe(
      p => {
        this.userlogin = p;
        sessionStorage.setItem("currentUser", JSON.stringify(p));
        Swal.fire("Wellcom "+this.username,"It's Nice To Meet You",'success')
        this.rout.navigate(['/all-recipes']);
      },
      err => {
        console.log(err);
        if (err.error.Message == "the password is not correct.") {
          Swal.fire("Error", "the password is not correct please enter again.", 'info');//Message: "the password is not correct."
          this.password="";
        }
        this.errMessage = "your password is not correct. did you forget the password?";
        if (err.error.Message == "the user is not found.") {
          Swal.fire("Error", "the user is not found. do you want to register", 'question');//Message: "the password is not correct."
          this.rout.navigate(['/register', this.username])
        }
        console.log(this.errMessage)
      });

  }


  ngOnInit(): void {
  }

}
