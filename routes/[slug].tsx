import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS, KATEX_CSS, render } from "$gfm";

import { getPost, Post } from "./index.tsx";

import "prismjs/components/prism-python?no-check";
import Header from "../islands/Header.tsx";
import Footer from "../components/Footer.tsx";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  const style = `          main {
            max-width: 800px;
            margin: 0 auto;
          }
          ${CSS}
          ${KATEX_CSS}
          `;
  return (
    <>
      <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </meta>
        <style dangerouslySetInnerHTML={{ __html: style }}>
        </style>
      </head>
      <body>
        <div className="bg-tiago-bg flex flex-col">
          <Header title="QueroCodar" active="/blog" />
        </div>

        <main
          data-color-mode="light"
          data-light-theme="light"
          data-dark-theme="dark"
          class="mt-8 mb-8 markdown-body"
          dangerouslySetInnerHTML={{
            __html: render(post.content, { allowMath: true }),
          }}
        >
        </main>
        <Footer />
      </body>
    </>
  );
}
