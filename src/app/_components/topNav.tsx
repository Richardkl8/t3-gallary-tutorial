'use client'

import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import {UploadButton} from "~/app/utils/uploadthing";
import {useRouter} from "next/navigation";

export function TopNav() {
  const router = useRouter()

  return (
    <nav className='flex w-full items-center justify-between p-4 text-xl border-b font-semibold'>
      <div>Gallery</div>
      <div className={'flex flex-row'}>
        <SignedIn>
          <UploadButton endpoint={"imageUploader"}
                        onClientUploadComplete={() => router.refresh()}/>
          <UserButton/>
        </SignedIn>
        <SignedOut>
          <SignInButton/>
        </SignedOut>
      </div>
    </nav>
  )
}
