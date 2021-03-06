import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LocationComponent } from './components/location/location.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: 'location/:latlon', component: LocationComponent },
  { path: 'location', component: LocationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'settings', component: SettingsComponent },
  /*
  { path: 'departures/:stops', component: DeparturesComponent },
  */
  { path: 'departures', redirectTo: '/location', pathMatch: 'full' },
  { path: '', redirectTo: '/location', pathMatch: 'full' },
  { path: '**', redirectTo: '/location' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
