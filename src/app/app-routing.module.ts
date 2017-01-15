import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingListComponent } from './trending-list/trending-list.component';
import { SingleGifComponent } from './single-gif/single-gif.component';

const appRoutes: Routes = [
    {
        path: 'trending',
        component: TrendingListComponent
    },
    {
        path: 'single-gif/:id',
        component: SingleGifComponent
    },
    {
        path: '',
        redirectTo: '/trending',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/trending',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}