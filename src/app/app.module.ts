import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';


import { ServicesComponent } from './services/services.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeComponent } from './sections/subscribe/subscribe.component';

import { TsServiceAreaComponent } from './sections/ts-service-area/ts-service-area.component';
import { FactsAreaComponent } from './sections/facts-area/facts-area.component';
import { TsFeaturesComponent } from './sections/ts-features/ts-features.component';
import { CallToActionBoxComponent } from './sections/call-to-action-box/call-to-action-box.component';
import { BannerCarouselComponent } from './banner-carousel/banner-carousel.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NewsComponent } from './sections/news/news.component';
import { BowserComponent } from './bowser/bowser.component';
import { SafetyStandardComponent } from './safety-standard/safety-standard.component';
import { ManagementComponent } from './management/management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MissionComponent } from './mission/mission.component';
import { AboutComponent } from './about/about.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   NewsComponent,
    ServicesComponent,
    NotFoundComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    SubscribeComponent,
  
    TsServiceAreaComponent,
    FactsAreaComponent,
    TsFeaturesComponent,
    CallToActionBoxComponent,
    BannerCarouselComponent,
    TopBarComponent,
    BowserComponent,
    SafetyStandardComponent,
    ManagementComponent,
    MissionComponent,
    AboutComponent,
    DistributorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
