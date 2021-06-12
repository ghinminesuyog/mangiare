import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './pages/book/book.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PlaceComponent } from './pages/place/place.component';
import { TeamComponent } from './pages/team/team.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'place',
    component: PlaceComponent
  },
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
