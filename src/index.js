import { layout, fullscreen, el } from 'hyper-style-elements/elements';
import { connect, connectFullscreen } from 'hyper-style-elements/redux';
import { styleSheet, style } from 'hyper-style-elements/style';
import * as Font from 'hyper-style-elements/style/font';

import styles from './styles';
import * as Home from './pages/home';

import store from './store';

connectFullscreen(store)(
  state => styles(state.theme),
  (state, dispatch) =>
    el(styles.app, null, Home.view(Object.assign({ dispatch }, state)))
);
