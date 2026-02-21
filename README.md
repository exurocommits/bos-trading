# BOS Trading Strategy - MT5 Indicator & Dashboard

## 📊 Features

- **Break of Structure Strategy**: Identifies key market structure breaks
- **Real-Time Signals**: Live trading signals with entry, stop loss, and take profit
- **Confidence Scores**: AI-powered confidence ratings for each signal
- **MT5 Indicator**: Downloadable MetaTrader 5 indicator
- **Performance Tracking**: Track monthly profits and trade statistics
- **Multi-Timeframe**: Works on H1, H4, and D1 timeframes
- **Major Pairs**: Optimized for EUR/USD, GBP/USD, USD/JPY, etc.

## 📦 Installation

```bash
npm install
npm run dev
```

## 🎯 How to Use

1. **Dashboard**: View real-time trading signals
2. **Download MT5 Indicator**: Install in MetaTrader 5
3. **Configure Settings**: Set preferred parameters
4. **Monitor Signals**: Receive notifications for new entries
5. **Execute Trades**: Manually execute based on signals

## 📋 MT5 Indicator Installation

1. Download the indicator file (bos-trading.mq5)
2. Open MetaTrader 5
3. Go to File → Open Data Folder → MQL5 → Indicators
4. Copy the indicator file
5. Refresh MT5 (F5)
6. Drag indicator onto chart
7. Configure settings

## ⚙️ Settings

| Parameter | Default | Description |
|-----------|---------|-------------|
| Timeframe | H1 | Chart timeframe |
| Risk/Reward | 1:2 | Stop loss to take profit ratio |
| Min Confidence | 70% | Minimum confidence level for signals |
| Alert Notifications | On | Receive alerts for new signals |
| Email Notifications | Off | Receive email alerts |

## 📈 Strategy Rules

### Buy Signals
1. Price breaks above previous structure
2. Retest of broken structure
3. Bullish candle confirmation
4. Enter on breakout

### Sell Signals
1. Price breaks below previous structure
2. Retest of broken structure
3. Bearish candle confirmation
4. Enter on breakout

### Risk Management
- Stop loss: Below previous low (buy) / Above previous high (sell)
- Take profit: 2x stop loss distance
- Risk per trade: 1-2% of account

## 💳 Pricing

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | Basic dashboard, 3 signals/day |
| Pro | $49/mo | Full dashboard, MT5 indicator, unlimited signals |
| Lifetime | $299 | One-time payment, lifetime access, all features |

## ⚠️ Disclaimer

**TRADING RISK WARNING**: Trading foreign exchange on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange, you should carefully consider your investment objectives, level of experience, and risk appetite.

Past performance of any trading system or methodology is not necessarily indicative of future results.

**This is for educational purposes only. Trade at your own risk.**

## 📄 License

MIT

## 🤝 Support

For issues and questions, please open a GitHub issue.
