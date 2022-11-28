/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserStoreService } from './user-store.service';

describe('Service: UserStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserStoreService]
    });
  });

  it('should ...', inject([UserStoreService], (service: UserStoreService) => {
    expect(service).toBeTruthy();
  }));
});
