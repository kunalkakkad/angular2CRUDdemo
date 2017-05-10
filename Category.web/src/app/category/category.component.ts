import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CategoryService } from './category.service';
import { CategoryModal } from './category.modal';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: '<app-category>',
    templateUrl: './category.component.html',
    styleUrls: ['./category.comonent.css']
})

export class CategoryComponent implements OnInit {
    subCategories: CategoryModal[];
    selectedCategory: CategoryModal;
    newCategory: CategoryModal;
    IsEdit: boolean = false;
    IsAdd: boolean = false;
    //categotyComponent: number;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private categoryService: CategoryService
    ) { }

    goBack() {
        this.location.back();
    }

    ngOnInit() {
        this.loadSubCategories();
    }
    OnSubCategoryClick(selectedSubCategory: CategoryModal) {
        this.IsEdit = false, this.IsAdd = false;
        this.selectedCategory = selectedSubCategory;
    }
    addNewCategory() {
        this.IsAdd = true;
        this.newCategory = new CategoryModal();
        this.newCategory.Id = 0;
        this.newCategory.CategoryId = this.selectedCategory.CategoryId;
        this.newCategory.Name = '';
    }
    editSelectedCategory() {
        this.IsEdit = true;
    }
    deleteSelectedCategory() {
        if (confirm('Are you sure you want to remove selected category ' + this.selectedCategory.Name + '?')) {
            this.categoryService.deleteSubCategory(this.selectedCategory).then(category => this.selectedCategory = undefined);
        }
    }
    loadSubCategories() {
        let params = this.route.snapshot.params;
        //this.route.params.subscribe(params => this.categotyComponent = params['id']);
        this.categoryService.getSubCategoriesByID(parseInt(params['id'])).then(subCategories => this.subCategories = subCategories);
    }
    refreshData(){
        this.IsEdit = false, this.IsAdd = false;
        this.selectedCategory = undefined;
        this.loadSubCategories();
    }
}