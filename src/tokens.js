// ============================================================
// Milwaukee Tool — Design Tokens
// Claire Design System v2
// Shared infrastructure for Brand + Task modes
// Product-agnostic naming convention
// Synced with WIP Library primitives — April 2026
// ============================================================


// ── Typography ───────────────────────────────────────────────
// Font family — Helvetica Neue LT Pro with fallbacks
// Font styles map to specific cuts of the typeface:
//   Roman        = 55 Roman            (regular body text)
//   Bold         = 75 Bold             (strong emphasis)
//   HeavyExt     = 83 Heavy Extended   (display headings)
//   BoldExt      = 73 Bold Extended    (subheadings, titles)
//   MedCondensed = 67 Medium Condensed (SKUs, data labels)

export const font = {
  family: "'Helvetica Neue LT Pro', Helvetica, Arial, sans-serif",

  style: {
    roman:        { family: 'Helvetica Neue LT Pro', style: '55 Roman',            weight: 400 },
    bold:         { family: 'Helvetica Neue LT Pro', style: '75 Bold',             weight: 700 },
    heavyExt:     { family: 'Helvetica Neue LT Pro', style: '83 Heavy Extended',   weight: 900 },
    boldExt:      { family: 'Helvetica Neue LT Pro', style: '73 Bold Extended',    weight: 700 },
    medCondensed: { family: 'Helvetica Neue LT Pro', style: '67 Medium Condensed', weight: 500 },
  },
};


// ── Type Scale ───────────────────────────────────────────────
// Semantic roles — describe function, not visual size

export const type = {

  // ── Headings — Heavy Extended, display use ───────────────
  heading: {
    lg: { size: '30px', lineHeight: '36px', fontStyle: 'heavyExt' },
    md: { size: '23px', lineHeight: '28px', fontStyle: 'heavyExt' },
    sm: { size: '20px', lineHeight: '24px', fontStyle: 'boldExt'  },
  },

  // ── Title — UI element headings ──────────────────────────
  title: {
    default:   { size: '16px', lineHeight: '22px', fontStyle: 'roman',    weight: 400 },
    strong:    { size: '16px', lineHeight: '22px', fontStyle: 'bold',     weight: 700 },
    prominent: { size: '16px', lineHeight: '22px', fontStyle: 'heavyExt', weight: 900 },
  },

  // ── Body — Roman, general UI text ────────────────────────
  // Locked at 14px system-wide
  body: {
    default: { size: '14px', lineHeight: '14px', fontStyle: 'roman', weight: 400 },
    strong:  { size: '14px', lineHeight: '14px', fontStyle: 'bold',  weight: 700 },
  },

  // ── Label — field labels, metadata ───────────────────────
  label: {
    sm:      { size: '12px', lineHeight: '16px', fontStyle: 'roman', weight: 400 },
    md:      { size: '14px', lineHeight: '16px', fontStyle: 'roman', weight: 400 },
    lg:      { size: '16px', lineHeight: '20px', fontStyle: 'roman', weight: 400 },
    // Aliases for backwards compat
    default: { size: '12px', lineHeight: '16px', fontStyle: 'roman', weight: 400 },
    strong:  { size: '12px', lineHeight: '16px', fontStyle: 'bold',  weight: 700 },
  },

  // ── Footer — fine print, system labels ───────────────────
  footer: {
    default: { size: '10px', lineHeight: '16px', fontStyle: 'roman', weight: 400 },
    strong:  { size: '10px', lineHeight: '16px', fontStyle: 'bold',  weight: 700 },
  },

  // ── Data — Medium Condensed, SKUs / part numbers ─────────
  data: {
    lg: { size: '16px', lineHeight: '16px', fontStyle: 'medCondensed', weight: 500 },
    md: { size: '14px', lineHeight: '14px', fontStyle: 'medCondensed', weight: 500 },
    sm: { size: '12px', lineHeight: '12px', fontStyle: 'medCondensed', weight: 500 },
    xs: { size: '10px', lineHeight: '10px', fontStyle: 'medCondensed', weight: 500 },
  },

};


// ── Spacing ──────────────────────────────────────────────────
// Base unit: 4px

export const space = {
  1:  '4px',
  2:  '8px',
  3:  '12px',
  4:  '16px',
  5:  '20px',
  6:  '24px',
  8:  '32px',
  9:  '36px',
  12: '48px',
};


// ── Border Radius ────────────────────────────────────────────
// Brand mode (eService): Shape=Square → use radius.none (0px)
// Task mode (OnePoint):  Shape=Rounded → use radius.md (4px)

export const radius = {
  none:  '0px',    // Brand mode — sharp, industrial
  sm:    '2px',    // Checkbox
  md:    '4px',    // Task mode — buttons, inputs, modals
  lg:    '8px',    // Content containers — cards, alerts, thumbnails
  pill:  '16px',   // Badges
  sheet: '28px',   // Bottom sheet top corners
  full:  '9999px', // Circular elements
};


// ── Color · Primitive ────────────────────────────────────────
// Source of truth — grounded in Figma WIP Library
// Two neutral scales: Task (cool blue-grey) + Brand (.COM OneKey warm grey)
// Never reference primitives directly in components — use semantic tokens

