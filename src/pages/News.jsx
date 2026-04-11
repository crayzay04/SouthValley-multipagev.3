import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import BlogCard from '../components/BlogCard';
import AnimatedSection from '../components/AnimatedSection';
import { posts } from '../data/posts';

const categories = ['All', 'Club News', 'Tournament Results', 'Announcements'];

export default function News() {
  const [searchParams] = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'All';
  const [activeFilter, setActiveFilter] = useState(
    categories.includes(initialFilter) ? initialFilter : 'All'
  );

  const filtered = activeFilter === 'All'
    ? posts
    : posts.filter((p) => p.category === activeFilter);

  return (
    <div>
      <HeroSection
        title="South Valley Surf News"
        subtitle="Club updates, tournament results, and announcements"
        size="md"
      />

      <section className="bg-[#0a0a0a] py-16 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter Buttons */}
          <AnimatedSection variant="fadeUp" className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`
                  px-5 py-2 text-sm font-bold uppercase tracking-widest rounded-sm
                  transition-all duration-200
                  ${activeFilter === cat
                    ? 'bg-[#0057B8] text-white shadow-[0_0_16px_rgba(0,87,184,0.4)]'
                    : 'bg-[#111827] text-gray-400 border border-gray-700 hover:border-[#0057B8] hover:text-white hover:-translate-y-0.5'
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Posts Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <AnimatedSection key={post.id} variant="fadeUp" style={{ transitionDelay: `${i * 70}ms` }}>
                  <BlogCard post={post} index={i} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection variant="fadeIn" className="text-center py-20 text-gray-500">
              <p className="font-heading text-2xl tracking-widest mb-2">No posts found</p>
              <p className="text-sm">Try a different filter.</p>
            </AnimatedSection>
          )}
        </div>
      </section>
    </div>
  );
}
