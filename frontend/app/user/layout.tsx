'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getAuthToken } from '@/lib/api';

/**
 * User Layout with Authentication Protection
 * - Allows access to login and register pages without authentication
 * - Requires authentication for all other user pages
 * - Redirects unauthenticated users to login page
 */
export default function UserLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Routes that don't require authentication
  const publicRoutes = ['/user/login', '/user/register'];

  useEffect(() => {
    const checkAuth = async () => {
      const token = getAuthToken();
      const isPublicRoute = publicRoutes.includes(pathname);

      if (!token && !isPublicRoute) {
        // No token and trying to access protected route
        router.push('/user/login');
        setIsChecking(false);
        return;
      }

      // Allow access to public routes regardless of auth status
      // This allows users to login, logout, and switch accounts freely
      setIsAuthenticated(!!token);
      setIsChecking(false);
    };

    checkAuth();
  }, [pathname, router]);

  // Show loading state while checking authentication
  if (isChecking) {
    return (
      <div className="flex h-screen items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-slate-500">Checking access...</p>
        </div>
      </div>
    );
  }

  return children;
}
