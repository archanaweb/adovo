import { useState } from "react";
import img from "../assest/images/cashoutImg.png"
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
const Faq = ()=> {
    const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((i) => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  const faqSections = [
    {
      title: 'How to make money on Opinion Views?',
      content: 'Details about how to make money on Opinion Views.'
    },
    {
      title: 'How is Opinion Views able to pay users?',
      content: 'Details about how Opinion Views is able to pay users.'
    },
    {
      title: 'How much money can you really earn on Opinion Views?',
      content: 'Details about the earning potential on Opinion Views.'
    },
    {
      title: 'How long does it take to cash out your money?',
      content: 'Details about the cash-out process and timeline.'
    }
  ];
    return (
        <>
        <div className="bg-slate-800 user-cashedout">
        <main className="py-12 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

        <div className="space-y-6">
          {faqSections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg"
              onClick={() => toggleSection(index)}
            >
              <div className="flex justify-between items-center px-6 py-4">
                <h2 className="text-xl font-bold">{section.title}</h2>
                <button className="text-gray-400 hover:text-white transition-colors duration-300">
                  {openSections.includes(index) ? (
                    <HiChevronUp size={24} />
                  ) : (
                    <HiChevronDown size={24} />
                  )}
                </button>
              </div>
              {openSections.includes(index) && (
                <div className="border-t border-gray-700 px-6 py-4">
                  <p className="text-gray-400">{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
        </div>
        </>
    )
}

export default Faq