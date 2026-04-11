import { useState } from 'react';

export default function FAQAccordion({ items }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="space-y-3">
      {items.map(({ id, question, answer }) => {
        const isOpen = openId === id;
        return (
          <div
            key={id}
            className={`
              rounded-sm overflow-hidden border transition-all duration-250
              ${isOpen
                ? 'bg-[#0d1f3c] border-[#0057B8]/60 shadow-[0_0_20px_rgba(0,87,184,0.15)]'
                : 'bg-[#111827] border-gray-800 hover:border-gray-600'
              }
            `}
          >
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none group"
              onClick={() => setOpenId(isOpen ? null : id)}
              aria-expanded={isOpen}
            >
              <span className={`font-semibold text-sm sm:text-base pr-4 transition-colors duration-200 ${isOpen ? 'text-[#4da6ff]' : 'text-white group-hover:text-[#0057B8]'}`}>
                {question}
              </span>
              <span
                className={`
                  flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center
                  transition-all duration-300
                  ${isOpen
                    ? 'border-[#0057B8] bg-[#0057B8] text-white rotate-45'
                    : 'border-gray-600 text-gray-400 group-hover:border-[#0057B8] group-hover:text-[#0057B8]'
                  }
                `}
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-5 text-gray-300 text-sm leading-relaxed border-t border-[#0057B8]/20 pt-4">
                {answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
