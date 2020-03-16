import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { DashboardComponent } from "./news/dashboard/dashboard.component";
import { SourcesComponent } from "./news/sources/sources.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "sources", component: SourcesComponent },
  { path: "login", component: LoginComponent },
  {
    path: "signup",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
