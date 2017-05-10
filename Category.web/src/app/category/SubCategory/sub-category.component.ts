import { CategoryService } from './../category.service';
import { Component, Input } from '@angular/core';
import { CategoryModal } from './../category.modal';

@Component({
    selector: '<app-sub-category>',
    templateUrl: './sub-category.component.html',
})

export class SubCategoryComponent {
    @Input() addEditCategory: CategoryModal;

    constructor(private categoryService: CategoryService) {
    }

    SaveSubCategory() {
        if (this.addEditCategory.Id === 0)
            this.categoryService.createNewSubCategory(this.addEditCategory);
        else
            this.categoryService.editSubCategory(this.addEditCategory);
            
        this.addEditCategory = undefined;    
    }
    discardChanges() {
        this.addEditCategory = undefined;
    }
}