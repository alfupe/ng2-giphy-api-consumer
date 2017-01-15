import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class GiphyService {
    public static API_URL = 'http://api.giphy.com';
    // Public beta API key, request yours at http://api.giphy.com/submit
    public static API_KEY = 'dc6zaTOxFJmzC';

    constructor(private http: Http) {}

    buildUrl(endpoint: string): string {
        return `${GiphyService.API_URL}${endpoint}?api_key=${GiphyService.API_KEY}`;
    }

    findTrending(): Observable<any> {
        let url = this.buildUrl('/v1/gifs/trending');

        return this.http.get(url).map(response => <any> response.json());
    }

    gifById(id: string): Observable<any> {
        let url = this.buildUrl(`/v1/gifs/${id}`);

        return this.http.get(url).map(response => <any> response.json());
    }
}