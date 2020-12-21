import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ContainerImageComponent } from './container-image/container-image.component';
import { ContainerFormationConseilAccompagnementComponent } from './container-formation-conseil-accompagnement/container-formation-conseil-accompagnement.component';
import { RechercheComponent } from './recherche/recherche.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CertificationPartenaireComponent } from './certification-partenaire/certification-partenaire.component';
import { DernierArticleComponent } from './dernier-article/dernier-article.component';
import { RetourExpTemoiComponent } from './retour-exp-temoi/retour-exp-temoi.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { BlogPageComponent } from './page/blog-page/blog-page.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { BlogModule } from './blog/blog.module';
import { AppRouting } from './app.routing';
import { AccompagnementComponent } from './page/accompagnement/accompagnement.component';
import { TriNavigationComponent } from './tri-navigation/tri-navigation.component';
import { TriFormuleComponent } from './tri-formule/tri-formule.component';
import { PrezMinComponent } from './prez-min/prez-min.component';
import { FormationComponent } from './page/formation/formation.component';
import { DescriptionComponent } from './description/description.component';
import { FormationModuleComponent } from './formation-module/formation-module.component';






@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CounterComponent,
    FetchDataComponent,
    ContainerImageComponent,
    ContainerFormationConseilAccompagnementComponent,
    RechercheComponent,
    CertificationPartenaireComponent,
    DernierArticleComponent,
    RetourExpTemoiComponent,
    NewsletterComponent,
    FooterComponent,
    BlogPageComponent,
    MainPageComponent,
    AccompagnementComponent,
    TriNavigationComponent,
    TriFormuleComponent,
    PrezMinComponent,
    FormationComponent,
    DescriptionComponent,
    FormationModuleComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BlogModule,
    AngularFontAwesomeModule,
    FormsModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
