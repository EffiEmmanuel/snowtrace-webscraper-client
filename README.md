````
# Snowtrace Data Viewer

## Overview

Snowtrace Data Viewer is a React web application that fetches and displays web scraped data from [snowtrace.io](https://snowtrace.io). It utilizes ReactJS for the frontend rendering, Tailwind CSS for styling, and Socket.IO for real-time updates.

The frontend of the application dynamically updates every 30 minutes through a WebSocket connection to ensure the displayed data remains current.

## Features

- **Real-time Updates**: Data is fetched and updated in real-time every 30 minutes using Socket.IO.
- **Chronological Display**: Displays scraped data in chronological order.
- **Responsive Design**: Built with Tailwind CSS, ensuring a responsive and mobile-friendly user interface.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/EffiEmmanuel/snowtrace-webscraper-client.git
   cd snowtrace-data-viewer
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000` to view the application.

## Technologies Used

- **ReactJS**: Frontend JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Socket.IO**: Real-time bidirectional event-based communication library.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or a pull request on the [GitHub repository](https://github.com/EffiEmmanuel/snowtrace-webscraper-client).

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

## Acknowledgements

- Thanks to [snowtrace.io](https://snowtrace.io) for providing the web scraped data.
- Built with love by [Effi Emmanuel](https://github.com/EffiEmmanuel).

```

```
