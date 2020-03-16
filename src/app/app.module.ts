import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { MaterialModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HeaderComponent } from "./navigation/header/header.component";
import { SidenavComponent } from "./navigation/sidenav/sidenav.component";
import { DashboardComponent } from "./news/dashboard/dashboard.component";
import { SourcesComponent } from "./news/sources/sources.component";
import { FilterPipePipe } from "./filter-pipe.pipe";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    SourcesComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FilterPipePipe],
  providers: [FilterPipePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
