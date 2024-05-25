// testYahooFinance.js
const yahooFinance = require("yahoo-finance2").default;

const testYahooFinanceAPI = async () => {
  const stock = "AAPL";
  const year = 2023;
  const quarter = 1;
  const startDate = `${year}-${String((quarter - 1) * 3 + 1).padStart(
    2,
    "0"
  )}-01`;
  const endDate = `${year}-${String(quarter * 3).padStart(2, "0")}-01`;

  try {
    const queryOptions = {
      period1: startDate,
      period2: endDate,
      interval: "1d",
    };
    const result = await yahooFinance.historical(stock, queryOptions);

    console.log(
      `Fetched ${result.length} data points for ${stock} from ${startDate} to ${endDate}`
    );
    console.log(result);
  } catch (error) {
    console.error("Error fetching stock data:", error);
  }
};

// Run the test function
testYahooFinanceAPI();
