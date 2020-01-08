import { TestBed } from '@angular/core/testing';

import { ColorCardService } from './color-card.service';

describe('ColorCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorCardService = TestBed.get(ColorCardService);
    expect(service).toBeTruthy();
  });
});
