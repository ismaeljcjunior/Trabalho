import { AutenticacaoService } from './../../../service/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  formulario: FormGroup;
  constructor(
    private service: AutenticacaoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      username: ['luiz', Validators.required],
      password: ['1234', Validators.required]
    })
  }


  onSubmit() {
    this.service.logar(this.formulario.value.username, this.formulario.value.password).subscribe(() => {
      this.service.showMessage("seja bem vindo");
      this.router.navigate(['']);
    },
      err => {
        this.service.showMessage("Usuário ou senha inválido", true);
      }
    )
  }


}
