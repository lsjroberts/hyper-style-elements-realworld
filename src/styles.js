import { styleSheet, style } from 'hyper-style-elements/style';
import * as Border from 'hyper-style-elements/style/border';
import * as Color from 'hyper-style-elements/style/color';
import * as Font from 'hyper-style-elements/style/font';

import { fontScale } from './scales';

const themes = {
  green: {
    brandColor: Color.rgb(92, 184, 92)
  },
  blue: {
    brandColor: Color.rgb(92, 92, 184)
  }
};

const brandTypeface = Font.typeface([
  Font.font('Titillium Web'),
  Font.font('sans-serif')
]);

const contentTypeface = Font.typeface([
  Font.font('Source Sans Pro'),
  Font.font('sans-serif')
]);

export default styleSheet([
  style('app', [
    contentTypeface,
    Font.size(fontScale(1)),
    Font.lineHeight(1.5)
  ]),

  // page
  style('navBar', [Border.rounded(4)]),
  style('navBarBrand', [
    brandTypeface,
    Font.size(fontScale(2)),
    theme => [Color.text(themes[theme].brandColor)]
  ]),
  style('footer', [Color.background(Color.rgb(243, 243, 243))]),
  style('footerLink', [theme => [Color.text(themes[theme].brandColor)]]),
  style('footerAttribution', [Color.text(Color.rgb(187, 187, 187))]),

  // home
  style('banner', [
    theme => [Color.background(themes[theme].brandColor)],
    Color.text(Color.white)
  ]),
  style('bannerTitle', [
    brandTypeface,
    Font.size(fontScale(4)),
    Font.center(),
    Font.weight(700)
  ]),
  style('bannerText', [Font.size(fontScale(2)), Font.center()])
]);
