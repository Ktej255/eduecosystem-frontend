"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/contexts/auth-context"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { login, loading } = useAuth()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        try {
            await login(email, password)
        } catch (err: any) {
            console.error(err)
            setError(err.response?.data?.detail || "Invalid email or password")
        }
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
            <div className="w-full max-w-md space-y-8 p-8 border border-gray-800 rounded-xl bg-gray-900/50 backdrop-blur-sm">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">
                        Sign in to your holistic learning account
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div className="mb-4">
                            <Input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500"
                            />
                        </div>
                        <div>
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm text-center">{error}</div>
                    )}

                    <div>
                        <Button
                            type="submit"
                            disabled={loading}
                            className="group relative flex w-full justify-center bg-cyan-600 hover:bg-cyan-500 text-white"
                        >
                            {loading ? "Signing in..." : "Sign in"}
                        </Button>
                    </div>
                </form>
                <div className="text-center text-sm">
                    <span className="text-gray-400">Don't have an account? </span>
                    <Link href="/register" className="font-medium text-cyan-400 hover:text-cyan-300">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    )
}
