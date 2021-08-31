import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CalcComponent } from './calc/calc.component';
import { CurrencyComponent } from './currency/currency.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { UnitComponent } from './unit/unit.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"calc", component:CalcComponent},
  {path:"currency", component:CurrencyComponent},
  {path:"unit", component:UnitComponent},
  {path:"about", component:AboutComponent},
  {path:"logout", component:LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
