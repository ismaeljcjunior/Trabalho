import { AutenticacaoService } from './../../../service/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "Escola FullStack";
  
  constructor(
    private autenticacaoService : AutenticacaoService,
    private router: Router) { }

  username : string;

  ngOnInit(): void {
    this.username = this.autenticacaoService.getUser();
  }
  
  logout(): void {
    this.autenticacaoService.logout();
    this.autenticacaoService.showMessage("Até mais!");
    this.router.navigate(['login']);
  }

}
