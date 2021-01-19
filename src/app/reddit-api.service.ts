import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface RedditResponse {
  data: {
    children: [
      {
          data: {
            title: string;
            url: string;
            thumbnail: string;
          }
      }
    ];
  };
}

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {
  public redditFacts: RedditResponse[];

  constructor(private http: HttpClient) {}

  url: string = 'https://www.reddit.com/r/aww/.json';
  

  getRedditFact() {
    return this.http.get(this.url).subscribe(
      (data) => {
        console.log(data);
        for (const key in data) {
           if (Object.prototype.hasOwnProperty.call(data,key)) {
           const redditFact = data[key];
           this.redditFacts.push(redditFact);
          }
      }
  },
      (error) => console.log(error)
    );
}
};



