import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {
    courses$;

    constructor(private db: AngularFirestore) { }

    ngOnInit(): void {
        this.courses$ = this.db.collection('courses').valueChanges();
    }

    ngOnDestroy(): void {
    }
}
