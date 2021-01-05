import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingModule } from './components/greeting/greeting.module';
import { LoginModule } from './components/login/login.module';

const routes: Routes = [
  {path:"", loadChildren: () => import("./components/login/login.module").then(m => LoginModule)},
  {path:"greeting", loadChildren: () => import("./components/greeting/greeting.module").then(m => GreetingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
