import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TrendingListComponent } from './trending-list/trending-list.component';
import { GiphyService } from './services/giphy.service';
import { SingleGifComponent } from './single-gif/single-gif.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        TrendingListComponent,
        SingleGifComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        GiphyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
