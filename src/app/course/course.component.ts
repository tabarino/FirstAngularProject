import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {
    courses$;
    course$;
    author$;

    constructor(private db: AngularFirestore) { }

    ngOnInit(): void {
        this.courses$ = this.db.collection('courses').valueChanges();
        this.course$ = this.db.doc('courses/WFVo5FTYneWySO5FgKDP').valueChanges();
        this.author$ = this.db.doc('authors/4eMceyeoifDHGONOELsU').valueChanges();
    }

    ngOnDestroy(): void {
    }
}
