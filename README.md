# Movie Favorites App

A React application that allows users to browse movies, search for their favorites, and manage a personal favorites list. This project demonstrates core React concepts including hooks, context API, routing, and API integration.

## Demo

Watch the full tutorial and demo of this application:

<!-- Replace with actual video link -->
[![Movie Favorites App Demo]()]([https://www.youtube.com/watch?v=VIDEO_ID](https://github.com/AmnonTamsut/Movie-Finder-App/blob/main/MovieApp%20Demo.mp4))

*Video will be added soon - check back for the complete walkthrough!*

## Features

- 🎬 Browse and search movies
- ⭐ Add/remove movies from favorites
- 📱 Responsive movie grid layout
- 🔍 Real-time search functionality
- 💾 Persistent favorites using React Context
- 🚀 Fast navigation with React Router
- ⚡ Loading states and error handling

## Technologies Used

- **React** - Frontend framework
- **React Router** - Client-side routing
- **React Context API** - State management for favorites
- **React Hooks** - useState, useEffect, useContext
- **CSS** - Styling and responsive design
- **Movie API** - External API for movie data

## Key React Concepts Covered

This project demonstrates several important React concepts:

### Hooks
- `useState` - Managing component state
- `useEffect` - Side effects and API calls
- `useContext` - Accessing global state

### Context API
- Creating and providing context for favorites
- Consuming context across components
- Global state management without prop drilling

### Other Concepts
- **JSX** - React's syntax extension
- **Conditional Rendering** - Showing different UI based on state
- **Event Handling** - User interactions
- **Component Composition** - Building reusable components
- **API Integration** - Fetching and displaying external data
- **Error Handling** - Managing API errors gracefully
- **Loading States** - Providing user feedback during async operations

## Project Structure

```
src/
├── components/
│   ├── MovieGrid/
│   ├── MovieCard/
│   └── SearchBar/
├── context/
│   └── FavoritesContext.js
├── pages/
│   ├── Home/
│   └── Favorites/
├── App.js
└── index.js
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd movie-favorites-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

### Browsing Movies
- The homepage displays a grid of popular movies
- Use the search bar to find specific movies
- Click on any movie to view more details

### Managing Favorites
- Click the heart icon on any movie to add it to favorites
- Navigate to the "Favorites" page to view your saved movies
- Click the heart icon again to remove movies from favorites
- Favorites persist across browser sessions using React Context

### Navigation
- Use the navigation menu to switch between "Home" and "Favorites"
- The app uses React Router for smooth, client-side navigation

## API Integration

The app integrates with a movie database API to fetch:
- Popular movies for the homepage
- Search results based on user queries
- Movie details and metadata

## Component Architecture

### FavoritesContext
Provides global state management for the favorites feature:
- Stores favorite movie IDs
- Provides functions to add/remove favorites
- Persists data across component re-renders

### MovieGrid
Reusable component that displays movies in a responsive grid layout:
- Used on both Home and Favorites pages
- Handles different data sources (all movies vs. favorites)
- Responsive design that adapts to different screen sizes

### MovieCard
Individual movie display component:
- Shows movie poster, title, and basic info
- Includes favorite toggle functionality
- Handles loading and error states for images

## Styling

The application uses CSS for styling with:
- Responsive grid layouts
- Mobile-first design approach
- Smooth transitions and hover effects
- Loading and error state indicators

## Learning Outcomes

By building this project, you'll gain experience with:

1. **React Fundamentals** - Components, props, and state
2. **Modern React Patterns** - Hooks and functional components
3. **State Management** - Local state vs. global context
4. **API Integration** - Fetching and displaying external data
5. **Routing** - Single-page application navigation
6. **Error Handling** - Graceful degradation and user feedback
7. **Responsive Design** - Mobile-friendly layouts

## Future Enhancements

Potential improvements to extend this project:

- User authentication and personalized favorites
- Movie ratings and reviews
- Advanced filtering and sorting options
- Watchlist functionality
- Social sharing features
- Offline support with service workers

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the movie database API for providing the data
- React team for the excellent documentation and tools
- Community tutorials and resources that inspired this project

---

**Note**: This project was created as an educational resource to demonstrate React concepts. All code is available in this repository for learning purposes.
