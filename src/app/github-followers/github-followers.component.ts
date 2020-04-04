import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any;

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(combined => {
      // We don't have an id here, it's just an example
      // let id = combined[0].get('id');
      // console.log(id);

      let page = combined[1].get('page');
      console.log(page);

      // Real world example using id and page
      // this.service.getAll({ id: id, page: page });
      this.service.getAll().subscribe(
        followers => this.followers = followers
      );
    });
  }
}
