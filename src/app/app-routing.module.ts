import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { HealthComponent } from './health/health.component';
import { LifeComponent } from './life/life.component';
import { VechileComponent } from './vechile/vechile.component';
import { HomeComponent } from './home/home.component';
import { HouseComponent } from './house/house.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  {path: '', redirectTo: '/home-page',pathMatch:'full'},
  {path:'home-page',component:HomePageComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  { path:'health',component:HealthComponent},
  {path : 'life',component:LifeComponent},
  {path : 'vechile',component:VechileComponent},
  {path : 'home',component:HomeComponent},
  {path : 'house',component:HouseComponent},
  {path : '**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ra = [HomePageComponent,RegistrationComponent,LoginComponent,AboutComponent,HealthComponent,VechileComponent,HomeComponent,LifeComponent,HouseComponent,PageNotFoundComponent]