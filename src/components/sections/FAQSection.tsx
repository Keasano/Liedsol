'use client';

import { useState } from 'react';

const faqs = [
  {
    id: '01',
    question: 'What Is Staking On Solana?',
    answer: 'Staking on Solana involves locking your $SOL tokens to help secure the network and validate transactions as part of its proof-of-stake system. In exchange, you earn $SOL rewards based on your contribution to the blockchain\'s operations.'
  },
  {
    id: '02',
    question: 'How Do I Start Staking My $SOL?',
    answer: 'To start staking your $SOL, simply connect your wallet, choose the amount you want to stake, and confirm the transaction. Our platform handles all the technical details, making it easy for you to earn rewards.'
  },
  {
    id: '03',
    question: 'What Rewards Can I Expect From Staking?',
    answer: 'Current staking rewards on our platform average 8.4% APY. The exact amount varies based on network conditions and total staked amount. Rewards are distributed continuously and can be claimed at any time.'
  },
  {
    id: '04',
    question: 'Is My Staked $SOL Safe?',
    answer: 'Yes, your staked $SOL is secured by robust smart contracts that have undergone multiple security audits. We also maintain insurance coverage for additional protection of staked assets.'
  },
  {
    id: '05',
    question: 'Can I Unstake My $SOL Anytime?',
    answer: 'Yes, you can unstake your $SOL at any time. The unstaking process takes approximately 2-3 days due to Solana\'s epoch system. Once complete, your $SOL will be available in your wallet.'
  },
  {
    id: '06',
    question: 'What Is The $LSOL Token?',
    answer: 'The $LSOL token represents your staked $SOL position. It\'s a liquid staking derivative that can be used in DeFi protocols while your original stake continues earning rewards.'
  },
  {
    id: '07',
    question: 'Are There Fees For Staking?',
    answer: 'We charge a competitive 3% fee on staking rewards. This fee helps maintain the platform and develop new features to enhance your staking experience.'
  },
  {
    id: '08',
    question: 'How Does Liquid Staking Work?',
    answer: 'Liquid staking allows you to stake your $SOL while receiving $LSOL tokens in return. These tokens can be traded or used in DeFi protocols, giving you flexibility while earning staking rewards.'
  }
];

export const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState('01');

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#636161] text-lg mb-4">FAQs</p>
          <h2 className="text-4xl font-bold text-[#212121]">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`mb-4 rounded-[50px] overflow-hidden transition-all duration-300 ${
                openFaq === faq.id ? 'bg-white border-2 border-[#A8EC8F]' : 'bg-white'
              }`}
            >
              <button
                className="w-full text-left px-8 py-6 flex items-start"
                onClick={() => setOpenFaq(openFaq === faq.id ? '' : faq.id)}
              >
                <div className="flex items-center">
                  <div 
                    className={`w-[80px] h-full flex items-center ${
                      openFaq === faq.id ? 'bg-[#A8EC8F]' : ''
                    }`}
                  >
                    <span className="text-[20px] font-medium text-[#212121]">{faq.id}</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl text-[#212121]">{faq.question}</h3>
                    {openFaq === faq.id && (
                      <p className="mt-4 text-[#636161]">{faq.answer}</p>
                    )}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 