import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
    courses: any[];

    constructor(private db: AngularFirestore) {
        this.db.collection('courses').valueChanges().subscribe(
            val => {
                this.courses = val;
                console.log(this.courses);
            }
        );
    }

    ngOnInit() {
    }
}
