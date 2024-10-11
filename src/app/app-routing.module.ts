import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about/:id',
    component: AboutComponent,
  },
];

@NgModule({
  /**
   * useHash = true
   * HashLocationStrategy : it will adds # in url
   *
   * useHash = false
   * PathLocationStrategy : it is default location strategy. if we choose this location strategy then we will not see any # in url
   */
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
