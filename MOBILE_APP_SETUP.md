# Hindu Wedding Planner - Mobile App Setup Guide

## 📱 Convert Web App to Mobile Application

This guide shows you how to convert the Hindu Wedding Planner web app into native mobile applications for iOS and Android.

---

## **Option 1: React Native (Recommended for Cross-Platform)**

### What is React Native?
- Write once, run on iOS and Android
- Native performance
- Large community support
- Reusable code components

### Prerequisites
```bash
Node.js (v14 or higher)
npm or yarn
Expo CLI
```

### Step 1: Install Expo CLI
```bash
npm install -g expo-cli
```

### Step 2: Create React Native Project
```bash
npx create-expo-app HinduWeddingPlanner
cd HinduWeddingPlanner
```

### Step 3: Install Dependencies
```bash
npm install react-native-async-storage @react-native-async-storage/async-storage
npm install axios
npm install react-native-gesture-handler
```

### Step 4: Project Structure
```
HinduWeddingPlanner/
├── App.js
├── src/
│   ├── screens/
│   │   ├── TodoScreen.js
│   │   ├── JokeScreen.js
│   │   └── HomeScreen.js
│   ├── components/
│   │   ├── TodoItem.js
│   │   └── JokeCard.js
│   ├── api/
│   │   └── jokeApi.js
│   └── utils/
│       └── storage.js
└── package.json
```

### Step 5: Run Mobile App
```bash
# For iOS (Mac only)
npm run ios

# For Android
npm run android

# Or use Expo Go app on your phone
expo start
```

---

## **Option 2: Flutter (Android & iOS)**

### What is Flutter?
- Google's mobile framework
- Beautiful UI components
- Excellent performance
- Single codebase for both platforms

### Prerequisites
```bash
Flutter SDK (v2.5 or higher)
Dart SDK (comes with Flutter)
Android Studio (for Android)
Xcode (for iOS - Mac only)
```

