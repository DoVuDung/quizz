import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '../../../@base/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class DocxReaderService extends BaseApiService<any> {

  constructor(public http: HttpClient) {
    super(http, 'tools/docxReader')
   }
}
