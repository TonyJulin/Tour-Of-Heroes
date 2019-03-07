import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

// routes to localhost:4200/heroes
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  exports: [ RouterModule ],
  // Configure router at app root level
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
