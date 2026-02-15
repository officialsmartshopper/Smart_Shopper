import TopNav from '@/sections/TopNav';
import MainHeader from '@/sections/MainHeader';
import CategoryNav from '@/sections/CategoryNav';
import HeroCarousel from '@/sections/HeroCarousel';
import NewsSection from '@/sections/NewsSection';
import HotProducts from '@/sections/HotProducts';
import ReviewsSection from '@/sections/ReviewsSection';
import FuelSection from '@/sections/FuelSection';
import CarSection from '@/sections/CarSection';
import Footer from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <TopNav />
      
      {/* Header */}
      <div className="pt-10">
        <MainHeader />
      </div>
      
      {/* Category Navigation */}
      <CategoryNav />
      
      {/* Main Content */}
      <main>
        {/* Hero Carousel */}
        <HeroCarousel />
        
        {/* News Section */}
        <NewsSection />
        
        {/* Hot Products */}
        <HotProducts />
        
        {/* Reviews Section */}
        <ReviewsSection />
        
        {/* Fuel Price Section */}
        <FuelSection />
        
        {/* Car Section */}
        <CarSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
