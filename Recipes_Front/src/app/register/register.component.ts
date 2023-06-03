import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/User';
import { UserService } from '../user.service';
import swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: User = new User("", "", "", "", "");
  constructor(public userServ: UserService, public active: ActivatedRoute,public rout: Router) {
    this.active.params.subscribe(
      (param) => {
        this.newUser.Name = param.username;
      }
    )
  }

  register() {
    //ניתוב לדף המתכונים
    this.userServ.register(this.newUser).subscribe(
      d => { 
        console.log(d);
        swal.fire("saccess","פרטיך נשמרו במערכת.",'success'); 
        this.rout.navigate(['/all-recipes']);
        sessionStorage.setItem("currentUser",JSON.stringify(d));
       },
      e => {
        console.log(e);        
        swal.fire("conflict","the user is already exist.",'warning');       
      }
    );
  }

  registerForm:FormGroup=new FormGroup(
    {
      "id":new FormControl(null,Validators.compose([Validators.required,Validators.pattern("[0-9]{9}")])),
      "name":new FormControl(null,Validators.required),
      "adress":new FormControl(null,Validators.compose([Validators.required])),
      "mail":new FormControl(null,Validators.email),
      "password":new FormControl(null,Validators.compose([Validators.required,Validators.minLength(8)]))
    }
  )
  ngOnInit(): void {
  }

}
