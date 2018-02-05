import { el, column, h1 } from 'hyper-style-elements/elements';

export default function view(article) {
  return el(
    null,
    [],
    column(
      null,
      [],
      [article.author, h1(null, [], article.title), article.body]
    )
  );
}
