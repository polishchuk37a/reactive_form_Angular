import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/[A-z]/) ,Validators.minLength(5)]),
    nickname: new FormControl('',[Validators.required, Validators.pattern(/[A-z]/), Validators.minLength(7)]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })

  get f(){
    return this.registerForm.controls;
  }

  submit(){
    console.log(this.registerForm.value);
  }

}
