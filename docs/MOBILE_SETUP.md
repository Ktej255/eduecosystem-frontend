# Mobile App Setup Guide

## 📱 Overview

The Holistic Learning Ecosystem mobile app is built with **React Native** using **Expo** for cross-platform iOS and Android support.

## 🚀 Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn**
- **Expo CLI** (installed globally or via npx)
- **iOS Simulator** (Mac only) or **Android Emulator**
- **Expo Go app** (for physical device testing)

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/eduecosystem.git
cd eduecosystem/mobile
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env` file in the `mobile/` directory:

```env
EXPO_PUBLIC_API_URL=http://localhost:8000
# For physical device, use your computer's IP:
# EXPO_PUBLIC_API_URL=http://192.168.1.100:8000
```

### 4. Start the Development Server

```bash
npx expo start
```

This will open the Expo Developer Tools in your browser.

## 🎮 Running the App

### On iOS Simulator (Mac only)

```bash
# Press 'i' in the terminal
# or
npx expo start --ios
```

###On Android Emulator

```bash
# Press 'a' in the terminal
# or
npx expo start --android
```

### On Physical Device

1. Install **Expo Go** from App Store or Google Play
2. Scan the QR code shown in the terminal
3. The app will load on your device

**⚠️ Important for Physical Devices:**
- Ensure your phone and computer are on the same Wi-Fi network
- Update`.env` with your computer's local IP address
- Check firewall settings to allow connections on port 8000

## 📁 Project Structure

```
mobile/
├── app/                          # Expo Router pages
│   ├── (auth)/                  # Authentication screens
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── (tabs)/                  # Main tab navigation
│   │   ├── index.tsx           # Home screen
│   │   ├── courses.tsx         # Course browser
│   │   ├── social.tsx          # Social features
│   │   └── profile.tsx         # User profile
│   ├── course/                  # Course-related screens
│   │   └── [courseId]/
│   │       └── discussions/     # Discussion forums
│   ├── gamification/            # Gamification hub
│   │   └── index.tsx
│   ├── settings/                # Settings screens
│   │   └── email-preferences/
│   └── _layout.tsx              # Root layout
├── components/                   # Reusable components
│   ├── AchievementCard.tsx
│   ├── ChallengeCard.tsx
│   ├── DiscussionThreadCard.tsx
│   ├── DiscussionPostCard.tsx
│   ├── EmailPreferenceToggle.tsx
│   └── LeaderboardRow.tsx
├── context/                      # React context providers
│   └── auth.tsx
├── utils/                        # Utilities
│   └── api.ts                   # API client
├── app.json                      # Expo configuration
└── package.json
```

## 🔌 API Integration

The app communicates with the backend via `utils/api.ts`:

```typescript
import api from '../utils/api';

// Example: Get user courses
const response = await api.get('/courses/');
const courses = response.data;
```

All API calls automatically include authentication headers.

## 🎨 Styling

The app uses **NativeWind** (Tailwind CSS for React Native):

```tsx
<View className="flex-1 bg-gray-900 p-4">
  <Text className="text-white text-xl font-bold">
    Hello World
  </Text>
</View>
```

## 🧭 Navigation

Navigation is handled by **Expo Router** (file-based routing):

```typescript
import { useRouter } from 'expo-router';

const router = useRouter();
router.push('/gamification');
router.push(`/course/${courseId}/discussions`);
```

## ✨ Available Features

### ✅ Implemented
- User authentication (login/register)
- Course browsing and enrollment
- Video lesson viewing
- Quiz taking
- Gamification dashboard:
  - Leaderboard
  - Achievements
  - Challenges
- Discussion forums:
  - Browse threads
  - Reply to posts
  - Vote on content
- Email preferences management
- User profile management

### ⏳ Pending
- Live class viewing (requires video SDK)
- Push notifications
- Offline mode
- Content downloads

## 🐛 Troubleshooting

### Common Issues

**1. "Unable to connect to server"**
- Check that backend is running on `http://localhost:8000`
- Update `EXPO_PUBLIC_API_URL` with correct IP for physical devices
- Verify firewall allows connections

**2. "Module not found" errors**
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npx expo start -c
```

**3. iOS Simulator not opening**
- Ensure Xcode is installed
- Run `sudo xcode-select --switch /Applications/Xcode.app`

**4. Android Emulator issues**
- Ensure Android Studio is installed
- Create an AVD (Android Virtual Device)
- Start emulator before running `npx expo start --android`

## 📊 Performance Tips

- Use `React.memo()` for expensive components
- Implement `FlatList` for long lists (already done)
- Optimize images with appropriate sizes
- Use `useCallback` and `useMemo` hooks

## 🔒 Security

-Tokens are stored securely using `expo-secure-store`
- All API calls use HTTPS in production
- Sensitive data is never logged in production builds

## 🚀 Building for Production

### iOS

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Build for iOS
eas build --platform ios
```

### Android

```bash
# Build APK
eas build --platform android --profile preview

# Build AAB for Play Store
eas build --platform android
```

## 📱 App Distribution

### TestFlight (iOS)
1. Build with `eas build --platform ios`
2. Submit to App Store Connect
3. Invite testers via TestFlight

### Google Play (Android)
1. Build with `eas build --platform android`
2. Upload AAB to Google Play Console
3. Create internal testing track

## 🆘 Support

For issues or questions:
- **GitHub Issues:** [Report bugs](https://github.com/yourusername/eduecosystem/issues)
- **Documentation:** See `/docs` folder
- **Community:** Join our Discord

## 📚 Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Documentation](https://expo.github.io/router/)
- [NativeWind Documentation](https://www.nativewind.dev/)
