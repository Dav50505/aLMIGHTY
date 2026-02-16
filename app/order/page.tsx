'use client';

import { useEffect } from 'react';

export default function OrderPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = 'https://order.toasttab.com/online/mom-and-pop-chicken-shop-el-dorado-hills-4355-town-center-blvd-114';
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF8F3]">
      <div className="text-center">
        <p className="text-gray-600">Redirecting to online ordering...</p>
      </div>
    </div>
  );
}
