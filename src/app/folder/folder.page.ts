import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  constructor(private navcrtl: NavController) { }

  ngOnInit() {
  }

  login(){
    this.navcrtl.navigateBack('programais')
  }
  Cadastrar(){
    this.navcrtl.navigateBack('cadastro')
  }

}
