const maxProfit = (prices) => {
  // Wrong method
  //   let biggestProfit = prices[0];
  //   let cheapestPrice = prices[0];

  //   for (let i = 0; i < prices.length; i++) {
  //     if (prices[i] > biggestProfit) biggestProfit = prices[i];
  //     if (prices[i] < cheapestPrice) cheapestPrice = prices[i];
  //   }

  //   const diffQty = biggestProfit - cheapestPrice;
  //   //   return diffQty;
  //   return { biggestProfit, cheapestPrice };

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrices = prices[i];
    minPrice = Math.min(minPrice, currentPrices);

    const potentialProfit = currentPrices - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
