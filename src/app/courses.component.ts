
import { Component } from '@angular/core'

@Component({ // Creating the component, class decoration
    selector: 'courses', // selector css element
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>  
    `
})
export class CoursesComponent {
    title = "List of courses"
    courses = ["course1", "course2", "course3"];
}