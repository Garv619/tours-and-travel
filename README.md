# Tours and Travel Frontend

A modern, responsive React-based frontend for a tours and travel booking platform. This application allows users to browse tours, view details, and book their adventures.

## Features

✈️ **Browse Tours** - Explore a curated collection of travel packages
🔍 **Advanced Filtering** - Filter tours by price, rating, and duration
📅 **Easy Booking** - Simple booking form with date and group size selection
🛒 **Shopping Cart** - Add multiple tours to your cart
📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
⭐ **Ratings & Reviews** - See tour ratings and highlights
🌍 **Global Destinations** - Tours to amazing destinations worldwide

## Tech Stack

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **CSS3** - Styling with modern features
- **JavaScript ES6+** - Modern JavaScript

## Project Structure

```
src/
├── components/
│   ├── Header.js        # Navigation header
│   ├── Header.css
│   ├── Footer.js        # Footer component
│   ├── Footer.css
│   ├── TourCard.js      # Tour card component
│   └── TourCard.css
├── pages/
│   ├── HomePage.js      # Landing page
│   ├── HomePage.css
│   ├── ToursListPage.js # Tours listing with filters
│   ├── ToursListPage.css
│   ├── TourDetailPage.js # Individual tour details
│   ├── TourDetailPage.css
│   ├── BookingPage.js   # Booking form
│   ├── BookingPage.css
│   ├── CartPage.js      # Shopping cart
│   └── CartPage.css
├── data/
│   └── tours.js         # Sample tour data
├── App.js               # Main app component
├── App.css
├── index.js             # React entry point
└── index.css            # Global styles
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tours-and-travel.git
cd tours-and-travel
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Available Scripts

### `npm start`
Runs the app in development mode.

### `npm build`
Builds the app for production.

### `npm test`
Launches the test runner.

## Features Explained

### Home Page
- Hero section with call-to-action
- Featured tours showcase
- Why choose us section with benefits

### Tours Listing
- Grid view of all available tours
- Real-time filtering by:
  - Search term (name/location)
  - Price range
  - Minimum rating
  - Maximum duration
- Tour cards with key information

### Tour Details
- Full tour information and description
- Photo gallery
- Highlights and amenities
- Day-by-day itinerary
- What's included
- Quick booking sidebar

### Booking
- User information form
- Date selection
- Group size selection
- Real-time price calculation
- Form validation

### Shopping Cart
- View all bookings
- Remove items
- Price summary with taxes
- Checkout button

## Tour Data

Tours are stored in `src/data/tours.js` with the following structure:

```javascript
{
  id: 1,
  name: "Tour Name",
  location: "City, Country",
  description: "Tour description",
  image: "image-url",
  price: 999,
  duration: 5,
  rating: 4.8,
  highlights: [...],
  itinerary: [...],
  included: [...]
}
```

## Styling

The application uses a modern gradient color scheme:
- Primary gradient: `#667eea` to `#764ba2`
- Background: `#f8f9fa`
- Text: `#2d3436`
- Accents: `#667eea`

All styles are responsive and mobile-friendly.

## Future Enhancements

- [ ] Payment integration
- [ ] User authentication
- [ ] Wishlist feature
- [ ] Tour reviews and ratings
- [ ] Multi-language support
- [ ] Admin dashboard
- [ ] Real-time availability
- [ ] Email confirmations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Contact

For questions or feedback, please reach out to info@travelhub.com

---

Built with ❤️ for travel enthusiasts
