import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-single-gif',
    templateUrl: './single-gif.component.html',
    styleUrls: ['./single-gif.component.scss']
})
export class SingleGifComponent implements OnInit {
    gif: any;
    private sub: any;
    igGif: string;

    constructor(
        private giphyService: GiphyService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.sub = this.route.params
            .subscribe(params => this.igGif = params['id']);

        this.giphyService
            .gifById(this.igGif)
            .subscribe(gif => this.gif = gif.data);
    }

}
