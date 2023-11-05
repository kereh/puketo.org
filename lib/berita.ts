import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeShiki from "@leafac/rehype-shiki";
import moment from "moment";
import * as shiki from "shiki";

const localeId = require("moment/locale/id");
moment.updateLocale("id", localeId);

// memoize/cache the creation of the markdown parser, this sped up the
// building of the blog from ~60s->~10s
let p: ReturnType<typeof getParserPre> | undefined;

async function getParserPre() {
  return (
    unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(remarkGfm)
      // @ts-ignore
      .use(rehypeShiki, {
        highlighter: await shiki.getHighlighter({ theme: "poimandres" }),
      })
      .use(rehypeStringify)
      .use(rehypeSlug)
  );
}

function getParser() {
  if (!p) {
    p = getParserPre().catch((e) => {
      p = undefined;
      throw e;
    });
  }
  return p;
}

export async function getPostById(id: string) {
  const realId = id.replace(/\.md$/, "");
  const fullPath = join("app/_berita", `${realId}.md`);
  const { data, content } = matter(
    await fs.promises.readFile(fullPath, "utf8")
  );

  const parser = await getParser();
  const html = await parser.process(content);

  return {
    ...data,
    judul: data.judul,
    deskripsi: data.deskripsi,
    thumbnail: data.thumbnail,
    id: realId,
    tanggal: `${moment(data.tanggal?.toISOString().slice(0, 10)).format(
      "dddd, DD MMMM YYYY"
    )}`,
    html: html.value.toString(),
  };
}

export async function getAllPosts() {
  const posts = await Promise.all(
    fs.readdirSync("app/_berita").map((id) => getPostById(id))
  );
  return posts.sort((post1, post2) => (post1.tanggal > post2.tanggal ? -1 : 1));
}
