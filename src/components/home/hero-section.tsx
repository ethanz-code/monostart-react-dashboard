import { Button } from '@/components/ui/button';
import BadgeList from '@/components/home/badge-list';

export default function HeroSection() {
  return (
    <section className="w-full max-w-3xl mx-auto py-16 flex flex-col items-center gap-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">
        Lorem ipsum dolor sit amet consectetur.
      </h1>
      <p className="text-lg text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam enim accusamus
        praesentium saepe porro illum quas unde optio. Molestiae ab possimus aut labore est
        doloremque veritatis nam commodi modi? Quia!
      </p>
      <BadgeList />
      <div className="flex gap-2">
        <Button asChild size="lg">
          <a href="#">Get Started</a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="#">Help Documentation</a>
        </Button>
      </div>
    </section>
  );
}
