import React from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import Footer from '@/components/footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
