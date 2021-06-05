import { SignupComponent } from './component/template/signup/signup.component';
import { LoginComponent } from './component/template/login/login.component';
import { AutenticacaoGuard } from './util/autenticacao.guard';
import { MainComponent } from './component/template/main/main.component';
import { PublicComponent } from './component/template/public/public.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,  } from '@angular/router';
import { HomeComponent } from './component/template/home/home.component';


const routes  = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
    ],
    canActivate: [AutenticacaoGuard]
  },
  { path: '', component: PublicComponent,
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'signup', component: SignupComponent},
    ]
  }


];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
