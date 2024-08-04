import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">


            <div className="flex flex-col-reverse lg:flex-row">
              <div className="flex flex-col justify-center space-y-4 lg:flex-col"> 
              
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Meet <span className="text-[#E4A263]">Akira</span>, your AI assistant
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Akira is a powerful AI assistant that can help you with a wide range of tasks, from research and
                    analysis to creative projects and more.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/chat"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Chat with Akira
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="/images/fox.jfif"
                alt="Akira"
                className="sm:w-20 lg:w-full h-full"
                // className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square w-full h-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl"><span className="text-[#E4A263]">Akira</span> Capabilities</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Akira is a versatile AI assistant that can help you with a variety of tasks, from research and
                    analysis to creative projects and more.
                  </p>
                </div>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <SearchIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Research and Analysis</h3>
                      <p className="text-muted-foreground">
                        Akira can help you gather and analyze data, conduct research, and uncover insights to support
                        your decision-making.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <PencilIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Creative Assistance</h3>
                      <p className="text-muted-foreground">
                        Akira can help you brainstorm ideas, write content, design graphics, and more to bring your
                        creative projects to life.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <LightbulbIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Problem-Solving</h3>
                      <p className="text-muted-foreground">
                        Akira can help you break down complex problems, explore different solutions, and find the best
                        way forward.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <img
                src="/images/fox.jfif"
                width="550"
                height="310"
                alt="Akira Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              /> */}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from some of our satisfied users about how Akira has helped them.
                </p>
              </div>
              <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <Card className="space-y-4 p-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-medium">John Doe</h4>
                      <p className="text-sm text-muted-foreground">Marketing Manager</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Akira has been a game-changer for my team. The research
                    and analysis capabilities have saved us so much time and
                    helped us make better decisions."
                  </p>
                </Card>
                <Card className="space-y-4 p-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                      <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-medium">Jane Appleseed</h4>
                      <p className="text-sm text-muted-foreground">Creative Director</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I love using Akira for my creative projects. The
                    brainstorming and content generation features are
                    incredibly helpful and have really boosted my
                    productivity."
                  </p>
                </Card>
                <Card className="space-y-4 p-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                      <AvatarFallback>JB</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-medium">Jack Brown</h4>
                      <p className="text-sm text-muted-foreground">Product Manager</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Akira's problem-solving capabilities have been a huge
                    asset to our team. We've been able to tackle complex
                    issues and find effective solutions more quickly and
                    efficiently."
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-24 md:flex-row md:py-0">
          <Link href="/" className="flex items-center space-x-2" prefetch={false}>
            <BotIcon className="h-6 w-6" />
            <span className="text-lg font-bold text-[#E4A263]">Akira.</span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Mohammad Harris
            </a>
            . Hosted on{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}

const BotIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    {...props}
  >
    <path
      d="M12 11v2m0 8v2m-8-10h-2m2-2h2m6-8v2m8 2h-2m-2 2v2m0 8v2m-6 0H6v2h4v-2Zm4 0v2h4v-2h-4ZM6 8V6H4v2h2Zm0 8v2H4v-2h2Zm12-8h2V6h-2v2Zm0 8h2v-2h-2v2Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 6a8 8 0 110 16 8 8 0 010-16zm12 0l-6 6"
    />
  </svg>
);

const PencilIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 2a2 2 0 00-2 2v3H5a2 2 0 00-2 2v10a2 2 0 002 2h6v-4H5V7h9v4h4v3l2-2V4a2 2 0 00-2-2z"
    />
  </svg>
);

const LightbulbIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9.25 14.25a3.75 3.75 0 015.5 0v1.25m-5.5 0v1.25a3.75 3.75 0 015.5 0m0 1.25v1.25a3.75 3.75 0 01-5.5 0M12 3v2M6.75 8.75v2m10.5-2v2M9 16.5v2M15 16.5v2m-6-7h8m-8 2h8"
    />
  </svg>
);
