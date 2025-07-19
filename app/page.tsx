import { markdownToHtml } from "@/lib/markdownToHtml";

export default async function Home() {
  const content = await markdownToHtml();

  return (
    <main className="prose mx-auto my-8">
      {/* Render HTML content safely */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}
