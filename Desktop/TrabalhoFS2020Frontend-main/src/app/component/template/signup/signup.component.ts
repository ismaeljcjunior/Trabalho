import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
   
  formularioUsuario:FormGroup

  constructor(
     private formBuilder: FormBuilder,
     private usuarioService: UsuarioService,
  ) {}

  ngOnInit(): void {
    this.formularioUsuario = this.formBuilder.group({
      nmPessoa: [''],
      cpf: [''],
      dtNascimento: [''],
      login: [''],
      senha: [''],
      ativo: [true]
    })
  }

  cadastrar(): void{
    let req = {
      login: this.formularioUsuario.get('login').value,
      senha: this.formularioUsuario.get('senha').value,
      pessoa: { 
        nmPessoa: this.formularioUsuario.get('nmPessoa').value,
        cpf: this.formularioUsuario.get('cpf').value,
        dtNascimento: this.formularioUsuario.get('dtNascimento').value,
        login: this.formularioUsuario.get('login').value,
        senha: this.formularioUsuario.get('senha').value
      },
      ativo: this.formularioUsuario.get('ativo').value
    }

   this.usuarioService.cadastrarUsuario(req).subscribe(() => {
    console.log(req);
   });
   

  }

}
