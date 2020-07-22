import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private navcrtl: NavController) { }

  ngOnInit() {
  }
  Voltar(){
    this.navcrtl.navigateBack('folder/Outbox')
  }
  login(){
    this.navcrtl.navigateBack('programais')
  }
}