# CodersBrain Website - React Version

This is the React version of the CodersBrain website, converted from the original HTML/CSS/JavaScript implementation.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd codersbrain-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
codersbrain-react/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Footer.css      # Footer styles
│   │   ├── Chatbot.jsx      # Chatbot component
│   │   ├── Chatbot.css      # Chatbot styles
│   │   └── ServiceModal.jsx # Service detail modal
│   ├── pages/
│   │   ├── Home.jsx         # Home page with all sections
│   │   ├── About.jsx        # About page
│   │   ├── Services.jsx     # Services page
│   │   ├── Careers.jsx      # Careers page
│   │   ├── Blogs.jsx        # Blogs page
│   │   └── Contact.jsx      # Contact page
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## Features

- ✅ Fully responsive design
- ✅ React Router for navigation
- ✅ Interactive chatbot (MEERA)
- ✅ Service detail modals
- ✅ Smooth scrolling
- ✅ Mobile-friendly navigation
- ✅ All original content preserved

## Pages

- **Home** (`/`) - Main landing page with all sections
- **About** (`/about`) - About page
- **Services** (`/services`) - Services page
- **Careers** (`/careers`) - Careers page
- **Blogs** (`/blogs`) - Blogs page
- **Contact** (`/contact`) - Contact page

## Components

### Header
Navigation component with mobile menu toggle and active link highlighting.

### Footer
Footer with company info, useful links, contact information, and social media links.

### Chatbot
Interactive chatbot component (MEERA) that can answer questions about the company, services, and contact information.

### ServiceModal
Modal component that displays detailed information about services when clicked.

## Styling

All styles are preserved from the original HTML file. The CSS uses CSS variables for consistent theming and includes comprehensive responsive breakpoints for mobile, tablet, and desktop views.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for CodersBrain use.







