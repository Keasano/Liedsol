'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({ title, content, isOpen, onToggle }: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-800">
      <button
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-white">{title}</span>
        <ChevronDownIcon
          className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-4 text-gray-400">{content}</div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: Array<{
    title: string;
    content: string;
  }>;
  className?: string;
}

export const Accordion = ({ items, className = '' }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
        />
      ))}
    </div>
  );
}; 