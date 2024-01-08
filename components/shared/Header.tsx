import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full border-b">
    <div className="wrapper flex items-center justify-between">
      <Link href="/" className="w-20">
        <Image 
          src="/assets/images/Sherehe_logo_circle.png" width={120} height={90}
          alt="Sherehe near me logo" 
        />
      </Link>

      <SignedIn>
        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>
      </SignedIn>

      <div className="flex w-24 justify-end gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <MobileNav />
        </SignedIn>
        <SignedOut>
          <Button asChild className="rounded-full" size="sm">
            <Link href="/sign-in">
              Login
            </Link>
          </Button>
        </SignedOut>
      </div>
    </div>
  </header>
  )
}

export default Header