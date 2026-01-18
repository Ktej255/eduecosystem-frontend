"use client" // Error components must be Client Components

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, RotateCw } from "lucide-react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="flex h-screen w-full items-center justify-center bg-background p-4">
            <Card className="w-full max-w-md border-red-200 dark:border-red-900 shadow-2xl">
                <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                        <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold">The Guru is Meditating</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                    <p>Something went wrong on our end.</p>
                    <p className="mt-2 text-sm font-mono text-red-500 bg-red-50 dark:bg-red-950 p-2 rounded">
                        {error.message || "Unknown error occurred"}
                    </p>
                </CardContent>
                <CardFooter className="justify-center gap-4">
                    <Button onClick={() => window.location.href = '/'} variant="outline">
                        Go Home
                    </Button>
                    <Button onClick={() => reset()} className="gap-2">
                        <RotateCw className="h-4 w-4" />
                        Try Again
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
