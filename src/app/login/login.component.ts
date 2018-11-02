import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from '../component-communication.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  

  formConfig: any = [
    {type:'text',name:'userName',label:'User Name',constraints: Validators.required},
    {type:'password',name:'passWord',label:'PassWord',constraints: Validators.required},
  ];
  errorMessage: string;

  constructor(private router: Router, private route: ActivatedRoute, private service: ComponentCommunicationService, private builder: FormBuilder) { 
    this.loginForm = this.builder.group({});
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.errorMessage = param['msg'];
    });
    this.formConfig.forEach(element => {
      this.loginForm.addControl(element.name, new FormControl('', {validators: element.constraints}));
    });
  }

  validate(){
    console.log(this.loginForm.value);
    const uname = this.loginForm.controls.userName.value;
    const pwd = this.loginForm.controls.passWord.value;
    if (uname == 'india' && pwd == 'india') {
      sessionStorage.setItem('login','true');
      this.router.navigate(['product']);
    }
    else {
      this.errorMessage = 'Invalid User Name or Password.';
    }
    this.service.changeMessage('login');
  }

}
