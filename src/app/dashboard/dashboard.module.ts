import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventComponent } from './event/event.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    SearchComponent,
    EventsListComponent,
    EventComponent,
    FiltersComponent
  ],
  imports: [
    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