### Step 1: Install Flutter
[Download Flutter](https://flutter.dev/docs/get-started/install)

### Step 2: Create Flutter Project
```bash
flutter create hindu_wedding_planner
cd hindu_wedding_planner
```

### Step 3: Project Structure
```
hindu_wedding_planner/
├── lib/
│   ├── main.dart
│   ├── screens/
│   │   ├── todo_screen.dart
│   │   ├── joke_screen.dart
│   │   └── home_screen.dart
│   ├── models/
│   │   ├── todo_model.dart
│   │   └── joke_model.dart
│   ├── services/
│   │   ├── storage_service.dart
│   │   └── joke_api_service.dart
│   └── widgets/
│       └── custom_widgets.dart
├── pubspec.yaml
└── android/ & ios/
```

### Step 4: Add Dependencies in pubspec.yaml
```yaml
dependencies:
  flutter:
    sdk: flutter
  shared_preferences: ^2.0.0
  http: ^0.13.0
  provider: ^6.0.0
  intl: ^0.17.0
```

### Step 5: Run Flutter App
```bash
# iOS
flutter run -d iphone

# Android
flutter run -d android

# List available devices
flutter devices
```

---

## **Option 3: Ionic + Angular (HTML/CSS/JS Based)**

### What is Ionic?
- Build with HTML, CSS, JavaScript
- Hybrid mobile app
- Easier if you know web development
- Single codebase for iOS and Android

### Prerequisites
```bash
Node.js
Ionic CLI
Cordova
```

### Step 1: Install Ionic CLI
```bash
npm install -g @ionic/cli
```

### Step 2: Create Ionic Project
```bash
ionic start HinduWeddingPlanner tabs
cd HinduWeddingPlanner
```

### Step 3: Project Structure
```
HinduWeddingPlanner/
├── src/
│   ├── app/
│   ├── pages/
│   │   ├── todo/
│   │   ├── jokes/
│   │   └── home/
│   └── services/
│       ├── todo.service.ts
│       └── joke.service.ts
└── ionic.config.json
```

### Step 4: Build for Mobile
```bash
# Add platforms
ionic capacitor add ios
ionic capacitor add android

# Build and run
ionic capacitor run ios
ionic capacitor run android
```

---

## **Option 4: PWA (Progressive Web App - Simplest)**

### What is PWA?
- Works like a mobile app
- Installable on home screen
- Works offline
- Fastest to develop

### Step 1: Create PWA Manifest
Create `manifest.json`:
```json
{
  "name": "Hindu Wedding Planner",
  "short_name": "Wedding Planner",
  "description": "Plan your Hindu wedding with ease",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "theme_color": "#1a1a1a",
  "background_color": "#ffffff",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    }
  ]
}
```

### Step 2: Add Service Worker
Create `sw.js`:
```javascript
const CACHE_NAME = 'wedding-planner-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
```

### Step 3: Link in HTML
```html
<link rel="manifest" href="/manifest.json">
<link rel="icon" type="image/png" href="/icon-192.png">
<meta name="theme-color" content="#1a1a1a">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">

<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
</script>
```

---

## **Installation Methods Comparison**

| Feature | React Native | Flutter | Ionic | PWA |
|---------|-------------|---------|-------|-----|
| **Platform** | iOS/Android | iOS/Android | iOS/Android | All |
| **Language** | JavaScript | Dart | TypeScript | JavaScript |
| **Learning Curve** | Medium | Medium | Easy | Easy |
| **Performance** | Excellent | Excellent | Good | Good |
| **Development Speed** | Fast | Fast | Fastest | Fastest |
| **App Store** | Yes | Yes | Yes | No |
| **Offline Support** | Good | Good | Good | Excellent |
| **Cost** | Free | Free | Free | Free |
| **Maintenance** | Easy | Easy | Easy | Easiest |

---

## **📱 Installation Steps (Quick Start)**

### **For iOS (Mac Only)**

**React Native:**
```bash
npx create-expo-app HinduWeddingPlanner
cd HinduWeddingPlanner
npm run ios
```

**Flutter:**
```bash
flutter create hindu_wedding_planner
cd hindu_wedding_planner
flutter run -d iphone
```

**Ionic:**
```bash
ionic start HinduWeddingPlanner tabs
ionic capacitor add ios
ionic capacitor run ios
```

### **For Android (Windows/Mac/Linux)**

**React Native:**
```bash
npx create-expo-app HinduWeddingPlanner
cd HinduWeddingPlanner
npm run android
```

**Flutter:**
```bash
flutter create hindu_wedding_planner
cd hindu_wedding_planner
flutter run -d android
```

**Ionic:**
```bash
ionic start HinduWeddingPlanner tabs
ionic capacitor add android
ionic capacitor run android
```

### **For PWA (All Platforms)**
```bash
1. Upload HTML/CSS/JS to web hosting
2. Add manifest.json
3. Add service worker
4. Open on mobile browser
5. Click "Install App"
```

---

## **📦 App Store Submission**

### **Google Play Store (Android)**
1. Register developer account ($25 one-time)
2. Build APK or AAB
3. Create store listing
4. Upload build
5. Submit for review

### **Apple App Store (iOS)**
1. Join Apple Developer Program ($99/year)
2. Create certificates and provisioning profiles
3. Build IPA
4. Submit via App Store Connect
5. Wait for Apple review (1-3 days)

---

## **🚀 Recommended Path**

**For Beginners:** PWA (Progressive Web App)
- Easiest to develop
- Works on all devices
- No app store needed
- Instant updates

**For Professional App:** React Native or Flutter
- Better performance
- App store presence
- Native features access
- Better monetization

**If You Know Web Dev:** Ionic
- Leverage HTML/CSS/JS knowledge
- Hybrid app
- Faster development
- Good community support

---

## **📝 Next Steps**

1. Choose your framework (React Native recommended)
2. Set up development environment
3. Clone this repository
4. Convert components to mobile format
5. Test on simulator/device
6. Deploy to app stores

---

## **🔗 Useful Resources**

- [React Native Docs](https://reactnative.dev/)
- [Flutter Docs](https://flutter.dev/)
- [Ionic Docs](https://ionicframework.com/)
- [Expo Documentation](https://docs.expo.dev/)
- [PWA Documentation](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

---

## **💡 Tips**

✅ Start with PWA - fastest way to get app on mobile  
✅ Use React Native for better performance  
✅ Use Flutter if targeting both iOS and Android  
✅ Test on real devices, not just emulators  
✅ Optimize app size before app store submission  
✅ Always ask for permissions before accessing device features  

---

**Ready to build your mobile app? Let's get started! 🚀**
