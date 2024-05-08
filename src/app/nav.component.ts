import { Component ,Input} from "@angular/core";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent {
    @Input() title!: string;
constructor(){
    
}

// title : string = "Shopping";
ngOnInit(): void {

}
}