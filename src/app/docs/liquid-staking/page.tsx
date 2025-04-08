import AnimatedContent from '../components/AnimatedContent';

export default function LiquidStakingPage() {
  return (
    <AnimatedContent>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-medium mb-4">Understanding Liquid Staking</h2>
          <p className="text-gray-600 mb-4">
            Liquid staking is a revolutionary approach in the DeFi space that allows users to stake their assets while maintaining liquidity. When you stake through LIESOL, you receive LSOL tokens that represent your staked SOL, which can be used across the DeFi ecosystem.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium mb-4">How It Works</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">1. Deposit SOL</h3>
              <p className="text-gray-600">
                Users deposit their SOL tokens into the LIESOL protocol. The minimum deposit amount is 0.1 SOL.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">2. Receive LSOL</h3>
              <p className="text-gray-600">
                In return for your deposit, you receive LSOL tokens at a 1:1 ratio. These tokens represent your staked position and can be freely transferred or used in DeFi applications.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">3. Earn Staking Rewards</h3>
              <p className="text-gray-600">
                Your staked SOL continues to earn staking rewards, which are automatically reflected in the increasing value of your LSOL tokens relative to SOL.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-medium mb-4">Benefits of Liquid Staking</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Maintain liquidity while earning staking rewards</li>
            <li>No minimum staking period - unstake at any time</li>
            <li>Participate in DeFi with your staked assets</li>
            <li>Automatic compounding of staking rewards</li>
            <li>Reduced transaction costs compared to traditional staking</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-medium mb-4">The LIESOL Approach</h2>
          <p className="text-gray-600 mb-4">
            LIESOL implements liquid staking with a focus on security, efficiency, and user experience. Our protocol:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Uses a battle-tested smart contract architecture</li>
            <li>Maintains a diverse validator set to maximize rewards and minimize risks</li>
            <li>Provides transparent fee structure and reward distribution</li>
            <li>Offers seamless integration with major DeFi protocols</li>
            <li>Features regular security audits and insurance coverage</li>
          </ul>
        </section>
      </div>
    </AnimatedContent>
  );
} 