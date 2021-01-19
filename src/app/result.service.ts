import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface RedditResult {
  data: {
    children: [
      {
        data: {
          title: string;
          url: string;
          thumbnail: string;
        };
      }
    ];
  };
}

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  public awwResults: RedditResult[] = [];

  constructor(private http: HttpClient) {}

  urlstring: string = 'https://www.reddit.com/r/aww/.json';

  getResult() {
    return this.http.get(this.urlstring).subscribe(
      (data) => {
        //console.log(data);
        // const posts = response.data.children;
        // for (let post of posts) {
        //   console.log(post.data.title);
        // }
        
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const aResult = data[key];
            this.awwResults.push(aResult);
            console.log(this.awwResults);
          }
        }
      },
      (error) => console.log(error)
    );
  }
}
