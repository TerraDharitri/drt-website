// app/blog/[id]/page.tsx

import ArticlePage from "@/templates/Blog/ArticlePage";

const Article = ({ params }: { params: { id: string } }) => {
    return <ArticlePage id={params.id} />;
};

export default Article;

// 👇 Add this to statically generate each blog page at build time
export async function generateStaticParams() {
    // Replace this mock with your real logic: file system, API, CMS, etc.
    const posts = await fetchBlogPosts();
    return posts.map((post) => ({
        id: post.id,
    }));
}

// 👇 Example static data function — REPLACE this with real blog fetch
async function fetchBlogPosts() {
    return [
        { id: "my-first-post" },
        { id: "nextjs-tips" },
        { id: "static-vs-ssr" },
    ];
}
