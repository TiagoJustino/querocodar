import { Handlers } from "$fresh/server.ts";
import { getPost, Post } from "./index.tsx";
import { PageProps } from "$fresh/server.ts";
import { CSS, KATEX_CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <style>
          {style}
        </style>
      </head>
      <body>
        <main data-color-mode="light" data-light-theme="light" data-dark-theme="dark" class="markdown-body">
         <div
          class="mt-8 markdown-body"
          dangerouslySetInnerHTML={{ __html: render(post.content) }}
         />
        </main>
      </body>
    </>
  );
}
