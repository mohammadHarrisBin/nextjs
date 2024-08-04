"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { AkiraGenerateResponse } from "./actions";
import { useState } from "react";

const userMessageTemplate = (prompt) => {
  return {
    role: "user",
    content: [
      {
        type: "text",
        text: prompt,
      },
    ],
  };
};

export default function Component() {
  const [prompt, setPrompt] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleAkiraGenerateResponse = async () => {
    const akiraResponse = await AkiraGenerateResponse(prompt);
    setMessages((prev) => [...prev, akiraResponse]);
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      <header className="flex items-center justify-between border-b bg-background px-4 py-3 sm:px-6">
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
            prefetch={false}
          >
            <BotIcon className="h-6 w-6" />
            <span className="sr-only">ChatGPT</span>
          </Link>
          <nav className="hidden items-center gap-4 text-sm font-medium sm:flex">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              New
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Templates
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Community
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <SearchIcon className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <SettingsIcon className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <img
              src="/placeholder.svg"
              width={32}
              height={32}
              className="rounded-full"
              alt="Avatar"
              style={{ aspectRatio: "32/32", objectFit: "cover" }}
            />
            <span className="sr-only">User Menu</span>
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <div className="flex-1 overflow-auto p-4 sm:p-6">
        <div className="mx-auto max-w-2xl space-y-4">
          {!messages.length && (
            <h3 className="text-gray-400 text-center">Ask Akira a question to begin</h3>
          )}
          {messages && messages?.map((message, index) => (
            <div key={index}>
              <div className="flex items-start gap-4">
                <Avatar className="w-8 h-8 border">
                  {message?.role === "user" ? (
                    <>
                      <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                      <AvatarFallback>YO</AvatarFallback>
                    </>
                  ) : (
                    <AvatarImage src="/images/fox.jfif" alt="Image" />
                  )}
                </Avatar>
                <div className="grid gap-1">
                  {message?.role === "user" ? (
                    <div className="font-bold">You</div>
                  ) : (
                    <div className="font-bold text-[#E4A263]">Akira</div>
                  )}
                  <div className={`prose text-muted-foreground ${message?.role === "user" ? "bg-[#d9d6d4]" : "bg-[#E4A263]"}  bg-opacity-10 rounded-md p-4`}>
                    <p>
                      {message?.content[0]?.text}
                    </p>
                  </div>
                </div>
              </div>
              {message?.role === "assistant" && (
                <div className="ml-12">
                  <div className="flex items-center gap-2 py-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                    >
                      <ClipboardIcon className="w-4 h-4" />
                      <span className="sr-only">Copy</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                    >
                      <ThumbsUpIcon className="w-4 h-4" />
                      <span className="sr-only">Upvote</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                    >
                      <ThumbsDownIcon className="w-4 h-4" />
                      <span className="sr-only">Downvote</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                    >
                      <RefreshCcwIcon className="w-4 h-4" />
                      <span className="sr-only">Regenerate</span>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
        <div className="border-l bg-background px-4 py-6 sm:px-6">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-2 text-lg font-medium">Settings</h3>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <span>Dark Mode</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span>Language</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <span>English</span>
                        <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>English</DropdownMenuItem>
                      <DropdownMenuItem>Español</DropdownMenuItem>
                      <DropdownMenuItem>Français</DropdownMenuItem>
                      <DropdownMenuItem>Deutsch</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex items-center justify-between">
                  <span>Font Size</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <span>Medium</span>
                        <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Small</DropdownMenuItem>
                      <DropdownMenuItem>Medium</DropdownMenuItem>
                      <DropdownMenuItem>Large</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium">Past Conversations</h3>
              <div className="grid gap-2">
                <Link
                  href="#"
                  className="flex items-center justify-between rounded-md bg-muted px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}
                >
                  <span>Airplane Turbulence</span>
                  <ChevronRightIcon className="h-4 w-4 text-muted-foreground" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between rounded-md bg-muted px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}
                >
                  <span>How to make a chat app with React</span>
                  <ChevronRightIcon className="h-4 w-4 text-muted-foreground" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between rounded-md bg-muted px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}
                >
                  <span>Cooking recipe for disaster</span>
                  <ChevronRightIcon className="h-4 w-4 text-muted-foreground" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium">Other Features</h3>
              <div className="grid gap-2">
                <Link
                  href="#"
                  className="flex items-center justify-between rounded-md bg-muted px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}
                >
                  <span>DALL-E</span>
                  <ChevronRightIcon className="h-4 w-4 text-muted-foreground" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between rounded-md bg-muted px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}
                >
                  <span>Code Playground</span>
                  <ChevronRightIcon className="h-4 w-4 text-muted-foreground" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between rounded-md bg-muted px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}
                >
                  <span>Summarize</span>
                  <ChevronRightIcon className="h-4 w-4 text-muted-foreground" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl w-full sticky bottom-0 mx-auto py-2 flex flex-col gap-1.5 px-4 bg-background">
        <div className="relative">
          <Textarea
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Message Akira..."
            name="message"
            id="message"
            rows={1}
            className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
          />
          <Button
            type="submit"
            size="icon"
            className="absolute w-8 h-8 top-3 right-3"
            onClick={handleAkiraGenerateResponse}
          >
            <ArrowUpIcon className="w-4 h-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
        <p className="text-xs font-medium text-center text-neutral-700">
          ChatGPT can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
}

// Icon components remain unchanged

function ArrowUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function RefreshCcwIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ThumbsDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  );
}

function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}
