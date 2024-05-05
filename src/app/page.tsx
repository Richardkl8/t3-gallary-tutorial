import {getUserImages} from "~/server/queries";
import {SignedIn} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export const dynamic = 'force-dynamic'

async function Images() {
  const images = await getUserImages();

  return (
    <div className={'flex flex-wrap justify-center flex-row gap-4'}>
      {[...images,...images,...images,...images,...images].map(({url, name, id}, index) => (
        <div key={name + index} className={'flex flex-col'}>
          <div className={'w-96 h-96'}>
            <Link href={`/img/${id}`}>
              <Image
                style={{objectFit: 'cover', height: '100%', width: '100%'}}
                height={384}
                width={384}
                src={url}
                alt={'auto'}
              />
            </Link>
          </div>
          <p className={'text-center'}>{name}</p>
        </div>
      ))}
    </div>
  )
}

export default async function HomePage() {


  return (
    <main className="">
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}
