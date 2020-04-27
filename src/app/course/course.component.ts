import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
    courses$;
    course$;
    author$;

    constructor(private db: AngularFirestore) { }

    ngOnInit(): void {
        this.courses$ = this.db.collection('courses').valueChanges({ idField: 'id' });
        this.course$ = this.db.doc('courses/WFVo5FTYneWySO5FgKDP').valueChanges();
        this.author$ = this.db.doc('authors/4eMceyeoifDHGONOELsU').valueChanges();
    }

    add(course: HTMLInputElement) {
        this.db.collection('courses').add({
            name: course.value
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        }).catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

    update(course) {
        this.db.doc(`courses/${course.id}`).update({
            name: course.name + ' UPDATED'
        }).then(function() {
            console.log("Document updated");
        }).catch(function(error) {
            console.error("Error updating document: ", error);
        });
    }

    delete(course) {
        this.db.doc(`courses/${course.id}`).delete().then(function() {
            console.log("Document deleted");
        }).catch(function(error) {
            console.error("Error deleting document: ", error);
        });
    }
}
