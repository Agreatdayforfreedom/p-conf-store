const handleSumTotal = (cart) => {
  const total = cart.reduce((p, c) => p + c.price, 0);
  return total;
};

export default handleSumTotal;
