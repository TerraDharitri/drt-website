# 🛠️ Project Setup Guide

This guide will help you install **Yarn** and run the project on your local system.  
You can verify if Yarn is already installed on your PC by running:

```bash
yarn --version
```

## A. Install Yarn on macOS (Using Homebrew)
    1. Install Homebrew
        Open your Terminal and run the following command to install Homebrew:

    ```bash
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

    2. Add Homebrew to Your PATH (For Apple Silicon M1/M2)

    ```bash
    echo "export PATH=/opt/homebrew/bin:$PATH" >> ~/.zshrc

    ```
    After running this, close and reopen your Terminal to apply changes.

    3. Install Yarn via Homebrew
    
    ```bash
    brew install yarn
    ```

## B. Install Yarn on Windows

1. **Using npm (if you have Node.js installed):**
   ```bash
   npm install --global yarn
   ```

2. **Using Chocolatey:**
   ```bash
   choco install yarn
   ```

3. **Using Scoop:**
   ```bash
   scoop install yarn
   ```

## C. Install Yarn on Linux

1. **Ubuntu/Debian:**
   ```bash
   curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
   echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
   sudo apt update && sudo apt install yarn
   ```

2. **CentOS/RHEL/Fedora:**
   ```bash
   curl -sL https://dl.yarnpkg.com/rpm/yarn.repo -o /etc/yum.repos.d/yarn.repo
   sudo yum install yarn
   ```

3. **Using npm:**
   ```bash
   npm install --global yarn
   ```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- Yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shu12388y/drt-website.git
   cd drt-website
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Run the development server:**
   ```bash
   yarn dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

### Build for Production

1. **Create a production build:**
   ```bash
   yarn build
   ```

2. **Start the production server:**
   ```bash
   yarn start
   ```

## 📁 Project Structure

```
drt-website/
├── app/                    # Next.js 13+ app directory
│   ├── about-us/          # About us page
│   ├── career/            # Career page
│   ├── contact-us/        # Contact page
│   ├── features/          # Features page
│   ├── legal-compliance/  # Legal compliance pages
│   └── ...               # Other pages
├── components/            # Reusable React components
├── templates/             # Page templates
├── mocks/                 # Mock data
├── constants/             # Application constants
├── types/                 # TypeScript type definitions
├── utils/                 # Utility functions
├── public/                # Static assets
└── legal-compliance/      # Legal documents
```

## 🛠️ Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript type checking

## 🎨 Tech Stack

- **Framework:** Next.js 13+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** Yarn

## 📋 Features

- ✅ Responsive design
- ✅ Dark/Light theme support
- ✅ SEO optimized
- ✅ Type-safe with TypeScript
- ✅ Modern UI with Tailwind CSS
- ✅ Legal compliance pages
- ✅ Multi-page application structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ✨ About DRT

DRT (Decentralized Renewable Technology) is focused on sustainable and decentralized energy solutions. This website serves as the main platform for information about our ecosystem, features, and community involvement.

## 📞 Support

If you have any questions or need support, please visit our [Contact Us](http://localhost:3000/contact-us) page or reach out through our community channels.

---

Made with ❤️ by the DRT Team