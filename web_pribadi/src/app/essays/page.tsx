type Essay = {
    title: string;
    description: string;
    date: string;
    slug: string;
  };
  
  const essays: Essay[] = [
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
      date: "5 April 2025",
      slug: "/essays/essay-1",
    },
    {
      title: "Ut Enim ad Minim Veniam",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      date: "3 April 2025",
      slug: "/essays/essay-2",
    },
    {
      title: "Duis Aute Irure Dolor",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "1 April 2025",
      slug: "/essays/essay-3",
    },
    {
      title: "Excepteur Sint Occaecat",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      date: "30 Maret 2025",
      slug: "/essays/essay-4",
    },
    {
      title: "Sed Ut Perspiciatis Unde",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      date: "28 Maret 2025",
      slug: "/essays/essay-5",
    },
    {
      title: "Nemo Enim Ipsam",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      date: "25 Maret 2025",
      slug: "/essays/essay-6",
    },
  ];
  
  export default function Essays() {
    return (
      <div className="px-8 py-16">
        <h1 className="text-4xl font-bold text-zinc-800 mb-6">Daftar Esai</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {essays.map((essay, index) => (
            <a href={essay.slug} key={index} className="block p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 bg-white border border-zinc-200">
              <h2 className="text-xl font-semibold text-zinc-900 mb-2">{essay.title}</h2>
              <p className="text-sm text-zinc-600 mb-4">{essay.description}</p>
              <span className="text-xs text-zinc-500">{essay.date}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }
  