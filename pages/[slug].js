import { getAllDocs, getDocBySlug } from "~/lib/docs";
import markdownToHtml from "~/lib/markdown";

export default function Doc({ meta, content }) {
  //* content von unten wird eingebunden
  return <>{content}</>;
}

export async function getStaticProps({ params }) {
  //doc wird gezogen --> slug/id, metadaten und content wird mitgeliefert
  const doc = getDocBySlug(params.slug);
  //gezogener markdown-content wird in markdown.js umgewandelt und als String mit Html-Inhalt zurückgegeben
  const content = await markdownToHtml(doc.content || "");
  //die Inhalte von doc (slug/id, metadaten und content) und der umgewandelte html-String werden zurückgegeben
  return {
    props: {
      ...doc,
      content,
    },
  };
}

export async function getStaticPaths() {
  const docs = getAllDocs();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      };
    }),
    fallback: "unstable_blocking",
  };
}
