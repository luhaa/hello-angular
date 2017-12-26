import {Component, OnInit, Inject} from '@angular/core';


@Component({
  selector: 'app-login',
  template: `
    <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
      <fieldset ngModelGroup="login">
        <input name="username" type="text" [(ngModel)]="username" #usernameRef="ngModel" required minlength="3" placeholder="请输入用户名"/>
        <div *ngIf="usernameRef.errors?.required">this is required</div>
        <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
        <input name="password" type="password" [(ngModel)]="password" #passwordRef="ngModel" required placeholder="请输入密码"/>
        <div *ngIf="passwordRef.errors?.required">this is required</div>
        <button type="submit">submit</button>
      </fieldset>
    </form>
  `,
  styles: ['input.ng-invalid{border:3px solid red;} ' +
  'input.ng-valid{border:3px solid green}']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(@Inject('auth') private service) {
  }


  onSubmit(formValue) {
    console.log('auth result is: '
      + this.service.loginWithCredentials(formValue.login.username, formValue.login.password));
  }

  ngOnInit() {
  }

}
