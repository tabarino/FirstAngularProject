import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'app-edit-course',
    templateUrl: './edit-course.component.html',
    styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) data: any) {
        console.log(data);
    }

    ngOnInit(): void {
    }
}
