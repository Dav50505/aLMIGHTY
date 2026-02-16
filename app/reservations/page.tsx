'use client';

import { useEffect } from 'react';

export default function ReservationsPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = 'https://www.yelp.com/biz/almighty-bistro-el-dorado-hills';
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF8F3]">
      <div className="text-center">
        <p className="text-gray-600">Redirecting to reservations...</p>
      </div>
    </div>
  );
}
