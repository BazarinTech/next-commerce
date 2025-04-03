import { ArrowRight, BadgeCheck, DollarSign, Package, ShoppingBag, Star, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const Index = () => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-lg font-bold sm:text-xl">NextCo</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
              How It Works
            </a>
            <a href="#benefits" className="text-sm font-medium transition-colors hover:text-primary">
              Benefits
            </a>
            <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonials
            </a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <Button asChild size="sm" className="sm:text-sm">
              <a href="/">Get In</a>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-10 md:py-16 lg:py-24 xl:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
                    Earn Money by Fulfilling Orders
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground sm:text-lg md:text-xl">
                    Join thousands of people making extra income by grabbing and fulfilling orders on our platform.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="rounded-lg" asChild>
                    <a href="/">
                      Let's Get In
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-lg" asChild>
                    <a href="#how-it-works">Learn More</a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px] rounded-full bg-muted/60 p-4 shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Package className="h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-20 lg:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">How It Works</h2>
                <p className="text-muted-foreground sm:text-lg md:text-xl">
                  Our platform makes it easy to earn money by fulfilling orders in your area.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 md:py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <Card className="border-none shadow-md hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">1. Browse Available Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    View available orders in your area and choose the ones that fit your schedule and preferences.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Truck className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">2. Fulfill the Order</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Pick up the items and deliver them to the customer following our simple guidelines.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-all duration-200 sm:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <DollarSign className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">3. Get Paid</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Receive payment directly to your account after successful delivery. Fast and secure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Why Choose Us</h2>
                <p className="text-muted-foreground sm:text-lg md:text-xl">
                  Our platform offers numerous benefits for order fulfillment partners.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 md:py-12 md:grid-cols-2 lg:gap-10">
              <div className="grid gap-4 sm:gap-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <BadgeCheck className="mt-1 h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold sm:text-xl">Flexible Schedule</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Work when you want, as much or as little as you want.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <BadgeCheck className="mt-1 h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold sm:text-xl">Competitive Pay</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Earn competitive rates for each order you fulfill.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <BadgeCheck className="mt-1 h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold sm:text-xl">Weekly Payments</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Get paid weekly directly to your bank account.</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:gap-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <BadgeCheck className="mt-1 h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold sm:text-xl">User-Friendly App</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Our intuitive app makes finding and fulfilling orders simple.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <BadgeCheck className="mt-1 h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold sm:text-xl">Support Team</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Our dedicated support team is always ready to help.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <BadgeCheck className="mt-1 h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold sm:text-xl">Growth Opportunities</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Unlock higher earnings as you complete more orders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-20 lg:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">What Our Partners Say</h2>
                <p className="text-muted-foreground sm:text-lg md:text-xl">
                  Hear from people who are already earning with our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 md:py-12 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-md hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                  &quot;I&rsquo;ve been able to earn extra income on my own schedule. The platform is easy to use and the support
                    team is always helpful.&quot;
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="font-semibold">Sarah T.</p>
                </CardFooter>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                  &quot;This platform has been a game-changer for me. I can work around my full-time job and still make
                    significant extra income.&quot;
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="font-semibold">Michael R.</p>
                </CardFooter>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-all duration-200 sm:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                  &quot;I love the flexibility and the weekly payments. It&rsquo;s become my main source of income and I couldn&rsquo;t
                    be happier.&quot;
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="font-semibold">Jessica L.</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Ready to Start Earning?</h2>
                <p className="text-muted-foreground sm:text-lg md:text-xl">
                  Join thousands of partners already making money on our platform.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="rounded-lg" asChild>
                  <a href="/">
                    START NOW
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-lg" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container py-6 md:py-8">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 md:items-center md:py-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-lg font-bold sm:text-xl">NextCo</span>
            </div>
            <nav className="flex flex-wrap gap-4 md:justify-center">
              <a href="/terms" className="text-sm font-medium hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/privacy" className="text-sm font-medium hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </a>
              <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
            <p className="text-sm text-muted-foreground md:text-right">© 2025 NextCo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index;