export const primitives = {

  // Task neutral scale — cool blue-grey (Claire system)
  neutralTask: {
    50:  '#F8F9FA',
    100: '#F1F3F6',
    200: '#ECF0F6',
    300: '#D8DDE5',
    400: '#BAC3D0',
    500: '#7588A1',
    600: '#5E718A',
    700: '#4B5A6E',
    800: '#384453',
    900: '#262D37',
  },

  // Brand neutral scale — warm grey (Milwaukee Tool .COM / OneKey)
  neutralBrand: {
    50:  '#F6F7F8', // DrpClthGray
    100: '#F0F0F0', // ApprntceGray
    200: '#E9E9E9', // PewterGray
    300: '#DDDDDD', // WshrGray
    400: '#ABACAD', // WingnutGray
    500: '#747476', // BladeGray
    600: '#515355', // ShopVacGray
    700: '#343434', // SlateBlack
  },

};


// ── Color · Semantic ─────────────────────────────────────────
// Semantic tokens — reference primitives, never raw hex
// Shared tokens are identical in both modes
// Split tokens diverge between Brand and Task

export const colorShared = {

  // Surfaces — identical across modes
  surfaceDefault: '#FFFFFF',

  // Focus — always Interactive/focus, never brand red
  focus: '#076AE6',

  // Status — shared across modes
  error:      '#DC2626',
  errorBg:    '#FEF2F2',
  warning:    '#F59E0B',
  warningBg:  '#FFFBEB',
  success:    '#059669',
  successBg:  '#ECFDF5',
  info:       '#0041B3',
  infoBg:     '#E6F0FC',

  // Status neutral
  statusNeutral:      '#D8DDE5',
  statusNeutralLight: '#ECF0F6',
  statusNeutralStrong:'#848A93',

};

// ── Brand mode (eService) ─────────────────────────────────────
// Neutrals from .COM OneKey scale (warm grey)
// Sharp corners (radius.none), red primary action
export const colorBrand = {
  ...colorShared,

  // Neutrals — Neutral · Brand scale
  surfacePage:    primitives.neutralBrand[50],   // #F6F7F8
  surfaceSubtle:  primitives.neutralBrand[50],   // #F6F7F8
  borderDefault:  primitives.neutralBrand[300],  // #DDDDDD
  borderSubtle:   primitives.neutralBrand[400],  // #ABACAD
  borderField:    primitives.neutralBrand[500],  // #747476
  textPrimary:    primitives.neutralBrand[700],  // #343434
  textSecondary:  primitives.neutralBrand[500],  // #747476
  textDisabled:   primitives.neutralBrand[500],  // #747476
  actionDisabled: primitives.neutralBrand[100],  // #F0F0F0

  // Brand action — Milwaukee red
  actionPrimary:        '#DB011C',
  actionPrimaryHover:   '#AD0015',
  actionPrimaryPressed: '#7A000F',
  actionPrimaryText:    '#FFFFFF',

  // Sidebar / action rail
  sidebar: primitives.neutralBrand[700],  // #343434

  // Corner convention
  buttonRadius: radius.none,
  inputRadius:  radius.none,
};

// ── Task mode (OnePoint) ──────────────────────────────────────
// Neutrals from Claire Task scale (cool blue-grey)
// Rounded corners (radius.md), blue primary action
export const colorTask = {
  ...colorShared,

  // Neutrals — Neutral · Task scale
  surfacePage:    primitives.neutralTask[100],   // #F1F3F6
  surfaceSubtle:  primitives.neutralTask[50],    // #F8F9FA
  borderDefault:  primitives.neutralTask[300],   // #D8DDE5
  borderSubtle:   primitives.neutralTask[400],   // #BAC3D0
  borderField:    primitives.neutralTask[500],   // #7588A1
  textPrimary:    primitives.neutralTask[900],   // #262D37
  textSecondary:  primitives.neutralTask[700],   // #4B5A6E
  textDisabled:   primitives.neutralTask[600],   // #5E718A
  actionDisabled: primitives.neutralTask[100],   // #F1F3F6

  // Task action — blue
  actionPrimary:        '#076AE6',
  actionPrimaryHover:   '#0052B4',
  actionPrimaryPressed: '#003090',
  actionPrimaryText:    '#FFFFFF',

  // Sidebar / action rail
  sidebar: primitives.neutralTask[800],  // #384453

  // Corner convention
  buttonRadius: radius.md,
  inputRadius:  radius.md,
};


// ── M3 State Layer Opacities ─────────────────────────────────
export const stateLayer = {
  hover:             0.08,
  press:             0.12,
  focus:             0.12,
  drag:              0.16,
  disabled:          0.38,
  disabledContainer: 0.12,
};


// ── Elevation ────────────────────────────────────────────────
export const elevation = {
  0: 'none',
  1: '0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15)',
  2: '0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15)',
  3: '0px 1px 3px rgba(0,0,0,0.3), 0px 4px 8px 3px rgba(0,0,0,0.15)',
};


// ── Convenience export ───────────────────────────────────────
// Default to Task mode — override at app level with colorBrand
export const color = colorTask;
