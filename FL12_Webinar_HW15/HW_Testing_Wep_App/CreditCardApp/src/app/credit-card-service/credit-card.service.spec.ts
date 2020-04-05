import { TestBed } from '@angular/core/testing';

import { CreditCardService } from './credit-card.service';

describe('CreditCardService', () => {
  let service: CreditCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardService);
  });

  it('should create CreditCardService', async () => {
    expect(service).toBeTruthy();
  });

  it('Card type should be unknown', () => {
    expect(service.testCreditCard('5500 0000 0000 0004', 'Other')).toEqual({
      isValid: false,
      message: 'Unknown card type'
    });
  });

  it('Card number format should be invalid', () => {
    expect(service.testCreditCard('Some error text', 'Visa')).toEqual({
      isValid: false,
      message: 'Credit card number is in invalid format'
    });
  });

  it('Card number should be invalid', () => {
    expect(service.testCreditCard('5500 0000 0000 0004', 'Visa')).toEqual({
      isValid: false,
      message: 'Credit card number is invalid'
    });
  });

  it('Card number and type should be valid', () => {
    expect(service.testCreditCard('5500 0000 0000 0004', 'MasterCard')).toEqual({
      isValid: true,
      message: 'Credit card has a valid format'
    });
  });
});
