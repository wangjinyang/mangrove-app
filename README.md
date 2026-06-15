# Mangrove App

A cryptocurrency trading strategy backtesting application built with Mangrove AI SDK.

## Requirements

- Node.js 14+
- npm or yarn

## Installation

```bash
npm install
```

## Configuration

1. Copy the environment variables example file:

```bash
cp .env.example .env
```

2. Edit the `.env` file with your credentials:

```env
# Ethereum wallet private key
PRIVATE_KEY=your_private_key_here

# RPC URL (defaults to Base Mainnet)
RPC_URL=https://mainnet.base.org

# Mangrove API Key (optional, but recommended for production)
API_KEY=your_api_key_here
```

#### Start Development Server

```bash
npm run dev
```

This uses nodemon to automatically watch for file changes and rerun.

#### Run Directly

```bash
npx ts-node src/index.ts
```


## Tech Stack

- TypeScript
- Node.js
- ethers.js
- Mangrove AI SDK
- dotenv

## License

ISC
