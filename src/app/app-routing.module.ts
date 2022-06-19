import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  /*
  { path: 'departures/:stops', component: DeparturesComponent },
  { path: 'departures', redirectTo: '/location', pathMatch: 'full' },
  { path: 'location/:latlon', component: LocationComponent },
  { path: 'location', component: LocationComponent },
  { path: 'settings', component: SettingsComponent},
  { path: '', redirectTo: '/location', pathMatch: 'full'},
  { path: '**', redirectTo: '/location'},
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
