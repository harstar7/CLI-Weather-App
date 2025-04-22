# Weather CLI Application 🌦️

A command-line tool that fetches and displays current weather conditions for any city worldwide using the Weatherstack API.

## Features ✨

- **Real-time weather data** - Get current conditions for any valid city
- **Comprehensive metrics** - Temperature, humidity, wind speed, visibility and more
- **User-friendly interface** - Clean formatting with emoji visualization
- **Error handling** - Graceful handling of invalid inputs and API errors

## Installation ⚙️

1. Ensure you have [Node.js](https://nodejs.org/) (v14+) installed
2. Clone this repository
   ```bash
   git clone https://github.com/yourusername/CLI-Weather-App.git
3. Install dependencies
   ```bash
   npm install
4. Run the scrit
   ```bash
   node app.js

   
#API Key Configuration 🔑
This application uses the [Weatherstack API](https://weatherstack.com/)
 To get your free API key:

1. Visit [weatherstack.com](https://weatherstack.com/)
2. Click "Get Free API Key"
3. Register for a free account (no credit card required)
4. Find your API key in your dashboard
   
Then Replace the placeholder in app.js:
```bash
const API_KEY = 'your_api_key_here';
