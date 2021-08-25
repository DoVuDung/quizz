import { TestBed } from '@angular/core/testing';

import { DocxReaderService } from './docx-reader.service';

describe('DocxReaderService', () => {
  let service: DocxReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocxReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
