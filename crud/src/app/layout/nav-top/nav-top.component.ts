import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent {
    items: MenuItem[];
    constructor(private router: Router){}
    ngOnInit() {
        this.items = [
            {
                icon:'pi pi-home',
                command: () => {
                    this.router.navigate([""]);
                }
            },
            {
                label:'Student',
                command: () => {
                    this.router.navigate(["Student"]);
                }
            }

        ]
    }
}
