import { Usuario } from './../models/usuario';
import { Prova } from './../models/prova';
import { Instituicao } from './../models/instituicao';
import { AppProviderService } from './../app-provider.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-simulados',
  templateUrl: './simulados.page.html',
  styleUrls: ['./simulados.page.scss'],
})
export class SimuladosPage implements OnInit {
  private instituicoes: Instituicao[] = [];
  private selecao: Instituicao;
  private provas: Prova[] = [];
  private showSpinner:boolean = false;
  private usuario:Usuario = new Usuario();

  storage = window.localStorage;

  constructor(private service:AppProviderService) { 
    this.unselect();
  }

  ngOnInit() {
    this.showSpinner = true;
    this.load();
    this.showSpinner = false;
  }

  public load(){
    let authuser = this.storage.getItem("authuser");
    this.usuario = JSON.parse(authuser);
    console.log(this.usuario);
    this.service.getInstituicoes(this.usuario.token).subscribe(
      data => {
        this.instituicoes = data;
        console.log(data);
      },
      error => {
        console.log('ERROOOOOOOOOOUUUUUUU');
      }
    );
  }

  public select(selected){
    this.selecao = selected;
    this.showSpinner = true;
    this.service.getProva(this.selecao.id,this.usuario.token).subscribe(
      data => {    
        this.provas = data;
      },
      erro => {
        console.log('ERROOOOOOOOOOUUUUUUU');
      }
    );
    this.showSpinner = false;
  }

  public unselect(){
    this.selecao = null;
    this.provas = [];
    this.showSpinner = false;
  }
}
