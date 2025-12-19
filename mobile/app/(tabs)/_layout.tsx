import { Tabs } from 'expo-router';
import { Home, BookOpen, Users, User } from 'lucide-react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#111827', // gray-900
                    borderTopColor: '#374151', // gray-700
                },
                tabBarActiveTintColor: '#3b82f6', // blue-500
                tabBarInactiveTintColor: '#9ca3af', // gray-400
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Home size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="courses"
                options={{
                    title: 'Courses',
                    tabBarIcon: ({ color }) => <BookOpen size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="social"
                options={{
                    title: 'Social',
                    tabBarIcon: ({ color }) => <Users size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <User size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}
