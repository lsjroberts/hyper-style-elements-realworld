import { el, column } from 'hyper-style-elements/elements';
import { spacing } from 'hyper-style-elements/elements/attributes';

import Article from '../article';
import { smallSpacingScale } from '../../scales';

export function viewFeedSources() {
  return el(null, [], 'sources');
}

export function viewArticles({ feed }) {
  return column(
    null,
    [spacing(smallSpacingScale(2))],
    [...feed.articles.map(Article), pagination()]
  );
}

function pagination() {
  return el(null, [], 'pagination');
}
