import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // The Snapshot only get the params once, if it changes in the page it won't get again
    // So, it's better using Observables, like .subscribe
    // Using Observables, every time the model changes Angular will trigger that change
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.route.paramMap.subscribe(params => {
      // To convert a string to a number use + before your variable
      const id = +params.get('id');
      console.log(id);
    });
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }
}
