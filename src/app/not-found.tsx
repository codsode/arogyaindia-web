import { Home, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pt-20">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <div className="mb-6 text-8xl font-bold text-primary-200">404</div>
          <h1 className="mb-3 text-3xl font-bold text-text-primary">
            Page Not Found
          </h1>
          <p className="mb-8 text-lg text-text-secondary">
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/" variant="primary" size="lg">
              <Home className="h-5 w-5" />
              Go Home
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              <ArrowLeft className="h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
