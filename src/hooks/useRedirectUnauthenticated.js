import { useAuth } from '@/app/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function useRedirectUnauthenticated() {
  const {authUser, isLoading} = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page if the user is not logged in
    if (!isLoading && !authUser) router.push('/');
  }, [authUser, isLoading, router]);
}