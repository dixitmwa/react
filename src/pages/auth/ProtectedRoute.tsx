import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const ProtectedRoute = ({ children }: any) => {
    const router = useRouter()

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("email")
        const isAuthRoute = router.pathname.startsWith('/auth')
        if (!isAuthenticated && !isAuthRoute) {
            const currentPath = router.pathname
            if (currentPath !== "/") {
                router.push('/auth/login')
            }
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>{children}</>
    )
}

export default ProtectedRoute