import {db} from "~/server/db";

const mockUrls = [
  'https://utfs.io/f/24c04b96-0f44-46fe-9a46-faaa78ba9d31-dvcaqd.jpg',
  'https://utfs.io/f/0f628253-040d-4135-88e6-2bf6396b442e-x6u2b7.jpg',
  'https://utfs.io/f/7301f87e-b8f1-4ceb-8b2b-17c23fe7e4d3-nixrgw.jpg',
  'https://utfs.io/f/15051bd7-b33c-4bcb-a566-9f86b4e7d9a7-nvl9gg.jpg',
  'https://utfs.io/f/ab9458ab-ea47-45ef-a68b-5116ea3c3be9-tujhde.jpg',
]

export default async function HomePage() {
  const posts = await db.query.posts.findMany()

  console.log(posts);

  return (
    <main className="min-h-screen">
      <div className={'flex flex-wrap gap-4'}>
        {posts.map((post) => (<p>{post.name}</p>))}

        {[...mockUrls, ...mockUrls].map((url, index) => (
          <img className='w-48 h-48 object-cover' key={index} src={url} alt={'sdf'}/>))}
      </div>
    </main>
  );
}
