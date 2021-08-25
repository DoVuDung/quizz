import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})


export class SaleService {

    constructor(private http: HttpClient) {
    }


    getListSale(): Observable<any> {
        return this.http.get('api/UserProfile/list');
    }

    assignToSale(SaleId : any, CustomerIdList : any) : Observable<any>{ 
        return this.http.put(`api/CustommerProfile/AssignToSale/${SaleId}`, CustomerIdList);

    }

}