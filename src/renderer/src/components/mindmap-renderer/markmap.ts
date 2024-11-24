import { loadJS, loadCSS } from "markmap-common";
import { Transformer } from "markmap-lib";
import * as markmap from "markmap-view";

export const transformer = new Transformer();
const { scripts, styles }: any = transformer.getAssets();
loadCSS(styles);
loadJS(scripts, { getMarkmap: () => markmap });