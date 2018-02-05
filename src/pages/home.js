import { el, column, h1, paragraph, text } from 'hyper-style-elements/elements';
import { padding, spacing } from 'hyper-style-elements/elements/attributes';

import styles from '../styles';
import { spacingScale, smallSpacingScale } from '../scales';
import page from '../views/page';
import * as Feed from '../views/article/feed';

export function view({ feed, dispatch }) {
  return page({
    content: column(null, [], [viewBanner(), viewFeed(feed)]),
    dispatch
  });
}

function viewBanner() {
  return column(
    styles.banner,
    [padding(spacingScale(2))],
    [
      h1(styles.bannerTitle, [], text('conduit')),
      paragraph(
        styles.bannerText,
        [],
        [text('A place to share your knowledge.')]
      )
    ]
  );
}

function viewFeed(feed) {
  return column(
    null,
    [spacing(smallSpacingScale(2))],
    [
      el(styles.feedToggle, [], Feed.viewFeedSources()),
      Feed.viewArticles({ feed })
    ]
  );
}
