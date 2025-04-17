'use client';

import { useState, useEffect, useRef } from 'react';
import { XMarkIcon as XIcon, PlusIcon } from '@heroicons/react/24/outline';
import { AnimatedText } from '../ui/AnimatedText';

interface FAQItemProps {
  number: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ number, question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div 
      className={`relative flex items-stretch border-2 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden
        ${isOpen ? 'border-[#A8EC8F] bg-white rounded-[25px] sm:rounded-[32px] md:rounded-[42px]' : 'border-[#F1F3F3] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] h-[60px] sm:h-[70px] md:h-[80px]'}`}
      onClick={onClick}
    >
      <div className="absolute left-[-2px] top-[-2px] bottom-[-2px] w-[60px] sm:w-[70px] md:w-[80px]">
        <div className={`absolute inset-0 rounded-[25px] sm:rounded-[35px] md:rounded-[40px] transition-all duration-300 ease-in-out
          ${isOpen ? 'bg-[#A8EC8F]' : 'border-2 border-[#F1F3F3]'}`} />
        <div className="absolute w-[60px] sm:w-[70px] md:w-[80px] h-[60px] sm:h-[70px] md:h-[80px] flex items-center justify-center">
          <span className="text-[16px] sm:text-[18px] md:text-[20px] text-[#212121] leading-none">
            {String(number).padStart(2, '0')}
          </span>
        </div>
      </div>
      <div className="flex-1 pl-[70px] sm:pl-[80px] md:pl-[96px] pr-10 sm:pr-12 md:pr-16 pt-4 sm:pt-5 md:pt-6 pb-6 sm:pb-7 md:pb-8">
        <div className="flex flex-col">
          <h3 className="text-[#212121] text-[16px] sm:text-[18px] md:text-xl font-medium">
            {question}
          </h3>
          <div className={`overflow-hidden transition-[max-height] duration-400 ease-out transition-opacity duration-300 ease-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pt-3 sm:pt-4">
              <p className="text-[#636161] text-[13px] sm:text-[14px] md:text-base whitespace-pre-wrap font-light">{answer}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-3 sm:right-4 md:right-6 top-[20px] sm:top-[24px] md:top-[28px]">
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <PlusIcon className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] stroke-[3px]" />
        </div>
      </div>
    </div>
  );
};

const faqs = [
  {
    id: '01',
    question: 'What Is Staking On Solana?',
    answer: 'Staking on Solana involves locking your $SOL tokens to help secure the network and validate transactions as part of its proof-of-stake system. In exchange, you earn $SOL rewards based on your contribution to the blockchain\'s operations.',
  },
  {
    id: '02',
    question: 'How Do I Start Staking My $SOL?',
    answer: 'To start staking your $SOL, you need to...',
  },
  {
    id: '03',
    question: 'What Rewards Can I Expect From Staking?',
    answer: 'Staking rewards vary based on network conditions...',
  },
  {
    id: '04',
    question: 'Is My Staked $SOL Safe?',
    answer: 'Your staked $SOL remains secure through...',
  },
  {
    id: '05',
    question: 'Can I Unstake My $SOL Anytime?',
    answer: 'Yes, you can unstake your $SOL at any time...',
  },
  {
    id: '06',
    question: 'What Is The $LSOL Token?',
    answer: 'The $LSOL token represents your staked SOL...',
  },
  {
    id: '07',
    question: 'Are There Fees For Staking?',
    answer: 'Our staking service includes minimal fees...',
  },
  {
    id: '08',
    question: 'How Does Liquid Staking Work?',
    answer: 'Liquid staking allows you to earn staking rewards while maintaining liquidity...',
  },
];

export const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState('01');
  const [showFaqs, setShowFaqs] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowFaqs(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-[60px] sm:pt-[100px] md:pt-[150px]">
      <div className="mobile-container mx-auto">
        <div ref={titleRef} className="text-center mb-8 sm:mb-12">
          <p className="text-[#636161] text-[12px] sm:text-[14px] font-normal mb-3 sm:mb-4">FAQs</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#212121]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="opacity-0 transition-all duration-300 ease-out"
                style={{ 
                  opacity: showFaqs ? 1 : 0,
                  transform: showFaqs ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <FAQItem
                  number={Number(faq.id)}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === faq.id}
                  onClick={() => setOpenFaq(openFaq === faq.id ? '' : faq.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 