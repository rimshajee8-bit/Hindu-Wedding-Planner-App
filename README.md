# Hindu Wedding Planner App

A comprehensive application suite for planning Hindu weddings with integrated utilities including a to-do list manager and joke generator.

## Features

### 🎊 Main Wedding Planner
- Ceremony scheduling and timeline management
- Guest list management
- Vendor coordination
- Budget tracking
- Traditional ritual guides

### ✅ To-Do List Application
- Create, read, update, and delete tasks
- Local storage persistence
- Task completion status tracking
- Category organization
- Due date management

### 😄 Random Joke Generator
- Fetch random jokes from external API
- Multiple joke categories
- Share functionality
- Offline support

## Project Structure

```
Hindu-Wedding-Planner-App/
├── README.md
├── package.json
├── .gitignore
├── todo-app/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── README.md
├── joke-generator/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── README.md
└── wedding-planner/
    ├── src/
    ├── components/
    ├── pages/
    └── README.md
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Storage**: Browser LocalStorage API
- **APIs**: External Joke API (JokeAPI)
- **Build**: Node.js compatible

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (optional, for development server)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rimshajee8-bit/Hindu-Wedding-Planner-App.git
cd Hindu-Wedding-Planner-App
```

2. Open individual applications:
- **To-Do List**: Open `todo-app/index.html` in your browser
- **Joke Generator**: Open `joke-generator/index.html` in your browser

## Usage

### To-Do List Application
- Add new tasks with the input field
- Mark tasks as complete by clicking the checkbox
- Delete tasks using the delete button
- All changes are automatically saved to local storage

### Joke Generator
- Click "Get Joke" to fetch a random joke
- Select a category from the dropdown
- Share jokes on social media
- Enjoy offline-loaded jokes

## API Reference

### Joke Generator API
- **API**: [JokeAPI](https://jokeapi.dev/)
- **Endpoint**: `https://v2.jokeapi.dev/joke/Any`
- **Rate Limit**: 120 requests per minute

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Authors

- **rimshajee8-bit** - Initial work

## Support

For support, email support@hinduWeddingPlanner.com or open an issue on GitHub.

## Roadmap

- [ ] Wedding ceremony calendar integration
- [ ] Guest management system
- [ ] Budget calculator
- [ ] Vendor database
- [ ] Mobile app version (React Native)
- [ ] Multi-language support (Hindi, Sanskrit)
- [ ] Traditional ritual guides with videos

## Changelog

### Version 1.0.0 (2026-08-20)
- Initial project setup
- To-Do List application with local storage
- Random Joke Generator with API integration
