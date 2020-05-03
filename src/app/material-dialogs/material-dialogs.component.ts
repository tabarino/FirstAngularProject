import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { EditCourseComponent } from "../edit-course/edit-course.component";

@Component({
    selector: 'material-dialogs',
    templateUrl: './material-dialogs.component.html',
    styleUrls: ['./material-dialogs.component.css']
})
export class MaterialDialogsComponent implements OnInit {

    constructor(private dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    openDialog() {
        this.dialog.open(EditCourseComponent).afterClosed().subscribe(
            result => console.log(result)
        );
    }
}
