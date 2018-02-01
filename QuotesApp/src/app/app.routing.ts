import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AddPageComponent } from './add-page/add-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'add_page', component: AddPageComponent, children: [
            { path: ':user', component: AddPageComponent },
            { path: ':user/data', component: AddPageComponent }
        ]
    },
    { path: 'add_page/:user/:data', component: AddPageComponent },
    { path: 'page_not_found', component: PageNotFoundComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/page_not_found' }
];

export const ROUTES = RouterModule.forRoot(appRoutes);
