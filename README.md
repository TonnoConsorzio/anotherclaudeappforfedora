# Claude for Linux 🐧

An unofficial desktop application for Claude AI on Linux, built with Electron.

> **Note**: This is my first desktop application! I'm an Italian developer learning to build cross-platform apps. Feedback and contributions are very welcome! 🇮🇹

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Linux-green.svg)

## ✨ Features

- 🖥️ Native desktop application for Linux
- 🔒 Secure and sandboxed environment
- 📦 Available as AppImage, RPM, and DEB packages
- 🎨 Clean and dedicated interface
- 🔗 External links open in your default browser
- 🚀 Fast and lightweight

## 📥 Download

Go to the [Releases](https://github.com/TonnoConsorzio/anotherclaudeappforfedora/releases) section to download the latest version.

### Available Formats

- **AppImage**: Works on all Linux distributions (recommended)
- **RPM**: For Fedora, RHEL, openSUSE, and derivatives
- **DEB**: For Ubuntu, Debian, Linux Mint, and derivatives

## 🔧 Installation

### AppImage (Recommended - Works Everywhere)

```bash
# Download the AppImage from Releases
chmod +x Claude-*.AppImage

# Run it
./Claude-*.AppImage
```

### RPM (Fedora, RHEL, CentOS, openSUSE)

```bash
sudo dnf install ./Claude-*.rpm
```

### DEB (Ubuntu, Debian, Linux Mint)

```bash
sudo dpkg -i Claude-*.deb
sudo apt-get install -f  # Install any missing dependencies
```

## 🛠️ Development

Want to build from source or contribute? Here's how:

### Prerequisites

- Node.js >= 18
- npm >= 9

### Setup

```bash
# Clone the repository
git clone https://github.com/TonnoConsorzio/anotherclaudeappforfedora.git
cd anotherclaudeappforfedora

# Install dependencies
npm install

# Run in development mode
npm start
```

### Building

```bash
# Build all formats
npm run build:all

# Or build specific formats
npm run build:appimage  # AppImage only
npm run build:rpm       # RPM only
npm run build:deb       # DEB only
```

The built packages will be in the `dist/` folder.

## 📖 How It Works

This application is a simple Electron wrapper for the official Claude web interface (https://claude.ai). Here's what makes it work:

- **main.js**: Creates the application window and loads claude.ai
- **package.json**: Defines dependencies and build configuration
- **electron-builder**: Packages the app for different Linux distributions

### The 80/20 Principle Applied

Following the Pareto principle:
- 20% of the code handles loading claude.ai in a desktop window
- 80% of the value comes from having a dedicated, native-feeling application

## 🤝 Contributing

This is my first desktop application, so I'm learning as I go! Contributions, suggestions, and feedback are very welcome.

### How to Contribute

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### What I'd Love Help With

- 🐛 Bug reports and fixes
- 🎨 UI/UX improvements
- 📚 Documentation improvements
- 🌍 Testing on different Linux distributions
- ✨ New feature suggestions

## 📝 Project Structure

```
anotherclaudeappforfedora/
├── main.js              # Main Electron process
├── package.json         # Dependencies and build config
├── assets/
│   └── icon.png        # Application icon
├── .github/
│   └── workflows/
│       └── build.yml   # GitHub Actions for automated builds
└── README.md           # You are here!
```

## 🙏 Acknowledgments

- [Anthropic](https://anthropic.com) for creating Claude AI
- [Electron](https://electronjs.org) for the amazing framework
- The Linux community for inspiration and support
- Everyone who helped me learn and build this!

## ⚠️ Disclaimer

This is an **unofficial** project and is not affiliated with or endorsed by Anthropic. It's simply a wrapper to access claude.ai through a dedicated desktop application.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About Me

I'm an Italian developer passionate about open source and learning new technologies. This is my first desktop application, created to solve the problem of not having an official Claude app for Linux (especially Fedora!).

If you have suggestions, find bugs, or want to contribute, please open an issue or pull request. I'm here to learn! 🚀

## 📧 Contact

- GitHub: [@TonnoConsorzio](https://github.com/TonnoConsorzio)
- Project Link: [https://github.com/TonnoConsorzio/anotherclaudeappforfedora](https://github.com/TonnoConsorzio/anotherclaudeappforfedora)

---

Made with ❤️ in Italy 🇮🇹 | Powered by caffeine ☕ and curiosity 🤔