import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';

@Component({
    selector: 'app-trending-list',
    templateUrl: './trending-list.component.html',
    styleUrls: ['./trending-list.component.scss']
})
export class TrendingListComponent implements OnInit {
    trending: any[];

    constructor(private giphyService: GiphyService) {
    }

    ngOnInit() {
        this.giphyService
            .findTrending()
            .subscribe(trending => this.trending = trending.data);
    }

}
