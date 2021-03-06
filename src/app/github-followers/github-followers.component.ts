import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
    ]).pipe(
      switchMap(combined => {
        // We don't have an id here, it's just an example
        // let id = combined[0].get('id');
        // console.log(id);

        const page = combined[1].get('page');
        console.log(page);

        // Real world example using id and page
        // return this.service.getAll({ id: id, page: page });
        return this.service.getAll();
      })
    ).subscribe(followers => {
      this.followers = followers;
    });
  }
}
