"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import api from '@/lib/api'
import { useRouter } from 'next/navigation'

interface User {
    id: number
    email: string
    full_name: string | null
    coins: number
    streak_days: number
}

interface AuthContextType {
    user: User | null
    loading: boolean
    login: (email: string, password: string) => Promise<void>
    register: (email: string, password: string, fullName: string) => Promise<void>
    logout: () => void
    isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    // Check for existing token on mount
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            // Fetch current user
            fetchCurrentUser()
        } else {
            setLoading(false)
        }
    }, [])

    const fetchCurrentUser = async () => {
        try {
            const response = await api.get('/users/me')
            setUser(response.data)
        } catch (error) {
            console.error('Failed to fetch user:', error)
            localStorage.removeItem('token')
        } finally {
            setLoading(false)
        }
    }

    const login = async (email: string, password: string) => {
        // FastAPI OAuth2 expects form data
        const formData = new URLSearchParams()
        formData.append('username', email) // FastAPI uses 'username' field
        formData.append('password', password)

        const response = await api.post('/login/access-token', formData, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })

        const { access_token } = response.data
        localStorage.setItem('token', access_token)

        // Fetch user data
        await fetchCurrentUser()
        router.push('/dashboard')
    }

    const register = async (email: string, password: string, fullName: string) => {
        const response = await api.post('/users/', {
            email,
            password,
            full_name: fullName,
            is_superuser: false
        })

        // Auto-login after registration
        await login(email, password)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setUser(null)
        router.push('/login')
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                register,
                logout,
                isAuthenticated: !!user
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within AuthProvider')
    }
    return context
}
