
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 30000, years: 10, rate: 6})).toEqual('333.06');
  expect(calculateMonthlyPayment({amount: 5000, years: 5, rate: 4})).toEqual('92.08');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 30000, years: 10, rate: 6})).toEqual('333.06');
  expect(calculateMonthlyPayment({amount: 5000, years: 5, rate: 4})).toEqual('92.08');
});

/// etc
