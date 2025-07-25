import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import fs from "fs";
import path from "path";
import { remarkPageBreak } from "./pageBreakPlugin";

export async function markdownToHtml() {
  const filePath = path.join(process.cwd(), "content/p-zero.md");
  const markdown = fs.readFileSync(filePath, "utf-8");

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(remarkPageBreak)
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  return String(result);
}
