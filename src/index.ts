function calcucateTax(income: number, taxYear = 2022): number {
  if (taxYear > 2022) return income * 1.2;
  return income * 1.3;
}

calcucateTax(10_000, 2023);
