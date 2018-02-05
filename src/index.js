import { layout, el } from 'hyper-style-elements/elements';
import { styleSheet, style } from 'hyper-style-elements/style';
import * as Font from 'hyper-style-elements/style/font';

import styles from './styles';
import * as Home from './pages/home';

layout(
  styles('green'),
  el(styles.app, null, Home.view({ feed: { articles: [] } }))
);
