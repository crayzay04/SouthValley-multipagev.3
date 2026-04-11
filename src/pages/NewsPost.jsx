import { useParams, Link, Navigate } from 'react-router-dom';
import { posts } from '../data/posts';

const categoryColors = {
  'Tournament Results': 'bg-green-600',
  'Club News': 'bg-[#0057B8]',
  'Announcements': 'bg-yellow-600',
};

export default function NewsPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/news" replace />;

  const morePosts = posts.filter((p) => p.slug !== slug).slice(0, 2);
  const colorClass = categoryColors[post.category] ?? 'bg-gray-700';

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-black via-[#04102b] to-[#001a4d] pt-28 pb-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-[#0057B8] text-sm font-semibold mb-6 hover:underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className={`${colorClass} text-white text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm`}>
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.date}</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white tracking-widest leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Placeholder image */}
        <div className={`${colorClass} h-64 rounded-sm flex items-center justify-center mb-10`}>
          <span className="font-heading text-7xl text-white/20 tracking-widest">SVS</span>
        </div>

        <div className="prose prose-lg max-w-none">
          {post.body.split('\n').map((para, i) =>
            para.trim() ? (
              <p key={i} className="text-gray-300 leading-relaxed mb-4 text-base">
                {para}
              </p>
            ) : (
              <div key={i} className="h-2" />
            )
          )}
        </div>

        {/* Share / Tags */}
        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className={`${colorClass} text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm`}>
            {post.category}
          </span>
          <Link
            to="/news"
            className="text-[#0057B8] text-sm font-semibold hover:underline"
          >
            ← All News
          </Link>
        </div>
      </article>

      {/* More News */}
      {morePosts.length > 0 && (
        <section className="bg-black py-14 border-t border-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-heading text-3xl text-white tracking-widest mb-8">More News</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {morePosts.map((p) => {
                const cc = categoryColors[p.category] ?? 'bg-gray-700';
                return (
                  <Link
                    key={p.id}
                    to={`/news/${p.slug}`}
                    className="group bg-[#111827] border-t-[3px] border-[#0057B8] rounded-sm p-5 hover:shadow-lg hover:shadow-black/30 transition-shadow"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`${cc} text-white text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm`}>
                        {p.category}
                      </span>
                      <span className="text-gray-500 text-xs">{p.date}</span>
                    </div>
                    <h3 className="font-heading text-xl text-white tracking-wide leading-tight group-hover:text-[#0057B8] transition-colors">
                      {p.title}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
