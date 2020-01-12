import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { GlobalService } from '../services/global.service';

@Component({
    selector: 'app-search-field',
    // selector: 'app-root',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    name = 'Search Field';
    searchForm: FormGroup;
    public data: any;

    constructor(private fb: FormBuilder, private api: ApiService, private globalService: GlobalService) {
    }

    ngOnInit() {
        this.searchForm = this.fb.group({
            searchInput: ''
        });
    }

    submit() {
        console.log(this.searchForm.value);
        this.api.search(this.searchForm.value.searchInput).subscribe(
            (res: any) => {
                console.log(res.data);
                this.globalService.getResult(res.data);
            },
            err => console.log(err)
        );
    }

    // sendMessage(data): void {
    //     // send message to subscribers via observable subject
    //     this.globalService.sendMessage(data);
    // }

}
