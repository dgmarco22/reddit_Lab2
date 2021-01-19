import { Component, OnInit } from '@angular/core';
import { RedditApiService } from "../reddit-api.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [RedditApiService],
})
export class ListComponent implements OnInit {

  constructor(public redditApiService: RedditApiService) { }

  ngOnInit(): void {
    this.redditApiService.getRedditFact();
  }

}

