import { CategoryModal } from './category.modal';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class CategoryService {
    private headers = new Headers({ 'content-type': 'application/json;charset=utf-8' });
    private categoryApi = 'http://localhost:44346/api/Category'
    constructor(private http: Http) {
    }

    getSubCategoriesByID(id: number): Promise<CategoryModal[]> {
        return this.http.get(`${this.categoryApi}/GetCategoriesByID?Id=${id}`, { headers: this.headers }).toPromise()
            .then(response => response.json() as CategoryModal[])
            .catch(this.handleError);
    }

    deleteSubCategory(category: CategoryModal): Promise<void> {
        return this.http.delete(`${this.categoryApi}/deleteRecordByID/${category.Id}`)
            .toPromise()
            .then(() => alert('Data Deleted Successfully'))
            .catch(this.handleError);
    }

    createNewSubCategory(category: CategoryModal): Promise<void> {
        const url = `${this.categoryApi}/AddNewCategory`;
        return this.http
            .post(url, JSON.stringify({ Id: category.Id, CategoryId: category.CategoryId, Name: category.Name }), { headers: this.headers })
            .toPromise()
            .then(res => alert('Data Saved Successfully'))
            .catch(this.handleError);
    }

    editSubCategory(category: CategoryModal): Promise<void> {
        const url = `${this.categoryApi}/editRecordByID`;
        return this.http
            .put(url, JSON.stringify(category), { headers: this.headers })
            .toPromise()
            .then(() => alert('Data Saved Successfully'))
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        alert(error.toString());
        return Promise.reject(error.message || error);
    }
}