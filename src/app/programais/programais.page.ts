import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-programais',
  templateUrl: './programais.page.html',
  styleUrls: ['./programais.page.scss'],
})
export class ProgramaisPage implements OnInit {

  n1: any = "";
  n2: any = "";
  total: any = ""

  constructor(private navcrtl: NavController) { }

  ngOnInit() {
  }

  Voltar(){
    this.navcrtl.navigateBack('folder/Outbox')
  }
  login(){
    this.navcrtl.navigateBack('programais')
  }
  Cadastrar(){
    this.navcrtl.navigateBack('cadastro')
  }

}
