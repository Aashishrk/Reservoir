import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { StatsComponent } from './components/stats/stats.component';
import { SearchComponent } from './components/search/search.component';
import { BlogComponent } from './components/blog/blog.component';
import { HackerNewsService } from './components/blog/blog.service';
// Fix for "Expression has changed after it was checked. Previous value: container-"
import { enableProdMode } from '@angular/core'
enableProdMode();

import { FusionChartsModule } from 'angular2-fusioncharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load Ocean theme
import * as Ocean from 'fusioncharts/themes/fusioncharts.theme.ocean';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    StatsComponent,
    SearchComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FlashMessagesModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, Ocean)
  ],
  providers: [AuthService, AuthGuard, NotAuthGuard, HackerNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }