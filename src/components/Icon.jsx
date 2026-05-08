// ============================================================
// Icon.jsx
// Milwaukee Tool — Claire Design System
// SVGs imported via vite-plugin-svgr
// Naming convention: [icon-name]-regular.svg / [icon-name]-solid.svg
// Usage: <Icon name="magnifying-glass" variant="solid" size={20} color={colors.textPrimary} />
// Edge cases:
//   - Social/brand icons: no variant (always same file)
//   - Solid-only icons: regular falls back to solid
//   - tote-bulk-order: custom one-off, no variant
// ============================================================

// ── Directional ───────────────────────────────────────────────
import ArrowDownArrowUpRegular    from '../assets/icons/arrow-down-arrow-up-regular.svg?react';
import ArrowDownArrowUpSolid      from '../assets/icons/arrow-down-arrow-up-solid.svg?react';
import ArrowDownRegular           from '../assets/icons/arrow-down-regular.svg?react';
import ArrowDownSolid             from '../assets/icons/arrow-down-solid.svg?react';
import ArrowDownToBracketRegular  from '../assets/icons/arrow-down-to-bracket-regular.svg?react';
import ArrowDownToBracketSolid    from '../assets/icons/arrow-down-to-bracket-solid.svg?react';
import ArrowLeftRegular           from '../assets/icons/arrow-left-regular.svg?react';
import ArrowLeftSolid             from '../assets/icons/arrow-left-solid.svg?react';
import ArrowRightFromBracketReg   from '../assets/icons/arrow-right-from-bracket-regular.svg?react';
import ArrowRightFromBracketSolid from '../assets/icons/arrow-right-from-bracket-solid.svg?react';
import ArrowRightRegular          from '../assets/icons/arrow-right-regular.svg?react';
import ArrowRightSolid            from '../assets/icons/arrow-right-solid.svg?react';
import ArrowRightToLineRegular    from '../assets/icons/arrow-right-to-line-regular.svg?react';
import ArrowRightToLineSolid      from '../assets/icons/arrow-right-to-line-solid.svg?react';
import ArrowTurnDownLeftRegular   from '../assets/icons/arrow-turn-down-left-regular.svg?react';
import ArrowTurnDownLeftSolid     from '../assets/icons/arrow-turn-down-left-solid.svg?react';
import ArrowUpRegular             from '../assets/icons/arrow-up-regular.svg?react';
import ArrowUpSolid               from '../assets/icons/arrow-up-solid.svg?react';
import ArrowUpRightFromSquareReg  from '../assets/icons/arrow-up-right-from-square-regular.svg?react';
import ArrowUpRightFromSquareSolid from '../assets/icons/arrow-up-right-from-square-solid.svg?react';
import ArrowsRotateRegular        from '../assets/icons/arrows-rotate-regular.svg?react';
import ArrowsRotateSolid          from '../assets/icons/arrows-rotate-solid.svg?react';
import CaretDownRegular           from '../assets/icons/caret-down-regular.svg?react';
import CaretDownSolid             from '../assets/icons/caret-down-solid.svg?react';
import CaretLeftRegular           from '../assets/icons/caret-left-regular.svg?react';
import CaretLeftSolid             from '../assets/icons/caret-left-solid.svg?react';
import CaretRightRegular          from '../assets/icons/caret-right-regular.svg?react';
import CaretRightSolid            from '../assets/icons/caret-right-solid.svg?react';
import CaretUpRegular             from '../assets/icons/caret-up-regular.svg?react';
import CaretUpSolid               from '../assets/icons/caret-up-solid.svg?react';
import ChevronDownRegular         from '../assets/icons/chevron-down-regular.svg?react';
import ChevronDownSolid           from '../assets/icons/chevron-down-solid.svg?react';
import ChevronLeftRegular         from '../assets/icons/chevron-left-regular.svg?react';
import ChevronLeftSolid           from '../assets/icons/chevron-left-solid.svg?react';
import ChevronRightRegular        from '../assets/icons/chevron-right-regular.svg?react';
import ChevronRightSolid          from '../assets/icons/chevron-right-solid.svg?react';
import ChevronUpRegular           from '../assets/icons/chevron-up-regular.svg?react';
import ChevronUpSolid             from '../assets/icons/chevron-up-solid.svg?react';
import SortRegular                from '../assets/icons/sort-regular.svg?react';
import SortSolid                  from '../assets/icons/sort-solid.svg?react';

// ── Actions ───────────────────────────────────────────────────
import BanRegular                 from '../assets/icons/ban-regular.svg?react';
import BanSolid                   from '../assets/icons/ban-solid.svg?react';
import BarsFilterRegular          from '../assets/icons/bars-filter-regular.svg?react';
import BarsFilterSolid            from '../assets/icons/bars-filter-solid.svg?react';
import BookmarkRegular            from '../assets/icons/bookmark-regular.svg?react';
import BookmarkSolid              from '../assets/icons/bookmark-solid.svg?react';
import CheckRegular               from '../assets/icons/check-regular.svg?react';
import CheckSolid                 from '../assets/icons/check-solid.svg?react';
import CopyRegular                from '../assets/icons/copy-regular.svg?react';
import CopySolid                  from '../assets/icons/copy-solid.svg?react';
import EyeRegular                 from '../assets/icons/eye-regular.svg?react';
import EyeSolid                   from '../assets/icons/eye-solid.svg?react';
import EyeSlashRegular            from '../assets/icons/eye-slash-regular.svg?react';
import EyeSlashSolid              from '../assets/icons/eye-slash-solid.svg?react';
import FilterRegular              from '../assets/icons/filter-regular.svg?react';
import FilterSolid                from '../assets/icons/filter-solid.svg?react';
import FloppyDiskRegular          from '../assets/icons/floppy-disk-regular.svg?react';
import FloppyDiskSolid            from '../assets/icons/floppy-disk-solid.svg?react';
import LinkRegular                from '../assets/icons/link-regular.svg?react';
import LinkSolid                  from '../assets/icons/link-solid.svg?react';
import MagnifyingGlassRegular     from '../assets/icons/magnifying-glass-regular.svg?react';
import MagnifyingGlassSolid       from '../assets/icons/magnifying-glass-solid.svg?react';
import MagnifyingGlassChartReg    from '../assets/icons/magnifying-glass-chart-regular.svg?react';
import MagnifyingGlassChartSolid  from '../assets/icons/magnifying-glass-chart-solid.svg?react';
import MinusRegular               from '../assets/icons/minus-regular.svg?react';
import MinusSolid                 from '../assets/icons/minus-solid.svg?react';
import PaperclipRegular           from '../assets/icons/paperclip-regular.svg?react';
import PaperclipSolid             from '../assets/icons/paperclip-solid.svg?react';
import PenRegular                 from '../assets/icons/pen-regular.svg?react';
import PenSolid                   from '../assets/icons/pen-solid.svg?react';
import PenToSquareRegular         from '../assets/icons/pen-to-square-regular.svg?react';
import PenToSquareSolid           from '../assets/icons/pen-to-square-solid.svg?react';
import PlusRegular                from '../assets/icons/plus-regular.svg?react';
import PlusSolid                  from '../assets/icons/plus-solid.svg?react';
import QrcodeRegular              from '../assets/icons/qrcode-regular.svg?react';
import QrcodeSolid                from '../assets/icons/qrcode-solid.svg?react';
import RecycleRegular             from '../assets/icons/recycle-regular.svg?react';
import RecycleSolid               from '../assets/icons/recycle-solid.svg?react';
import RotateLeftRegular          from '../assets/icons/rotate-left-regular.svg?react';
import RotateLeftSolid            from '../assets/icons/rotate-left-solid.svg?react';
import SlidersRegular             from '../assets/icons/sliders-regular.svg?react';
import SlidersSolid               from '../assets/icons/sliders-solid.svg?react';
import UploadRegular              from '../assets/icons/upload-regular.svg?react';
import UploadSolid                from '../assets/icons/upload-solid.svg?react';
import XmarkRegular               from '../assets/icons/xmark-regular.svg?react';
import XmarkSolid                 from '../assets/icons/xmark-solid.svg?react';

// ── Status & alerts ───────────────────────────────────────────
import BurstRegular               from '../assets/icons/burst-regular.svg?react';
import BurstSolid                 from '../assets/icons/burst-solid.svg?react';
import CircleCheckRegular         from '../assets/icons/circle-check-regular.svg?react';
import CircleCheckSolid           from '../assets/icons/circle-check-solid.svg?react';
import CircleExclamationRegular   from '../assets/icons/circle-exclamation-regular.svg?react';
import CircleExclamationSolid     from '../assets/icons/circle-exclamation-solid.svg?react';
import CircleInfoRegular          from '../assets/icons/circle-info-regular.svg?react';
import CircleInfoSolid            from '../assets/icons/circle-info-solid.svg?react';
import CircleMinusRegular         from '../assets/icons/circle-minus-regular.svg?react';
import CircleMinusSolid           from '../assets/icons/circle-minus-solid.svg?react';
import CirclePlusRegular          from '../assets/icons/circle-plus-regular.svg?react';
import CirclePlusSolid            from '../assets/icons/circle-plus-solid.svg?react';
import CircleQuestionRegular      from '../assets/icons/circle-question-regular.svg?react';
import CircleQuestionSolid        from '../assets/icons/circle-question-solid.svg?react';
import CircleRegular              from '../assets/icons/circle-regular.svg?react';
import CircleSolid                from '../assets/icons/circle-solid.svg?react';
import CircleUpRegular            from '../assets/icons/circle-up-regular.svg?react';
import CircleUpSolid              from '../assets/icons/circle-up-solid.svg?react';
import CheckCircleRegular         from '../assets/icons/check-circle-regular.svg?react';
import CheckCircleSolid           from '../assets/icons/check-circle-solid.svg?react';
import OctagonExclamationRegular  from '../assets/icons/octagon-exclamation-regular.svg?react';
import OctagonExclamationSolid    from '../assets/icons/octagon-exclamation-solid.svg?react';
import ShieldCheckRegular         from '../assets/icons/shield-check-regular.svg?react';
import ShieldCheckSolid           from '../assets/icons/shield-check-solid.svg?react';
import ShieldTimesRegular         from '../assets/icons/shield-times-regular.svg?react';
import ShieldTimesSolid           from '../assets/icons/shield-times-solid.svg?react';
import StarSharpRegular           from '../assets/icons/star-sharp-regular.svg?react';
import StarSharpSolid             from '../assets/icons/star-sharp-solid.svg?react';
import TriangleExclamationRegular from '../assets/icons/triangle-exclamation-regular.svg?react';
import TriangleExclamationSolid   from '../assets/icons/triangle-exclamation-solid.svg?react';

// ── UI chrome ─────────────────────────────────────────────────
import BarsRegular                from '../assets/icons/bars-regular.svg?react';
import BarsSolid                  from '../assets/icons/bars-solid.svg?react';
import CircleDotRegular           from '../assets/icons/circle-dot-regular.svg?react';
import CircleDotSolid             from '../assets/icons/circle-dot-solid.svg?react';
import EllipsisRegular            from '../assets/icons/ellipsis-regular.svg?react';
import EllipsisSolid              from '../assets/icons/ellipsis-solid.svg?react';
import EllipsisVerticalRegular    from '../assets/icons/ellipsis-vertical-regular.svg?react';
import EllipsisVerticalSolid      from '../assets/icons/ellipsis-vertical-solid.svg?react';
import GripDotsVerticalRegular    from '../assets/icons/grip-dots-vertical-regular.svg?react';
import GripDotsVerticalSolid      from '../assets/icons/grip-dots-vertical-solid.svg?react';
import LoaderRegular              from '../assets/icons/loader-regular.svg?react';
import LoaderSolid                from '../assets/icons/loader-solid.svg?react';
import SidebarRegular             from '../assets/icons/sidebar-regular.svg?react';
import SidebarSolid               from '../assets/icons/sidebar-solid.svg?react';
import SidebarFlipRegular         from '../assets/icons/sidebar-flip-regular.svg?react';
import SidebarFlipSolid           from '../assets/icons/sidebar-flip-solid.svg?react';
import SquareRegular              from '../assets/icons/square-regular.svg?react';
import SquareSolid                from '../assets/icons/square-solid.svg?react';
import SquareCheckRegular         from '../assets/icons/square-check-regular.svg?react';
import SquareCheckSolid           from '../assets/icons/square-check-solid.svg?react';
import SquareMinusRegular         from '../assets/icons/square-minus-regular.svg?react';
import SquareMinusSolid           from '../assets/icons/square-minus-solid.svg?react';

// ── Numbers (solid only) ──────────────────────────────────────

// ── People & places ───────────────────────────────────────────
import CircleUserRegular          from '../assets/icons/circle-user-regular.svg?react';
import CircleUserSolid            from '../assets/icons/circle-user-solid.svg?react';
import LocationCrosshairsRegular  from '../assets/icons/location-crosshairs-regular.svg?react';
import LocationCrosshairsSolid    from '../assets/icons/location-crosshairs-solid.svg?react';
import LocationDotRegular         from '../assets/icons/location-dot-regular.svg?react';
import LocationDotSolid           from '../assets/icons/location-dot-solid.svg?react';
import RobotRegular               from '../assets/icons/robot-regular.svg?react';
import RobotSolid                 from '../assets/icons/robot-solid.svg?react';
import UserRegular                from '../assets/icons/user-regular.svg?react';
import UserSolid                  from '../assets/icons/user-solid.svg?react';
import UserHeadsetRegular         from '../assets/icons/user-headset-regular.svg?react';
import UserHeadsetSolid           from '../assets/icons/user-headset-solid.svg?react';
import UserMagnifyingGlassRegular from '../assets/icons/user-magnifying-glass-regular.svg?react';
import UserMagnifyingGlassSolid   from '../assets/icons/user-magnifying-glass-solid.svg?react';
import UsersRegular               from '../assets/icons/users-regular.svg?react';
import UsersSolid                 from '../assets/icons/users-solid.svg?react';

// ── Communication ─────────────────────────────────────────────
import BellRegular                from '../assets/icons/bell-regular.svg?react';
import BellSolid                  from '../assets/icons/bell-solid.svg?react';
import CommentDollarRegular       from '../assets/icons/comment-dollar-regular.svg?react';
import CommentDollarSolid         from '../assets/icons/comment-dollar-solid.svg?react';
import CommentsRegular            from '../assets/icons/comments-regular.svg?react';
import CommentsSolid              from '../assets/icons/comments-solid.svg?react';
import EnvelopeRegular            from '../assets/icons/envelope-regular.svg?react';
import EnvelopeSolid              from '../assets/icons/envelope-solid.svg?react';
import PaperPlaneRegular          from '../assets/icons/paper-plane-regular.svg?react';
import PaperPlaneSolid            from '../assets/icons/paper-plane-solid.svg?react';
import PhoneRegular               from '../assets/icons/phone-regular.svg?react';
import PhoneSolid                 from '../assets/icons/phone-solid.svg?react';
import PhoneArrowDownLeftRegular  from '../assets/icons/phone-arrow-down-left-regular.svg?react';
import PhoneArrowDownLeftSolid    from '../assets/icons/phone-arrow-down-left-solid.svg?react';

// ── Files & documents ─────────────────────────────────────────
import BarcodeRegular             from '../assets/icons/barcode-regular.svg?react';
import BarcodeSolid               from '../assets/icons/barcode-solid.svg?react';
import ClipboardCheckRegular      from '../assets/icons/clipboard-check-regular.svg?react';
import ClipboardCheckSolid        from '../assets/icons/clipboard-check-solid.svg?react';
import ClipboardListRegular       from '../assets/icons/clipboard-list-regular.svg?react';
import ClipboardListSolid         from '../assets/icons/clipboard-list-solid.svg?react';
import CloudArrowUpRegular        from '../assets/icons/cloud-arrow-up-regular.svg?react';
import CloudArrowUpSolid          from '../assets/icons/cloud-arrow-up-solid.svg?react';
import FileLinesRegular           from '../assets/icons/file-lines-regular.svg?react';
import FileLinesSolid             from '../assets/icons/file-lines-solid.svg?react';
import FilePngRegular             from '../assets/icons/file-png-regular.svg?react';
import FilePngSolid               from '../assets/icons/file-png-solid.svg?react';
import FileRegular                from '../assets/icons/file-regular.svg?react';
import FileSolid                  from '../assets/icons/file-solid.svg?react';
import ImageRegular               from '../assets/icons/image-regular.svg?react';
import ImageSolid                 from '../assets/icons/image-solid.svg?react';
import RectangleListRegular       from '../assets/icons/rectangle-list-regular.svg?react';
import RectangleListSolid         from '../assets/icons/rectangle-list-solid.svg?react';

