import { Usuario } from './../models/usuario';
import { AppProviderService } from './../app-provider.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  storage = window.localStorage;
  private authUser:Usuario = new Usuario();

  private loginUser:Usuario;

  constructor(private service:AppProviderService,
    private router: Router) { }

  ngOnInit() {
  }

  public login(){
    this.service.login(this.authUser).subscribe(
      data => {
        this.authUser = data;

        if(this.authUser.token.length > 0){
          this.storage.setItem("authuser",JSON.stringify(this.authUser));
        }

        this.router.navigate(['home']);
      },
      erro => {
        console.log('ERRROOOOOOOOOO');
      }
    );
  }


}
