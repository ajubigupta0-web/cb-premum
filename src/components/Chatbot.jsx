import { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const chatbotData = {
  "about": "CodersBrain was founded in 2015 by IIT Guwahati alumnus Mr. Sonu Kumar Gupta. We're on a mission to transform how tech talent is acquired in a fast-paced digital world. With over a decade of IT recruitment experience, we offer agile, scalable hiring solutions including contract staffing, contract-to-hire, and permanent placements.",
  "services": "We offer comprehensive IT services including IT Staffing (Permanent & Temporary), Staff Augmentation, IT Consulting, Custom Software Development, Cloud & DevOps, and AI & Data Engineering solutions.",
  "contact": "You can reach us at:\n📍 #1245, 27th Main Rd, HSR Layout, Sector 2, Bangalore 560102, INDIA\n📞 +919772635332 / +919752337875\n📧 sk@codersbrain.com",
  "staffing": "We provide IT staffing solutions including permanent placements, contract staffing, contract-to-hire, and staff augmentation. Our rigorous vetting process ensures we match the right talent with your needs.",
  "location": "Our office is located at #1245, 27th Main Rd, HSR Layout, Sector 2, Bangalore 560102, INDIA.",
  "email": "You can contact us at sk@codersbrain.com",
  "phone": "You can reach us at +919772635332 or +919752337875"
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Add welcome message on mount
    const welcomeMsg = {
      type: 'bot',
      content: "Hi! I'm Meera, your chatbot assistant. I can help you learn more about CodersBrain, our services, contact information, and more. Feel free to ask me anything!"
    };
    setMessages([welcomeMsg]);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = (text) => {
    const userMsg = {
      type: 'user',
      content: text
    };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let response = "I'm Meera, your assistant. How can I help you today?";
      
      if (lowerText.includes('about') || lowerText.includes('company')) {
        response = chatbotData.about;
      } else if (lowerText.includes('service')) {
        response = chatbotData.services;
      } else if (lowerText.includes('contact') || lowerText.includes('reach')) {
        response = chatbotData.contact;
      } else if (lowerText.includes('staffing') || lowerText.includes('hire')) {
        response = chatbotData.staffing;
      } else if (lowerText.includes('location') || lowerText.includes('address')) {
        response = chatbotData.location;
      } else if (lowerText.includes('email')) {
        response = chatbotData.email;
      } else if (lowerText.includes('phone') || lowerText.includes('call')) {
        response = chatbotData.phone;
      } else {
        response = "I can help you with information about our company, services, contact details, staffing solutions, and more. Try asking about our services or contact information!";
      }

      const botMsg = {
        type: 'bot',
        content: response
      };
      setMessages(prev => [...prev, botMsg]);
    }, 500);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-label">MEERA</div>
      <button className="chatbot-toggle" onClick={toggleChatbot} aria-label="Open chat">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          <line x1="9" y1="10" x2="15" y2="10"></line>
          <line x1="9" y1="14" x2="13" y2="14"></line>
        </svg>
      </button>
      <div className={`chatbot-window ${isOpen ? 'active' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-left">
            <div className="chatbot-avatar">
              <span>MEERA</span>
            </div>
            <h3>Meera</h3>
          </div>
          <button className="chatbot-close" onClick={toggleChatbot}>×</button>
        </div>
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              <div className="message-avatar">{msg.type === 'user' ? 'U' : 'M'}</div>
              <div className="message-content">{msg.content}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chatbot-quick-questions">
          <button className="quick-question" onClick={() => sendMessage('Tell me about CodersBrain')}>
            Tell me about CodersBrain
          </button>
          <button className="quick-question" onClick={() => sendMessage('What services do you offer?')}>
            What services do you offer?
          </button>
          <button className="quick-question" onClick={() => sendMessage('How can I contact you?')}>
            How can I contact you?
          </button>
          <button className="quick-question" onClick={() => sendMessage('Tell me about your staffing solutions')}>
            Tell me about your staffing solutions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;







