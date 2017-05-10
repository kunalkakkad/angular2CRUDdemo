import { Injectable } from '@angular/core';
import { DashboardCategory } from './dashboard-category.model';
import { DashboardConstants } from './dashboard.constants';

@Injectable()
export class DashboardService {
    getDashboardCategories(): Promise<DashboardCategory[]> {
        return Promise.resolve(DashboardConstants)
    }
}