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
            <img className={'object-cover w-96 h-96'}
             src={url} alt={'sdf'}/>
            <p className={'w-96 text-xl'}>{name}</p>
          </div>))}
      </div>
    </main>
  );
}
