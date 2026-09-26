function calculateLineTotal(price, quantity, discountRate = 0) {
  if (![price, quantity, discountRate].every(Number.isFinite)) return null;
  const subtotal = price * quantity;
  return subtotal * (1 - discountRate);
}

const lineTotal = calculateLineTotal(12.5, 4, 0.1);
console.log(lineTotal);

function calculateLineTotal(price, quantity, discountRate = 0) {
  if (![price, quantity, discountRate].every(Number.isFinite)) return null;
  const subtotal = price * quantity;
  return subtotal * (1 - discountRate);
}

const lineTotal = calculateLineTotal(12.5, 4, 0.1);
console.log(lineTotal);

Step	Expression or event	Important values	Reason
1	 	 	 
2	 	 	 
3	 	 	 
4	 	 	 