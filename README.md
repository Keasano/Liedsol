# LIESOL - Liquid Staking Protocol

LIESOL is a liquid staking protocol for Solana, allowing users to stake their SOL tokens while maintaining liquidity through LSOL tokens.

## Features

- Stake SOL tokens and receive LSOL tokens
- Unstake LSOL tokens back to SOL
- Real-time exchange rate updates
- Wallet integration with ConnectKit
- Modern and intuitive user interface

## Technology Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- ConnectKit for wallet integration
- Zustand for state management

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/app` - Next.js app router pages and layouts
- `/src/components` - Reusable React components
- `/src/store` - Global state management with Zustand
- `/public` - Static assets and images

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
