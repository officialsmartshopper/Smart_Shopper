import { lazy, Suspense } from 'react';

// 關鍵元件：立即載入（首屏可見）
import TopNav from '@/sections/TopNav';
import MainHeader from '@/sections/MainHeader';
import CategoryNav from '@/sections/CategoryNav';

// 非關鍵元件：延遲載入（Code Splitting）
const HeroCarousel = lazy(() => import('@/sections/HeroCarousel'));
const NewsSection = lazy(() => import('@/sections/NewsSection'));
const HotProducts = lazy(() => import('@/sections/HotProducts'));
const ReviewsSection = lazy(() => import('@/sections/ReviewsSection'));
const FuelSection = lazy(() => import('@/sections/FuelSection'));
const CarSection = lazy(() => import('@/sections/CarSection'));
const Footer = lazy(() => import('@/sections/Footer'));

// 載入中的旋轉動畫
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#0066FF] border-t-transparent"></div>
    </div>
  );
}

// 區塊載入骨架屏（佔位符）
function SectionSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-gray-200 rounded-xl h-64"></div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation - 立即載入 */}
      <TopNav />
      
      {/* Header - 立即載入 */}
      <div className="pt-10">
        <MainHeader />
      </div>
      
      {/* Category Navigation - 立即載入 */}
      <CategoryNav />
      
      {/* Main Content - 延遲載入 */}
      <main>
        {/* Hero Carousel */}
        <Suspense fallback={<LoadingSpinner />}>
          <HeroCarousel />
        </Suspense>
        
        {/* News Section */}
        <Suspense fallback={<SectionSkeleton />}>
          <NewsSection />
        </Suspense>
        
        {/* Hot Products */}
        <Suspense fallback={<SectionSkeleton />}>
          <HotProducts />
        </Suspense>
        
        {/* Reviews Section */}
        <Suspense fallback={<SectionSkeleton />}>
          <ReviewsSection />
        </Suspense>
        
        {/* Fuel Price Section */}
        <Suspense fallback={<SectionSkeleton />}>
          <FuelSection />
        </Suspense>
        
        {/* Car Section */}
        <Suspense fallback={<SectionSkeleton />}>
          <CarSection />
        </Suspense>
      </main>
      
      {/* Footer */}
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
