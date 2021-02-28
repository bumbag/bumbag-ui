import { BorderRadii, FontFamily, FontSize, FontWeight, LetterSpacing, LineHeight, Palette } from './props';
import { Flexible } from './utils';

export type CSSProperties = {
  _hover?: CSSProperties;
  _hoveractive?: CSSProperties;
  _focus?: CSSProperties;
  _active?: CSSProperties;
  _visited?: CSSProperties;
  _disabled?: CSSProperties;
  _groupHover?: CSSProperties;
  _groupActive?: CSSProperties;
  _groupFocus?: CSSProperties;
  _groupVisited?: CSSProperties;
  _groupDisabled?: CSSProperties;
  alignContent?: string | number | { [key: string]: string };
  alignSelf?: string | number | { [key: string]: string };
  alignItems?: string | number | { [key: string]: string };
  alignmentBaseline?: string | number | { [key: string]: string };
  all?: string | number | { [key: string]: string };
  animation?: string | number | { [key: string]: string };
  animationDelay?: string | number | { [key: string]: string };
  animationDirection?: string | number | { [key: string]: string };
  animationDuration?: string | number | { [key: string]: string };
  animationFillMode?: string | number | { [key: string]: string };
  animationIterationCount?: string | number | { [key: string]: string };
  animationName?: string | number | { [key: string]: string };
  animationPlayState?: string | number | { [key: string]: string };
  animationTimingFunction?: string | number | { [key: string]: string };
  appearance?: string | number | { [key: string]: string };
  azimuth?: string | number | { [key: string]: string };
  backfaceVisibility?: string | number | { [key: string]: string };
  background?: string | number | { [key: string]: string };
  backgroundAttachment?: string | number | { [key: string]: string };
  backgroundBlendMode?: string | number | { [key: string]: string };
  backgroundClip?: string | number | { [key: string]: string };
  backgroundColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  backgroundImage?: string | number | { [key: string]: string };
  backgroundImageTransform?: string | number | { [key: string]: string };
  backgroundOrigin?: string | number | { [key: string]: string };
  backgroundPosition?: string | number | { [key: string]: string };
  backgroundRepeat?: string | number | { [key: string]: string };
  backgroundSize?: string | number | { [key: string]: string };
  baselineShift?: string | number | { [key: string]: string };
  blockSize?: string | number | { [key: string]: string };
  blockStep?: string | number | { [key: string]: string };
  blockStepAlign?: string | number | { [key: string]: string };
  blockStepInsert?: string | number | { [key: string]: string };
  blockStepRound?: string | number | { [key: string]: string };
  blockStepSize?: string | number | { [key: string]: string };
  bookmarkLabel?: string | number | { [key: string]: string };
  bookmarkLevel?: string | number | { [key: string]: string };
  bookmarkState?: string | number | { [key: string]: string };
  border?: string | number | { [key: string]: string };
  borderBlock?: string | number | { [key: string]: string };
  borderBlockColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  borderBlockEnd?: string | number | { [key: string]: string };
  borderBlockEndColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  borderBlockEndStyle?: string | number | { [key: string]: string };
  borderBlockEndWidth?: string | number | { [key: string]: string };
  borderBlockStart?: string | number | { [key: string]: string };
  borderBlockStartColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  borderBlockStartStyle?: string | number | { [key: string]: string };
  borderBlockStartWidth?: string | number | { [key: string]: string };
  borderBlockStyle?: string | number | { [key: string]: string };
  borderBlockWidth?: string | number | { [key: string]: string };
  borderBottom?: string | number | { [key: string]: string };
  borderBottomColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  borderBottomLeftRadius?: string | number | { [key: string]: string };
  borderBottomRightRadius?: string | number | { [key: string]: string };
  borderBottomStyle?: string | number | { [key: string]: string };
  borderBottomWidth?: string | number | { [key: string]: string };
  borderBoundary?: string | number | { [key: string]: string };
  borderCollapse?: string | number | { [key: string]: string };
  borderColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  borderImage?: string | number | { [key: string]: string };
  borderImageOutset?: string | number | { [key: string]: string };
  borderImageRepeat?: string | number | { [key: string]: string };
  borderImageSlice?: string | number | { [key: string]: string };
  borderImageSource?: string | number | { [key: string]: string };
  borderImageTransform?: string | number | { [key: string]: string };
  borderImageWidth?: string | number | { [key: string]: string };
  borderInline?: string | number | { [key: string]: string };
  borderInlineColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  borderInlineEnd?: string | number | { [key: string]: string };
  borderInlineEndColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  borderInlineEndStyle?: string | number | { [key: string]: string };
  borderInlineEndWidth?: string | number | { [key: string]: string };
  borderInlineStart?: string | number | { [key: string]: string };
  borderInlineStartColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  borderInlineStartStyle?: string | number | { [key: string]: string };
  borderInlineStartWidth?: string | number | { [key: string]: string };
  borderInlineStyle?: string | number | { [key: string]: string };
  borderInlineWidth?: string | number | { [key: string]: string };
  borderLeft?: string | number | { [key: string]: string };
  borderLeftColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  borderLeftStyle?: string | number | { [key: string]: string };
  borderLeftWidth?: string | number | { [key: string]: string };
  borderRadius?: Flexible<BorderRadii, string | number | { [key: string]: BorderRadii }>;
  borderRightRadius?: Flexible<BorderRadii, string | number | { [key: string]: BorderRadii }>;
  borderLeftRadius?: Flexible<BorderRadii, string | number | { [key: string]: BorderRadii }>;
  borderRight?: string | number | { [key: string]: string };
  borderRightColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  borderRightStyle?: string | number | { [key: string]: string };
  borderRightWidth?: string | number | { [key: string]: string };
  borderSpacing?: string | number | { [key: string]: string };
  borderStyle?: string | number | { [key: string]: string };
  borderTop?: string | number | { [key: string]: string };
  borderTopColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  borderTopLeftRadius?: string | number | { [key: string]: string };
  borderTopRightRadius?: string | number | { [key: string]: string };
  borderTopStyle?: string | number | { [key: string]: string };
  borderTopWidth?: string | number | { [key: string]: string };
  borderWidth?: string | number | { [key: string]: string };
  bottom?: string | number | { [key: string]: string };
  boxDecorationBreak?: string | number | { [key: string]: string };
  boxShadow?: string | number | { [key: string]: string };
  boxSizing?: string | number | { [key: string]: string };
  boxSnap?: string | number | { [key: string]: string };
  breakAfter?: string | number | { [key: string]: string };
  breakBefore?: string | number | { [key: string]: string };
  breakInside?: string | number | { [key: string]: string };
  captionSide?: string | number | { [key: string]: string };
  caret?: string | number | { [key: string]: string };
  caretAnimation?: string | number | { [key: string]: string };
  caretColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  caretShape?: string | number | { [key: string]: string };
  chains?: string | number | { [key: string]: string };
  clear?: string | number | { [key: string]: string };
  clip?: string | number | { [key: string]: string };
  clipPath?: string | number | { [key: string]: string };
  clipRule?: string | number | { [key: string]: string };
  color?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  colorAdjust?: string | number | { [key: string]: string };
  colorInterpolationFilters?: string | number | { [key: string]: string };
  columnCount?: string | number | { [key: string]: string };
  columnFill?: string | number | { [key: string]: string };
  columnGap?: string | number | { [key: string]: string };
  columnRule?: string | number | { [key: string]: string };
  columnRuleColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  columnRuleStyle?: string | number | { [key: string]: string };
  columnRuleWidth?: string | number | { [key: string]: string };
  columnSpan?: string | number | { [key: string]: string };
  columnWidth?: string | number | { [key: string]: string };
  columns?: string | number | { [key: string]: string };
  contain?: string | number | { [key: string]: string };
  content?: string | number | { [key: string]: string };
  continue?: string | number | { [key: string]: string };
  counterIncrement?: string | number | { [key: string]: string };
  counterReset?: string | number | { [key: string]: string };
  counterSet?: string | number | { [key: string]: string };
  cue?: string | number | { [key: string]: string };
  cueAfter?: string | number | { [key: string]: string };
  cueBefore?: string | number | { [key: string]: string };
  cursor?: string | number | { [key: string]: string };
  direction?: string | number | { [key: string]: string };
  display?: string | number | { [key: string]: string };
  dominantBaseline?: string | number | { [key: string]: string };
  elevation?: string | number | { [key: string]: string };
  emptyCells?: string | number | { [key: string]: string };
  fill?: string | number | { [key: string]: string };
  fillBreak?: string | number | { [key: string]: string };
  fillColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  fillImage?: string | number | { [key: string]: string };
  fillOpacity?: string | number | { [key: string]: string };
  fillOrigin?: string | number | { [key: string]: string };
  fillPosition?: string | number | { [key: string]: string };
  fillRepeat?: string | number | { [key: string]: string };
  fillRule?: string | number | { [key: string]: string };
  fillSize?: string | number | { [key: string]: string };
  filter?: string | number | { [key: string]: string };
  flex?: string | number | { [key: string]: string };
  flexBasis?: string | number | { [key: string]: string };
  flexDirection?: string | number | { [key: string]: string };
  flexFlow?: string | number | { [key: string]: string };
  flexGrow?: string | number | { [key: string]: string };
  flexShrink?: string | number | { [key: string]: string };
  flexWrap?: string | number | { [key: string]: string };
  float?: string | number | { [key: string]: string };
  floatDefer?: string | number | { [key: string]: string };
  floatOffset?: string | number | { [key: string]: string };
  floatReference?: string | number | { [key: string]: string };
  floodColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  floodOpacity?: string | number | { [key: string]: string };
  flow?: string | number | { [key: string]: string };
  flowFrom?: string | number | { [key: string]: string };
  flowInto?: string | number | { [key: string]: string };
  font?: Flexible<FontFamily, string | number | { [key: string]: FontFamily }>;
  fontFamily?: Flexible<FontFamily, string | number | { [key: string]: FontFamily }>;
  fontFeatureSettings?: string | number | { [key: string]: string };
  fontKerning?: string | number | { [key: string]: string };
  fontLanguageOverride?: string | number | { [key: string]: string };
  fontMaxSize?: string | number | { [key: string]: string };
  fontMinSize?: string | number | { [key: string]: string };
  fontOpticalSizing?: string | number | { [key: string]: string };
  fontPalette?: string | number | { [key: string]: string };
  fontPresentation?: string | number | { [key: string]: string };
  fontSize?: Flexible<FontSize, string | number | { [key: string]: string }>;
  fontSizeAdjust?: string | number | { [key: string]: string };
  fontStretch?: string | number | { [key: string]: string };
  fontStyle?: string | number | { [key: string]: string };
  fontSynthesis?: string | number | { [key: string]: string };
  fontVariant?: string | number | { [key: string]: string };
  fontVariantAlternates?: string | number | { [key: string]: string };
  fontVariantCaps?: string | number | { [key: string]: string };
  fontVariantEastAsian?: string | number | { [key: string]: string };
  fontVariantLigatures?: string | number | { [key: string]: string };
  fontVariantNumeric?: string | number | { [key: string]: string };
  fontVariantPosition?: string | number | { [key: string]: string };
  fontVariationSettings?: string | number | { [key: string]: string };
  fontWeight?: Flexible<FontWeight, string | number | { [key: string]: FontWeight }>;
  footnoteDisplay?: string | number | { [key: string]: string };
  footnotePolicy?: string | number | { [key: string]: string };
  gap?: string | number | { [key: string]: string };
  glyphOrientationVertical?: string | number | { [key: string]: string };
  grid?: string | number | { [key: string]: string };
  gridArea?: string | number | { [key: string]: string };
  gridAutoColumns?: string | number | { [key: string]: string };
  gridAutoFlow?: string | number | { [key: string]: string };
  gridAutoRows?: string | number | { [key: string]: string };
  gridColumn?: string | number | { [key: string]: string };
  gridColumnEnd?: string | number | { [key: string]: string };
  gridColumnGap?: string | number | { [key: string]: string };
  gridColumnStart?: string | number | { [key: string]: string };
  gridGap?: string | number | { [key: string]: string };
  gridRow?: string | number | { [key: string]: string };
  gridRowEnd?: string | number | { [key: string]: string };
  gridRowGap?: string | number | { [key: string]: string };
  gridRowStart?: string | number | { [key: string]: string };
  gridTemplate?: string | number | { [key: string]: string };
  gridTemplateAreas?: string | number | { [key: string]: string };
  gridTemplateColumns?: string | number | { [key: string]: string };
  gridTemplateRows?: string | number | { [key: string]: string };
  hangingPunctuation?: string | number | { [key: string]: string };
  height?: string | number | { [key: string]: string };
  hyphenateCharacter?: string | number | { [key: string]: string };
  hyphenateLimitChars?: string | number | { [key: string]: string };
  hyphenateLimitLast?: string | number | { [key: string]: string };
  hyphenateLimitLines?: string | number | { [key: string]: string };
  hyphenateLimitZone?: string | number | { [key: string]: string };
  hyphens?: string | number | { [key: string]: string };
  imageOrientation?: string | number | { [key: string]: string };
  imageResolution?: string | number | { [key: string]: string };
  initialLetter?: string | number | { [key: string]: string };
  initialLetterAlign?: string | number | { [key: string]: string };
  initialLetterWrap?: string | number | { [key: string]: string };
  inlineSize?: string | number | { [key: string]: string };
  inset?: string | number | { [key: string]: string };
  insetBlock?: string | number | { [key: string]: string };
  insetBlockEnd?: string | number | { [key: string]: string };
  insetBlockStart?: string | number | { [key: string]: string };
  insetInline?: string | number | { [key: string]: string };
  insetInlineEnd?: string | number | { [key: string]: string };
  insetInlineStart?: string | number | { [key: string]: string };
  isolation?: string | number | { [key: string]: string };
  justifyContent?: string | number | { [key: string]: string };
  justifyItems?: string | number | { [key: string]: string };
  justifySelf?: string | number | { [key: string]: string };
  left?: string | number | { [key: string]: string };
  letterSpacing?: Flexible<LetterSpacing, string | number | { [key: string]: LetterSpacing }>;
  lightingColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  lineBreak?: string | number | { [key: string]: string };
  lineGrid?: string | number | { [key: string]: string };
  lineHeight?: Flexible<LineHeight, string | number | { [key: string]: LineHeight }>;
  lineHeightStep?: string | number | { [key: string]: string };
  lineSnap?: string | number | { [key: string]: string };
  listStyle?: string | number | { [key: string]: string };
  listStyleImage?: string | number | { [key: string]: string };
  listStylePosition?: string | number | { [key: string]: string };
  listStyleType?: string | number | { [key: string]: string };
  margin?: string | number | { [key: string]: string };
  marginBlock?: string | number | { [key: string]: string };
  marginBlockEnd?: string | number | { [key: string]: string };
  marginBlockStart?: string | number | { [key: string]: string };
  marginBottom?: string | number | { [key: string]: string };
  marginInline?: string | number | { [key: string]: string };
  marginInlineEnd?: string | number | { [key: string]: string };
  marginInlineStart?: string | number | { [key: string]: string };
  marginLeft?: string | number | { [key: string]: string };
  marginRight?: string | number | { [key: string]: string };
  marginTop?: string | number | { [key: string]: string };
  marginX?: string | number | { [key: string]: string };
  marginY?: string | number | { [key: string]: string };
  marker?: string | number | { [key: string]: string };
  markerEnd?: string | number | { [key: string]: string };
  markerKnockoutLeft?: string | number | { [key: string]: string };
  markerKnockoutRight?: string | number | { [key: string]: string };
  markerMid?: string | number | { [key: string]: string };
  markerPattern?: string | number | { [key: string]: string };
  markerSegment?: string | number | { [key: string]: string };
  markerSide?: string | number | { [key: string]: string };
  markerStart?: string | number | { [key: string]: string };
  marqueeDirection?: string | number | { [key: string]: string };
  marqueeLoop?: string | number | { [key: string]: string };
  marqueeSpeed?: string | number | { [key: string]: string };
  marqueeStyle?: string | number | { [key: string]: string };
  mask?: string | number | { [key: string]: string };
  maskBorder?: string | number | { [key: string]: string };
  maskBorderMode?: string | number | { [key: string]: string };
  maskBorderOutset?: string | number | { [key: string]: string };
  maskBorderRepeat?: string | number | { [key: string]: string };
  maskBorderSlice?: string | number | { [key: string]: string };
  maskBorderSource?: string | number | { [key: string]: string };
  maskBorderWidth?: string | number | { [key: string]: string };
  maskClip?: string | number | { [key: string]: string };
  maskComposite?: string | number | { [key: string]: string };
  maskImage?: string | number | { [key: string]: string };
  maskMode?: string | number | { [key: string]: string };
  maskOrigin?: string | number | { [key: string]: string };
  maskPosition?: string | number | { [key: string]: string };
  maskRepeat?: string | number | { [key: string]: string };
  maskSize?: string | number | { [key: string]: string };
  maskType?: string | number | { [key: string]: string };
  maxBlockSize?: string | number | { [key: string]: string };
  maxHeight?: string | number | { [key: string]: string };
  maxInlineSize?: string | number | { [key: string]: string };
  maxLines?: string | number | { [key: string]: string };
  maxWidth?: string | number | { [key: string]: string };
  minBlockSize?: string | number | { [key: string]: string };
  minHeight?: string | number | { [key: string]: string };
  minInlineSize?: string | number | { [key: string]: string };
  minWidth?: string | number | { [key: string]: string };
  mixBlendMode?: string | number | { [key: string]: string };
  navDown?: string | number | { [key: string]: string };
  navLeft?: string | number | { [key: string]: string };
  navRight?: string | number | { [key: string]: string };
  navUp?: string | number | { [key: string]: string };
  objectFit?: string | number | { [key: string]: string };
  objectPosition?: string | number | { [key: string]: string };
  offset?: string | number | { [key: string]: string };
  offsetAfter?: string | number | { [key: string]: string };
  offsetAnchor?: string | number | { [key: string]: string };
  offsetBefore?: string | number | { [key: string]: string };
  offsetDistance?: string | number | { [key: string]: string };
  offsetEnd?: string | number | { [key: string]: string };
  offsetPath?: string | number | { [key: string]: string };
  offsetPosition?: string | number | { [key: string]: string };
  offsetRotate?: string | number | { [key: string]: string };
  offsetStart?: string | number | { [key: string]: string };
  opacity?: string | number | { [key: string]: string };
  order?: string | number | { [key: string]: string };
  orphans?: string | number | { [key: string]: string };
  outline?: string | number | { [key: string]: string };
  outlineColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  outlineOffset?: string | number | { [key: string]: string };
  outlineStyle?: string | number | { [key: string]: string };
  outlineWidth?: string | number | { [key: string]: string };
  overflow?: string | number | { [key: string]: string };
  overflowStyle?: string | number | { [key: string]: string };
  overflowWrap?: string | number | { [key: string]: string };
  overflowX?: string | number | { [key: string]: string };
  overflowY?: string | number | { [key: string]: string };
  padding?: string | number | { [key: string]: string };
  paddingBlock?: string | number | { [key: string]: string };
  paddingBlockEnd?: string | number | { [key: string]: string };
  paddingBlockStart?: string | number | { [key: string]: string };
  paddingBottom?: string | number | { [key: string]: string };
  paddingInline?: string | number | { [key: string]: string };
  paddingInlineEnd?: string | number | { [key: string]: string };
  paddingInlineStart?: string | number | { [key: string]: string };
  paddingLeft?: string | number | { [key: string]: string };
  paddingRight?: string | number | { [key: string]: string };
  paddingTop?: string | number | { [key: string]: string };
  paddingX?: string | number | { [key: string]: string };
  paddingY?: string | number | { [key: string]: string };
  page?: string | number | { [key: string]: string };
  pageBreakAfter?: string | number | { [key: string]: string };
  pageBreakBefore?: string | number | { [key: string]: string };
  pageBreakInside?: string | number | { [key: string]: string };
  pause?: string | number | { [key: string]: string };
  pauseAfter?: string | number | { [key: string]: string };
  pauseBefore?: string | number | { [key: string]: string };
  perspective?: string | number | { [key: string]: string };
  perspectiveOrigin?: string | number | { [key: string]: string };
  pitch?: string | number | { [key: string]: string };
  pitchRange?: string | number | { [key: string]: string };
  placeContent?: string | number | { [key: string]: string };
  placeItems?: string | number | { [key: string]: string };
  placeSelf?: string | number | { [key: string]: string };
  playDuring?: string | number | { [key: string]: string };
  pointerEvents?: React.CSSProperties['pointerEvents'] | { [key: string]: React.CSSProperties['pointerEvents'] };
  position?: string | number | { [key: string]: string };
  presentationLevel?: string | number | { [key: string]: string };
  quotes?: string | number | { [key: string]: string };
  regionFragment?: string | number | { [key: string]: string };
  resize?: string | number | { [key: string]: string };
  rest?: string | number | { [key: string]: string };
  restAfter?: string | number | { [key: string]: string };
  restBefore?: string | number | { [key: string]: string };
  richness?: string | number | { [key: string]: string };
  right?: string | number | { [key: string]: string };
  rotation?: string | number | { [key: string]: string };
  rotationPoint?: string | number | { [key: string]: string };
  rowGap?: string | number | { [key: string]: string };
  rubyAlign?: string | number | { [key: string]: string };
  rubyMerge?: string | number | { [key: string]: string };
  rubyPosition?: string | number | { [key: string]: string };
  running?: string | number | { [key: string]: string };
  scrollBehavior?: string | number | { [key: string]: string };
  scrollPadding?: string | number | { [key: string]: string };
  scrollPaddingBlock?: string | number | { [key: string]: string };
  scrollPaddingBlockEnd?: string | number | { [key: string]: string };
  scrollPaddingBlockStart?: string | number | { [key: string]: string };
  scrollPaddingBottom?: string | number | { [key: string]: string };
  scrollPaddingInline?: string | number | { [key: string]: string };
  scrollPaddingInlineEnd?: string | number | { [key: string]: string };
  scrollPaddingInlineStart?: string | number | { [key: string]: string };
  scrollPaddingLeft?: string | number | { [key: string]: string };
  scrollPaddingRight?: string | number | { [key: string]: string };
  scrollPaddingTop?: string | number | { [key: string]: string };
  scrollSnapAlign?: string | number | { [key: string]: string };
  scrollSnapMargin?: string | number | { [key: string]: string };
  scrollSnapMarginBlock?: string | number | { [key: string]: string };
  scrollSnapMarginBlockEnd?: string | number | { [key: string]: string };
  scrollSnapMarginBlockStart?: string | number | { [key: string]: string };
  scrollSnapMarginBottom?: string | number | { [key: string]: string };
  scrollSnapMarginInline?: string | number | { [key: string]: string };
  scrollSnapMarginInlineEnd?: string | number | { [key: string]: string };
  scrollSnapMarginInlineStart?: string | number | { [key: string]: string };
  scrollSnapMarginLeft?: string | number | { [key: string]: string };
  scrollSnapMarginRight?: string | number | { [key: string]: string };
  scrollSnapMarginTop?: string | number | { [key: string]: string };
  scrollSnapStop?: string | number | { [key: string]: string };
  scrollSnapType?: string | number | { [key: string]: string };
  scrollbarGutter?: string | number | { [key: string]: string };
  shapeImageThreshold?: string | number | { [key: string]: string };
  shapeInside?: string | number | { [key: string]: string };
  shapeMargin?: string | number | { [key: string]: string };
  shapeOutside?: string | number | { [key: string]: string };
  speak?: string | number | { [key: string]: string };
  speakAs?: string | number | { [key: string]: string };
  speakHeader?: string | number | { [key: string]: string };
  speakNumeral?: string | number | { [key: string]: string };
  speakPunctuation?: string | number | { [key: string]: string };
  speechRate?: string | number | { [key: string]: string };
  stress?: string | number | { [key: string]: string };
  stringSet?: string | number | { [key: string]: string };
  stroke?: string | number | { [key: string]: string };
  strokeAlign?: string | number | { [key: string]: string };
  strokeAlignment?: string | number | { [key: string]: string };
  strokeBreak?: string | number | { [key: string]: string };
  strokeColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  strokeDashCorner?: string | number | { [key: string]: string };
  strokeDashJustify?: string | number | { [key: string]: string };
  strokeDashadjust?: string | number | { [key: string]: string };
  strokeDasharray?: string | number | { [key: string]: string };
  strokeDashcorner?: string | number | { [key: string]: string };
  strokeDashoffset?: string | number | { [key: string]: string };
  strokeImage?: string | number | { [key: string]: string };
  strokeLinecap?: string | number | { [key: string]: string };
  strokeLinejoin?: string | number | { [key: string]: string };
  strokeMiterlimit?: string | number | { [key: string]: string };
  strokeOpacity?: string | number | { [key: string]: string };
  strokeOrigin?: string | number | { [key: string]: string };
  strokePosition?: string | number | { [key: string]: string };
  strokeRepeat?: string | number | { [key: string]: string };
  strokeSize?: string | number | { [key: string]: string };
  strokeWidth?: string | number | { [key: string]: string };
  tabSize?: string | number | { [key: string]: string };
  tableLayout?: string | number | { [key: string]: string };
  textAlign?: string | number | { [key: string]: string };
  textAlignAll?: string | number | { [key: string]: string };
  textAlignLast?: string | number | { [key: string]: string };
  textCombineUpright?: string | number | { [key: string]: string };
  textDecoration?: string | number | { [key: string]: string };
  textDecorationColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  textDecorationLine?: string | number | { [key: string]: string };
  textDecorationSkip?: string | number | { [key: string]: string };
  textDecorationStyle?: string | number | { [key: string]: string };
  textEmphasis?: string | number | { [key: string]: string };
  textEmphasisColor?: Flexible<Palette, string | number | { [key: string]: Flexible<Palette, string> }>;
  textEmphasisPosition?: string | number | { [key: string]: string };
  textEmphasisStyle?: string | number | { [key: string]: string };
  textIndent?: string | number | { [key: string]: string };
  textJustify?: string | number | { [key: string]: string };
  textOrientation?: string | number | { [key: string]: string };
  textOverflow?: string | number | { [key: string]: string };
  textShadow?: string | number | { [key: string]: string };
  textSpaceCollapse?: string | number | { [key: string]: string };
  textSpaceTrim?: string | number | { [key: string]: string };
  textSpacing?: string | number | { [key: string]: string };
  textTransform?: string | number | { [key: string]: string };
  textUnderlinePosition?: string | number | { [key: string]: string };
  textWrap?: string | number | { [key: string]: string };
  top?: string | number | { [key: string]: string };
  transform?: string | number | { [key: string]: string };
  transformBox?: string | number | { [key: string]: string };
  transformOrigin?: string | number | { [key: string]: string };
  transformStyle?: string | number | { [key: string]: string };
  transition?: string | number | { [key: string]: string };
  transitionDelay?: string | number | { [key: string]: string };
  transitionDuration?: string | number | { [key: string]: string };
  transitionProperty?: string | number | { [key: string]: string };
  transitionTimingFunction?: string | number | { [key: string]: string };
  unicodeBidi?: string | number | { [key: string]: string };
  userSelect?: string | number | { [key: string]: string };
  verticalAlign?: string | number | { [key: string]: string };
  visibility?: string | number | { [key: string]: string };
  voiceBalance?: string | number | { [key: string]: string };
  voiceDuration?: string | number | { [key: string]: string };
  voiceFamily?: string | number | { [key: string]: string };
  voicePitch?: string | number | { [key: string]: string };
  voiceRange?: string | number | { [key: string]: string };
  voiceRate?: string | number | { [key: string]: string };
  voiceStress?: string | number | { [key: string]: string };
  voiceVolume?: string | number | { [key: string]: string };
  volume?: string | number | { [key: string]: string };
  whiteSpace?: string | number | { [key: string]: string };
  widows?: string | number | { [key: string]: string };
  width?: string | number | { [key: string]: string };
  willChange?: string | number | { [key: string]: string };
  wordBreak?: string | number | { [key: string]: string };
  wordSpacing?: string | number | { [key: string]: string };
  wordWrap?: string | number | { [key: string]: string };
  wrapAfter?: string | number | { [key: string]: string };
  wrapBefore?: string | number | { [key: string]: string };
  wrapFlow?: string | number | { [key: string]: string };
  wrapInside?: string | number | { [key: string]: string };
  wrapThrough?: string | number | { [key: string]: string };
  writingMode?: string | number | { [key: string]: string };
  zIndex?: string | number | { [key: string]: string };
};
