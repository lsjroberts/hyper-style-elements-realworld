import { el, column, h1, text } from 'hyper-style-elements/elements';

export default function view(article) {
  return el(
    null,
    [],
    column(
      null,
      [],
      [
        text(article.author),
        h1(null, [], text(article.title)),
        text(article.body)
      ]
    )
  );
}
