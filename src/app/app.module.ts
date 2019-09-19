import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./_material/angular-material.module";
import { LoadingProgressModule } from "./_loading-progress/loading-progress.module";
import { HeaderToolbarComponent } from "./home/header-toolbar/header-toolbar.component";
import { BodySidenavComponent } from "./home/body-sidenav/body-sidenav.component";
import { InstallGuideComponent } from "./jquery/install-guide/install-guide.component";
import { RegisterFormComponent } from "./jquery/register-form/register-form.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RegisterFormModule } from "./jquery/register-form/register-form.module";
import { GridModule } from "./jquery/grid/grid.module";
import { ChartModule } from './jquery/chart/chart.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderToolbarComponent,
    BodySidenavComponent,
    InstallGuideComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AngularMaterialModule,
    LoadingProgressModule,
    RegisterFormModule,
    GridModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
