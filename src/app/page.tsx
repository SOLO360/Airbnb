import Header from "../components/Header";
import Banner from "@/components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      {/* header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* main */}
      <main className="max-w-7xl mx-auto px-4 md:px-16">
        <section className="pt-6">
          <h2 className="text-2xl md:text-4xl font-semibold pb-2 md:pb-4">
            Explore Nearby
          </h2>

          {/* Pull some data from server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <SmallCard />
          </div>
        </section>

        {/* Live Anywhere */}
        <section className="pt-6">
          <h2 className="text-2xl md:text-4xl font-semibold pb-2 md:pb-4">Live Anyhere</h2>
          <div className="overflow-x-auto scroll-behavior-smooth scrollbar-hide">
            <div className="flex space-x-4 p-3">
              <MediumCard />
            </div>
          </div>
        </section>

        {/* Large Card */}
        <LargeCard />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}