// ── Commerce & finance ────────────────────────────────────────
import BoltRegular                from '../assets/icons/bolt-regular.svg?react';
import BoltSolid                  from '../assets/icons/bolt-solid.svg?react';
import BoxCheckRegular            from '../assets/icons/box-check-regular.svg?react';
import BoxCheckSolid              from '../assets/icons/box-check-solid.svg?react';
import BoxOpenRegular             from '../assets/icons/box-open-regular.svg?react';
import BoxOpenSolid               from '../assets/icons/box-open-solid.svg?react';
import BoxRegular                 from '../assets/icons/box-regular.svg?react';
import BoxSolid                   from '../assets/icons/box-solid.svg?react';
import CalendarCheckRegular       from '../assets/icons/calendar-check-regular.svg?react';
import CalendarCheckSolid         from '../assets/icons/calendar-check-solid.svg?react';
import CalendarCircleUserRegular  from '../assets/icons/calendar-circle-user-regular.svg?react';
import CalendarCircleUserSolid    from '../assets/icons/calendar-circle-user-solid.svg?react';
import CalendarRegular            from '../assets/icons/calendar-regular.svg?react';
import CalendarSolid              from '../assets/icons/calendar-solid.svg?react';
import CartFlatbedRegular         from '../assets/icons/cart-flatbed-regular.svg?react';
import CartFlatbedSolid           from '../assets/icons/cart-flatbed-solid.svg?react';
import CartShoppingRegular        from '../assets/icons/cart-shopping-regular.svg?react';
import CartShoppingSolid          from '../assets/icons/cart-shopping-solid.svg?react';
import CreditCardRegular          from '../assets/icons/credit-card-regular.svg?react';
import CreditCardSolid            from '../assets/icons/credit-card-solid.svg?react';
import HandshakeSimpleRegular     from '../assets/icons/handshake-simple-regular.svg?react';
import HandshakeSimpleSolid       from '../assets/icons/handshake-simple-solid.svg?react';
import ReceiptRegular             from '../assets/icons/receipt-regular.svg?react';
import ReceiptSolid               from '../assets/icons/receipt-solid.svg?react';
import ShopRegular                from '../assets/icons/shop-regular.svg?react';
import ShopSolid                  from '../assets/icons/shop-solid.svg?react';
import ToolboxRegular             from '../assets/icons/toolbox-regular.svg?react';
import ToolboxSolid               from '../assets/icons/toolbox-solid.svg?react';
import TruckRegular               from '../assets/icons/truck-regular.svg?react';
import TruckSolid                 from '../assets/icons/truck-solid.svg?react';
import TruckClockRegular          from '../assets/icons/truck-clock-regular.svg?react';
import TruckClockSolid            from '../assets/icons/truck-clock-solid.svg?react';
import TruckFastRegular           from '../assets/icons/truck-fast-regular.svg?react';
import TruckFastSolid             from '../assets/icons/truck-fast-solid.svg?react';
import WarehouseFullRegular       from '../assets/icons/warehouse-full-regular.svg?react';
import WarehouseFullSolid         from '../assets/icons/warehouse-full-solid.svg?react';

// ── Tools & equipment ─────────────────────────────────────────
import BuildingRegular            from '../assets/icons/building-regular.svg?react';
import BuildingSolid              from '../assets/icons/building-solid.svg?react';
import BuildingColumnsRegular     from '../assets/icons/building-columns-regular.svg?react';
import BuildingColumnsSolid       from '../assets/icons/building-columns-solid.svg?react';
import CameraRegular              from '../assets/icons/camera-regular.svg?react';
import CameraSolid                from '../assets/icons/camera-solid.svg?react';
import ClockRegular               from '../assets/icons/clock-regular.svg?react';
import ClockSolid                 from '../assets/icons/clock-solid.svg?react';
import GearRegular                from '../assets/icons/gear-regular.svg?react';
import GearSolid                  from '../assets/icons/gear-solid.svg?react';
import GlobeRegular               from '../assets/icons/globe-regular.svg?react';
import GlobeSolid                 from '../assets/icons/globe-solid.svg?react';
import HouseRegular               from '../assets/icons/house-regular.svg?react';
import HouseSolid                 from '../assets/icons/house-solid.svg?react';
import PrinterRegular             from '../assets/icons/printer-regular.svg?react';
import PrinterSolid               from '../assets/icons/printer-solid.svg?react';
import RulerCombinedRegular       from '../assets/icons/ruler-combined-regular.svg?react';
import RulerCombinedSolid         from '../assets/icons/ruler-combined-solid.svg?react';
import ScrewdriverWrenchRegular   from '../assets/icons/screwdriver-wrench-regular.svg?react';
import ScrewdriverWrenchSolid     from '../assets/icons/screwdriver-wrench-solid.svg?react';
import ThumbTackRegular           from '../assets/icons/thumbtack-regular.svg?react';
import ThumbTackSolid             from '../assets/icons/thumbtack-solid.svg?react';
import TrashAltRegular            from '../assets/icons/trash-alt-regular.svg?react';
import TrashAltSolid              from '../assets/icons/trash-alt-solid.svg?react';
import WrenchRegular              from '../assets/icons/wrench-regular.svg?react';
import WrenchSolid                from '../assets/icons/wrench-solid.svg?react';

// ── Social / brand (no style variants) ───────────────────────

