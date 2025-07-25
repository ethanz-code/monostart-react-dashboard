import React from 'react';
import Header from '@/components/home/header';
import HeroSection from '@/components/home/hero-section';
import Footer from '@/components/home/footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Hero + 卡片区块 */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        {/* Hero */}
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
