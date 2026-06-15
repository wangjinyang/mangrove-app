// @ts-nocheck

import { MangroveClient, EthersSigner } from "@mangrove-ai/sdk";
import { Wallet, JsonRpcProvider } from "ethers";
import "dotenv/config";
import fs from "fs";

const baseChainId = 8453; // Base Mainnet chain ID

const provider = new JsonRpcProvider(
  process.env.RPC_URL || "https://mainnet.base.org",
);
const signer = new EthersSigner(
  new Wallet(process.env.PRIVATE_KEY!, provider),
  [baseChainId],
);

const client = new MangroveClient({
  url: "https://api.mangrovemarkets.com",
  signer,
  apiKey: process.env.API_KEY, // Optional, but recommended for production use
});

// console.log("process.env.API_KEY: ", process.env.API_KEY);

(async function () {
  // await client.connect();
  // const balance = await client.wallet.balance({
  //   chainId: baseChainId,
  //   address: await signer.getAddress(),
  // });
  // console.log("balance: ", balance);

  // Get a swap quote
  // const quote = await client.dex.getQuote({
  //   src: "0xA0b86a33E6441b8B83Ee2cA8E36b91A0e9b5E68C", // USDC on Base
  //   dst: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", // ETH
  //   amount: "1000000000", // 1000 USDC (6 decimals)
  //   chainId: baseChainId,
  // });

  // console.log("quote: ", quote);

  const BASE_URL = "https://api.mangrovedeveloper.ai";
  const headers = {
    Authorization: `Bearer ${process.env.API_KEY}`,
    "Content-Type": "application/json",
  };

  // const response = await fetch(
  //   "https://api.mangrovedeveloper.ai/api/v1/signals/rsi_oversold",
  //   {
  //     // headers,
  //   },
  // );
  // const signal = await response.json();
  // console.log("signal: ", signal);
  // // @ts-ignore
  // for (const [name, info] of Object.entries(signal.metadata.params)) {
  //   console.log(
  //     // @ts-ignore
  //     `${name}: default=${info.default}, range=[${info.min}, ${info.max}]`,
  //   );
  // }
  // 批量请求10次
  // const requests = Array.from({ length: 50 }, (_, index) =>
  //   fetch(`${BASE_URL}/api/v1/signals/search`, {
  //     method: "POST",
  //     headers,
  //     body: JSON.stringify({ query: `${index + 'c'}`, search_type: "name" }),
  //   }).then(async (response) => {
  //     const data = await response.json();
  //     return { index: index + 1, response, data };
  //   }),
  // );

  // console.log("开始发送50个并行请求...");
  // const results = await Promise.all(requests);

  // results.forEach(({ index, response, data }) => {
  //   console.log(`\n=== 请求 ${index} ===`);
  //   console.log("状态:", response.status);
  //   console.log("数据:", data);
  // });
  // data.signals.forEach((sig) => {
  //   console.log(
  //     `  ${sig.name} - ${sig.metadata.type} - ${sig.metadata.description}`,
  //   );
  // });
  // const response = await fetch(`${BASE_URL}/api/v1/signals?limit=100`, {
  //   headers,
  // });
  // const data = await response.json();

  // console.log(`Total signals: ${data.total}`);
  // data.signals.slice(0, 5).forEach((sig) => {
  //   console.log(`  ${sig.name} (${sig.category})`);
  // });
  // Inspect TRIGGER
  // const trigger = await fetch(`${BASE_URL}/api/v1/signals/macd_bullish_cross`, {
  //   headers,
  // }).then((r) => r.json());
  // console.log(`TRIGGER: ${trigger.name}`);
  // console.log(`  Description: ${trigger.metadata.description}`);
  // console.log(
  //   `  Parameters: ${Object.keys(trigger.metadata.params).join(", ")}`,
  // );

  // // Inspect FILTER
  // const filter = await fetch(`${BASE_URL}/api/v1/signals/is_above_sma`, {
  //   headers,
  // }).then((r) => r.json());
  // console.log(`\nFILTER: ${filter.name}`);
  // console.log(`  Description: ${filter.metadata.description}`);
  // console.log(
  //   `  Parameters: ${Object.keys(filter.metadata.params).join(", ")}`,
  // );
  // const strategyPayload = {
  //   name: "ETH MACD Trend Strategy",
  //   asset: "ETH",
  //   entry: [
  //     {
  //       name: "macd_bullish_cross",
  //       signal_type: "TRIGGER",
  //       timeframe: "1h",
  //       params: { window_fast: 12, window_slow: 26, window_sign: 9 },
  //     },
  //     {
  //       name: "is_above_sma",
  //       signal_type: "FILTER",
  //       timeframe: "1h",
  //       params: { window: 50 },
  //     },
  //   ],
  //   exit: [
  //     {
  //       name: "macd_bearish_cross",
  //       signal_type: "TRIGGER",
  //       timeframe: "1h",
  //       params: { window_fast: 12, window_slow: 26, window_sign: 9 },
  //     },
  //   ],
  //   reward_factor: 2.0,
  // };

  // const response = await fetch(`${BASE_URL}/api/v1/strategies`, {
  //   method: "POST",
  //   headers,
  //   body: JSON.stringify(strategyPayload),
  // });

  // const result = await response.json();
  // const strategyId = result.strategy.id;
  // console.log(`Strategy created: ${strategyId}`);
  // console.log(`Name: ${result.strategy.name}`);
  // console.log(`Status: ${result.strategy.status}`);
  // const strategyId = "76552d51-2492-4201-bb33-61358545f7c5"; // Replace with actual strategy ID
  // const response = await fetch(`${BASE_URL}/api/v1/strategies/${strategyId}`, {
  //   headers,
  // });
  // const { strategy } = await response.json();

  // console.log(`ID: ${strategy.id}`);
  // console.log(`Name: ${strategy.name}`);
  // console.log(`Asset: ${strategy.asset}`);
  // console.log(`Status: ${strategy.status}`);
  // console.log(
  //   `Entry signals: ${strategy.rules.entry.map((r) => r.name).join(", ")}`,
  // );
  // console.log(
  //   `Exit signals: ${strategy.rules.exit.map((r) => r.name).join(", ")}`,
  // );
  const strategyJson = JSON.stringify({
    name: "ETH MACD Trend Strategy",
    asset: "ETH",
    entry: [
      {
        name: "macd_bullish_cross",
        timeframe: "1h",
        signal_type: "TRIGGER",
        params: { window_fast: 12, window_slow: 26, window_sign: 9 },
      },
      {
        name: "is_above_sma",
        timeframe: "1h",
        signal_type: "FILTER",
        params: { window: 50 },
      },
    ],
    exit: [
      {
        name: "macd_bearish_cross",
        timeframe: "1h",
        signal_type: "TRIGGER",
        params: { window_fast: 12, window_slow: 26, window_sign: 9 },
      },
    ],
  });

  const backtestPayload = {
    asset: "ETH",
    interval: "1h",
    lookback_months: 12,
    initial_balance: 10000.0,
    min_balance_threshold: 0.1,
    min_trade_amount: 25.0,
    max_open_positions: 5,
    max_trades_per_day: 50,
    max_risk_per_trade: 0.01,
    max_units_per_trade: 100.0,
    max_trade_amount: 10000.0,
    volatility_window: 24,
    target_volatility: 0.02,
    volatility_mode: "stddev",
    enable_volatility_adjustment: false,
    cooldown_bars: 24,
    daily_momentum_limit: 3.0,
    weekly_momentum_limit: 3.0,
    strategy_json: strategyJson,
    execution_config: {
      atr_period: 14,
      atr_volatility_factor: 2.0,
    },
  };

  const response = await fetch(`${BASE_URL}/api/v1/backtesting/backtest`, {
    method: "POST",
    headers,
    body: JSON.stringify(backtestPayload),
  });
  const result = await response.json();
  console.log('result: ', result);

  // Save result to JSON file
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `backtest-result-${timestamp}.json`;
  fs.writeFileSync(filename, JSON.stringify(result, null, 2));
  console.log(`Result saved to ${filename}`);
  if (result.success) {
    const m = result.metrics;
    console.log(`Sharpe Ratio:    ${m.sharpe_ratio.toFixed(2)}`);
    console.log(`Sortino Ratio:   ${m.sortino_ratio.toFixed(2)}`);
    console.log(`Max Drawdown:    ${(m.max_drawdown * 100).toFixed(1)}%`);
    console.log(`Win Rate:        ${(m.win_rate * 100).toFixed(1)}%`);
    console.log(`Total Trades:    ${result.trade_count}`);
    console.log(
      `Execution Time:  ${result.execution_time_seconds.toFixed(1)}s`,
    );
  } else {
    console.log(`Backtest failed: ${result.error || "Unknown error"}`);
  }
  // const backtestId = "76552d51-2492-4201-bb33-61358545f7c5";
  // const response = await fetch(
  //   `${BASE_URL}/api/v1/backtesting/backtest/${backtestId}`,
  //   { headers },
  // );
  // const savedResult = await response.json();
  // console.log('savedResult: ', savedResult);
  // console.log(`Status: ${savedResult.status}`);
  // console.log(`Metrics:`, savedResult.metrics);
})();
