import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { StatsComponent } from './components/stats/stats.component';
import { SearchComponent } from './components/search/search.component';
import { BlogComponent } from './components/blog/blog.component';
// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent // Default Route
  },
  {
    path: 'register',
    component: RegisterComponent, // Register Route
    canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
  },
  {
    path: 'login',
    component: LoginComponent, // Login Route
    canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
  },
  {
    path: 'stats',
    component: StatsComponent, // Ananlysis Route
    canActivate: [AuthGuard] // User must be logged in to view this route
  },
  {
    path: 'search',
    component: SearchComponent, // search Component
    canActivate: [AuthGuard] // User must be logged in to view this route
  },
  {
    path: 'blog',
    component: BlogComponent, // Blog Component
    canActivate: [AuthGuard] // User must be logged in to view this route
  },
  { path: '**', component: HomeComponent } // "Catch-All" Route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }