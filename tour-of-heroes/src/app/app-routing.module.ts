import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

// routes to localhost:4200/heroes
const routes: Routes = [
  // Default route
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  // Parameterized route: match path pattern to hero detail view
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "heroes", component: HeroesComponent }
];

@NgModule({
  exports: [RouterModule],
  // Configure router at app root level
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
