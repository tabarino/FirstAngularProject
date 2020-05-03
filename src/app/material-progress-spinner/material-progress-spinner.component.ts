import { Component, OnInit } from '@angular/core';
import { timer } from "rxjs";

@Component({
    selector: 'material-progress-spinner',
    templateUrl: './material-progress-spinner.component.html',
    styleUrls: ['./material-progress-spinner.component.css']
})
export class MaterialProgressSpinnerComponent implements OnInit {
    progress = 0;
    timer;
    isLoading = false;

    constructor() {
        this.timer = setInterval(() => {
            this.progress++;
            if (this.progress === 100) {
                clearInterval(this.timer);
            }
        }, 20);

        this.isLoading = true
        this.getCourses().subscribe(
            x => this.isLoading = false
        );
    }

    ngOnInit(): void {
    }

    getCourses() {
        return timer(3000);
    }
}
