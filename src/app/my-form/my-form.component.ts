import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ConfirmedValidator } from "../my-validation";

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.pattern(/[A-z]/) ,Validators.minLength(5)]),
      nickname: new FormControl('',[Validators.required, Validators.pattern(/[A-z]/), Validators.minLength(7)]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    },{
      validators: ConfirmedValidator('password', 'confirmPassword')
    })
  }

  ngOnInit(): void {
  }

  get f(){
    return this.registerForm.controls;
  }

  submit(){
    console.log(this.registerForm.value);
  }
}
