import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { ServicesComponent } from './services/services.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { NewsComponent } from './sections/news/news.component';
import { AppComponent } from './app.component';
import { ManagementComponent } from './management/management.component';
import { SafetyStandardComponent } from './safety-standard/safety-standard.component';
import { MissionComponent } from './mission/mission.component';


import { BowserComponent } from './bowser/bowser.component';
import { AboutComponent } from './about/about.component';
import { DistributorsComponent } from './distributors/distributors.component';



const routes: Routes = [
  { path: '', redirectTo: 'home',pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'safety-standard', component: SafetyStandardComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'distributers', component: DistributorsComponent },
  { path: 'browser', component: BowserComponent },
 
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
