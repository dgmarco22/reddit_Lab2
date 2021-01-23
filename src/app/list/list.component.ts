import { Component, OnInit } from '@angular/core';
import { RedditApiService } from "../reddit-api.service"; //needs to be added

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  // providers: [RedditApiService],
})
export class ListComponent implements OnInit {

  constructor(public redditApi: RedditApiService) {}

  ngOnInit(): void {
    this.redditApi.getposts(); //calling your API posts
  }

}

