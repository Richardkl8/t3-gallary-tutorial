import {db} from "~/server/db";

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  })

  return (
    <main className="min-h-screen">
      <div className={'flex flex-wrap gap-4'}>

        {images.map(({url, name}, index) => (
          <div key={name+index}>
            <img className='w-48 h-48 object-cover' src={url} alt={'sdf'}/>
            <p>{name}</p>
          </div>))}
      </div>
    </main>
  );
}
