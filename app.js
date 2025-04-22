import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const API_KEY = 'Your API_KEY';

async function getWeather() {
    try {
        // Get city input with validation
        const city = await rl.question("Enter the name of the city: ");
        if (!city || city.trim() === '') {
            throw new Error('City name cannot be empty');
        }

        // Make API request
        const url = `https://api.weatherstack.com/current?access_key=${API_KEY}&query=${encodeURIComponent(city)}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch weather data (HTTP ${response.status})`);
        }

        const weatherData = await response.json();

        // Check for API errors
        if (weatherData.error) {
            throw new Error(weatherData.error.info || 'Unknown API error');
        }

        // Display formatted weather information
        console.log('\n 🌦️ Weather Report 🌦️');
        console.log('───────────────────────');
        console.log(`📍Location: ${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`);
        console.log(`🌡️ Temperature: ${weatherData.current.temperature}°C (Feels like ${weatherData.current.feelslike}°C)`);
        console.log(`💧 Humidity: ${weatherData.current.humidity}%`);
        console.log(`🌬️ Wind: ${weatherData.current.wind_speed} km/h ${weatherData.current.wind_dir}`);
        console.log(`☁️ Conditions: ${weatherData.current.weather_descriptions.join(', ')}`);
        console.log(`👀 Visibility: ${weatherData.current.visibility} km`);
        console.log('───────────────────────');
        console.log(`🕒 Last Updated: ${weatherData.current.observation_time}`);
        
    } catch (error) {
        console.error('\n❌ Error:', error.message);
        console.log('Please try again with a valid city name.');
    } finally {
        rl.close();
    }
}

// Start the application
console.log('Weather App - Get current weather conditions\n');
await getWeather();