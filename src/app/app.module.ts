import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TrendingListComponent } from './trending-list/trending-list.component';
import { GiphyService } from './services/giphy.service';

@NgModule({
    declarations: [
        AppComponent,
        TrendingListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        GiphyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
