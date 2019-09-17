import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ToastrService } from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html'  
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    let firstName = new FormControl(this.authService.currentUser.firstName, Validators.required)
    let lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  saveProfile(formValues) : void {
    if(this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['events'])
      this.toastr.success('updated')
    }
  }

  logout() : void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/user/login'])
    })
  }

  cancel() : void {
    this.router.navigate(['events'])
  }
         
}