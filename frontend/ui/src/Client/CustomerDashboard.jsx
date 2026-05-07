import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  CircularProgress,
  Modal,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Alert,
  InputAdornment,
  IconButton,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  CardActions,
  Chip,
  Skeleton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  Avatar,
  useMediaQuery,
  AppBar,
  Toolbar,
  CssBaseline,
  ThemeProvider,
  createTheme,
  alpha,
  Fade,
  Zoom,
  Tabs,
  Tab,
  Switch,
  Slider,
  Rating,
  Container,
  Tooltip,
  Breadcrumbs,
  Link,
  Fab,
  CardMedia,
  CardHeader,
  DialogContentText,
  FormHelperText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  People as PeopleIcon,
  ChildCare as ChildCareIcon,
  Phone as PhoneIcon,
  Notifications as NotificationsIcon,
  KingBed,
  AcUnit,
  Wifi,
  Bathtub,
  Tv,
  CalendarToday,
  Dashboard as DashboardIcon,
  Bookmark as BookmarkIcon,
  Favorite as FavoriteIcon,
  Hotel as HotelIcon,
  History as HistoryIcon,
  AccountCircle as AccountIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  LocalOffer as LocalOfferIcon,
  RoomService as RoomServiceIcon,
  Spa as SpaIcon,
  Restaurant as RestaurantIcon,
  FitnessCenter as FitnessCenterIcon,
  Pool as PoolIcon,
  Whatshot as WhatshotIcon,
  Payment as PaymentIcon,
  Security as SecurityIcon,
  Palette as PaletteIcon,
  Language as LanguageIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  Edit as EditIcon,
  QrCode as QrCodeIcon,
  Verified as VerifiedIcon,
  CreditCard as CreditCardIcon,
  Receipt as ReceiptIcon,
  MoreVert as MoreVertIcon,
  ArrowForward as ArrowForwardIcon,
  Add as AddIcon,
  FilterList as FilterIcon,
  Search as SearchIcon,
  TrendingUp as TrendingUpIcon,
  BarChart as BarChartIcon,
  Wallet as WalletIcon,
  Diamond as DiamondIcon,
  Place as PlaceIcon,
  Kitchen as KitchenIcon,
  MeetingRoom as MeetingRoomIcon,
  LocalParking as ParkingIcon,
  DryCleaning as DryCleaningIcon,
  AirlineSeatIndividualSuite as SuiteIcon,
  SingleBed as SingleBedIcon,
  DirectionsCar as CarIcon,
  BusinessCenter as BusinessIcon,
  HotTub as HotTubIcon,
  SportsTennis as TennisIcon,
  RestaurantMenu as RestaurantMenuIcon,
  WineBar as WineBarIcon,
  CameraAlt as CameraIcon,
  Share as ShareIcon,
  Print as PrintIcon,
  Download as DownloadIcon,
  ZoomIn as ZoomInIcon,
  Fullscreen as FullscreenIcon,
  NavigateBefore as NavigateBeforeIcon,
  NavigateNext as NavigateNextIcon,
  EventAvailable as EventAvailableIcon,
  EventBusy as EventBusyIcon,
  AccessTime as AccessTimeIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Pending as PendingIcon,
  EmojiEvents as TrophyIcon,
  CardGiftcard as GiftIcon,
  WorkspacePremium as PremiumIcon,
  Psychology as PsychologyIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  FavoriteBorder as FavoriteBorderIcon,
  LocationOn as LocationIcon,
  Email as EmailIcon,
  Cake as CakeIcon,
  Transgender as GenderIcon,
  Flag as FlagIcon,
  Language as LanguageIcon2,
  Public as PublicIcon,
  Map as MapIcon,
  EditLocation as EditLocationIcon,
  CloudUpload as CloudUploadIcon,
  PhotoCamera as PhotoCameraIcon,
  Collections as CollectionsIcon,
  PictureAsPdf as PdfIcon,
  InsertDriveFile as FileIcon,
  Description as DescriptionIcon,
  AttachMoney as MoneyIcon,
  AccountBalanceWallet as WalletIcon2,
  PriceChange as PriceChangeIcon,
  ReceiptLong as ReceiptLongIcon,
  AssignmentTurnedIn as AssignmentIcon,
  AssignmentLate as AssignmentLateIcon,
  Today as TodayIcon,
  EventNote as EventNoteIcon,
  Event as EventIcon,
  Schedule as ScheduleIcon,
  Timelapse as TimelapseIcon,
  HourglassEmpty as HourglassIcon,
  Timer as TimerIcon,
  AvTimer as AvTimerIcon,
  AccessAlarm as AlarmIcon,
  NotificationsActive as NotificationsActiveIcon,
  NotificationsOff as NotificationsOffIcon,
  VolumeUp as VolumeUpIcon,
  VolumeOff as VolumeOffIcon,
  VpnKey as KeyIcon,
  Lock as LockIcon,
  LockOpen as LockOpenIcon,
  Security as SecurityIcon2,
  VerifiedUser as VerifiedUserIcon,
  GppGood as GppGoodIcon,
  GppBad as GppBadIcon,
  PrivacyTip as PrivacyTipIcon,
  AdminPanelSettings as AdminIcon,
  SupervisedUserCircle as SupervisedUserIcon,
  PeopleAlt as PeopleAltIcon,
  Group as GroupIcon,
  PersonAdd as PersonAddIcon,
  HowToReg as HowToRegIcon,
  PersonRemove as PersonRemoveIcon,
  Block as BlockIcon,
  Report as ReportIcon,
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  SentimentVerySatisfied as HappyIcon,
  SentimentSatisfied as SatisfiedIcon,
  SentimentNeutral as NeutralIcon,
  SentimentDissatisfied as DissatisfiedIcon,
  SentimentVeryDissatisfied as SadIcon,
  Mood as MoodIcon,
  EmojiEmotions as EmojiIcon,
  MoodBad as MoodBadIcon,
  InsertEmoticon as InsertEmoticonIcon,
  TagFaces as TagFacesIcon,
  EmojiEvents as EmojiEventsIcon,
  EmojiObjects as EmojiObjectsIcon,
  EmojiFoodBeverage as EmojiFoodIcon,
  EmojiNature as EmojiNatureIcon,
  EmojiPeople as EmojiPeopleIcon,
  EmojiSymbols as EmojiSymbolsIcon,
  EmojiFlags as EmojiFlagsIcon,
  AddPhotoAlternate as AddPhotoIcon,
  Brush as BrushIcon,
  Palette as PaletteIcon2,
  ColorLens as ColorLensIcon,
  Gradient as GradientIcon,
  Opacity as OpacityIcon,
  InvertColors as InvertColorsIcon,
  Style as StyleIcon,
  Texture as TextureIcon,
  Wallpaper as WallpaperIcon,
  FilterVintage as FilterVintageIcon,
  BlurOn as BlurOnIcon,
  FilterDrama as FilterDramaIcon,
  FilterBAndW as FilterBAndWIcon,
  FilterCenterFocus as FilterCenterFocusIcon,
  FilterFrames as FilterFramesIcon,
  FilterHdr as FilterHdrIcon,
  FilterNone as FilterNoneIcon,
  FilterTiltShift as FilterTiltShiftIcon,
  Grain as GrainIcon,
  Looks as LooksIcon,
  LooksOne as LooksOneIcon,
  LooksTwo as LooksTwoIcon,
  Looks3 as Looks3Icon,
  Looks4 as Looks4Icon,
  Looks5 as Looks5Icon,
  Looks6 as Looks6Icon,
} from "@mui/icons-material";
import axios from "axios";

/* ========== LUXURY GOLD + BROWN THEME ========== */
const theme = createTheme({
  palette: {
    primary: {
      main: '#D4AF37', // Rich Gold
      light: '#FFE082',
      dark: '#B8860B',
      contrastText: '#1A1A1A',
    },
    secondary: {
      main: '#FFFFFF', // White
      light: '#F5F5F5',
      dark: '#E0E0E0',
    },
    tertiary: {
      main: '#8B4513', // Rich Brown
      light: '#A0522D',
      dark: '#654321',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFEF7',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C1810',
      secondary: '#5D4037',
      disabled: '#A1887F',
    },
    success: {
      main: '#2E7D32',
      light: '#4CAF50',
      dark: '#1B5E20',
    },
    error: {
      main: '#C62828',
      light: '#EF5350',
      dark: '#B71C1C',
    },
    warning: {
      main: '#F57C00',
      light: '#FF9800',
      dark: '#E65100',
    },
    info: {
      main: '#0288D1',
      light: '#03A9F4',
      dark: '#01579B',
    },
    grey: {
      50: '#FAF9F7',
      100: '#F5F3F0',
      200: '#EEE9E1',
      300: '#D7CCC8',
      400: '#BCAAA4',
      500: '#8D6E63',
      600: '#6D4C41',
      700: '#5D4037',
      800: '#4E342E',
      900: '#3E2723',
    },
  },
  typography: {
    fontFamily: '"Cormorant Garamond", "Playfair Display", "Georgia", serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
      color: '#2C1810',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.75rem',
      letterSpacing: '-0.01em',
      color: '#3E2723',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem',
      color: '#4E342E',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.875rem',
      color: '#5D4037',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      color: '#5D4037',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
      color: '#6D4C41',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1rem',
      fontFamily: '"Inter", sans-serif',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      fontFamily: '"Inter", sans-serif',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontFamily: '"Inter", sans-serif',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontFamily: '"Inter", sans-serif',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      fontFamily: '"Inter", sans-serif',
    },
  },
  shape: {
    borderRadius: 20,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(44, 24, 16, 0.05)',
    '0px 4px 8px rgba(44, 24, 16, 0.08)',
    '0px 8px 16px rgba(44, 24, 16, 0.12)',
    '0px 12px 24px rgba(44, 24, 16, 0.15)',
    '0px 16px 32px rgba(44, 24, 16, 0.20)',
    '0px 24px 48px rgba(44, 24, 16, 0.25)',
    ...Array(18).fill('none')
  ],
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px !important',
          paddingRight: '24px !important',
          '@media (min-width: 600px)': {
            paddingLeft: '32px !important',
            paddingRight: '32px !important',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          textTransform: 'none',
          fontWeight: 600,
          padding: '14px 32px',
          fontSize: '0.9375rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%)',
            boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3), 0 2px 4px rgba(139, 69, 19, 0.2)',
            color: '#2C1810',
            '&:hover': {
              background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #FFD700 100%)',
              boxShadow: '0 12px 35px rgba(212, 175, 55, 0.4), 0 4px 8px rgba(139, 69, 19, 0.3)',
            },
          },
        },
        {
          props: { variant: 'contained', color: 'tertiary' },
          style: {
            background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
            boxShadow: '0 8px 25px rgba(139, 69, 19, 0.3)',
            color: '#FFFFFF',
            '&:hover': {
              background: 'linear-gradient(135deg, #654321 0%, #8B4513 100%)',
              boxShadow: '0 12px 35px rgba(139, 69, 19, 0.4)',
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          border: '1px solid #EEE9E1',
          boxShadow: '0 6px 25px rgba(44, 24, 16, 0.08)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
          position: 'relative',
          '&:hover': {
            boxShadow: '0 15px 45px rgba(44, 24, 16, 0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#2C1810',
          boxShadow: '0 4px 20px rgba(44, 24, 16, 0.08)',
          borderBottom: '1px solid #EEE9E1',
        },
      },
    },
  },
});

/* ========== STYLED COMPONENTS ========== */
const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  position: 'relative',
  overflow: 'hidden',
  '& .MuiContainer-root': {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
  '&::before': {
    content: '""',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '400px',
    background: 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
    zIndex: 0,
  },
  '&::after': {
    content: '""',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: '300px',
    background: 'radial-gradient(circle at 50% 100%, rgba(139, 69, 19, 0.05) 0%, transparent 70%)',
    zIndex: 0,
  },
}));

const RelaxingOverlay = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: 'none',
  background: 'linear-gradient(180deg, rgba(250, 249, 247, 0.8) 0%, transparent 100%)',
  zIndex: 0,
}));

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: 280,
  flexShrink: 0,
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: 1200,
  backgroundColor: '#FFFFFF',
  borderRight: '1px solid #EEE9E1',
  boxShadow: '4px 0 20px rgba(44, 24, 16, 0.06)',
  overflowY: 'auto',
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}));

const SidebarHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5, 2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'linear-gradient(90deg, #FFFEF7 0%, #F5F3F0 100%)',
  borderBottom: '2px solid #D4AF37',
  marginBottom: theme.spacing(1.5),
  position: 'relative',
  overflow: 'hidden',
  flexShrink: 0,
  minHeight: 75,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, transparent 0%, rgba(212, 175, 55, 0.03) 100%)',
  },
}));

const SidebarItem = styled(ListItemButton)(({ theme, selected }) => ({
  borderRadius: 12,
  margin: theme.spacing(0.5, 1.5),
  padding: theme.spacing(1.25, 2),
  transition: 'all 0.3s ease',
  backgroundColor: selected ? 'rgba(212, 175, 55, 0.08)' : 'transparent',
  borderLeft: selected ? '3px solid #D4AF37' : '3px solid transparent',
  backdropFilter: 'blur(10px)',
  minHeight: 48,
  '&:hover': {
    backgroundColor: 'rgba(212, 175, 55, 0.05)',
    transform: 'translateX(4px)',
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.main,
      transform: 'scale(1.1)',
    },
    '& .MuiListItemText-primary': {
      color: theme.palette.text.primary,
    },
  },
  '& .MuiListItemIcon-root': {
    color: selected ? theme.palette.primary.main : theme.palette.text.secondary,
    minWidth: 36,
    transition: 'all 0.3s ease',
    fontSize: '1.2rem',
  },
  '& .MuiListItemText-primary': {
    fontWeight: selected ? 600 : 500,
    fontSize: '0.8125rem',
    color: selected ? theme.palette.text.primary : theme.palette.text.secondary,
    fontFamily: '"Inter", sans-serif',
  },
}));

const GoldBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.primary.main,
    color: '#2C1810',
    fontWeight: 'bold',
    fontSize: '0.625rem',
    height: 18,
    minWidth: 18,
    padding: '0 5px',
    border: '2px solid #FFFFFF',
    boxShadow: '0 3px 8px rgba(212, 175, 55, 0.3)',
  },
}));

const LuxuryCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(145deg, #FFFFFF 0%, #FFFEF7 100%)',
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(0.75),
  '& .MuiCardContent-root': {
    padding: theme.spacing(3),
    flexGrow: 1,
  },
  '& .MuiCardActions-root': {
    padding: theme.spacing(3),
    paddingTop: 0,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '6px',
    background: 'linear-gradient(90deg, #D4AF37 0%, #8B4513 100%)',
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[6],
    '&::before': {
      height: '8px',
    },
  },
}));

const StatCard = styled(Paper)(({ theme, color }) => ({
  padding: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#FFFFFF',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(135deg, ${color || '#D4AF37'}10 0%, transparent 100%)`,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '6px',
    height: '100%',
    background: color || theme.palette.primary.main,
  },
}));

const LuxuryButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%)',
  borderRadius: 16,
  color: '#2C1810',
  height: 56,
  padding: '0 36px',
  fontWeight: 600,
  fontSize: '0.9375rem',
  textTransform: 'none',
  boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3), 0 2px 4px rgba(139, 69, 19, 0.2)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
    transition: '0.5s',
  },
  '&:hover': {
    background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #FFD700 100%)',
    boxShadow: '0 12px 35px rgba(212, 175, 55, 0.4), 0 4px 8px rgba(139, 69, 19, 0.3)',
    transform: 'translateY(-3px)',
    '&::before': {
      left: '100%',
    },
  },
  '&:active': {
    transform: 'translateY(-1px)',
  },
}));

const ProfileCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'linear-gradient(145deg, #FFFFFF 0%, #FFFEF7 100%)',
  border: '2px solid #EEE9E1',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: -100,
    right: -100,
    width: 300,
    height: 300,
    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`,
    zIndex: 0,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: -100,
    left: -100,
    width: 300,
    height: 300,
    background: `radial-gradient(circle, ${alpha(theme.palette.tertiary.main, 0.05)} 0%, transparent 70%)`,
    zIndex: 0,
  },
}));

const RoomCard = styled(LuxuryCard)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const RoomImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 280,
  overflow: 'hidden',
  borderRadius: '20px 20px 0 0',
}));

const RoomImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const PriceTag = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 20,
  right: 20,
  backgroundColor: '#D4AF37',
  color: '#2C1810',
  padding: '8px 18px',
  borderRadius: 12,
  fontWeight: 700,
  fontSize: '1.1rem',
  boxShadow: '0 6px 15px rgba(212, 175, 55, 0.3)',
  zIndex: 2,
}));

const FeatureChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(212, 175, 55, 0.1)',
  color: theme.palette.text.primary,
  border: '1px solid rgba(212, 175, 55, 0.3)',
  fontWeight: 500,
  '& .MuiChip-icon': {
    color: theme.palette.primary.main,
  },
}));

const TimelineCard = styled(Paper)(({ theme, status }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#FFFFFF',
  borderLeft: `6px solid ${status === 'confirmed' ? '#2E7D32' : status === 'cancelled' ? '#C62828' : '#F57C00'}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateX(4px)',
    boxShadow: theme.shadows[4],
  },
}));

const GradientDivider = styled(Divider)(({ theme }) => ({
  height: 2,
  background: 'linear-gradient(90deg, transparent, #D4AF37, #8B4513, transparent)',
  border: 'none',
  margin: theme.spacing(4, 0),
}));

const FloatingActionButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: 40,
  right: 40,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.tertiary.dark,
  width: 60,
  height: 60,
  boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'scale(1.1)',
  },
}));

const AvatarRing = styled(Avatar)(({ theme }) => ({
  border: `4px solid ${theme.palette.primary.main}`,
  boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: theme.palette.tertiary.main,
    transform: 'scale(1.05)',
  },
}));

/* ========== SINGLE IMAGE DISPLAY COMPONENT ========== */
const SingleImageDisplay = ({ imageUrl, height = 280, alt = "Room" }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (imageUrl && imageUrl.startsWith('http')) {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageError(true);
    } else {
      setImageError(true);
    }
  }, [imageUrl]);

  return (
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      height, 
      overflow: 'hidden', 
      borderRadius: '20px 20px 0 0',
      backgroundColor: '#FAF9F7',
    }}>
      {imageUrl && !imageError ? (
        <>
          <img
            src={imageUrl}
            alt={alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
            }}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
          
          {!imageLoaded && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FAF9F7',
              }}
            >
              <CircularProgress size={40} sx={{ color: '#D4AF37' }} />
            </Box>
          )}
        </>
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FAF9F7',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <HotelIcon sx={{ fontSize: 60, color: '#D4AF37', opacity: 0.5 }} />
          <Typography variant="body2" sx={{ color: '#8B4513', opacity: 0.7 }}>
            Room image not available
          </Typography>
        </Box>
      )}
    </Box>
  );
};

/* ========== CONSTANTS ========== */
const steps = ["Select Dates", "Guest Details", "Confirm Booking"];
const sidebarItems = [
  { text: "Dashboard", icon: <DashboardIcon />, id: "dashboard" },
  { text: "My Bookings", icon: <BookmarkIcon />, id: "bookings" },
  { text: "Favorites", icon: <FavoriteIcon />, id: "favorites" },
  { text: "Browse Rooms", icon: <HotelIcon />, id: "browse" },
  { text: "Room Details", icon: <KingBed />, id: "room-details" },
  { text: "Payment Methods", icon: <CreditCardIcon />, id: "payments" },
  { text: "Booking History", icon: <HistoryIcon />, id: "history" },
  { text: "My Profile", icon: <AccountIcon />, id: "profile" },
  { text: "Settings", icon: <SettingsIcon />, id: "settings" },
];

/* ========== VALUE MAPPINGS ========== */
const roomTypeMapping = {
  'Single': { apiValue: 'Single', display: 'Single Room' },
  'Double': { apiValue: 'Double', display: 'Double Room' },
  'Family': { apiValue: 'Family', display: 'Family Suite' },
  'Executive': { apiValue: 'Executive', display: 'Executive Suite' },
  'Presidential': { apiValue: 'Presidential', display: 'Presidential Suite' }
};

const acTypeMapping = {
  'Air Condition': { apiValue: 'Air Condition', display: 'Air Conditioned' },
  'Non-A/C': { apiValue: 'Non-A/C', display: 'Non-A/C' },
  'Fan Only': { apiValue: 'Fan Only', display: 'Fan Only' },
  'Ceiling fan provided': { apiValue: 'Ceiling fan provided', display: 'Ceiling Fan Provided' }
};

