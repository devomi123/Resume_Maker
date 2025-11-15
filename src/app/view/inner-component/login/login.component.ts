import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { CommonService } from '../../../core/services/common.service';
import { catchError, map } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StorageService } from '../../../core/services/sessionStorage.service';
import { ToastrAlertService } from '../../../core/services/toaster.service';

// import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-login',
  imports: [PasswordModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  value = '';
  isHeader = false;
  loginForm: any;
  constructor(private route: Router, private fb: FormBuilder, private http: HttpClient, private common: CommonService,
    private sessionstorageservice:StorageService , private toaster:ToastrAlertService) { }
  ngOnInit() {
    this.createLoginForm();
    this.getUser();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  login() {

  }

  signUp() {
    this.route.navigate(['innerpages/my-account'])
  }


  getUser() {
    // alert('hi')
    this.common.getUsrList().subscribe((res: any) => {
      console.log(res);

    })




    // fetch('http://localhost:3000/api/users').then(response => {
    //   return response.json();
    // }).then(data => {
    //   console.log(data);
    // } ).catch(err => {
    //   console.log(err);
    // })
  }
userLogin(){
  var userDetails = {
    email: this.loginForm.controls["username"].value,
    password: this.loginForm.controls["password"].value,
  };
  this.common.userLogin(userDetails).subscribe((res:any)=>{
    if(res.statusCode == 200){
      console.log(res);
      this.toaster.showSuccess(res.message)
      this.isHeader = true;
      this.sessionstorageservice.setItem('isHeadFoot', String(this.isHeader))
      this.route.navigate(['innerpages/dashboard'])
    }
    else{
      alert(res.message)
    }
  })
}

  // login2() {
  //   var userDetails = {
  //     mobileNumber: this.loginForm.controls["username"].value,
  //     password: this.loginForm.controls["password"].value,
  //   };
  //   this.common
  //     .login(userDetails)
  //     .pipe(
  //       map((res) => {
  //         this.sessionstorageservice.setItem("token", res.data.token);
  //         this.sessionstorageservice.setItem("userDetails", JSON.stringify(res.data));
  //         // this.commonService.loggedInLoggedOutRefresh.next(true);
  //         // this.toasterService.showSuccess("Logged in succesful");
  //         // this.router.navigate(["/dashboard"]);
  //       }),
  //       catchError((err) => {
  //         throw err;
  //       })
  //     )
  //     .subscribe();
  // }
}
