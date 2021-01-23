import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface RedditPost {
  title: string; //title of post
  link: string; //outbound link to post on reddit
  image: string; //thumbnail
}

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {
  // public redditFacts: RedditResponse[];

  posts: RedditPost[] = [];

  constructor(private http: HttpClient) {} //want to inject into service so you can use in functionality

  getposts(){
   const url = "https://www.reddit.com/r/aww/.json";
   this.http.get(url).subscribe(
     (response: any)=> {
      //  console.log(response);
          const posts = response.data.children;

          for(let post of posts){
              //  console.log(post);
                const redditPost : RedditPost = {
                title: post.data.title,
                link: "https://reddit.com" + post.data.permalink,
                image: post.data.thumbnail
            };
              this.posts.push(redditPost);
        }

              console.log(this.posts);

     }, //this is what happens on success
     (error)=>{
       console.log(error);
     } // this is what happens if I get an error from the API
   );
  }
}

//   getRedditFact() {
//     return this.http.get(this.url).subscribe(
//       (data) => {
//         console.log(data);
//         for (const key in data) {
//            if (Object.prototype.hasOwnProperty.call(data,key)) {
//            const redditFact = data[key];
//            this.redditFacts.push(redditFact);
//           }
//       }
//   },
//       (error) => console.log(error)
//     );
// }
// };