/* ========== MAIN COMPONENT ========== */
export default function LuxuryGoldHotelDashboard() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("dashboard");
  const [openModal, setOpenModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomDetailsLoading, setRoomDetailsLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [bookingData, setBookingData] = useState({
    checkInDate: new Date().toISOString().split("T")[0],
    checkOutDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    numOfAdults: 1,
    numOfChildren: 0,
    phoneNumber: "",
  });
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingError, setBookingError] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState("");
  const [bellBooking, setBellBooking] = useState(null);
  const [bellOpen, setBellOpen] = useState(false);
  const [myBookings, setMyBookings] = useState([]);
  const [myBookingsLoading, setMyBookingsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [cancelId, setCancelId] = useState(null);
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [bookingHistory, setBookingHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(true);
  
  // Search states - FIXED VALUES to match backend API
  const [searchData, setSearchData] = useState({
    checkInDate: new Date().toISOString().split("T")[0],
    checkOutDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    acType: "Air Condition", // Fixed: Changed from "Air Conditioned"
    roomType: "Double", // Fixed: Changed from "Double Room"
    numOfAdults: 1,
    numOfChildren: 0,
  });
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);
  
  // Settings states
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    emailNotifications: true,
    autoConfirm: true,
    language: 'en',
    currency: 'USD',
    theme: 'gold',
  });

  // Advanced search toggle
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const user = JSON.parse(localStorage.getItem("user")) || {};
  const token = localStorage.getItem("token");
  const confirmationCode = localStorage.getItem("confirmationCode");
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  /* ========== HELPER FUNCTIONS ========== */
  const getRoomImageUrl = (room) => {
    if (!room) return null;
    
    // Check different possible image fields
    const possibleImageFields = ['roomPhotoUrl', 'imageUrl', 'photoUrl', 'image'];
    
    for (const field of possibleImageFields) {
      if (room[field]) {
        const url = room[field];
        
        // Skip invalid values
        if (!url || url === 'null' || url === 'undefined' || url === '') {
          continue;
        }
        
        // If it's already a full URL
        if (url.startsWith('http://') || url.startsWith('https://')) {
          return url;
        }
        
        // Construct full URL for local images
        const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
        return `http://localhost:8080/${cleanUrl}`;
      }
    }
    
    // Return a fallback image if no image found
    return 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop&q=80';
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const calculateDays = () => {
    try {
      const inD = new Date(bookingData.checkInDate);
      const outD = new Date(bookingData.checkOutDate);
      const diff = outD - inD;
      if (isNaN(diff) || diff <= 0) return 1;
      return Math.max(1, Math.ceil(diff / 86400000));
    } catch {
      return 1;
    }
  };

  const calculateTotalPrice = () => {
    if (!selectedRoom?.roomPrice) return 0;
    const price = parseFloat(selectedRoom.roomPrice) || 0;
    return calculateDays() * price;
  };

  const validateSearchParams = () => {
    const errors = [];
    
    if (!searchData.checkInDate) errors.push("Check-in date is required");
    if (!searchData.checkOutDate) errors.push("Check-out date is required");
    if (!searchData.roomType) errors.push("Room type is required");
    if (!searchData.acType) errors.push("AC type is required");
    
    if (searchData.checkInDate && searchData.checkOutDate) {
      const checkIn = new Date(searchData.checkInDate);
      const checkOut = new Date(searchData.checkOutDate);
      if (checkIn >= checkOut) {
        errors.push("Check-out date must be after check-in date");
      }
    }
    
    return errors;
  };

  /* ========== API FUNCTIONS ========== */
  const fetchUserProfile = async () => {
    try {
      setProfileLoading(true);
      const res = await axios.get(
        "http://localhost:8080/users/get-logged-in-profile-info",
        { 
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      
      if (res.data?.statusCode === 200) {
        setUserProfile(res.data.user || res.data);
        localStorage.setItem("user", JSON.stringify(res.data.user || res.data));
      }
    } catch (err) {
      console.error("Fetch profile error:", err);
    } finally {
      setProfileLoading(false);
    }
  };

  const fetchRoomById = async (roomId) => {
    try {
      setRoomDetailsLoading(true);
      const res = await axios.get(
        `http://localhost:8080/rooms/room-by-id/${roomId}`,
        { 
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      
      if (res.data?.statusCode === 200) {
        setRoomDetails(res.data.room || res.data);
      } else {
        setError(res.data?.message || "Failed to load room details");
      }
    } catch (err) {
      console.error("Fetch room by id error:", err);
      setError("Failed to load room details. Please try again.");
    } finally {
      setRoomDetailsLoading(false);
    }
  };

  const fetchRooms = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:8080/rooms/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      console.log("Full API response:", res.data);
      
      if (res.data?.statusCode === 200) {
        const roomsData = res.data.roomList || [];
        
        console.log("Extracted rooms:", roomsData);
        
        if (Array.isArray(roomsData)) {
          setRooms(roomsData);
        } else {
          setError("Invalid response format from server");
          setRooms([]);
        }
      } else {
        setError(res.data?.message || "Failed to load rooms");
        setRooms([]);
      }
    } catch (err) {
      console.error("Fetch rooms error:", err);
      setError("Failed to load rooms. Please try again.");
      setRooms([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchMyBookings = async () => {
    try {
      setMyBookingsLoading(true);
      const res = await axios.get("http://localhost:8080/users/my-bookings", {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (res.data?.statusCode === 200) {
        const bookings = res.data.bookingList || [];
        setMyBookings(bookings);
        
        // Separate history bookings (past bookings)
        const now = new Date();
        const upcoming = bookings.filter(b => new Date(b.checkOutDate) >= now);
        const history = bookings.filter(b => new Date(b.checkOutDate) < now);
        setBookingHistory(history);
      }
    } catch (err) {
      console.error("Fetch bookings error:", err);
    } finally {
      setMyBookingsLoading(false);
    }
  };

  const handleSearchRooms = async () => {
    const validationErrors = validateSearchParams();
    if (validationErrors.length > 0) {
      setSearchError(validationErrors.join(". "));
      return;
    }

    setSearchLoading(true);
    setSearchPerformed(true);
    setSearchError("");

    try {
      // Build query parameters for the new endpoint - ALL parameters are required
      const params = new URLSearchParams({
        checkInDate: searchData.checkInDate,
        checkOutDate: searchData.checkOutDate,
        roomType: searchData.roomType,
        acType: searchData.acType
      });

      const url = `http://localhost:8080/rooms/available-rooms-by-date-and-type?${params.toString()}`;
      
      console.log("API URL:", url); // Debug log
      console.log("Search params:", {
        checkInDate: searchData.checkInDate,
        checkOutDate: searchData.checkOutDate,
        roomType: searchData.roomType,
        acType: searchData.acType
      });
      
      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log("Search API response:", res.data);
      
      if (res.data?.statusCode === 200) {
        // Handle both possible response structures
        const availableRooms = res.data.availableRoomList || res.data.roomList || res.data || [];
        
        console.log("Available rooms:", availableRooms);
        
        if (Array.isArray(availableRooms) && availableRooms.length > 0) {
          setRooms(availableRooms);
          setSearchError("");
        } else {
          setRooms([]);
          setSearchError(`No available rooms found for the selected criteria. Try different dates or room types.`);
        }
      } else if (res.data?.statusCode === 400) {
        // Handle validation errors from backend
        setSearchError(res.data.message || "Please provide all required search parameters");
        setRooms([]);
      } else {
        throw new Error(res.data?.message || "Failed to search rooms");
      }
    } catch (err) {
      console.error("Search error:", err);
      setSearchError(
        err.response?.data?.message || 
        err.message || 
        "Failed to search rooms. Please try again."
      );
      setRooms([]);
    } finally {
      setSearchLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
    fetchRooms();
    fetchMyBookings();
  }, []);

  /* ========== HANDLERS ========== */
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarItemClick = (itemId) => {
    setSelectedItem(itemId);
    if (isMobile) setMobileOpen(false);
  };

  const handleSearchChange = (field, value) => {
    setSearchData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleFavorite = (roomId) => {
    setFavorites(prev => 
      prev.includes(roomId) 
        ? prev.filter(id => id !== roomId)
        : [...prev, roomId]
    );
  };

  const handleBookNow = (room) => {
    setSelectedRoom(room);
    const checkInDate = searchPerformed ? searchData.checkInDate : new Date().toISOString().split("T")[0];
    const checkOutDate = searchPerformed ? searchData.checkOutDate : new Date(Date.now() + 86400000).toISOString().split("T")[0];
    
    setBookingData(prev => ({
      ...prev,
      checkInDate,
      checkOutDate,
      numOfAdults: searchData.numOfAdults || 1,
      numOfChildren: searchData.numOfChildren || 0,
    }));
    
    setOpenModal(true);
    setActiveStep(0);
    setBookingError("");
    setBookingSuccess("");
  };

  const handleViewRoomDetails = (room) => {
    setSelectedRoom(room);
    fetchRoomById(room.id);
    setSelectedItem("room-details");
  };

  const handleNext = () => {
    if (activeStep === 0) {
      if (!bookingData.checkInDate || !bookingData.checkOutDate) {
        setBookingError("Please select dates");
        return;
      }
      const checkIn = new Date(bookingData.checkInDate);
      const checkOut = new Date(bookingData.checkOutDate);
      if (checkIn >= checkOut) {
        setBookingError("Check-out date must be after check-in date");
        return;
      }
    }
    
    if (activeStep === 1) {
      if (!bookingData.phoneNumber || bookingData.phoneNumber.length < 10) {
        setBookingError("Please enter a valid phone number (at least 10 digits)");
        return;
      }
      if (bookingData.numOfAdults < 1) {
        setBookingError("Please enter at least 1 adult");
        return;
      }
    }
    
    setBookingError("");
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleBookingSubmit = async () => {
    if (!user?.id) {
      setBookingError("User not found. Please login again.");
      return;
    }
    
    if (!selectedRoom?.id) {
      setBookingError("Room selection error. Please try again.");
      return;
    }

    setBookingLoading(true);
    setBookingError("");

    const payload = {
      checkInDate: bookingData.checkInDate,
      checkOutDate: bookingData.checkOutDate,
      numOfAdults: bookingData.numOfAdults,
      numOfChildren: bookingData.numOfChildren,
      phoneNumber: bookingData.phoneNumber,
    };

    try {
      const res = await axios.post(
        `http://localhost:8080/bookings/book-room/${selectedRoom.id}/${user.id}`,
        payload,
        { 
          headers: { 
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          } 
        }
      );

      if (res.data?.statusCode === 200) {
        const code = res.data.bookingConfirmationCode;
        if (code) localStorage.setItem("confirmationCode", code);
        
        setBookingSuccess(`🎉 Booking Confirmed!\nConfirmation Code: ${code || "N/A"}\nRoom: ${selectedRoom.roomNumber || selectedRoom.roomType}`);
        
        setTimeout(() => {
          setOpenModal(false);
          setBookingData({
            checkInDate: new Date().toISOString().split("T")[0],
            checkOutDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
            numOfAdults: 1,
            numOfChildren: 0,
            phoneNumber: "",
          });
          fetchRooms();
          fetchMyBookings();
          setSearchPerformed(false);
          setActiveStep(0);
        }, 2000);
      } else {
        setBookingError(res.data?.message || "Booking failed. Please try again.");
      }
    } catch (err) {
      console.error("Booking error:", err);
      setBookingError(
        err.response?.data?.message || 
        (typeof err.response?.data === "string" ? err.response.data : "Booking failed. Please try again.")
      );
    } finally {
      setBookingLoading(false);
    }
  };

  const handleCancelBooking = async () => {
    if (!cancelId) return;
    
    try {
      const res = await axios.delete(`http://localhost:8080/bookings/cancel/${cancelId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (res.data?.statusCode === 200) {
        // Remove from local state
        setMyBookings(prev => prev.filter(booking => booking.id !== cancelId));
        
        const canceledBooking = myBookings.find(b => b.id === cancelId);
        if (canceledBooking?.bookingConfirmationCode === confirmationCode) {
          localStorage.removeItem("confirmationCode");
        }
        
        setCancelDialogOpen(false);
        setCancelId(null);
        
        // Refresh bookings
        fetchMyBookings();
        
        setBookingSuccess("Booking cancelled successfully!");
        setTimeout(() => setBookingSuccess(""), 3000);
      } else {
        setBookingError(res.data?.message || "Failed to cancel booking");
      }
    } catch (err) {
      console.error("Cancel booking error:", err);
      setBookingError(err.response?.data?.message || "Failed to cancel booking. Please try again.");
    }
  };

  /* ========== SIDEBAR COMPONENT ========== */
  const SidebarContent = () => (
    <>
      <SidebarHeader>
        <Box display="flex" alignItems="center" gap={2} sx={{ position: 'relative', zIndex: 1 }}>
          <DiamondIcon sx={{ 
            fontSize: 30, 
            color: '#D4AF37',
            filter: 'drop-shadow(0 2px 4px rgba(212, 175, 55, 0.3))',
          }} />
          <Box>
            <Typography variant="h6" fontWeight="700" sx={{ 
              background: 'linear-gradient(135deg, #D4AF37 0%, #8B4513 100%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.2,
              fontSize: '1.1rem',
            }}>
              GOLDEN BROWN HAVEN
            </Typography>
            <Typography variant="caption" sx={{ color: '#8B4513', fontWeight: 500, fontSize: '0.7rem' }}>
              Luxury Hotel & Resort
            </Typography>
          </Box>
        </Box>
        <IconButton 
          size="small" 
          onClick={handleDrawerToggle} 
          sx={{ 
            display: { md: 'none' },
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            '&:hover': { backgroundColor: 'rgba(212, 175, 55, 0.2)' },
            minWidth: 36,
            minHeight: 36,
          }}
        >
          <ChevronLeftIcon sx={{ color: '#8B4513', fontSize: 20 }} />
        </IconButton>
      </SidebarHeader>
      
      {/* Profile Section - Compact */}
      <Box sx={{ p: 2, pb: 1.5, flexShrink: 0 }}>
        <Box display="flex" alignItems="center" gap={2} sx={{ position: 'relative', zIndex: 1 }}>
          <AvatarRing
            sx={{
              width: 50,
              height: 50,
              bgcolor: 'primary.light',
              color: '#2C1810',
              fontWeight: 'bold',
              fontSize: '1.25rem',
            }}
          >
            {userProfile?.name?.charAt(0) || user?.name?.charAt(0) || 'G'}
          </AvatarRing>
          <Box sx={{ maxWidth: 'calc(100% - 70px)' }}>
            <Typography variant="subtitle2" fontWeight="600" noWrap fontSize="0.8125rem">
              {userProfile?.name || user?.name || "Guest User"}
            </Typography>
            <Typography variant="caption" sx={{ color: '#8B4513', mt: 0.25, display: 'block', fontSize: '0.7rem' }} noWrap>
              {userProfile?.email || user?.email || "guest@example.com"}
            </Typography>
            <Box display="flex" alignItems="center" gap={0.5} sx={{ mt: 0.75 }}>
              <VerifiedIcon sx={{ fontSize: 12, color: 'primary.main' }} />
              <Typography variant="caption" fontWeight="600" color="primary.main" fontSize="0.65rem">
                GOLD MEMBER
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: '#EEE9E1', mx: 2, my: 1.5 }} />

      {/* Navigation - Compact */}
      <List sx={{ mt: 1, px: 1.5, flexGrow: 1, overflow: 'auto' }}>
        {sidebarItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ mb: 0.75 }}>
            <SidebarItem
              selected={selectedItem === item.id}
              onClick={() => handleSidebarItemClick(item.id)}
            >
              <ListItemIcon sx={{ minWidth: 36, mr: 1 }}>{item.icon}</ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ 
                  fontSize: '0.8125rem',
                  noWrap: true,
                }}
              />
            </SidebarItem>
          </ListItem>
        ))}
      </List>

      {/* Upgrade Banner - Compact */}
      <Box sx={{ p: 2, pt: 1.5, flexShrink: 0 }}>
        <Paper 
          elevation={0}
          sx={{ 
            p: 2,
            background: 'linear-gradient(135deg, #FFFEF7 0%, #F5F3F0 100%)',
            border: '2px solid rgba(212, 175, 55, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, transparent 0%, rgba(212, 175, 55, 0.05) 100%)',
            },
          }}
        >
          <Typography variant="subtitle2" fontWeight="600" gutterBottom sx={{ position: 'relative', fontSize: '0.8125rem' }}>
            🏆 Platinum Tier
          </Typography>
          <Typography variant="caption" sx={{ color: '#5D4037', mb: 1.5, display: 'block', position: 'relative', fontSize: '0.7rem' }}>
            Upgrade for exclusive benefits
          </Typography>
          <LuxuryButton 
            size="small" 
            fullWidth 
            sx={{ 
              position: 'relative', 
              height: 36, 
              fontSize: '0.75rem',
              minHeight: 'auto',
              padding: '8px 16px',
            }}
          >
            Upgrade Now
          </LuxuryButton>
        </Paper>
      </Box>
    </>
  );

  /* ========== ROOM CARD COMPONENT ========== */
  const renderRoomCard = (room) => {
    const roomImageUrl = getRoomImageUrl(room);
    
    return (
      <RoomCard>
        {/* Single Image Display */}
        <RoomImageContainer>
          <SingleImageDisplay imageUrl={roomImageUrl} height={280} alt={room.roomNumber} />
          
          <PriceTag>
            ${room.roomPrice}
            <Typography component="span" variant="caption" sx={{ ml: 0.5 }}>
              /night
            </Typography>
          </PriceTag>
          
          {/* Favorite button */}
          <IconButton
            sx={{
              position: "absolute",
              top: 20,
              left: 20,
              backgroundColor: "white",
              boxShadow: 3,
              zIndex: 2,
              "&:hover": { backgroundColor: "white" },
              width: 40,
              height: 40,
            }}
            onClick={() => toggleFavorite(room.id)}
          >
            {favorites.includes(room.id) ? (
              <FavoriteIcon sx={{ color: "#C62828", fontSize: 22 }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: "#5D4037", fontSize: 22 }} />
            )}
          </IconButton>
          
          {/* Room type chip */}
          <Chip
            label={room.roomType || "Standard"}
            sx={{
              position: "absolute",
              bottom: 20,
              left: 20,
              backgroundColor: "rgba(139, 69, 19, 0.9)",
              color: "white",
              fontWeight: 600,
              zIndex: 2,
              fontSize: '0.75rem',
              height: 28,
            }}
          />
          
          {/* Availability badge */}
          <Chip
            label="Available"
            sx={{
              position: "absolute",
              bottom: 20,
              right: 20,
              backgroundColor: "#2E7D32",
              color: "white",
              fontWeight: 600,
              zIndex: 2,
              fontSize: '0.75rem',
              height: 28,
            }}
          />
        </RoomImageContainer>
        
        <CardContent sx={{ flexGrow: 1, pb: 2, pt: 3 }}>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
            <Box>
              <Typography variant="h5" fontWeight="700" gutterBottom sx={{ fontSize: '1.25rem' }}>
                {room.roomNumber || `Room ${room.id}`}
              </Typography>
              <Typography variant="body2" sx={{ color: '#8B4513', fontSize: '0.875rem' }}>
                {room.acType || "Standard"} • {room.roomCapacity || "2"} Guests
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              <StarIcon sx={{ color: '#D4AF37', fontSize: 20 }} />
              <Typography variant="body1" fontWeight="600" fontSize="0.875rem">
                4.8
              </Typography>
            </Box>
          </Box>
          
          {room.roomDescription && (
            <Typography variant="body2" sx={{ color: '#5D4037', mb: 2.5, lineHeight: 1.6, fontSize: '0.875rem' }}>
              {room.roomDescription.length > 120
                ? `${room.roomDescription.substring(0, 120)}...`
                : room.roomDescription}
            </Typography>
          )}
          
          <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
            <FeatureChip icon={<Wifi sx={{ fontSize: 16 }} />} label="WiFi" size="small" />
            <FeatureChip icon={<Tv sx={{ fontSize: 16 }} />} label="Smart TV" size="small" />
            <FeatureChip icon={<Bathtub sx={{ fontSize: 16 }} />} label="Jacuzzi" size="small" />
            {room.acType?.includes("Air Condition") && (
              <FeatureChip icon={<AcUnit sx={{ fontSize: 16 }} />} label="A/C" size="small" />
            )}
          </Box>
        </CardContent>
        
        <CardActions sx={{ p: 3, pt: 0 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => handleViewRoomDetails(room)}
                size="small"
                sx={{ 
                  borderColor: '#8B4513', 
                  color: '#8B4513',
                  '&:hover': {
                    borderColor: '#654321',
                    backgroundColor: 'rgba(139, 69, 19, 0.04)',
                  },
                  height: 44,
                  fontSize: '0.875rem',
                }}
              >
                View Details
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LuxuryButton 
                fullWidth 
                onClick={() => handleBookNow(room)}
                size="small"
                sx={{ height: 44, fontSize: '0.875rem' }}
              >
                Book Now
              </LuxuryButton>
            </Grid>
          </Grid>
        </CardActions>
      </RoomCard>
    );
  };

  /* ========== SEARCH SECTION ========== */
  const renderSearchSection = () => (
    <LuxuryCard sx={{ mb: 5, background: 'linear-gradient(145deg, #FFFFFF 0%, #FFFEF7 100%)' }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" fontWeight="600" gutterBottom sx={{ mb: 3, fontSize: '1.5rem', color: '#2C1810' }}>
          🔍 Find Your Perfect Stay
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Button
            variant="text"
            onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
            endIcon={showAdvancedSearch ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            sx={{ 
              color: '#8B4513', 
              mb: 2,
              '&:hover': { backgroundColor: 'rgba(139, 69, 19, 0.05)' }
            }}
            size="small"
          >
            {showAdvancedSearch ? "Hide Advanced Filters" : "Show Advanced Filters"}
          </Button>
        </Box>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              type="date"
              label="Check In"
              value={searchData.checkInDate}
              onChange={(e) => handleSearchChange("checkInDate", e.target.value)}
              InputLabelProps={{ 
                shrink: true,
                sx: { color: '#8B4513', fontWeight: 500 }
              }}
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  backgroundColor: '#FFFEF7',
                  '&:hover fieldset': {
                    borderColor: '#D4AF37',
                  },
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarToday sx={{ color: '#8B4513', fontSize: 22 }} />
                  </InputAdornment>
                ),
              }}
              inputProps={{
                min: new Date().toISOString().split("T")[0]
              }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              type="date"
              label="Check Out"
              value={searchData.checkOutDate}
              onChange={(e) => handleSearchChange("checkOutDate", e.target.value)}
              InputLabelProps={{ 
                shrink: true,
                sx: { color: '#8B4513', fontWeight: 500 }
              }}
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  backgroundColor: '#FFFEF7',
                  '&:hover fieldset': {
                    borderColor: '#D4AF37',
                  },
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarToday sx={{ color: '#8B4513', fontSize: 22 }} />
                  </InputAdornment>
                ),
              }}
              inputProps={{
                min: searchData.checkInDate || new Date(Date.now() + 86400000).toISOString().split("T")[0]
              }}
            />
          </Grid>
          
          {/* Room Type Filter - FIXED VALUES */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel sx={{ color: '#8B4513', '&.Mui-focused': { color: '#8B4513' } }}>Room Type</InputLabel>
              <Select
                value={searchData.roomType}
                label="Room Type"
                onChange={(e) => handleSearchChange("roomType", e.target.value)}
                required
                sx={{
                  borderRadius: 2,
                  backgroundColor: '#FFFEF7',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#EEE9E1',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#D4AF37',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#D4AF37',
                  },
                }}
              >
                <MenuItem value="Single">Single Room</MenuItem>
                <MenuItem value="Double">Double Room</MenuItem>
                <MenuItem value="Family">Family Suite</MenuItem>
                <MenuItem value="Executive">Executive Suite</MenuItem>
                <MenuItem value="Presidential">Presidential Suite</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          {/* AC Type Filter - FIXED VALUES */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel sx={{ color: '#8B4513', '&.Mui-focused': { color: '#8B4513' } }}>AC Type</InputLabel>
              <Select
                value={searchData.acType}
                label="AC Type"
                onChange={(e) => handleSearchChange("acType", e.target.value)}
                required
                sx={{
                  borderRadius: 2,
                  backgroundColor: '#FFFEF7',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#EEE9E1',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#D4AF37',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#D4AF37',
                  },
                }}
              >
                <MenuItem value="Air Condition">Air Conditioned</MenuItem>
                <MenuItem value="Non-A/C">Non-A/C</MenuItem>
                <MenuItem value="Fan Only">Fan Only</MenuItem>
                <MenuItem value="Ceiling fan provided">Ceiling Fan Provided</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="Adults"
              type="number"
              value={searchData.numOfAdults}
              onChange={(e) => handleSearchChange("numOfAdults", Math.max(1, parseInt(e.target.value) || 1))}
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  backgroundColor: '#FFFEF7',
                  '&:hover fieldset': {
                    borderColor: '#D4AF37',
                  },
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PeopleIcon sx={{ color: '#8B4513', fontSize: 22 }} />
                  </InputAdornment>
                ),
                inputProps: {
                  min: 1,
                  max: 10
                }
              }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="Children"
              type="number"
              value={searchData.numOfChildren}
              onChange={(e) => handleSearchChange("numOfChildren", Math.max(0, parseInt(e.target.value) || 0))}
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  backgroundColor: '#FFFEF7',
                  '&:hover fieldset': {
                    borderColor: '#D4AF37',
                  },
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ChildCareIcon sx={{ color: '#8B4513', fontSize: 22 }} />
                  </InputAdornment>
                ),
                inputProps: {
                  min: 0,
                  max: 10
                }
              }}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Box display="flex" gap={3} justifyContent="center" sx={{ mt: 2 }}>
              <LuxuryButton
                onClick={handleSearchRooms}
                disabled={searchLoading}
                startIcon={searchLoading ? <CircularProgress size={20} /> : <SearchIcon />}
                sx={{ 
                  minWidth: 200, 
                  height: 48,
                  background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #FFD700 100%)',
                  }
                }}
              >
                {searchLoading ? "Searching..." : "Search Available Rooms"}
              </LuxuryButton>
              <Button
                variant="outlined"
                onClick={() => {
                  setSearchData({
                    checkInDate: new Date().toISOString().split("T")[0],
                    checkOutDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
                    acType: "Air Condition",
                    roomType: "Double",
                    numOfAdults: 1,
                    numOfChildren: 0,
                  });
                  setSearchPerformed(false);
                  setSearchError("");
                  fetchRooms();
                }}
                sx={{ 
                  borderColor: '#8B4513', 
                  color: '#8B4513', 
                  height: 48, 
                  px: 3,
                  '&:hover': {
                    borderColor: '#654321',
                    backgroundColor: 'rgba(139, 69, 19, 0.04)',
                  }
                }}
              >
                Reset Filters
              </Button>
            </Box>
          </Grid>
        </Grid>
        
        {searchError && (
          <Alert 
            severity={rooms.length === 0 && searchPerformed ? "warning" : "error"}
            sx={{ 
              mt: 3, 
              borderRadius: 2,
              backgroundColor: rooms.length === 0 && searchPerformed ? '#FFF3E0' : '#FFEBEE',
              border: '1px solid',
              borderColor: rooms.length === 0 && searchPerformed ? '#FF9800' : '#F44336'
            }}
            onClose={() => setSearchError("")}
            action={
              searchPerformed && (
                <Button 
                  color="inherit" 
                  size="small"
                  onClick={() => {
                    setSearchData(prev => ({
                      ...prev,
                      roomType: "Double",
                      acType: "Air Condition"
                    }));
                    handleSearchRooms();
                  }}
                >
                  Reset to Default
                </Button>
              )
            }
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: rooms.length === 0 && searchPerformed ? '#E65100' : '#C62828' }}>
              {searchError}
            </Typography>
            {searchPerformed && (
              <Typography variant="body2" sx={{ mt: 1, color: rooms.length === 0 && searchPerformed ? '#8B4513' : '#5D4037' }}>
                Try adjusting your search criteria or contact support if the issue persists.
              </Typography>
            )}
          </Alert>
        )}
      </CardContent>
    </LuxuryCard>
  );

  /* ========== CONTENT RENDERERS ========== */
  const renderContent = () => {
    switch (selectedItem) {
      case "dashboard": return renderDashboard();
      case "bookings": return renderBookings();
      case "favorites": return renderFavorites();
      case "browse": return renderBrowse();
      case "room-details": return renderRoomDetails();
      case "profile": return renderProfile();
      case "settings": return renderSettings();
      case "payments": return renderPayments();
      case "history": return renderHistory();
      default: return renderDashboard();
    }
  };

  const renderDashboard = () => (
    <>
      {/* Welcome Header */}
      <Box mb={5}>
        <Fade in={true}>
          <ProfileCard elevation={0}>
            <Grid container alignItems="center" spacing={4}>
              <Grid item xs={12} md={8}>
                <Typography variant="h3" fontWeight="700" gutterBottom sx={{ fontSize: '2.5rem', color: '#2C1810' }}>
                  Welcome back, {userProfile?.name?.split(' ')[0] || "Guest"}! 👑
                </Typography>
                <Typography variant="h5" sx={{ color: '#8B4513', mb: 3, fontSize: '1.5rem' }}>
                  Experience luxury redefined at Golden Brown Haven
                </Typography>
                <Typography variant="body1" sx={{ color: '#5D4037', maxWidth: 700, fontSize: '1.1rem' }}>
                  Discover exquisite rooms, premium amenities, and unparalleled service. 
                  Your perfect getaway begins here at our luxurious sanctuary.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ 
                  position: 'relative',
                  height: 200,
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(139, 69, 19, 0.1) 100%)',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}>
                  <KingBed sx={{ fontSize: 120, color: 'rgba(212, 175, 55, 0.3)' }} />
                  <Box sx={{ 
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    backgroundColor: 'primary.main',
                    color: '#2C1810',
                    px: 2.5,
                    py: 1,
                    borderRadius: 3,
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)',
                  }}>
                    {myBookings.length} Active Stays
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </ProfileCard>
        </Fade>
      </Box>

      {/* Stats Overview */}
      <Grid container spacing={3} mb={5}>
        <Grid item xs={12} sm={6} md={3}>
          <Zoom in={true} timeout={300}>
            <StatCard color="#D4AF37">
              <Box display="flex" alignItems="flex-start" justifyContent="space-between">
                <Box>
                  <Typography variant="h3" fontWeight="700" gutterBottom sx={{ fontSize: '2.5rem', color: '#2C1810' }}>
                    {myBookings.length}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#8B4513', fontWeight: 500, fontSize: '0.875rem' }}>
                    Active Bookings
                  </Typography>
                </Box>
                <BookmarkIcon sx={{ fontSize: 48, color: '#D4AF37', opacity: 0.3 }} />
              </Box>
            </StatCard>
          </Zoom>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Zoom in={true} timeout={500}>
            <StatCard color="#2E7D32">
              <Box display="flex" alignItems="flex-start" justifyContent="space-between">
                <Box>
                  <Typography variant="h3" fontWeight="700" gutterBottom sx={{ fontSize: '2.5rem', color: '#2C1810' }}>
                    {favorites.length}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#8B4513', fontWeight: 500, fontSize: '0.875rem' }}>
                    Favorite Rooms
                  </Typography>
                </Box>
                <FavoriteIcon sx={{ fontSize: 48, color: '#2E7D32', opacity: 0.3 }} />
              </Box>
            </StatCard>
          </Zoom>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Zoom in={true} timeout={700}>
            <StatCard color="#0288D1">
              <Box display="flex" alignItems="flex-start" justifyContent="space-between">
                <Box>
                  <Typography variant="h3" fontWeight="700" gutterBottom sx={{ fontSize: '2.5rem', color: '#2C1810' }}>
                    {rooms.length}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#8B4513', fontWeight: 500, fontSize: '0.875rem' }}>
                    Available Rooms
                  </Typography>
                </Box>
                <HotelIcon sx={{ fontSize: 48, color: '#0288D1', opacity: 0.3 }} />
              </Box>
            </StatCard>
          </Zoom>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Zoom in={true} timeout={900}>
            <StatCard color="#8B4513">
              <Box display="flex" alignItems="flex-start" justifyContent="space-between">
                <Box>
                  <Typography variant="h3" fontWeight="700" gutterBottom sx={{ fontSize: '2.5rem', color: '#2C1810' }}>
                    25%
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#8B4513', fontWeight: 500, fontSize: '0.875rem' }}>
                    Member Discount
                  </Typography>
                </Box>
                <LocalOfferIcon sx={{ fontSize: 48, color: '#8B4513', opacity: 0.3 }} />
              </Box>
            </StatCard>
          </Zoom>
        </Grid>
      </Grid>

      {/* Search Section */}
      {renderSearchSection()}

      {/* Quick Stats & Activity */}
      <Grid container spacing={4} mb={5}>
        <Grid item xs={12} md={8}>
          <LuxuryCard>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight="600" gutterBottom sx={{ mb: 3, fontSize: '1.5rem', color: '#2C1810' }}>
                📊 Recent Activity
              </Typography>
              {myBookings.slice(0, 3).map((booking, index) => (
                <TimelineCard 
                  key={index} 
                  status="confirmed"
                  sx={{ mb: 2 }}
                >
                  <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={12} sm={8}>
                      <Typography variant="subtitle1" fontWeight="600" sx={{ fontSize: '1rem', color: '#2C1810' }}>
                        {booking.room?.roomNumber || "Luxury Suite"}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#5D4037', mt: 0.5 }}>
                        {formatDate(booking.checkInDate)} → {formatDate(booking.checkOutDate)}
                      </Typography>
                      <Box display="flex" alignItems="center" gap={1.5} sx={{ mt: 1.5 }}>
                        <Chip 
                          icon={<PeopleIcon />} 
                          label={`${booking.numOfAdults} Adults, ${booking.numOfChildren} Children`}
                          size="small"
                          variant="outlined"
                          sx={{ height: 28, borderColor: '#D4AF37', color: '#5D4037' }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Box textAlign="right">
                        <Typography variant="h6" fontWeight="700" color="primary" sx={{ fontSize: '1.25rem' }}>
                          ${parseFloat(booking.room?.roomPrice || 0) * booking.numOfAdults}
                        </Typography>
                        <Chip 
                          label="Confirmed" 
                          size="small" 
                          color="success"
                          sx={{ mt: 1, height: 24, fontWeight: 600 }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </TimelineCard>
              ))}
            </CardContent>
          </LuxuryCard>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <LuxuryCard>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight="600" gutterBottom sx={{ mb: 3, fontSize: '1.5rem', color: '#2C1810' }}>
                🏆 Rewards Status
              </Typography>
              <Box textAlign="center">
                <Box sx={{ position: 'relative', width: 160, height: 160, margin: '0 auto 20px' }}>
                  <CircularProgress
                    variant="determinate"
                    value={75}
                    size={160}
                    thickness={4}
                    sx={{ color: '#D4AF37' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h3" fontWeight="700" sx={{ fontSize: '2rem', color: '#2C1810' }}>
                      75%
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#8B4513', fontSize: '0.875rem' }}>
                      Complete
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="subtitle1" fontWeight="600" gutterBottom sx={{ fontSize: '1rem', color: '#2C1810' }}>
                  Gold Tier Progress
                </Typography>
                <Typography variant="body2" sx={{ color: '#5D4037', mb: 3, fontSize: '0.875rem' }}>
                  2,500 points to reach Platinum Tier
                </Typography>
                <LuxuryButton size="small" sx={{ height: 44 }}>
                  View Rewards
                </LuxuryButton>
              </Box>
            </CardContent>
          </LuxuryCard>
        </Grid>
      </Grid>

      {/* Featured Rooms */}
      <Box mb={5}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h5" fontWeight="600" sx={{ fontSize: '1.5rem', color: '#2C1810' }}>
            ⭐ Featured Rooms
          </Typography>
          <Button 
            variant="text" 
            color="primary"
            endIcon={<ArrowForwardIcon />}
            onClick={() => setSelectedItem("browse")}
            size="small"
            sx={{ color: '#8B4513' }}
          >
            View All
          </Button>
        </Box>
        
        {loading ? (
          <Grid container spacing={3}>
            {[1, 2, 3].map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item}>
                <Skeleton variant="rectangular" height={400} sx={{ borderRadius: 3, bgcolor: '#F5F3F0' }} />
              </Grid>
            ))}
          </Grid>
        ) : rooms.length > 0 ? (
          <Grid container spacing={3}>
            {rooms.slice(0, 3).map((room) => (
              <Grid item xs={12} sm={6} md={4} key={room.id}>
                {renderRoomCard(room)}
              </Grid>
            ))}
          </Grid>
        ) : (
          <Paper sx={{ p: 5, textAlign: "center", borderRadius: 3, backgroundColor: '#FFFEF7', border: '2px solid #EEE9E1' }}>
            <HotelIcon sx={{ fontSize: 60, color: '#D4AF37', mb: 3, opacity: 0.5 }} />
            <Typography variant="h4" color="text.secondary" gutterBottom sx={{ fontSize: '1.75rem', color: '#8B4513' }}>
              No featured rooms available
            </Typography>
            <Typography variant="body1" sx={{ color: '#5D4037', mb: 3 }}>
              All featured rooms are currently booked or undergoing maintenance.
            </Typography>
            <LuxuryButton onClick={() => setSelectedItem("browse")}>
              Browse All Rooms
            </LuxuryButton>
          </Paper>
        )}
      </Box>
    </>
  );

  const renderRoomDetails = () => (
    <Container maxWidth="lg">
      {roomDetailsLoading ? (
        <Box textAlign="center" py={10}>
          <CircularProgress size={70} sx={{ color: '#D4AF37', mb: 3 }} />
          <Typography variant="h5" sx={{ color: '#8B4513', fontSize: '1.5rem' }}>
            Loading room details...
          </Typography>
        </Box>
      ) : roomDetails ? (
        <Box>
          {/* Breadcrumbs */}
          <Breadcrumbs sx={{ mb: 4 }}>
            <Link 
              color="inherit" 
              href="#" 
              onClick={() => setSelectedItem("browse")}
              sx={{ 
                textDecoration: 'none', 
                '&:hover': { 
                  textDecoration: 'underline',
                  color: '#8B4513'
                }, 
                fontSize: '0.875rem',
                color: '#5D4037',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5
              }}
            >
              <HotelIcon fontSize="small" />
              Rooms
            </Link>
            <Typography color="text.primary" fontSize="0.875rem" sx={{ color: '#2C1810', fontWeight: 600 }}>
              {roomDetails.roomNumber}
            </Typography>
          </Breadcrumbs>
          
          {/* Room Header */}
          <Box mb={4}>
            <Grid container alignItems="center" justifyContent="space-between" spacing={3}>
              <Grid item xs={12} md={8}>
                <Typography variant="h3" fontWeight="700" gutterBottom sx={{ fontSize: '2.25rem', color: '#2C1810' }}>
                  {roomDetails.roomNumber}
                </Typography>
                <Typography variant="h5" sx={{ color: '#8B4513', mb: 3, fontSize: '1.5rem' }}>
                  {roomDetails.roomType} • {roomDetails.acType}
                </Typography>
                <Box display="flex" alignItems="center" gap={2.5} flexWrap="wrap">
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <StarIcon sx={{ color: '#D4AF37', fontSize: 22 }} />
                    <Typography variant="h6" fontWeight="600" sx={{ fontSize: '1.1rem', color: '#2C1810' }}>4.8</Typography>
                    <Typography variant="body2" sx={{ color: '#5D4037', ml: 0.5 }}>(124 reviews)</Typography>
                  </Box>
                  <Chip 
                    icon={<PeopleIcon sx={{ fontSize: 16, color: '#8B4513' }} />} 
                    label={`${roomDetails.roomCapacity || "2"} Guests`}
                    variant="outlined"
                    size="small"
                    sx={{ borderColor: '#8B4513', color: '#5D4037' }}
                  />
                  <Chip 
                    icon={<KingBed sx={{ fontSize: 16, color: '#8B4513' }} />} 
                    label="King Size Bed"
                    variant="outlined"
                    size="small"
                    sx={{ borderColor: '#8B4513', color: '#5D4037' }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ 
                  p: 3, 
                  bgcolor: '#FFFEF7', 
                  border: '2px solid #EEE9E1', 
                  borderRadius: 3,
                  boxShadow: '0 8px 25px rgba(44, 24, 16, 0.08)',
                }}>
                  <Typography variant="h4" fontWeight="700" color="primary" gutterBottom sx={{ fontSize: '2rem' }}>
                    ${roomDetails.roomPrice}
                    <Typography component="span" variant="body1" sx={{ color: '#8B4513', ml: 0.5 }}>
                      / night
                    </Typography>
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#5D4037', mb: 3 }}>
                    Includes all taxes and fees
                  </Typography>
                  <LuxuryButton fullWidth onClick={() => handleBookNow(roomDetails)} sx={{ height: 50 }}>
                    Book This Room
                  </LuxuryButton>
                </Paper>
              </Grid>
            </Grid>
          </Box>
      
          {/* Single Room Image */}
          <Box mb={6}>
            <Box sx={{ 
              borderRadius: 3, 
              overflow: 'hidden', 
              height: 450, 
              position: 'relative',
              backgroundColor: '#FAF9F7',
              border: '2px solid #EEE9E1',
              boxShadow: '0 8px 25px rgba(44, 24, 16, 0.08)',
            }}>
              <SingleImageDisplay 
                imageUrl={getRoomImageUrl(roomDetails)} 
                height={450} 
                alt={roomDetails.roomNumber}
              />
            </Box>
          </Box>
          
          {/* Room Features */}
          <Grid container spacing={4} mb={6}>
            <Grid item xs={12} md={8}>
              <LuxuryCard>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" fontWeight="600" gutterBottom sx={{ mb: 3, fontSize: '1.5rem', color: '#2C1810' }}>
                    Room Features
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Box display="flex" alignItems="center" gap={2.5} sx={{ mb: 2 }}>
                        <Box sx={{ 
                          p: 1.5, 
                          borderRadius: 2, 
                          backgroundColor: 'rgba(212, 175, 55, 0.1)',
                          border: '1px solid rgba(212, 175, 55, 0.2)',
                        }}>
                          <KingBed sx={{ color: '#D4AF37', fontSize: 28 }} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" fontWeight="600" fontSize="0.875rem" sx={{ color: '#2C1810' }}>Bed Type</Typography>
                          <Typography variant="body2" sx={{ color: '#5D4037', fontSize: '0.875rem' }}>King Size Bed</Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box display="flex" alignItems="center" gap={2.5} sx={{ mb: 2 }}>
                        <Box sx={{ 
                          p: 1.5, 
                          borderRadius: 2, 
                          backgroundColor: 'rgba(212, 175, 55, 0.1)',
                          border: '1px solid rgba(212, 175, 55, 0.2)',
                        }}>
                          <AcUnit sx={{ color: '#D4AF37', fontSize: 28 }} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" fontWeight="600" fontSize="0.875rem" sx={{ color: '#2C1810' }}>AC Type</Typography>
                          <Typography variant="body2" sx={{ color: '#5D4037', fontSize: '0.875rem' }}>{roomDetails.acType || "Central Air"}</Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box display="flex" alignItems="center" gap={2.5} sx={{ mb: 2 }}>
                        <Box sx={{ 
                          p: 1.5, 
                          borderRadius: 2, 
                          backgroundColor: 'rgba(212, 175, 55, 0.1)',
                          border: '1px solid rgba(212, 175, 55, 0.2)',
                        }}>
                          <Bathtub sx={{ color: '#D4AF37', fontSize: 28 }} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" fontWeight="600" fontSize="0.875rem" sx={{ color: '#2C1810' }}>Bathroom</Typography>
                          <Typography variant="body2" sx={{ color: '#5D4037', fontSize: '0.875rem' }}>Private with Jacuzzi</Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box display="flex" alignItems="center" gap={2.5} sx={{ mb: 2 }}>
                        <Box sx={{ 
                          p: 1.5, 
                          borderRadius: 2, 
                          backgroundColor: 'rgba(212, 175, 55, 0.1)',
                          border: '1px solid rgba(212, 175, 55, 0.2)',
                        }}>
                          <Tv sx={{ color: '#D4AF37', fontSize: 28 }} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" fontWeight="600" fontSize="0.875rem" sx={{ color: '#2C1810' }}>Entertainment</Typography>
                          <Typography variant="body2" sx={{ color: '#5D4037', fontSize: '0.875rem' }}>65" 4K Smart TV</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                  
                  <GradientDivider />
                  
                  <Typography variant="h5" fontWeight="600" gutterBottom sx={{ mb: 3, fontSize: '1.5rem', color: '#2C1810' }}>
                    Amenities
                  </Typography>
                  <Grid container spacing={2}>
                    {['Free WiFi', 'Minibar', 'Room Service', 'Safe', 'Coffee Maker', 
                      'Iron & Board', 'Hairdryer', 'Bathrobes', 'Slippers'].map((amenity, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box display="flex" alignItems="center" gap={2}>
                          <CheckCircleIcon sx={{ fontSize: 20, color: '#2E7D32' }} />
                          <Typography variant="body2" fontSize="0.875rem" sx={{ color: '#5D4037' }}>{amenity}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </LuxuryCard>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <LuxuryCard>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" fontWeight="600" gutterBottom sx={{ mb: 3, fontSize: '1.5rem', color: '#2C1810' }}>
                    Room Specifications
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ color: '#8B4513', mb: 1, fontWeight: 600 }}>SIZE</Typography>
                    <Typography variant="h4" fontWeight="700" sx={{ fontSize: '1.75rem', color: '#2C1810' }}>45 m²</Typography>
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ color: '#8B4513', mb: 1, fontWeight: 600 }}>VIEW</Typography>
                    <Typography variant="body1" fontWeight="500" fontSize="0.875rem" sx={{ color: '#5D4037' }}>Ocean View</Typography>
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ color: '#8B4513', mb: 1, fontWeight: 600 }}>BED CONFIGURATION</Typography>
                    <Typography variant="body1" fontWeight="500" fontSize="0.875rem" sx={{ color: '#5D4037' }}>1 King Bed or 2 Single Beds</Typography>
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ color: '#8B4513', mb: 1, fontWeight: 600 }}>CHECK-IN / CHECK-OUT</Typography>
                    <Typography variant="body1" fontWeight="500" fontSize="0.875rem" sx={{ color: '#5D4037' }}>3:00 PM / 11:00 AM</Typography>
                  </Box>
                  
                  <Button 
                    fullWidth 
                    variant="contained" 
                    color="tertiary"
                    startIcon={<DownloadIcon />}
                    sx={{ mt: 2, height: 44 }}
                    size="small"
                  >
                    Download Floor Plan
                  </Button>
                </CardContent>
              </LuxuryCard>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Paper sx={{ p: 8, textAlign: "center", borderRadius: 3, backgroundColor: '#FFFEF7', border: '2px solid #EEE9E1' }}>
          <HotelIcon sx={{ fontSize: 70, color: '#D4AF37', mb: 3, opacity: 0.5 }} />
          <Typography variant="h4" gutterBottom sx={{ color: '#8B4513', fontSize: '2rem' }}>
            Room Not Found
          </Typography>
          <Typography variant="body1" sx={{ color: '#5D4037', mb: 4, fontSize: '1rem' }}>
            The room you're looking for doesn't exist or is no longer available.
          </Typography>
          <LuxuryButton onClick={() => setSelectedItem("browse")} sx={{ height: 50 }}>
            Browse Available Rooms
          </LuxuryButton>
        </Paper>
      )}
    </Container>
  );

  const renderBrowse = () => (
    <Container maxWidth="xl">
      <Box mb={4}>
        <Typography variant="h3" fontWeight="700" gutterBottom sx={{ fontSize: '2.5rem', color: '#2C1810' }}>
          Browse All Rooms
        </Typography>
        <Typography variant="h5" sx={{ color: '#8B4513', fontSize: '1.5rem' }}>
          Discover our collection of luxurious accommodations
        </Typography>
      </Box>
      
      {renderSearchSection()}
      
      {error && (
        <Alert severity="error" sx={{ mb: 4, borderRadius: 2 }} onClose={() => setError("")}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            {error}
          </Typography>
        </Alert>
      )}
      
      {bookingSuccess && (
        <Alert severity="success" sx={{ mb: 4, borderRadius: 2 }} onClose={() => setBookingSuccess("")}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            {bookingSuccess.split('\n').map((line, i) => (
              <Typography key={i} sx={{ display: 'block' }}>{line}</Typography>
            ))}
          </Typography>
        </Alert>
      )}
      
      {loading ? (
        <Grid container spacing={4}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <Skeleton variant="rectangular" height={450} sx={{ borderRadius: 3, bgcolor: '#F5F3F0' }} />
            </Grid>
          ))}
        </Grid>
      ) : rooms.length === 0 ? (
        <Paper sx={{ 
          p: 8, 
          textAlign: "center", 
          borderRadius: 3,
          backgroundColor: '#FFFEF7',
          border: '2px solid #EEE9E1',
          boxShadow: '0 8px 25px rgba(44, 24, 16, 0.08)',
        }}>
          <Box sx={{ 
            width: 120, 
            height: 120, 
            borderRadius: '50%', 
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 25px',
            border: '2px solid rgba(212, 175, 55, 0.2)',
          }}>
            <HotelIcon sx={{ fontSize: 60, color: '#D4AF37', opacity: 0.7 }} />
          </Box>
          <Typography variant="h4" gutterBottom sx={{ color: '#8B4513', fontSize: '2rem' }}>
            No Rooms Available
          </Typography>
          <Typography variant="body1" sx={{ color: '#5D4037', mb: 4, maxWidth: 600, mx: 'auto', fontSize: '1rem' }}>
            {searchPerformed 
              ? "No rooms match your current search criteria. Try adjusting your filters or dates."
              : "All rooms are currently booked. Please check back later or try different dates."
            }
          </Typography>
          <Box display="flex" gap={3} justifyContent="center">
            <LuxuryButton onClick={fetchRooms} sx={{ height: 50 }}>
              Refresh Rooms
            </LuxuryButton>
            <Button
              variant="outlined"
              onClick={() => {
                setSearchData({
                  checkInDate: new Date().toISOString().split("T")[0],
                  checkOutDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
                  acType: "Air Condition",
                  roomType: "Double",
                  numOfAdults: 1,
                  numOfChildren: 0,
                });
                setSearchPerformed(false);
                fetchRooms();
              }}
              sx={{ 
                borderColor: '#8B4513', 
                color: '#8B4513', 
                height: 50,
                px: 3,
                '&:hover': {
                  borderColor: '#654321',
                  backgroundColor: 'rgba(139, 69, 19, 0.04)',
                }
              }}
            >
              Clear Search
            </Button>
          </Box>
        </Paper>
      ) : (
        <>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
            <Typography variant="h5" sx={{ color: '#8B4513', fontSize: '1.25rem' }}>
              Showing {rooms.length} room{rooms.length !== 1 ? 's' : ''}
              {searchPerformed && ` for ${formatDate(searchData.checkInDate)} - ${formatDate(searchData.checkOutDate)}`}
            </Typography>
            <Box display="flex" gap={2}>
              <Button 
                variant="outlined" 
                startIcon={<FilterIcon />}
                sx={{ 
                  borderColor: '#8B4513', 
                  color: '#8B4513', 
                  height: 40,
                  '&:hover': {
                    borderColor: '#654321',
                    backgroundColor: 'rgba(139, 69, 19, 0.04)',
                  }
                }}
                size="small"
              >
                Filter
              </Button>
              <Button 
                variant="outlined" 
                startIcon={<TrendingUpIcon />}
                sx={{ 
                  borderColor: '#8B4513', 
                  color: '#8B4513', 
                  height: 40,
                  '&:hover': {
                    borderColor: '#654321',
                    backgroundColor: 'rgba(139, 69, 19, 0.04)',
                  }
                }}
                size="small"
              >
                Sort By
              </Button>
            </Box>
          </Box>
          
          <Grid container spacing={4}>
            {rooms.map((room) => (
              <Grid item xs={12} sm={6} md={4} key={room.id}>
                {renderRoomCard(room)}
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Button 
              variant="text" 
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{ fontSize: '1rem', color: '#8B4513' }}
            >
              Load More Rooms
            </Button>
          </Box>
        </>
      )}
    </Container>
  );

  const renderBookings = () => (
    <Container maxWidth="lg">
      <Box mb={4}>
        <Typography variant="h3" fontWeight="700" gutterBottom sx={{ fontSize: '2.5rem', color: '#2C1810' }}>
          My Bookings
        </Typography>
        <Typography variant="h5" sx={{ color: '#8B4513', fontSize: '1.5rem' }}>
          Manage your upcoming reservations
        </Typography>
      </Box>
      
      {myBookingsLoading ? (
        <Box textAlign="center" py={8}>
          <CircularProgress size={70} sx={{ color: '#D4AF37' }} />
        </Box>
      ) : myBookings.length === 0 ? (
        <Paper sx={{ 
          p: 8, 
          textAlign: "center", 
          borderRadius: 3,
          backgroundColor: '#FFFEF7',
          border: '2px solid #EEE9E1',
        }}>
          <BookmarkIcon sx={{ fontSize: 70, color: '#D4AF37', mb: 3, opacity: 0.5 }} />
          <Typography variant="h4" gutterBottom sx={{ color: '#8B4513', fontSize: '2rem' }}>
            No Active Bookings
          </Typography>
          <Typography variant="body1" sx={{ color: '#5D4037', mb: 4, fontSize: '1rem' }}>
            You haven't made any bookings yet. Start exploring our luxurious rooms and make your first reservation.
          </Typography>
          <LuxuryButton onClick={() => setSelectedItem("browse")} startIcon={<KingBed />} sx={{ height: 50 }}>
            Browse Rooms
          </LuxuryButton>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {myBookings.map((booking) => (
            <Grid item xs={12} key={booking.id}>
              <LuxuryCard>
                <CardContent sx={{ p: 4 }}>
                  <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={3}>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: '#8B4513', mb: 1, fontWeight: 600 }}>
                          ROOM NUMBER
                        </Typography>
                        <Typography variant="h3" fontWeight="700" color="primary" sx={{ fontSize: '2rem' }}>
                          {booking.room?.roomNumber || "LUX-001"}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#5D4037', mt: 1 }}>
                          {booking.room?.roomType || "Luxury Suite"}
                        </Typography>
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={3}>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: '#8B4513', mb: 1, fontWeight: 600 }}>
                          STAY DATES
                        </Typography>
                        <Typography variant="body1" fontWeight="600" sx={{ fontSize: '1rem', color: '#2C1810' }}>
                          {formatDate(booking.checkInDate)} → {formatDate(booking.checkOutDate)}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#5D4037', mt: 1 }}>
                          {Math.ceil((new Date(booking.checkOutDate) - new Date(booking.checkInDate)) / (1000 * 60 * 60 * 24))} nights
                        </Typography>
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={2}>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: '#8B4513', mb: 1, fontWeight: 600 }}>
                          GUESTS
                        </Typography>
                        <Typography variant="body1" fontWeight="600" sx={{ fontSize: '1rem', color: '#2C1810' }}>
                          {booking.numOfAdults}A, {booking.numOfChildren}C
                        </Typography>
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={2}>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: '#8B4513', mb: 1, fontWeight: 600 }}>
                          STATUS
                        </Typography>
                        <Chip 
                          label="CONFIRMED" 
                          color="success"
                          sx={{ fontWeight: 600, height: 28 }}
                          size="small"
                        />
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={2}>
                      <Box display="flex" gap={2} flexDirection="column">
                        <Button
                          variant="outlined"
                          color="error"
                          startIcon={<CancelIcon />}
                          onClick={() => {
                            setCancelId(booking.id);
                            setCancelDialogOpen(true);
                          }}
                          size="small"
                          sx={{ height: 40 }}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="contained"
                          color="tertiary"
                          startIcon={<ReceiptIcon />}
                          size="small"
                          sx={{ height: 40 }}
                        >
                          Invoice
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                  
                  <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid #EEE9E1' }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="body2" sx={{ color: '#8B4513', fontWeight: 600 }}>Confirmation Code</Typography>
                        <Typography variant="body1" fontWeight="600" sx={{ fontSize: '1rem', color: '#2C1810' }}>{booking.bookingConfirmationCode}</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="body2" sx={{ color: '#8B4513', fontWeight: 600 }}>Total Amount</Typography>
                        <Typography variant="body1" fontWeight="600" sx={{ fontSize: '1rem', color: '#2C1810' }}>
                          ${parseFloat(booking.room?.roomPrice || 0) * booking.numOfAdults}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="body2" sx={{ color: '#8B4513', fontWeight: 600 }}>Contact Phone</Typography>
                        <Typography variant="body1" fontWeight="600" sx={{ fontSize: '1rem', color: '#2C1810' }}>{booking.phoneNumber}</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="body2" sx={{ color: '#8B4513', fontWeight: 600 }}>Room Features</Typography>
                        <Typography variant="body1" fontWeight="600" sx={{ fontSize: '1rem', color: '#2C1810' }}>{booking.room?.acType || "Air Condition"}</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </LuxuryCard>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );

  const renderProfile = () => (
    <Container maxWidth="lg">
      {profileLoading ? (
        <Box textAlign="center" py={10}>
          <CircularProgress size={70} sx={{ color: '#D4AF37' }} />
        </Box>
      ) : (
        <>
          <Box mb={4}>
            <Typography variant="h3" fontWeight="700" gutterBottom sx={{ fontSize: '2.5rem', color: '#2C1810' }}>
              My Profile
            </Typography>
            <Typography variant="h5" sx={{ color: '#8B4513', fontSize: '1.5rem' }}>
              Manage your personal information and preferences
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {/* Profile Card */}
            <Grid item xs={12} md={4}>
              <ProfileCard>
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                  <AvatarRing
                    sx={{
                      width: 140,
                      height: 140,
                      bgcolor: 'primary.light',
                      color: '#2C1810',
                      fontSize: '3rem',
                      fontWeight: 'bold',
                      mb: 4,
                    }}
                  >
                    {userProfile?.name?.charAt(0) || 'U'}
                  </AvatarRing>
                  
                  <Typography variant="h4" fontWeight="700" gutterBottom sx={{ fontSize: '1.75rem', color: '#2C1810' }}>
                    {userProfile?.name || "User Name"}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ color: '#8B4513', mb: 2, fontSize: '1rem' }}>
                    {userProfile?.email || "user@example.com"}
                  </Typography>
                  
                  <Chip
                    icon={<VerifiedIcon />}
                    label="GOLD MEMBER"
                    color="primary"
                    sx={{ 
                      fontWeight: 700, 
                      fontSize: '0.75rem',
                      px: 2.5,
                      py: 1,
                      mb: 3,
                      backgroundColor: '#D4AF37',
                      color: '#2C1810',
                    }}
                  />
                  
                  <Box display="flex" gap={2} sx={{ width: '100%' }}>
                    <LuxuryButton fullWidth startIcon={<EditIcon />} size="small" sx={{ height: 44 }}>
                      Edit Profile
                    </LuxuryButton>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{ borderColor: '#8B4513', color: '#8B4513', height: 44 }}
                      size="small"
                    >
                      Change Photo
                    </Button>
                  </Box>
                </Box>
              </ProfileCard>
              
              {/* Membership Card */}
              <Paper 
                sx={{ 
                  p: 3.5, 
                  mt: 4, 
                  background: 'linear-gradient(135deg, #1A1A1A 0%, #2C1810 100%)', 
                  color: 'white',
                  borderRadius: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                }}
              >
                <Box sx={{ position: 'absolute', top: 20, right: 20 }}>
                  <DiamondIcon sx={{ fontSize: 40, color: '#D4AF37', opacity: 0.3 }} />
                </Box>
                <Typography variant="subtitle2" sx={{ color: '#D4AF37', mb: 1, letterSpacing: 1 }}>
                  GOLDEN BROWN HAVEN
                </Typography>
                <Typography variant="h5" fontWeight="700" gutterBottom sx={{ fontSize: '1.5rem' }}>
                  PREMIUM MEMBERSHIP
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2.5, fontSize: '0.875rem' }}>
                  {userProfile?.name?.toUpperCase() || "USER NAME"}
                </Typography>
                <Typography variant="h4" fontWeight="700" sx={{ mb: 1, fontSize: '1.75rem' }}>
                  •••• •••• •••• 1234
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  Valid Thru 12/25
                </Typography>
              </Paper>
            </Grid>
            
            {/* Profile Details */}
            <Grid item xs={12} md={8}>
              <ProfileCard>
                <Typography variant="h5" fontWeight="600" gutterBottom sx={{ mb: 4, fontSize: '1.5rem', color: '#2C1810' }}>
                  Personal Information
                </Typography>
                
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      value={userProfile?.name || ""}
                      size="small"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          backgroundColor: '#FFFEF7',
                        }
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountIcon sx={{ color: '#8B4513', fontSize: 22 }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      value={userProfile?.email || ""}
                      size="small"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          backgroundColor: '#FFFEF7',
                        }
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon sx={{ color: '#8B4513', fontSize: 22 }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      value={userProfile?.phone || "+1 (555) 123-4567"}
                      size="small"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          backgroundColor: '#FFFEF7',
                        }
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon sx={{ color: '#8B4513', fontSize: 22 }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Date of Birth"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          backgroundColor: '#FFFEF7',
                        }
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CakeIcon sx={{ color: '#8B4513', fontSize: 22 }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Address"
                      multiline
                      rows={3}
                      placeholder="Enter your complete address"
                      size="small"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          backgroundColor: '#FFFEF7',
                        }
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationIcon sx={{ color: '#8B4513', fontSize: 22 }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth size="small">
                      <InputLabel sx={{ color: '#8B4513' }}>Country</InputLabel>
                      <Select
                        label="Country"
                        defaultValue="US"
                        sx={{
                          borderRadius: 2,
                          backgroundColor: '#FFFEF7',
                        }}
                        startAdornment={
                          <InputAdornment position="start">
                            <FlagIcon sx={{ color: '#8B4513', mr: 1, fontSize: 22 }} />
                          </InputAdornment>
                        }
                      >
                        <MenuItem value="US">United States</MenuItem>
                        <MenuItem value="UK">United Kingdom</MenuItem>
                        <MenuItem value="CA">Canada</MenuItem>
                        <MenuItem value="AU">Australia</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth size="small">
                      <InputLabel sx={{ color: '#8B4513' }}>Language</InputLabel>
                      <Select
                        label="Language"
                        defaultValue="en"
                        sx={{
                          borderRadius: 2,
                          backgroundColor: '#FFFEF7',
                        }}
                        startAdornment={
                          <InputAdornment position="start">
                            <LanguageIcon2 sx={{ color: '#8B4513', mr: 1, fontSize: 22 }} />
                          </InputAdornment>
                        }
                      >
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="es">Spanish</MenuItem>
                        <MenuItem value="fr">French</MenuItem>
                        <MenuItem value="de">German</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                
                <Box display="flex" justifyContent="flex-end" gap={2} sx={{ mt: 5 }}>
                  <Button 
                    variant="outlined" 
                    sx={{ borderColor: '#8B4513', color: '#8B4513', height: 44 }}
                    size="small"
                  >
                    Cancel
                  </Button>
                  <LuxuryButton size="small" sx={{ height: 44 }}>
                    Save Changes
                  </LuxuryButton>
                </Box>
              </ProfileCard>
              
              {/* Stats Grid */}
              <Grid container spacing={3} sx={{ mt: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    backgroundColor: '#FFFEF7',
                    border: '1px solid #EEE9E1',
                    borderRadius: 3,
                  }}>
                    <Typography variant="h3" fontWeight="700" color="primary" gutterBottom sx={{ fontSize: '2rem' }}>
                      {myBookings.length}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#8B4513' }}>
                      Total Bookings
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    backgroundColor: '#FFFEF7',
                    border: '1px solid #EEE9E1',
                    borderRadius: 3,
                  }}>
                    <Typography variant="h3" fontWeight="700" color="primary" gutterBottom sx={{ fontSize: '2rem' }}>
                      {favorites.length}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#8B4513' }}>
                      Favorites
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    backgroundColor: '#FFFEF7',
                    border: '1px solid #EEE9E1',
                    borderRadius: 3,
                  }}>
                    <Typography variant="h3" fontWeight="700" color="primary" gutterBottom sx={{ fontSize: '2rem' }}>
                      2
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#8B4513' }}>
                      Active Stays
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    backgroundColor: '#FFFEF7',
                    border: '1px solid #EEE9E1',
                    borderRadius: 3,
                  }}>
                    <Typography variant="h3" fontWeight="700" color="primary" gutterBottom sx={{ fontSize: '2rem' }}>
                      2023
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#8B4513' }}>
                      Member Since
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );

  const renderFavorites = () => (
    <Container maxWidth="lg">
      <Box mb={4}>
        <Typography variant="h3" fontWeight="700" gutterBottom sx={{ fontSize: '2.5rem', color: '#2C1810' }}>
          Favorite Rooms
        </Typography>
        <Typography variant="h5" sx={{ color: '#8B4513', fontSize: '1.5rem' }}>
          Your saved rooms for quick booking
        </Typography>
      </Box>
      
      {favorites.length === 0 ? (
        <Paper sx={{ 
          p: 8, 
          textAlign: "center", 
          borderRadius: 3,
          backgroundColor: '#FFFEF7',
          border: '2px solid #EEE9E1',
        }}>
          <FavoriteIcon sx={{ fontSize: 70, color: '#D4AF37', mb: 3, opacity: 0.5 }} />
          <Typography variant="h4" gutterBottom sx={{ color: '#8B4513', fontSize: '2rem' }}>
            No Favorites Yet
          </Typography>
          <Typography variant="body1" sx={{ color: '#5D4037', mb: 4, fontSize: '1rem' }}>
            Click the heart icon on any room to add it to your favorites for quick access.
          </Typography>
          <LuxuryButton onClick={() => setSelectedItem("browse")} sx={{ height: 50 }}>
            Browse Rooms
          </LuxuryButton>
        </Paper>
      ) : (
        <Grid container spacing={4}>
          {rooms.filter(room => favorites.includes(room.id)).map((room) => (
            <Grid item xs={12} sm={6} md={4} key={room.id}>
              {renderRoomCard(room)}
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );

  const renderSettings = () => (
    <Container maxWidth="lg">
      <Box mb={4}>
        <Typography variant="h3" fontWeight="700" gutterBottom sx={{ fontSize: '2.5rem', color: '#2C1810' }}>
          Settings
        </Typography>
       <Typography variant="h5" sx={{ color: '#8B4513', fontSize: '1.5rem' }}>
  Customize your experience and preferences
</Typography>
      </Box>
      
      <Grid container spacing={4}>
        {/* Account Settings */}
        <Grid item xs={12} md={8}>
          <ProfileCard>
            <Typography variant="h5" fontWeight="600" gutterBottom sx={{ mb: 4, fontSize: '1.5rem', color: '#2C1810' }}>
              Account Settings
            </Typography>
            
            <Box sx={{ '& > *': { py: 3, borderBottom: '1px solid #EEE9E1' } }}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="subtitle1" fontWeight="500" sx={{ fontSize: '1rem', color: '#2C1810' }}>
                    Email Notifications
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#5D4037' }}>
                    Receive booking confirmations and updates
                  </Typography>
                </Box>
                <Switch 
                  checked={settings.emailNotifications} 
                  onChange={(e) => setSettings({...settings, emailNotifications: e.target.checked})}
                  color="primary"
                  size="small"
                />
              </Box>
              
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="subtitle1" fontWeight="500" sx={{ fontSize: '1rem', color: '#2C1810' }}>
                    Push Notifications
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#5D4037' }}>
                    Get instant updates on your device
                  </Typography>
                </Box>
                <Switch 
                  checked={settings.notifications} 
                  onChange={(e) => setSettings({...settings, notifications: e.target.checked})}
                  color="primary"
                  size="small"
                />
              </Box>
              
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="subtitle1" fontWeight="500" sx={{ fontSize: '1rem', color: '#2C1810' }}>
                    Auto-confirm Bookings
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#5D4037' }}>
                    Skip confirmation for instant booking
                  </Typography>
                </Box>
                <Switch 
                  checked={settings.autoConfirm} 
                  onChange={(e) => setSettings({...settings, autoConfirm: e.target.checked})}
                  color="primary"
                  size="small"
                />
              </Box>
              
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="subtitle1" fontWeight="500" sx={{ fontSize: '1rem', color: '#2C1810' }}>
                    Two-Factor Authentication
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#5D4037' }}>
                    Add extra security to your account
                  </Typography>
                </Box>
                <Switch color="primary" size="small" />
              </Box>
            </Box>
          </ProfileCard>
        </Grid>
        
        {/* Preferences */}
        <Grid item xs={12} md={4}>
          <ProfileCard>
            <Typography variant="h5" fontWeight="600" gutterBottom sx={{ mb: 4, fontSize: '1.5rem', color: '#2C1810' }}>
              Preferences
            </Typography>
            
            <FormControl fullWidth sx={{ mb: 3 }} size="small">
              <InputLabel sx={{ color: '#8B4513' }}>Language</InputLabel>
              <Select
                value={settings.language}
                label="Language"
                onChange={(e) => setSettings({...settings, language: e.target.value})}
                sx={{
                  borderRadius: 2,
                  backgroundColor: '#FFFEF7',
                }}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="es">Spanish</MenuItem>
                <MenuItem value="fr">French</MenuItem>
                <MenuItem value="de">German</MenuItem>
              </Select>
            </FormControl>
            
            <FormControl fullWidth sx={{ mb: 3 }} size="small">
              <InputLabel sx={{ color: '#8B4513' }}>Currency</InputLabel>
              <Select
                value={settings.currency}
                label="Currency"
                onChange={(e) => setSettings({...settings, currency: e.target.value})}
                sx={{
                  borderRadius: 2,
                  backgroundColor: '#FFFEF7',
                }}
              >
                <MenuItem value="USD">USD ($)</MenuItem>
                <MenuItem value="EUR">EUR (€)</MenuItem>
                <MenuItem value="GBP">GBP (£)</MenuItem>
                <MenuItem value="JPY">JPY (¥)</MenuItem>
              </Select>
            </FormControl>
            
            <FormControl fullWidth size="small">
              <InputLabel sx={{ color: '#8B4513' }}>Theme Color</InputLabel>
              <Select
                value={settings.theme}
                label="Theme Color"
                onChange={(e) => setSettings({...settings, theme: e.target.value})}
                sx={{
                  borderRadius: 2,
                  backgroundColor: '#FFFEF7',
                }}
              >
                <MenuItem value="gold">Gold Theme</MenuItem>
                <MenuItem value="brown">Brown Theme</MenuItem>
                <MenuItem value="blue">Blue Theme</MenuItem>
                <MenuItem value="dark">Dark Theme</MenuItem>
              </Select>
            </FormControl>
          </ProfileCard>
        </Grid>
      </Grid>
    </Container>
  );

  const renderHistory = () => (
    <Container maxWidth="lg">
      <Box mb={4}>
        <Typography variant="h3" fontWeight="700" gutterBottom sx={{ fontSize: '2.5rem', color: '#2C1810' }}>
          Booking History
        </Typography>
        <Typography variant="h5" sx={{ color: '#8B4513', fontSize: '1.5rem' }}>
          View your complete booking history
        </Typography>
      </Box>
      
      {historyLoading ? (
        <Box textAlign="center" py={8}>
          <CircularProgress size={70} sx={{ color: '#D4AF37' }} />
        </Box>
      ) : bookingHistory.length === 0 ? (
        <Paper sx={{ 
          p: 8, 
          textAlign: "center", 
          borderRadius: 3,
          backgroundColor: '#FFFEF7',
          border: '2px solid #EEE9E1',
        }}>
          <HistoryIcon sx={{ fontSize: 70, color: '#D4AF37', mb: 3, opacity: 0.5 }} />
          <Typography variant="h4" gutterBottom sx={{ color: '#8B4513', fontSize: '2rem' }}>
            No History Yet
          </Typography>
          <Typography variant="body1" sx={{ color: '#5D4037', mb: 4, fontSize: '1rem' }}>
            Your booking history will appear here after you complete stays.
          </Typography>
          <LuxuryButton onClick={() => setSelectedItem("browse")} sx={{ height: 50 }}>
            Browse Rooms
          </LuxuryButton>
        </Paper>
      ) : (
        <Box>
          <Tabs 
            value={0} 
            sx={{ 
              mb: 4, 
              borderBottom: 1, 
              borderColor: 'divider',
              '& .MuiTab-root': {
                color: '#5D4037',
                '&.Mui-selected': {
                  color: '#8B4513',
                  fontWeight: 600,
                }
              }
            }}
          >
            <Tab label="All History" />
            <Tab label="Completed" />
            <Tab label="Cancelled" />
            <Tab label="Refunded" />
          </Tabs>
          
          <Grid container spacing={3}>
            {bookingHistory.map((booking) => (
              <Grid item xs={12} key={booking.id}>
                <LuxuryCard>
                  <CardContent sx={{ p: 3 }}>
                    <Grid container spacing={3} alignItems="center">
                      <Grid item xs={12} md={3}>
                        <Typography variant="h6" fontWeight="600" sx={{ fontSize: '1.25rem', color: '#2C1810' }}>
                          {booking.room?.roomNumber || "Room"}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#8B4513' }}>
                          {formatDate(booking.checkOutDate)}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography variant="body2" sx={{ color: '#5D4037' }}>
                          Stayed for {Math.ceil((new Date(booking.checkOutDate) - new Date(booking.checkInDate)) / (1000 * 60 * 60 * 24))} nights
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography variant="body1" fontWeight="600" sx={{ fontSize: '1.1rem', color: '#2C1810' }}>
                          ${parseFloat(booking.room?.roomPrice || 0) * booking.numOfAdults}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Chip label="Completed" color="success" size="small" sx={{ fontWeight: 600 }} />
                      </Grid>
                    </Grid>
                  </CardContent>
                </LuxuryCard>
              </Grid>
            ))}
          </Grid>
          
          {bookingHistory.length > 5 && (
            <Box textAlign="center" sx={{ mt: 4 }}>
              <Button variant="text" color="primary" sx={{ fontSize: '1rem', color: '#8B4513' }}>
                Load More History
              </Button>
            </Box>
          )}
        </Box>
      )}
    </Container>
  );

  const renderPayments = () => (
    <Container maxWidth="lg">
      <Box mb={4}>
        <Typography variant="h3" fontWeight="700" gutterBottom sx={{ fontSize: '2.5rem', color: '#2C1810' }}>
          Payment Methods
        </Typography>
        <Typography variant="h5" sx={{ color: '#8B4513', fontSize: '1.5rem' }}>
          Manage your payment options and billing
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <ProfileCard>
            <Typography variant="h5" fontWeight="600" gutterBottom sx={{ mb: 4, fontSize: '1.5rem', color: '#2C1810' }}>
              Saved Cards
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper sx={{ 
                  p: 3, 
                  backgroundColor: '#1A1A1A', 
                  color: 'white', 
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #2C1810 0%, #1A1A1A 100%)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                }}>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#D4AF37', mb: 1, fontWeight: 600 }}>
                        PRIMARY CARD
                      </Typography>
                      <Typography variant="h4" fontWeight="700" sx={{ letterSpacing: 1, fontSize: '1.5rem' }}>
                        •••• •••• •••• 1234
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mt: 1 }}>
                        Expires 12/25 • John Doe
                      </Typography>
                    </Box>
                    <CreditCardIcon sx={{ fontSize: 48, color: '#D4AF37' }} />
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Paper sx={{ 
                  p: 3, 
                  border: '2px solid #EEE9E1', 
                  borderRadius: 3,
                  backgroundColor: '#FFFEF7',
                }}>
                  <Typography variant="subtitle1" fontWeight="600" gutterBottom sx={{ fontSize: '0.875rem', color: '#2C1810' }}>
                    Add New Card
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#5D4037', mb: 2.5, fontSize: '0.875rem' }}>
                    Add a new payment method
                  </Typography>
                  <Button 
                    fullWidth 
                    variant="outlined" 
                    startIcon={<AddIcon />}
                    sx={{ 
                      borderColor: '#8B4513', 
                      color: '#8B4513', 
                      height: 44,
                      '&:hover': {
                        borderColor: '#654321',
                        backgroundColor: 'rgba(139, 69, 19, 0.04)',
                      }
                    }}
                    size="small"
                  >
                    Add Card
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </ProfileCard>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <ProfileCard sx={{ height: '100%' }}>
            <Typography variant="h5" fontWeight="600" gutterBottom sx={{ mb: 4, fontSize: '1.5rem', color: '#2C1810' }}>
              Billing Summary
            </Typography>
            
            <Box>
              <Box display="flex" justifyContent="space-between" sx={{ mb: 3 }}>
                <Typography variant="body2" sx={{ color: '#5D4037' }}>Total Spent</Typography>
                <Typography variant="h5" fontWeight="700" color="primary" sx={{ fontSize: '1.75rem' }}>$2,450</Typography>
              </Box>
              
              <Box display="flex" justifyContent="space-between" sx={{ mb: 3 }}>
                <Typography variant="body2" sx={{ color: '#5D4037' }}>This Month</Typography>
                <Typography variant="h6" fontWeight="600" sx={{ fontSize: '1.25rem', color: '#2C1810' }}>$450</Typography>
              </Box>
              
              <Box display="flex" justifyContent="space-between" sx={{ mb: 3 }}>
                <Typography variant="body2" sx={{ color: '#5D4037' }}>Last Month</Typography>
                <Typography variant="h6" fontWeight="600" sx={{ fontSize: '1.25rem', color: '#2C1810' }}>$800</Typography>
              </Box>
              
              <Button 
                fullWidth 
                variant="contained" 
                color="tertiary"
                sx={{ mt: 3, height: 44 }}
                size="small"
              >
                View Full Report
              </Button>
            </Box>
          </ProfileCard>
        </Grid>
      </Grid>
    </Container>
  );

  /* ========== MAIN RENDER ========== */
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainContainer>
        <RelaxingOverlay />
        
        {/* Mobile Sidebar Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              width: 280,
              background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF9F7 100%)',
              borderRight: '1px solid #EEE9E1',
              boxShadow: '4px 0 20px rgba(44, 24, 16, 0.06)',
            },
          }}
        >
          <SidebarContent />
        </Drawer>

        {/* Desktop Sidebar - Fixed Position */}
        {!isMobile && (
          <SidebarContainer sx={{ display: { xs: 'none', md: 'flex' } }}>
            <SidebarContent />
          </SidebarContainer>
        )}

        {/* Main Content Area */}
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1,
            width: { xs: '100%', md: 'calc(100% - 280px)' },
            ml: { md: '280px' },
            p: { xs: 3, sm: 4, md: 5 },
            minHeight: '100vh',
            position: 'relative',
            zIndex: 1,
            overflowX: 'hidden',
            backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(212, 175, 55, 0.03) 0%, transparent 25%), radial-gradient(circle at 85% 30%, rgba(139, 69, 19, 0.02) 0%, transparent 25%)',
          }}
        >
          {/* Top App Bar */}
          <AppBar 
            position="static" 
            elevation={0} 
            sx={{ 
              mb: 4, 
              borderRadius: 3,
              backgroundColor: 'white',
              color: 'text.primary',
              border: '1px solid',
              borderColor: 'grey.200',
              position: 'sticky',
              top: 0,
              zIndex: 1100,
            }}
          >
            <Toolbar sx={{ 
              px: { xs: 2, sm: 3 }, 
              py: 2, 
              minHeight: 70,
              justifyContent: 'space-between'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  color="inherit"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    mr: 2, 
                    display: { md: 'none' },
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    '&:hover': { backgroundColor: 'rgba(212, 175, 55, 0.2)' },
                  }}
                >
                  <MenuIcon sx={{ color: '#8B4513' }} />
                </IconButton>
                
                <Typography variant="h5" fontWeight="600" sx={{ fontSize: '1.5rem', color: '#2C1810' }}>
                  {selectedItem.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Typography>
              </Box>
              
              <Box display="flex" alignItems="center" gap={2}>
                <Tooltip title="Notifications">
                  <IconButton 
                    onClick={() => setBellOpen(true)}
                    sx={{ 
                      backgroundColor: confirmationCode ? 'rgba(212, 175, 55, 0.1)' : 'rgba(139, 69, 19, 0.1)',
                      '&:hover': { 
                        backgroundColor: confirmationCode ? 'rgba(212, 175, 55, 0.2)' : 'rgba(139, 69, 19, 0.2)' 
                      },
                    }}
                  >
                    <GoldBadge 
                      badgeContent={confirmationCode ? "!" : 0}
                      color="primary"
                    >
                      <NotificationsIcon sx={{ color: '#8B4513' }} />
                    </GoldBadge>
                  </IconButton>
                </Tooltip>
                
                <Button
                  variant="contained"
                  color="tertiary"
                  startIcon={<LogoutIcon />}
                  sx={{
                    background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #654321 0%, #8B4513 100%)',
                    },
                    fontSize: '0.875rem',
                    height: 44,
                  }}
                  size="small"
                >
                  Logout
                </Button>
              </Box>
            </Toolbar>
          </AppBar>

          {/* Page Content */}
          <Box sx={{ maxWidth: '100%', overflow: 'hidden' }}>
            {renderContent()}
          </Box>
        </Box>

        {/* Floating Action Button */}
        <FloatingActionButton
          color="primary"
          aria-label="book now"
          onClick={() => setSelectedItem("browse")}
        >
          <KingBed sx={{ fontSize: 28 }} />
        </FloatingActionButton>

        {/* Booking Modal */}
        <Modal open={openModal} onClose={() => !bookingLoading && setOpenModal(false)}>
          <Box 
            sx={{ 
              width: { xs: "95%", sm: 750 },
              maxWidth: "95%",
              bgcolor: "background.paper",
              p: { xs: 4, sm: 5 },
              mx: "auto",
              my: "5vh",
              borderRadius: 3,
              outline: "none",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: 24,
              border: '3px solid #D4AF37',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: 'linear-gradient(90deg, #D4AF37 0%, #8B4513 100%)',
              },
            }}
          >
            <Typography variant="h4" fontWeight="700" mb={4} color="tertiary.main" sx={{ fontSize: '1.75rem' }}>
              Book {selectedRoom?.roomNumber || "Luxury Room"}
            </Typography>
            
            <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Box sx={{ mt: 3 }}>
              {activeStep === 0 && (
                <>
                  <Alert severity="info" sx={{ mb: 4, borderRadius: 2, backgroundColor: '#E3F2FD', color: '#1565C0' }}>
                    Select your preferred stay dates
                  </Alert>
                  
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField 
                        fullWidth 
                        type="date" 
                        label="Check In Date" 
                        value={bookingData.checkInDate}
                        onChange={(e) => setBookingData({...bookingData, checkInDate: e.target.value})}
                        InputLabelProps={{ shrink: true }}
                        size="small"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            backgroundColor: '#FFFEF7',
                          }
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CalendarToday sx={{ color: '#8B4513' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField 
                        fullWidth 
                        type="date" 
                        label="Check Out Date" 
                        value={bookingData.checkOutDate}
                        onChange={(e) => setBookingData({...bookingData, checkOutDate: e.target.value})}
                        InputLabelProps={{ shrink: true }}
                        size="small"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            backgroundColor: '#FFFEF7',
                          }
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CalendarToday sx={{ color: '#8B4513' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                </>
              )}

              {activeStep === 1 && (
                <>
                  <Alert severity="info" sx={{ mb: 4, borderRadius: 2, backgroundColor: '#E3F2FD', color: '#1565C0' }}>
                    Enter guest details for a personalized experience
                  </Alert>
                  
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField 
                        fullWidth 
                        label="Number of Adults" 
                        type="number" 
                        value={bookingData.numOfAdults}
                        onChange={(e) => setBookingData({...bookingData, numOfAdults: Math.max(1, parseInt(e.target.value) || 1)})}
                        size="small"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            backgroundColor: '#FFFEF7',
                          }
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PeopleIcon sx={{ color: '#8B4513' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField 
                        fullWidth 
                        label="Number of Children" 
                        type="number" 
                        value={bookingData.numOfChildren}
                        onChange={(e) => setBookingData({...bookingData, numOfChildren: Math.max(0, parseInt(e.target.value) || 0)})}
                        size="small"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            backgroundColor: '#FFFEF7',
                          }
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <ChildCareIcon sx={{ color: '#8B4513' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField 
                        fullWidth 
                        label="Contact Phone Number" 
                        value={bookingData.phoneNumber}
                        onChange={(e) => setBookingData({...bookingData, phoneNumber: e.target.value})}
                        placeholder="Enter 10-digit phone number"
                        size="small"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            backgroundColor: '#FFFEF7',
                          }
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PhoneIcon sx={{ color: '#8B4513' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                </>
              )}

              {activeStep === 2 && (
                <>
                  <Alert severity="info" sx={{ mb: 4, borderRadius: 2, backgroundColor: '#E3F2FD', color: '#1565C0' }}>
                    Review and confirm your booking details
                  </Alert>
                  
                  <Paper sx={{ p: 4, mb: 4, bgcolor: '#FFFEF7', borderRadius: 2, border: '1px solid #EEE9E1' }}>
                    <Typography variant="h6" fontWeight="600" gutterBottom sx={{ mb: 3, fontSize: '1.25rem', color: '#2C1810' }}>
                      📋 Booking Summary
                    </Typography>
                    
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, mb: 2, border: '1px solid #EEE9E1' }}>
                          <Typography variant="caption" sx={{ color: '#8B4513', display: 'block', mb: 1, fontWeight: 600 }}>Room</Typography>
                          <Typography variant="body1" fontWeight="600" sx={{ fontSize: '1rem', color: '#2C1810' }}>{selectedRoom?.roomNumber}</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, mb: 2, border: '1px solid #EEE9E1' }}>
                          <Typography variant="caption" sx={{ color: '#8B4513', display: 'block', mb: 1, fontWeight: 600 }}>Type</Typography>
                          <Typography variant="body1" fontWeight="600" sx={{ fontSize: '1rem', color: '#2C1810' }}>{selectedRoom?.roomType}</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, mb: 2, border: '1px solid #EEE9E1' }}>
                          <Typography variant="caption" sx={{ color: '#8B4513', display: 'block', mb: 1, fontWeight: 600 }}>Check-in</Typography>
                          <Typography variant="body1" fontWeight="600" sx={{ fontSize: '1rem', color: '#2C1810' }}>{formatDate(bookingData.checkInDate)}</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, mb: 2, border: '1px solid #EEE9E1' }}>
                          <Typography variant="caption" sx={{ color: '#8B4513', display: 'block', mb: 1, fontWeight: 600 }}>Check-out</Typography>
                          <Typography variant="body1" fontWeight="600" sx={{ fontSize: '1rem', color: '#2C1810' }}>{formatDate(bookingData.checkOutDate)}</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ p: 3, bgcolor: 'white', borderRadius: 2, mt: 2, border: '2px solid #D4AF37' }}>
                          <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant="h5" fontWeight="700" sx={{ fontSize: '1.5rem', color: '#2C1810' }}>Total Amount</Typography>
                            <Typography variant="h4" fontWeight="700" color="primary" sx={{ fontSize: '1.75rem' }}>
                              ${calculateTotalPrice().toFixed(2)}
                            </Typography>
                          </Box>
                          <Typography variant="caption" sx={{ color: '#8B4513', display: 'block', mt: 1 }}>
                            Includes all taxes and fees
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                </>
              )}

              {bookingError && (
                <Alert severity="error" sx={{ mt: 4, borderRadius: 2, backgroundColor: '#FFEBEE', color: '#C62828' }} onClose={() => setBookingError("")}>
                  {bookingError}
                </Alert>
              )}
              
              {bookingSuccess && (
                <Alert severity="success" sx={{ mt: 4, borderRadius: 2, backgroundColor: '#E8F5E9', color: '#2E7D32' }}>
                  {bookingSuccess.split('\n').map((line, i) => (
                    <Typography key={i} sx={{ display: 'block', color: '#2E7D32' }}>{line}</Typography>
                  ))}
                </Alert>
              )}

              <Box display="flex" justifyContent="space-between" mt={6}>
                <Button 
                  disabled={activeStep === 0 || bookingLoading} 
                  onClick={handleBack}
                  variant="outlined"
                  sx={{ 
                    borderColor: '#8B4513', 
                    color: '#8B4513',
                    px: 4,
                    height: 50,
                    '&:hover': {
                      borderColor: '#654321',
                      backgroundColor: 'rgba(139, 69, 19, 0.04)',
                    }
                  }}
                  size="small"
                >
                  Back
                </Button>
                
                {activeStep === steps.length - 1 ? (
                  <LuxuryButton 
                    onClick={handleBookingSubmit} 
                    disabled={bookingLoading}
                    sx={{ minWidth: 180, px: 4, height: 50 }}
                  >
                    {bookingLoading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "✅ Confirm & Book"
                    )}
                  </LuxuryButton>
                ) : (
                  <LuxuryButton onClick={handleNext} sx={{ px: 4, height: 50 }}>
                    Continue
                  </LuxuryButton>
                )}
              </Box>
            </Box>
          </Box>
        </Modal>

        {/* Cancel Booking Dialog */}
        <Dialog 
          open={cancelDialogOpen} 
          onClose={() => setCancelDialogOpen(false)}
          maxWidth="sm"
          fullWidth
          PaperProps={{ 
            sx: { 
              borderRadius: 3,
              border: '2px solid #D4AF37',
              backgroundColor: '#FFFEF7',
            }
          }}
        >
          <DialogTitle sx={{ color: 'tertiary.main', fontSize: '1.5rem', fontWeight: 600 }}>
            Cancel Booking
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom sx={{ fontSize: '1rem', color: '#5D4037', mb: 2 }}>
              Are you sure you want to cancel this booking?
            </Typography>
            <Typography variant="body2" sx={{ color: '#5D4037', mt: 3, fontSize: '0.875rem' }}>
              Cancellation fees may apply depending on the timing of cancellation. 
              This action cannot be undone.
            </Typography>
          </DialogContent>
          <DialogActions sx={{ p: 4 }}>
            <Button 
              onClick={() => setCancelDialogOpen(false)}
              disabled={bookingLoading}
              variant="outlined"
              sx={{ 
                borderColor: '#8B4513', 
                color: '#8B4513',
                height: 44,
                '&:hover': {
                  borderColor: '#654321',
                  backgroundColor: 'rgba(139, 69, 19, 0.04)',
                }
              }}
              size="small"
            >
              Keep Booking
            </Button>
            <Button
              onClick={handleCancelBooking}
              disabled={bookingLoading}
              variant="contained"
              color="error"
              sx={{
                background: 'linear-gradient(135deg, #C62828 0%, #EF5350 100%)',
                height: 44,
                '&:hover': {
                  background: 'linear-gradient(135deg, #B71C1C 0%, #C62828 100%)',
                }
              }}
              size="small"
            >
              {bookingLoading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "Cancel Booking"
              )}
            </Button>
          </DialogActions>
        </Dialog>

        {/* Notification Bell Modal */}
        <Modal open={bellOpen} onClose={() => setBellOpen(false)}>
          <Box sx={{ 
            width: { xs: "90%", sm: 500 },
            bgcolor: "background.paper", 
            p: 4, 
            mx: "auto", 
            my: "10vh",
            borderRadius: 3,
            boxShadow: 24,
            border: '2px solid #D4AF37',
            backgroundColor: '#FFFEF7',
          }}>
            <Typography variant="h6" fontWeight="600" mb={3} color="tertiary.main" sx={{ fontSize: '1.5rem' }}>
              🔔 Booking Confirmation
            </Typography>
            
            {confirmationCode ? (
              <Paper sx={{ p: 3, bgcolor: '#FFFEF7', borderRadius: 2, mb: 3, border: '2px solid #2E7D32' }}>
                <Typography variant="subtitle1" fontWeight="600" gutterBottom color="success.main" sx={{ fontSize: '1.1rem' }}>
                  ✅ Booking Confirmed
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ color: '#8B4513', fontWeight: 600 }}>Confirmation Code</Typography>
                  <Typography variant="h5" fontWeight="700" color="primary" sx={{ mt: 1, fontSize: '1.75rem' }}>
                    {confirmationCode}
                  </Typography>
                </Box>
                
                <Alert severity="info" sx={{ borderRadius: 2, backgroundColor: '#E3F2FD', color: '#1565C0' }}>
                  Keep this confirmation code for check-in. Present it at the reception.
                </Alert>
              </Paper>
            ) : (
              <Box textAlign="center" py={3}>
                <NotificationsOffIcon sx={{ fontSize: 60, color: '#D4AF37', mb: 2, opacity: 0.5 }} />
                <Typography variant="body1" sx={{ color: '#8B4513', fontSize: '1rem' }} gutterBottom>
                  No active booking found
                </Typography>
                <Typography variant="body2" sx={{ color: '#5D4037', fontSize: '0.875rem' }}>
                  Book a room to see your confirmation here
                </Typography>
              </Box>
            )}
            
            <Box mt={3} display="flex" justifyContent="flex-end">
              <LuxuryButton onClick={() => setBellOpen(false)} size="small" sx={{ height: 44 }}>
                Close
              </LuxuryButton>
            </Box>
          </Box>
        </Modal>
      </MainContainer>
    </ThemeProvider>
  );
}