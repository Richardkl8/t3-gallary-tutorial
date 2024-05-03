import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

export function TopNav() {
  return (
    <nav className='flex w-full items-center justify-between p-4 text-xl border-b font-semibold'>
      <div>Gallery</div>
      <div>
        <SignedIn>
          <UserButton/>
        </SignedIn>
        <SignedOut>
          <SignInButton/>
        </SignedOut>
      </div>
    </nav>
  )
}
