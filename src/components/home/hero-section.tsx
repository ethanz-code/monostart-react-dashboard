import { Button } from '@/components/ui/button';
import BadgeList from '@/components/home/badge-list';
import { NavLink } from 'react-router';

export default function HeroSection() {
  return (
    <section className="w-full max-w-3xl mx-auto py-16 flex flex-col items-center gap-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-accent-foreground text-center px-4">
        Lorem ipsum dolor sit amet consectetur.
      </h1>
      <p className="text-base sm:text-lg text-secondary-foreground/90 text-center px-4 max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam enim accusamus
        praesentium saepe porro illum quas unde optio. Molestiae ab possimus aut labore est
        doloremque veritatis nam commodi modi? Quia!
      </p>
      <BadgeList />
      <div className="flex flex-col justify-center sm:flex-row gap-2 w-full max-w-md px-4">
        <Button asChild size="lg">
          <NavLink to="/sign_up">Get Started</NavLink>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="#">Help Documentation</a>
        </Button>
      </div>
    </section>
  );
}
