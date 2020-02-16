import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Angular Project';
  testBox: string;
  post = {
    favoriteTitle: "Title",
    isFavorite: true
  };

  tweet = {
    body: '...',
    likesCount: 11,
    isLiked: true
  };

  newCourses = [];

  newCoursesHidden = [1, 2];

  viewMode = 'somethingElse';

  ngForCourses = [
    { id: 1, name: 'course 1' },
    { id: 2, name: 'course 2' },
    { id: 3, name: 'course 3' }
  ];

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite Changed: ', eventArgs);
  }

  onAdd() {
    this.ngForCourses.push({ id: 4, name: 'course 4' })
  }

  onChange(course) {
    course.name = course.name + ' - Updated';
  }

  onRemove(course) {
    let index = this.ngForCourses.indexOf(course);
    this.ngForCourses.splice(index, 1);
  }
}
