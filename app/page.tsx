'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to billing manager as the default page
    router.push('/general-settings/billing-manager');
  }, [router]);

  return null;
}