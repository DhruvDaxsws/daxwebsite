import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TEAM_MEMBERS } from "@/lib/content";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function TeamPage() {
    const teamImages = TEAM_MEMBERS.map(tm => ({
        ...tm,
        image: PlaceHolderImages.find(img => img.id === tm.imageId)
    }));

  return (
    <div className="bg-white dark:bg-card">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
            Meet Our Experts
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We are a team of passionate, experienced professionals dedicated to helping your business succeed.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamImages.map((member) => (
            <Card key={member.name} className="text-center shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center">
                <Avatar className="h-32 w-32 border-4 border-primary/20">
                    {member.image && (
                        <AvatarImage src={member.image.imageUrl} alt={member.name} data-ai-hint={member.image.imageHint} />
                    )}
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
