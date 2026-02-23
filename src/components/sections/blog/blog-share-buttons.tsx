"use client";

import { Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site-config";

interface BlogShareButtonsProps {
  title: string;
  slug: string;
}

export function BlogShareButtons({ title, slug }: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url = `${siteConfig.url}/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      icon: <Facebook className="h-4 w-4" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      label: "Facebook",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      icon: <Twitter className="h-4 w-4" />,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      label: "Twitter",
      color: "hover:bg-sky-500 hover:text-white",
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      label: "LinkedIn",
      color: "hover:bg-blue-700 hover:text-white",
    },
  ];

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="border-t border-border py-8">
      <Container>
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <span className="text-sm font-medium text-text-secondary">
            Share this article:
          </span>
          <div className="flex gap-2">
            {shareLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share on ${link.label}`}
                className={`flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-all ${link.color}`}
              >
                {link.icon}
              </a>
            ))}
            <button
              onClick={copyLink}
              aria-label="Copy link"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-all hover:bg-primary-600 hover:text-white cursor-pointer"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Link2 className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
