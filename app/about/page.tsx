import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-3 space-y-8">
          <h1 className="text-4xl lg:text-5xl font-light text-accent-400 leading-tight">
            Welcome to <span className="font-medium">The Wild Oasis</span>
          </h1>

          <div className="space-y-6 text-lg text-primary-200 leading-relaxed">
            <p>
              Where nature's beauty and comfortable living blend seamlessly.
              Hidden away in the heart of the Italian Dolomites, this is your
              paradise away from home. But it's not just about the luxury cabins.
              It's about the experience of reconnecting with nature and enjoying
              simple pleasures with family.
            </p>
            <p>
              Our 8 luxury cabins provide a cozy base, but the real freedom and
              peace you'll find in the surrounding mountains. Wander through lush
              forests, breathe in the fresh air, and watch the stars twinkle above
              from the warmth of a campfire or your hot tub.
            </p>
            <p>
              This is where memorable moments are made, surrounded by nature's
              splendor. It's a place to slow down, relax, and feel the joy of
              being together in a beautiful setting.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="card">
            <Image
              src={image1}
              placeholder="blur"
              quality={80}
              className="rounded-lg"
              alt="Family sitting around a fire pit in front of cabin"
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-2 lg:order-1 mt-8 lg:mt-0">
          <div className="card">
            <Image
              src={image2}
              placeholder="blur"
              quality={80}
              className="rounded-lg"
              alt="Family that manages The Wild Oasis"
            />
          </div>
        </div>

        <div className="lg:col-span-3 lg:order-2 space-y-8">
          <h2 className="text-4xl lg:text-5xl font-light text-accent-400 leading-tight mt-8">
            Managed by our <span className="font-medium">family since 1962</span>
          </h2>

          <div className="space-y-6 text-lg text-primary-200 leading-relaxed">
            <p>
              Since 1962, The Wild Oasis has been a cherished family-run retreat.
              Started by our grandparents, this haven has been nurtured with love
              and care, passing down through our family as a testament to our
              dedication to creating a warm, welcoming environment.
            </p>
            <p>
              Over the years, we've maintained the essence of The Wild Oasis,
              blending the timeless beauty of the mountains with the personal
              touch only a family business can offer. Here, you're not just a
              guest; you're part of our extended family.
            </p>
          </div>

          <a href="/cabins" className="btn-primary inline-flex items-center gap-3">
            <span>Explore our luxury cabins</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
