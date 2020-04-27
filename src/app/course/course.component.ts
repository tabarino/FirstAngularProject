import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {
    courses: any[];
    subscription: Subscription;

    constructor(private db: AngularFirestore) { }

    ngOnInit(): void {
        this.subscription = this.db.collection('courses').valueChanges().subscribe(
            val => {
                this.courses = val;
                console.log(this.courses);
            }
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
