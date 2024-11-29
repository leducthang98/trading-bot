import dotenv from 'dotenv';
import { SolanaMemeCoinTradingBot } from 'src/bots/solana-meme-coin-trading.bot';
import { stringToBoolean } from 'src/utils/common.util';

dotenv.config();

function main() {
  if (stringToBoolean(process.env.SOLANA_MEME_COIN_TRADING_BOT_ENABLED)) {
    new SolanaMemeCoinTradingBot().run()
  }
}

main();
