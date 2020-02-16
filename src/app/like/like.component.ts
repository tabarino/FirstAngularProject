import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.isActive) {
      this.likesCount--;
    } else {
      this.likesCount++;
    }

    this.isActive = !this.isActive;
  }
}
