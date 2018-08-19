import {RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ObservablesComponent } from './observables/observables.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path:'home', component: HomeComponent },
    { path:'observables', component: ObservablesComponent},
    { path: 'routing_demo', component: RoutingDemoComponent},
    { path: 'page_not_found', component: PageNotFoundComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent}
];

export const ROUTES = RouterModule.forRoot(appRoutes);


