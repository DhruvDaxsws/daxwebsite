
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="bg-background">
      <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
              About ConsultFast
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                We are an empathetic ERP partner, dedicated to prioritizing people over technology and turning complex challenges into strategic assets for your business.
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-headline text-accent dark:text-white">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To redefine the ERP experience by providing collaborative, expert-driven Microsoft Dynamics solutions. We focus on listening to our clients, understanding their unique needs, and empowering the people who drive their business success. We transform ERP from a burden into a powerful tool for growth.
              </p>
               <h2 className="text-3xl font-bold font-headline text-accent dark:text-white pt-8">Our Vision</h2>
              <p className="text-muted-foreground text-lg">
                To be the most trusted and sought-after empathetic ERP partner for businesses worldwide, known for our commitment to client success, our deep technical expertise, and our people-first approach to technology implementation.
              </p>
            </div>
            <div className="relative h-80 w-full">
                <Image
                    src="https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MHx8fHwxNzY0NDg3Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="A team collaborating in a modern office"
                    fill
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint="business meeting"
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