// ── Icon map ──────────────────────────────────────────────────
const icons = {

  // Directional
  'arrow-down':                   { regular: ArrowDownRegular,              solid: ArrowDownSolid },
  'arrow-down-arrow-up':          { regular: ArrowDownArrowUpRegular,       solid: ArrowDownArrowUpSolid },
  'arrow-down-to-bracket':        { regular: ArrowDownToBracketRegular,     solid: ArrowDownToBracketSolid },
  'arrow-left':                   { regular: ArrowLeftRegular,              solid: ArrowLeftSolid },
  'arrow-right':                  { regular: ArrowRightRegular,             solid: ArrowRightSolid },
  'arrow-right-from-bracket':     { regular: ArrowRightFromBracketReg,      solid: ArrowRightFromBracketSolid },
  'arrow-right-to-line':          { regular: ArrowRightToLineRegular,       solid: ArrowRightToLineSolid },
  'arrow-turn-down-left':         { regular: ArrowTurnDownLeftRegular,      solid: ArrowTurnDownLeftSolid },
  'rotate-left':                  { regular: ArrowTurnDownLeftRegular,      solid: ArrowTurnDownLeftSolid },
  'arrow-up':                     { regular: ArrowUpRegular,                solid: ArrowUpSolid },
  'arrow-up-right-from-square':   { regular: ArrowUpRightFromSquareReg,     solid: ArrowUpRightFromSquareSolid },
  'external-link':                { regular: ArrowUpRightFromSquareReg,     solid: ArrowUpRightFromSquareSolid },
  'arrows-rotate':                { regular: ArrowsRotateRegular,           solid: ArrowsRotateSolid },
  'caret-down':                   { regular: CaretDownRegular,              solid: CaretDownSolid },
  'caret-left':                   { regular: CaretLeftRegular,              solid: CaretLeftSolid },
  'caret-right':                  { regular: CaretRightRegular,             solid: CaretRightSolid },
  'caret-up':                     { regular: CaretUpRegular,                solid: CaretUpSolid },
  'chevron-down':                 { regular: ChevronDownRegular,            solid: ChevronDownSolid },
  'chevron-left':                 { regular: ChevronLeftRegular,            solid: ChevronLeftSolid },
  'chevron-right':                { regular: ChevronRightRegular,           solid: ChevronRightSolid },
  'chevron-up':                   { regular: ChevronUpRegular,              solid: ChevronUpSolid },
  'sort':                         { regular: SortRegular,                   solid: SortSolid },

  // Actions
  'ban':                          { regular: BanRegular,                    solid: BanSolid },
  'bars-filter':                  { regular: BarsFilterRegular,             solid: BarsFilterSolid },
  'bookmark':                     { regular: BookmarkRegular,               solid: BookmarkSolid },
  'check':                        { regular: CheckRegular,                  solid: CheckSolid },
  'copy':                         { regular: CopyRegular,                   solid: CopySolid },
  'eye':                          { regular: EyeRegular,                    solid: EyeSolid },
  'eye-slash':                    { regular: EyeSlashRegular,               solid: EyeSlashSolid },
  'filter':                       { regular: FilterRegular,                 solid: FilterSolid },
  'floppy-disk':                  { regular: FloppyDiskRegular,             solid: FloppyDiskSolid },
  'link':                         { regular: LinkRegular,                   solid: LinkSolid },
  'magnifying-glass':             { regular: MagnifyingGlassRegular,        solid: MagnifyingGlassSolid },
  'search':                       { regular: MagnifyingGlassRegular,        solid: MagnifyingGlassSolid },
  'magnifying-glass-chart':       { regular: MagnifyingGlassChartReg,       solid: MagnifyingGlassChartSolid },
  'minus':                        { regular: MinusRegular,                  solid: MinusSolid },
  'paperclip':                    { regular: PaperclipRegular,              solid: PaperclipSolid },
  'pen':                          { regular: PenRegular,                    solid: PenSolid },
  'pen-to-square':                { regular: PenToSquareRegular,            solid: PenToSquareSolid },
  'plus':                         { regular: PlusRegular,                   solid: PlusSolid },
  'qrcode':                       { regular: QrcodeRegular,                 solid: QrcodeSolid },
  'recycle':                      { regular: RecycleRegular,                solid: RecycleSolid },
  'rotate-left':                  { regular: RotateLeftRegular,             solid: RotateLeftSolid },
  'sliders':                      { regular: SlidersRegular,                solid: SlidersSolid },
  'upload':                       { regular: UploadRegular,                 solid: UploadSolid },
  'xmark':                        { regular: XmarkRegular,                  solid: XmarkSolid },
  'close':                        { regular: XmarkRegular,                  solid: XmarkSolid },

  // Status & alerts
  'burst':                        { regular: BurstRegular,                  solid: BurstSolid },
  'check-circle':                 { regular: CheckCircleRegular,            solid: CheckCircleSolid },
  'circle-check':                 { regular: CircleCheckRegular,            solid: CircleCheckSolid },
  'circle-exclamation':           { regular: CircleExclamationRegular,      solid: CircleExclamationSolid },
  'exclamation-circle':           { regular: CircleExclamationRegular,      solid: CircleExclamationSolid },
  'circle-info':                  { regular: CircleInfoRegular,             solid: CircleInfoSolid },
  'circle-minus':                 { regular: CircleMinusRegular,            solid: CircleMinusSolid },
  'circle-plus':                  { regular: CirclePlusRegular,             solid: CirclePlusSolid },
  'circle-question':              { regular: CircleQuestionRegular,         solid: CircleQuestionSolid },
  'circle':                       { regular: CircleRegular,                 solid: CircleSolid },
  'circle-up':                    { regular: CircleUpRegular,               solid: CircleUpSolid },
  'octagon-exclamation':          { regular: OctagonExclamationRegular,     solid: OctagonExclamationSolid },
  'shield-check':                 { regular: ShieldCheckRegular,            solid: ShieldCheckSolid },
  'shield-times':                 { regular: ShieldTimesRegular,            solid: ShieldTimesSolid },
  'star-sharp':                   { regular: StarSharpRegular,              solid: StarSharpSolid },
  'triangle-exclamation':         { regular: TriangleExclamationRegular,    solid: TriangleExclamationSolid },

  // UI chrome
  'bars':                         { regular: BarsRegular,                   solid: BarsSolid },
  'menu':                         { regular: BarsRegular,                   solid: BarsSolid },
  'circle-dot':                   { regular: CircleDotRegular,              solid: CircleDotSolid },
  'ellipsis':                     { regular: EllipsisRegular,               solid: EllipsisSolid },
  'ellipsis-vertical':            { regular: EllipsisVerticalRegular,       solid: EllipsisVerticalSolid },
  'grip-dots-vertical':           { regular: GripDotsVerticalRegular,       solid: GripDotsVerticalSolid },
  'loader':                       { regular: LoaderRegular,                 solid: LoaderSolid },
  'sidebar':                      { regular: SidebarRegular,                solid: SidebarSolid },
  'sidebar-flip':                 { regular: SidebarFlipRegular,            solid: SidebarFlipSolid },
  'square':                       { regular: SquareRegular,                 solid: SquareSolid },
  'square-check':                 { regular: SquareCheckRegular,            solid: SquareCheckSolid },
  'square-minus':                 { regular: SquareMinusRegular,            solid: SquareMinusSolid },

  // People & places
  'circle-user':                  { regular: CircleUserRegular,             solid: CircleUserSolid },
  'location-crosshairs':          { regular: LocationCrosshairsRegular,     solid: LocationCrosshairsSolid },
  'location-dot':                 { regular: LocationDotRegular,            solid: LocationDotSolid },
  'robot':                        { regular: RobotRegular,                  solid: RobotSolid },
  'user':                         { regular: UserRegular,                   solid: UserSolid },
  'user-headset':                 { regular: UserHeadsetRegular,            solid: UserHeadsetSolid },
  'user-magnifying-glass':        { regular: UserMagnifyingGlassRegular,    solid: UserMagnifyingGlassSolid },
  'users':                        { regular: UsersRegular,                  solid: UsersSolid },

  // Communication
  'bell':                         { regular: BellRegular,                   solid: BellSolid },
  'comment-dollar':               { regular: CommentDollarRegular,          solid: CommentDollarSolid },
  'comments':                     { regular: CommentsRegular,               solid: CommentsSolid },
  'envelope':                     { regular: EnvelopeRegular,               solid: EnvelopeSolid },
  'paper-plane':                  { regular: PaperPlaneRegular,             solid: PaperPlaneSolid },
  'phone':                        { regular: PhoneRegular,                  solid: PhoneSolid },
  'phone-arrow-down-left':        { regular: PhoneArrowDownLeftRegular,     solid: PhoneArrowDownLeftSolid },

  // Files & documents
  'barcode':                      { regular: BarcodeRegular,                solid: BarcodeSolid },
  'clipboard-check':              { regular: ClipboardCheckRegular,         solid: ClipboardCheckSolid },
  'clipboard-list':               { regular: ClipboardListRegular,          solid: ClipboardListSolid },
  'cloud-arrow-up':               { regular: CloudArrowUpRegular,           solid: CloudArrowUpSolid },
  'file':                         { regular: FileRegular,                   solid: FileSolid },
  'file-lines':                   { regular: FileLinesRegular,              solid: FileLinesSolid },
  'file-png':                     { regular: FilePngRegular,                solid: FilePngSolid },
  'image':                        { regular: ImageRegular,                  solid: ImageSolid },
  'rectangle-list':               { regular: RectangleListRegular,          solid: RectangleListSolid },

  // Commerce & finance
  'bolt':                         { regular: BoltRegular,                   solid: BoltSolid },
  'box':                          { regular: BoxRegular,                    solid: BoxSolid },
  'box-check':                    { regular: BoxCheckRegular,               solid: BoxCheckSolid },
  'box-open':                     { regular: BoxOpenRegular,                solid: BoxOpenSolid },
  'calendar':                     { regular: CalendarRegular,               solid: CalendarSolid },
  'calendar-check':               { regular: CalendarCheckRegular,          solid: CalendarCheckSolid },
  'calendar-circle-user':         { regular: CalendarCircleUserRegular,     solid: CalendarCircleUserSolid },
  'cart-flatbed':                 { regular: CartFlatbedRegular,            solid: CartFlatbedSolid },
  'cart-shopping':                { regular: CartShoppingRegular,           solid: CartShoppingSolid },
  'credit-card':                  { regular: CreditCardRegular,             solid: CreditCardSolid },
  'handshake-simple':             { regular: HandshakeSimpleRegular,        solid: HandshakeSimpleSolid },
  'receipt':                      { regular: ReceiptRegular,                solid: ReceiptSolid },
  'shop':                         { regular: ShopRegular,                   solid: ShopSolid },
  'toolbox':                      { regular: ToolboxRegular,                solid: ToolboxSolid },
  'truck':                        { regular: TruckRegular,                  solid: TruckSolid },
  'truck-clock':                  { regular: TruckClockRegular,             solid: TruckClockSolid },
  'truck-fast':                   { regular: TruckFastRegular,              solid: TruckFastSolid },
  'warehouse-full':               { regular: WarehouseFullRegular,          solid: WarehouseFullSolid },

  // Tools & equipment
  'building':                     { regular: BuildingRegular,               solid: BuildingSolid },
  'building-columns':             { regular: BuildingColumnsRegular,        solid: BuildingColumnsSolid },
  'camera':                       { regular: CameraRegular,                 solid: CameraSolid },
  'clock':                        { regular: ClockRegular,                  solid: ClockSolid },
  'gear':                         { regular: GearRegular,                   solid: GearSolid },
  'globe':                        { regular: GlobeRegular,                  solid: GlobeSolid },
  'house':                        { regular: HouseRegular,                  solid: HouseSolid },
  'printer':                      { regular: PrinterRegular,                solid: PrinterSolid },
  'ruler-combined':               { regular: RulerCombinedRegular,          solid: RulerCombinedSolid },
  'screwdriver-wrench':           { regular: ScrewdriverWrenchRegular,      solid: ScrewdriverWrenchSolid },
  'thumbtack':                    { regular: ThumbTackRegular,              solid: ThumbTackSolid },
  'trash-alt':                    { regular: TrashAltRegular,               solid: TrashAltSolid },
  'trash-can':                    { regular: TrashAltRegular,               solid: TrashAltSolid },
  'wrench':                       { regular: WrenchRegular,                 solid: WrenchSolid },

};

// ── Icon component ────────────────────────────────────────────
export default function Icon({
  name,
  variant   = 'regular',  // 'regular' | 'solid'
  size      = 16,
  color     = 'currentColor',
  style     = {},
  className,
  ...rest
}) {
  const iconVariants = icons[name];

  if (!iconVariants) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Icon "${name}" not found. Available: ${Object.keys(icons).join(', ')}`);
    }
    return null;
  }

  const SvgComponent = iconVariants[variant] || iconVariants.regular;

  return (
    <SvgComponent
      width={size}
      height={size}
      fill={color}
      style={{ flexShrink: 0, display: 'block', color: color, ...style }}
      className={className}
      aria-hidden="true"
      {...rest}
    />
  );
}

export const iconNames = Object.keys(icons);
