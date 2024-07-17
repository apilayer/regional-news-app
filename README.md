# Regional News App

A web application that displays news articles based on the user's geographical location. 

Built with Next.js, [IPStack API](https://ipstack.com/), and [World News API](https://apilayer.com/marketplace/world_news-api), it offers a personalized news experience tailored to the user's region.

## Features

- 📍 Automatic user location detection using IPStack API
- 📰 Region-specific news articles from World News API
- 🌐 Support for multiple regions worldwide
- 📱 Responsive design for various devices

## Installation

To set up the Regional News App project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/regional-news-app.git
   ```

2. Navigate to the project directory:
   ```
   cd regional-news-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env.local` file in the root directory and add your API keys:
   ```
   IPSTACK_API_KEY=your_ipstack_api_key_here
   WORLD_NEWS_API_KEY=your_world_news_api_key_here
   ```

5. Run the development server:
   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Upon loading, the app will attempt to detect your current location using the IPStack API.
2. Once your location is determined, the app will fetch relevant news articles for your region using the World News API.
3. Browse through the displayed news articles relevant to your detected location.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [IPStack API](https://ipstack.com/) for geolocation
- [World News API](https://apilayer.com/marketplace/world_news-api) for news content

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.