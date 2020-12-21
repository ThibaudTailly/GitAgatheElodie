import { Routes, RouterModule } from "@angular/router";

import { MainPageComponent } from "./page/main-page/main-page.component";
import { BlogPageComponent } from "./page/blog-page/blog-page.component";
import { AccompagnementComponent } from "./page/accompagnement/accompagnement.component";
import { FormationComponent } from "./page/formation/formation.component";





const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'accompagnement', component: AccompagnementComponent },
  { path: 'formation', component: FormationComponent},
  { path: '**', component: MainPageComponent }
];

export const AppRouting = RouterModule.forRoot(routes, { enableTracing: false })
