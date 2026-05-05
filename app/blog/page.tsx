import Link from "next/link";
import { formatDate, getWordPressPosts } from "app/blog/utils";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default async function Page() {
  const posts = await getWordPressPosts();

  return (
    <main>
      <section className="py-12 md:py-16 lg:py-24 border-b border-violet-100 bg-violet-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h1 className="font-semibold text-2xl mb-2 tracking-tighter">Blog</h1>
          <p className="text-gray-500 text-sm">WordPress development tips and studio updates.</p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
            My Blog
          </h1>
          {posts.length === 0 ? (
            <div className="p-6 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <p className="text-neutral-600 dark:text-neutral-400">
                No blog posts available at the moment. Check back soon!
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex items-baseline justify-between gap-8 py-5 hover:text-violet-700 transition-colors group"
                >
                  <p className="text-lg font-medium group-hover:text-violet-700 transition-colors">
                    {post.metadata.title}
                  </p>
                  <p className="text-sm text-neutral-500 tabular-nums shrink-0">
                    {formatDate(post.metadata.publishedAt, false)}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
