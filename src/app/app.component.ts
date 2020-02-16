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

  ngForCourses;

  canSave = true;

  task = {
    title: 'Review Applications',
    assignee: null
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite Changed: ', eventArgs);
  }

  loadCourses() {
    this.ngForCourses = [
      { id: 1, name: 'course 1' },
      { id: 2, name: 'course 2' },
      { id: 3, name: 'course 3' }
    ];
  }

  /**
   * This method tells Angular to get the same object in the memory
   * instead of loading the same object several times 
   * 
   * Use this only for Large Lists, for simple lists Angular handles with performance really well
   * 
   * @param index 
   * @param course 
   */
  trackCourse(index, course) {
    if (course) {
      return course.id;
    } else {
      return undefined;
    }
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
