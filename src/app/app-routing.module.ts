import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './pages/children-routes/child/child.component';
import { FatherComponent } from './pages/children-routes/father/father.component';
import { TitleComponent } from './pages/index/title/title.component';
import { TitleNotFoundComponent } from './pages/page-not-found/title-not-found/title-not-found.component';
import { GetQueryParameterComponent } from './pages/parameter-by-query/get-query-parameter/get-query-parameter.component';
import { GetParameterComponent } from './pages/parameter-by-route/get-parameter/get-parameter.component';
import { CardComponent } from './pages/portfolio/card/card.component';
import { RedirectToHomeComponent } from './pages/redirect/redirect-to-home/redirect-to-home.component';

const routes: Routes = [
  {
    path: '',
    component: TitleComponent,
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    component: CardComponent,
    pathMatch: 'prefix'
  },
  {
    path: 'parameter/:id',
    component: GetParameterComponent
  },
  {
    path: 'query',
    component: GetQueryParameterComponent
  },
  {
    path: 'redirect',
    component: RedirectToHomeComponent
  },
  {
    path: 'father-route',
    component: FatherComponent,
    children: [
      {path: ':id', component: ChildComponent },
      {path: ':id/:token', component: ChildComponent },
    ]
  },
  {
    path: '404',
    component: TitleNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
