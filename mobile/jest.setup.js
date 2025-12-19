import '@testing-library/jest-native/extend-expect'

// Mock expo-router
jest.mock('expo-router', () => ({
    useRouter: () => ({
        push: jest.fn(),
        replace: jest.fn(),
        back: jest.fn(),
    }),
    useLocalSearchParams: () => ({}),
    Stack: {
        Screen: 'Stack.Screen',
    },
    Tabs: {
        Screen: 'Tabs.Screen',
    },
    Link: 'Link',
}))

// Mock expo-secure-store
jest.mock('expo-secure-store', () => ({
    getItemAsync: jest.fn(),
    setItemAsync: jest.fn(),
    deleteItemAsync: jest.fn(),
}))

// Mock axios
jest.mock('axios')
