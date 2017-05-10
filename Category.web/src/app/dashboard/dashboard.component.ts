import { Component, OnInit } from "@angular/core";
import { DashboardService } from './dashboard.service';
import { DashboardCategory } from './dashboard-category.model';
import { Router } from '@angular/router';

@Component({
    selector: '<app-dashboard>',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    constructor(private dashboardService: DashboardService,private router: Router) {

    }
    dashboardCategories: DashboardCategory[]
    ngOnInit(): void {
        this.dashboardService.getDashboardCategories().then(dashboardCat => this.dashboardCategories = dashboardCat);
    }
    OnCategoryClick(category: DashboardCategory) {
        this.router.navigate(['/category', category.id]);
    }
    shortDescription = "We are glad you came here, here you can find many things that you like. Take a tour and explore our web store for our products and services";
    availalbeCatagories = "Currently we are serving following items, more to come soon!"
}
