
import { Component } from '@angular/core'

@Component({ // Creating the component, class decoration
    selector: 'courses', // selector css element
    template: '<h2>{{ getTitle() }}</h2>' // data binding
})
export class CoursesComponent {
    title = "List of courses"

    getTitle() {
        return this.title
    }
}