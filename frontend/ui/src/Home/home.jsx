import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Grid,
  Stack,
  Card,
  CardContent,
  Chip,
  alpha,
  Fab,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
  Alert,
  Snackbar,
  Modal,
  Fade,
  Backdrop,
  CircularProgress,
  Rating,
  Avatar,
  AvatarGroup,
  Divider,
  useMediaQuery,
  useTheme,
  LinearProgress,
  Tabs,
  Tab,
  Stepper,
  Step,
  StepLabel,
  Badge,
  Tooltip,
  Switch,
  FormControlLabel,
  Slider,
  Menu,
  MenuItem,
  InputBase,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { keyframes } from "@emotion/react";

// Icons - Enhanced set
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import DiamondIcon from "@mui/icons-material/Diamond";
import SpaIcon from "@mui/icons-material/Spa";
import PoolIcon from "@mui/icons-material/Pool";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import KingBedIcon from "@mui/icons-material/KingBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import WifiIcon from "@mui/icons-material/Wifi";
import SecurityIcon from "@mui/icons-material/Security";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleIcon from "@mui/icons-material/People";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ScienceIcon from "@mui/icons-material/Science";
import PsychologyIcon from "@mui/icons-material/Psychology";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CameraIcon from "@mui/icons-material/Camera";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import QrCodeIcon from "@mui/icons-material/QrCode";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import TimelineIcon from "@mui/icons-material/Timeline";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import RadarIcon from "@mui/icons-material/Radar";
import CloudIcon from "@mui/icons-material/Cloud";
import MemoryIcon from "@mui/icons-material/Memory";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import TranslateIcon from "@mui/icons-material/Translate";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import HistoryIcon from "@mui/icons-material/History";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";

// ========== FIXED COLOR PALETTE ==========
const getColors = (isDarkMode) => ({
  // Brown/Gold Elegant Palette - USING SOLID COLORS
  brown: "#8B4513", // Rich Brown
  brownLight: "#A67C52",
  brownDark: "#5D4037",
  gold: "#D4AF37", // Warm Gold
  goldLight: "#E6C87E",
  goldDark: "#B8860B",
  cream: "#FFF8E1", // Cream
  creamDark: "#F5E6D3",
  copper: "#B87333", // Copper
  copperLight: "#D98748",
  copperDark: "#964B00",
  terracotta: "#E2725B", // Terracotta
  terracottaLight: "#F08C7A",
  terracottaDark: "#C45A42",
  
  // Neutrals - SOLID COLORS
  white: "#FFFFFF",
  black: "#1A1818",
  gray: "#8B8680",
  lightGray: "#D3CEC4",
  
  // Accents
  success: "#2E7D32",
  warning: "#ED6C02",
  error: "#D32F2F",
  info: "#0288D1",
  
  // Backgrounds - SOLID COLORS for alpha function
  background: isDarkMode ? "#1A1818" : "#FFF8E1",
  surface: isDarkMode ? "#2D2424" : "#FFFFFF",
  surfaceAlt: isDarkMode ? "#3A3030" : "#FFFCF5",
  
  // Text
  textPrimary: isDarkMode ? "#F5F5F5" : "#3E2723",
  textSecondary: isDarkMode ? "#B0A9A1" : "#5D4037",
});

// Helper function to get gradients (used only for background/background-image)
const getGradients = (isDarkMode) => ({
  brownGold: `linear-gradient(135deg, #8B4513 0%, #D4AF37 100%)`,
  goldCopper: `linear-gradient(135deg, #D4AF37 0%, #B87333 100%)`,
  full: `linear-gradient(135deg, #8B4513 0%, #D4AF37 50%, #E2725B 100%)`,
  card: isDarkMode 
    ? `linear-gradient(145deg, #2D2424 0%, #1A1818 100%)`
    : `linear-gradient(145deg, #FFFFFF 0%, #FFF8E1 100%)`,
  glass: `linear-gradient(135deg, rgba(255, 248, 225, 0.1) 0%, rgba(255, 248, 225, 0.05) 100%)`,
});

// ========== ENHANCED ANIMATIONS ==========
const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const wave = keyframes`
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
`;

// ========== ENHANCED COMPONENTS ==========

// 1. Enhanced Card Component
const EnhancedCard = ({ children, hover = true, intensity = 15, glow = false }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const cardRef = useRef();
  
  const mouseX = useSpring(0, { stiffness: 500, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 30 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [-intensity, intensity]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-intensity, intensity]);
  const scale = useTransform(mouseX, [-0.5, 0.5], [1, 1.03]);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current || !hover) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
    setMouse({ x, y });
  }, [hover]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        rotateX: hover ? rotateX : 0,
        rotateY: hover ? rotateY : 0,
        scale: hover ? scale : 1,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      whileHover={hover ? { y: -8 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Box sx={{
        position: "relative",
        "&::before": glow ? {
          content: '""',
          position: "absolute",
          inset: -2,
          background: `radial-gradient(
            circle at ${mouse.x * 100 + 50}% ${mouse.y * 100 + 50}%,
            rgba(212, 175, 55, 0.2),
            rgba(139, 69, 19, 0.1),
            transparent 70%
          )`,
          filter: "blur(10px)",
          zIndex: -1,
          borderRadius: "inherit",
        } : {},
      }}>
        {children}
      </Box>
    </motion.div>
  );
};

// 2. Enhanced Button Component
const EnhancedButton = ({ children, variant = "gradient", size = "medium", ...props }) => {
  const colors = getColors(false);
  const gradients = getGradients(false);
  
  const variants = {
    gradient: {
      background: gradients.brownGold,
      color: colors.white,
      boxShadow: `0 10px 30px ${alpha(colors.brown, 0.3)}`,
      "&:hover": {
        background: gradients.goldCopper,
        boxShadow: `0 15px 40px ${alpha(colors.copper, 0.4)}`,
        transform: "translateY(-2px)",
      },
    },
    outline: {
      background: "transparent",
      color: colors.brown,
      border: `2px solid ${alpha(colors.brown, 0.3)}`,
      "&:hover": {
        background: alpha(colors.brown, 0.1),
        borderColor: colors.brown,
      },
    },
    gold: {
      background: colors.gold,
      color: colors.black,
      boxShadow: `0 10px 30px ${alpha(colors.gold, 0.3)}`,
      "&:hover": {
        background: colors.goldLight,
        boxShadow: `0 15px 40px ${alpha(colors.gold, 0.4)}`,
      },
    },
  };

  const sizes = {
    small: { px: 3, py: 1, fontSize: "0.875rem" },
    medium: { px: 4, py: 1.5, fontSize: "1rem" },
    large: { px: 6, py: 2, fontSize: "1.125rem" },
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button
        sx={{
          borderRadius: "12px",
          fontWeight: 700,
          textTransform: "none",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s ease",
          ...variants[variant],
          ...sizes[size],
          ...props.sx,
        }}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};

// 3. Enhanced Stats Component
const EnhancedStat = ({ icon, value, label, trend, color, colors }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5 }}
  >
    <EnhancedCard hover={true} intensity={10} glow={true}>
      <Card sx={{
        p: 3,
        borderRadius: "20px",
        background: colors.surface,
        border: `1px solid ${alpha(color, 0.2)}`,
        boxShadow: `0 20px 40px ${alpha(color, 0.1)}`,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Trend Badge */}
        {trend && (
          <Box sx={{
            position: "absolute",
            top: 12,
            right: 12,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            color: trend > 0 ? colors.success : colors.error,
            fontSize: "0.75rem",
            fontWeight: 600,
          }}>
            {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}%
          </Box>
        )}
        
        <Box sx={{
          width: 70,
          height: 70,
          borderRadius: "18px",
          background: alpha(color, 0.1),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          mb: 2,
          animation: `${float} 3s infinite ease-in-out`,
        }}>
          <Box sx={{ 
            color: color, 
            fontSize: 32,
            animation: `${pulse} 2s infinite`,
          }}>
            {icon}
          </Box>
        </Box>
        <Typography variant="h3" sx={{
          color: color,
          fontWeight: 900,
          fontSize: "3.2rem",
          lineHeight: 1,
          mb: 0.5,
          textShadow: `0 2px 10px ${alpha(color, 0.2)}`,
        }}>
          {value}
        </Typography>
        <Typography sx={{
          color: colors.textSecondary,
          fontSize: "0.9rem",
          fontWeight: 600,
          letterSpacing: "1px",
        }}>
          {label}
        </Typography>
      </Card>
    </EnhancedCard>
  </motion.div>
);

// 4. Enhanced Room Card
const EnhancedRoomCard = ({ room, colors, index }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <EnhancedCard hover={true} intensity={12} glow={true}>
        <Card sx={{
          borderRadius: "24px",
          background: colors.surface,
          border: `1px solid ${alpha(colors.brown, 0.15)}`,
          boxShadow: `0 25px 50px ${alpha(colors.brown, 0.08)}`,
          overflow: "hidden",
          height: "100%",
          position: "relative",
        }}>
          {/* Image Section */}
          <Box sx={{ position: "relative", height: 300 }}>
            <Box
              component="img"
              src={room.image}
              alt={room.name}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease",
                transform: showDetails ? "scale(1.1)" : "scale(1)",
              }}
            />
            <Box sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(to top, ${alpha(colors.black, 0.4)} 0%, transparent 40%)`,
            }} />
            
            {/* Badges */}
            <Stack direction="row" spacing={1} sx={{ position: "absolute", top: 20, left: 20 }}>
              <Chip
                label={room.category}
                sx={{
                  bgcolor: alpha(colors.brown, 0.9),
                  color: colors.white,
                  fontWeight: 700,
                  px: 2,
                  py: 1,
                }}
              />
              <Chip
                icon={<StarIcon sx={{ fontSize: 14 }} />}
                label={room.rating}
                sx={{
                  bgcolor: alpha(colors.gold, 0.9),
                  color: colors.black,
                  fontWeight: 700,
                  px: 2,
                  py: 1,
                }}
              />
            </Stack>
            
            {/* Quick Actions */}
            <Stack direction="row" spacing={1} sx={{ position: "absolute", top: 20, right: 20 }}>
              <Tooltip title="Quick View">
                <IconButton
                  onClick={() => setShowDetails(!showDetails)}
                  sx={{
                    bgcolor: alpha(colors.white, 0.9),
                    color: colors.brown,
                    "&:hover": { bgcolor: colors.white },
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Bookmark">
                <IconButton
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  sx={{
                    bgcolor: alpha(colors.white, 0.9),
                    color: isBookmarked ? colors.gold : colors.textSecondary,
                    "&:hover": { bgcolor: colors.white },
                  }}
                >
                  {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                </IconButton>
              </Tooltip>
              <Tooltip title="Add to Favorites">
                <IconButton
                  onClick={() => setIsLiked(!isLiked)}
                  sx={{
                    bgcolor: alpha(colors.white, 0.9),
                    color: isLiked ? colors.terracotta : colors.textSecondary,
                    "&:hover": { bgcolor: colors.white },
                  }}
                >
                  {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </Tooltip>
            </Stack>
            
            {/* Price & Rating */}
            <Box sx={{
              position: "absolute",
              bottom: 20,
              left: 20,
              right: 20,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}>
              <Stack spacing={0.5}>
                <Typography sx={{
                  color: colors.white,
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}>
                  Starting from
                </Typography>
                <Typography sx={{
                  color: colors.gold,
                  fontWeight: 900,
                  fontSize: "2rem",
                  lineHeight: 1,
                }}>
                  ${room.price}
                  <Typography component="span" sx={{ 
                    color: colors.white,
                    fontSize: "0.9rem",
                    ml: 0.5,
                  }}>
                    /night
                  </Typography>
                </Typography>
              </Stack>
              
              <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                bgcolor: alpha(colors.white, 0.9),
                px: 2,
                py: 1,
                borderRadius: "12px",
              }}>
                <StarIcon sx={{ color: colors.gold, fontSize: 18 }} />
                <Typography sx={{ 
                  color: colors.black,
                  fontWeight: 700,
                  fontSize: "0.9rem",
                }}>
                  {room.rating}
                </Typography>
                <Typography sx={{ 
                  color: colors.gray,
                  fontSize: "0.8rem",
                }}>
                  ({room.reviews})
                </Typography>
              </Box>
            </Box>
          </Box>
          
          {/* Content */}
          <CardContent sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Typography variant="h5" sx={{
                fontWeight: 800,
                color: colors.textPrimary,
                fontSize: "1.5rem",
                lineHeight: 1.2,
              }}>
                {room.name}
              </Typography>
              
              <Typography sx={{
                color: colors.textSecondary,
                fontSize: "0.95rem",
                lineHeight: 1.6,
                minHeight: "3.2rem",
              }}>
                {room.description}
              </Typography>
              
              {/* Features Grid */}
              <Grid container spacing={2}>
                {room.features.slice(0, 4).map((feature, i) => (
                  <Grid item xs={6} key={i}>
                    <Box sx={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: 1.5,
                      p: 1.5,
                      borderRadius: "10px",
                      bgcolor: alpha(colors.brown, 0.05),
                    }}>
                      <Box sx={{
                        p: 1,
                        borderRadius: "8px",
                        bgcolor: alpha(colors.brown, 0.1),
                        color: colors.brown,
                        display: "flex",
                      }}>
                        {feature.icon}
                      </Box>
                      <Typography sx={{ 
                        color: colors.textPrimary,
                        fontSize: "0.85rem",
                        fontWeight: 500,
                      }}>
                        {feature.value}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              
              {/* Amenities */}
              <Box sx={{ 
                display: "flex", 
                flexWrap: "wrap", 
                gap: 1,
                mt: 1,
              }}>
                {room.amenities.slice(0, 3).map((amenity, i) => (
                  <Chip
                    key={i}
                    label={amenity}
                    size="small"
                    sx={{
                      bgcolor: alpha(colors.gold, 0.1),
                      color: colors.brown,
                      fontWeight: 500,
                      fontSize: "0.75rem",
                      px: 1,
                      py: 0.5,
                    }}
                  />
                ))}
                {room.amenities.length > 3 && (
                  <Chip
                    label={`+${room.amenities.length - 3}`}
                    size="small"
                    sx={{
                      bgcolor: alpha(colors.brown, 0.1),
                      color: colors.brown,
                      fontWeight: 500,
                      fontSize: "0.75rem",
                      px: 1,
                      py: 0.5,
                    }}
                  />
                )}
              </Box>
              
              {/* Action Buttons */}
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <EnhancedButton variant="outline" size="small" fullWidth>
                  View Details
                </EnhancedButton>
                <EnhancedButton variant="gradient" size="small" fullWidth>
                  Book Now
                </EnhancedButton>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </EnhancedCard>
    </motion.div>
  );
};

// 5. Enhanced Search Bar Component
const EnhancedSearchBar = ({ colors, onSearch }) => {
  const [search, setSearch] = useState("");
  
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '12px',
        boxShadow: `0 10px 30px ${alpha(colors.brown, 0.1)}`,
        border: `1px solid ${alpha(colors.brown, 0.2)}`,
        width: '100%',
        maxWidth: 600,
        mx: 'auto',
      }}
    >
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Search suites, amenities, or experiences..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="submit" sx={{ 
        p: '10px', 
        color: colors.brown,
        "&:hover": {
          bgcolor: alpha(colors.brown, 0.1),
        }
      }}>
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Tooltip title="Advanced Filters">
        <IconButton sx={{ 
          p: '10px', 
          color: colors.brown,
          "&:hover": {
            bgcolor: alpha(colors.brown, 0.1),
          }
        }}>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Paper>
  );
};

// 6. Enhanced Progress Chart
const EnhancedProgressChart = ({ title, value, color, colors, max = 100 }) => (
  <Box sx={{ mb: 3 }}>
    <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
      <Typography variant="body2" sx={{ 
        color: colors.textPrimary, 
        fontWeight: 600,
        fontSize: "0.9rem",
      }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ 
        color: color, 
        fontWeight: 700,
        fontSize: "0.9rem",
      }}>
        {value}/{max}
      </Typography>
    </Stack>
    <Box sx={{
      height: 10,
      background: alpha(color, 0.1),
      borderRadius: '5px',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${(value / max) * 100}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          height: '100%',
          background: `linear-gradient(90deg, ${color}, ${alpha(color, 0.7)})`,
          borderRadius: '5px',
          boxShadow: `0 0 20px ${alpha(color, 0.3)}`,
        }}
      />
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: `${(value / max) * 100}%`,
        width: '2px',
        height: '100%',
        background: colors.white,
        boxShadow: `0 0 10px ${alpha(colors.white, 0.5)}`,
      }} />
    </Box>
  </Box>
);

// 7. Enhanced Timeline Component
const EnhancedTimeline = ({ events, colors }) => (
  <Box sx={{ position: 'relative', pl: 4 }}>
    {events.map((event, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.2 }}
      >
        <Box sx={{ 
          position: 'relative', 
          pb: 4,
          '&:last-child': { pb: 0 }
        }}>
          {/* Timeline Dot */}
          <Box sx={{
            position: 'absolute',
            left: -32,
            top: 0,
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: colors.brown,
            boxShadow: `0 0 20px ${alpha(colors.brown, 0.3)}`,
            zIndex: 2,
          }} />
          
          {/* Timeline Line */}
          {i < events.length - 1 && (
            <Box sx={{
              position: 'absolute',
              left: -23,
              top: 20,
              bottom: 0,
              width: '2px',
              background: `linear-gradient(to bottom, ${colors.brown}, ${colors.gold})`,
              zIndex: 1,
            }} />
          )}
          
          {/* Event Content */}
          <Card sx={{
            p: 3,
            borderRadius: '16px',
            background: colors.surface,
            border: `1px solid ${alpha(colors.brown, 0.1)}`,
            boxShadow: `0 5px 20px ${alpha(colors.brown, 0.05)}`,
          }}>
            <Stack spacing={2}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                <Typography variant="h6" sx={{ 
                  color: colors.textPrimary,
                  fontWeight: 700,
                  fontSize: '1rem',
                }}>
                  {event.title}
                </Typography>
                <Chip
                  label={event.time}
                  size="small"
                  sx={{
                    bgcolor: alpha(colors.gold, 0.1),
                    color: colors.brown,
                    fontWeight: 600,
                    fontSize: '0.75rem',
                  }}
                />
              </Stack>
              
              <Typography sx={{ 
                color: colors.textSecondary,
                fontSize: '0.9rem',
                lineHeight: 1.6,
              }}>
                {event.description}
              </Typography>
              
              {event.status && (
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}>
                  <Box sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: event.status === 'completed' ? colors.success : 
                              event.status === 'in-progress' ? colors.warning : colors.error,
                    animation: event.status === 'in-progress' ? `${pulse} 2s infinite` : 'none',
                  }} />
                  <Typography sx={{ 
                    color: colors.textSecondary,
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    textTransform: 'capitalize',
                  }}>
                    {event.status}
                  </Typography>
                </Box>
              )}
            </Stack>
          </Card>
        </Box>
      </motion.div>
    ))}
  </Box>
);

// ========== BEAUTIFUL AUTH BUTTONS ==========
const SignUpButton = ({ colors, gradients }) => {
  const handleSignUp = () => {
    // For now, use window location. In a real app, you'd use react-router navigation
    window.location.href = "/signup";
    // Or if using React Router in your app:
    // navigate("/signup");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Button
        variant="outlined"
        onClick={handleSignUp}
        startIcon={<HowToRegIcon sx={{ fontSize: 18 }} />}
        sx={{
          px: 4,
          py: 1,
          borderRadius: "14px",
          fontWeight: 800,
          textTransform: "none",
          fontSize: "0.85rem",
          letterSpacing: "0.5px",
          color: colors.brown,
          border: `2px solid ${alpha(colors.brown, 0.4)}`,
          background: "transparent",
          minWidth: 120,
          position: "relative",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            color: colors.white,
            borderColor: colors.brown,
            background: gradients.brownGold,
            boxShadow: `
              0 10px 25px ${alpha(colors.brown, 0.3)},
              inset 0 0 20px ${alpha(colors.white, 0.1)}
            `,
            transform: "translateY(-2px)",
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background: `linear-gradient(90deg, 
              transparent, 
              ${alpha(colors.white, 0.2)}, 
              ${alpha(colors.white, 0.4)}, 
              ${alpha(colors.white, 0.2)}, 
              transparent
            )`,
            transition: "left 0.7s ease",
          },
          "&:hover::before": {
            left: "100%",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "12px",
            padding: "2px",
            background: gradients.brownGold,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            opacity: 0,
            transition: "opacity 0.3s ease",
          },
          "&:hover::after": {
            opacity: 1,
          },
        }}
      >
        Sign Up
      </Button>
    </motion.div>
  );
};

const SignInButton = ({ colors, gradients }) => {
  const handleSignIn = () => {
    // For now, use window location. In a real app, you'd use react-router navigation
     window.location.href = "/login";
  
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Button
        variant="contained"
        onClick={handleSignIn}
        startIcon={<LoginIcon sx={{ fontSize: 18 }} />}
        sx={{
          px: 4,
          py: 1,
          borderRadius: "14px",
          fontWeight: 800,
          textTransform: "none",
          fontSize: "0.85rem",
          letterSpacing: "0.5px",
          color: colors.white,
          background: gradients.brownGold,
          minWidth: 120,
          position: "relative",
          overflow: "hidden",
          boxShadow: `
            0 8px 25px ${alpha(colors.brown, 0.4)},
            0 0 0 1px ${alpha(colors.gold, 0.2)} inset
          `,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            background: gradients.goldCopper,
            boxShadow: `
              0 15px 40px ${alpha(colors.copper, 0.5)},
              0 0 0 1px ${alpha(colors.gold, 0.3)} inset,
              0 0 30px ${alpha(colors.gold, 0.2)}
            `,
            transform: "translateY(-3px)",
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(45deg, 
              transparent 25%, 
              ${alpha(colors.white, 0.1)} 50%, 
              transparent 75%
            )`,
            backgroundSize: "200% 200%",
            animation: `${shimmer} 3s infinite linear`,
            opacity: 0.7,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "12px",
            background: `radial-gradient(
              circle at var(--mouse-x) var(--mouse-y),
              ${alpha(colors.white, 0.15)} 0%,
              transparent 80%
            )`,
            opacity: 0,
            transition: "opacity 0.3s",
            pointerEvents: "none",
          },
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.setProperty('--mouse-x', '50%');
          e.currentTarget.style.setProperty('--mouse-y', '50%');
        }}
        onMouseLeave={(e) => {
          // Reset mouse position
          e.currentTarget.style.setProperty('--mouse-x', '50%');
          e.currentTarget.style.setProperty('--mouse-y', '50%');
        }}
      >
        Sign In
      </Button>
    </motion.div>
  );
};

// ========== BEAUTIFUL BOOK NOW BUTTON ==========
const BookNowButton = ({ colors, gradients, size = "medium", fullWidth = false, onClick }) => {
  const buttonSizes = {
    small: { px: 4, py: 1, fontSize: "0.85rem" },
    medium: { px: 5, py: 1.2, fontSize: "0.95rem" },
    large: { px: 7, py: 1.8, fontSize: "1.1rem" },
    xlarge: { px: 9, py: 2.2, fontSize: "1.3rem" },
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={size === "xlarge" ? { y: [0, -8, 0] } : {}}
      transition={size === "xlarge" ? { duration: 3, repeat: Infinity } : {}}
      style={{ width: fullWidth ? "100%" : "auto" }}
    >
      <Button
        variant="contained"
        onClick={onClick}
        endIcon={<ArrowForwardIcon sx={{ 
          fontSize: size === "xlarge" ? "1.5rem" : 
                  size === "large" ? "1.2rem" : "1rem",
          transition: "transform 0.3s ease"
        }} />}
        sx={{
          ...buttonSizes[size],
          borderRadius: size === "xlarge" ? "24px" : 
                     size === "large" ? "20px" : "16px",
          fontWeight: 900,
          textTransform: "none",
          letterSpacing: size === "xlarge" ? "1px" : "0.5px",
          color: colors.white,
          background: gradients.brownGold,
          minWidth: size === "xlarge" ? 280 : 
                   size === "large" ? 200 : 
                   size === "medium" ? 160 : 140,
          position: "relative",
          overflow: "hidden",
          boxShadow: `
            0 ${size === "xlarge" ? 25 : 
                size === "large" ? 15 : 
                size === "medium" ? 10 : 8}px 
            ${size === "xlarge" ? 60 : 
             size === "large" ? 40 : 
             size === "medium" ? 30 : 25}px 
            ${alpha(colors.brown, size === "xlarge" ? 0.6 : 
                   size === "large" ? 0.5 : 
                   size === "medium" ? 0.4 : 0.3)},
            0 0 0 1px ${alpha(colors.gold, 0.3)} inset
          `,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            background: gradients.goldCopper,
            boxShadow: `
              0 ${size === "xlarge" ? 35 : 
                  size === "large" ? 25 : 
                  size === "medium" ? 20 : 15}px 
              ${size === "xlarge" ? 80 : 
               size === "large" ? 60 : 
               size === "medium" ? 45 : 35}px 
              ${alpha(colors.copper, size === "xlarge" ? 0.7 : 
                     size === "large" ? 0.6 : 
                     size === "medium" ? 0.5 : 0.4)},
              0 0 30px ${alpha(colors.gold, 0.3)},
              0 0 0 1px ${alpha(colors.gold, 0.5)} inset
            `,
            transform: "translateY(-5px)",
            "& .MuiButton-endIcon": {
              transform: "translateX(5px)",
            },
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(45deg, 
              transparent 30%, 
              ${alpha(colors.white, 0.15)} 50%, 
              transparent 70%
            )`,
            backgroundSize: "200% 200%",
            animation: `${shimmer} 4s infinite linear`,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            padding: "2px",
            background: gradients.goldCopper,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            opacity: 0,
            transition: "opacity 0.4s ease",
          },
          "&:hover::after": {
            opacity: 1,
          },
        }}
      >
        Book Now
      </Button>
    </motion.div>
  );
};

// ========== MAIN COMPONENT ==========
export default function EnhancedGoldenQuantumHaven() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [aiAssistantActive, setAiAssistantActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const colors = getColors(darkMode);
  const gradients = getGradients(darkMode);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -50]);

  // Enhanced Sample Data
  const rooms = [
    {
      id: 1,
      name: "Brownstone Presidential Suite",
      category: "PREMIUM",
      price: 3299,
      rating: 4.9,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1600&q=80",
      description: "Elegant suite with rich brown leather accents, gold detailing, and panoramic city views",
      features: [
        { icon: <KingBedIcon />, value: "4 Guests" },
        { icon: <BathtubIcon />, value: "3 Marble Baths" },
        { icon: <WifiIcon />, value: "10Gbps WiFi" },
        { icon: <PoolIcon />, value: "Private Infinity Pool" },
      ],
      amenities: ["24K Gold Accents", "Private Butler", "Wine Cellar", "Cinema", "Spa", "Gym"],
    },
    {
      id: 2,
      name: "Gold Luxury Villa",
      category: "LUXURY",
      price: 2899,
      rating: 4.8,
      reviews: 96,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80",
      description: "Sun-drenched villa with gold leaf ceilings and handcrafted wooden furniture",
      features: [
        { icon: <KingBedIcon />, value: "6 Guests" },
        { icon: <BathtubIcon />, value: "4 Bathrooms" },
        { icon: <RestaurantIcon />, value: "Private Chef" },
        { icon: <AcUnitIcon />, value: "Smart Climate" },
      ],
      amenities: ["Gold Leaf Ceilings", "Private Garden", "BBQ Area", "Sauna", "Library"],
    },
    {
      id: 3,
      name: "Copper & Terracotta Suite",
      category: "BOUTIQUE",
      price: 2199,
      rating: 4.7,
      reviews: 84,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80",
      description: "Warm suite with copper fixtures, terracotta tiles, and artisan ceramics",
      features: [
        { icon: <KingBedIcon />, value: "2 Guests" },
        { icon: <BathtubIcon />, value: "Copper Tub" },
        { icon: <LocalBarIcon />, value: "Mini Bar" },
        { icon: <BusinessCenterIcon />, value: "Office" },
      ],
      amenities: ["Copper Fixtures", "Fireplace", "Balcony", "Coffee Station", "Yoga Mat"],
    },
  ];

  const stats = [
    { icon: <DiamondIcon />, value: "99.8%", label: "GUEST SATISFACTION", trend: 2.5, color: colors.brown },
    { icon: <TrendingUpIcon />, value: "4.9★", label: "OVERALL RATING", trend: 1.2, color: colors.gold },
    { icon: <DataUsageIcon />, value: "100%", label: "AI UPTIME", trend: 0, color: colors.copper },
    { icon: <SecurityIcon />, value: "24/7", label: "SECURITY COVERAGE", trend: 0, color: colors.terracotta },
  ];

  const timelineEvents = [
    { title: "Check-in Process", time: "2:00 PM", description: "AI-assisted room assignment with biometric verification", status: "completed" },
    { title: "Spa Treatment", time: "4:30 PM", description: "Golden relaxation therapy with aroma oils", status: "in-progress" },
    { title: "Gourmet Dinner", time: "7:00 PM", description: "Chef's table experience with wine pairing", status: "upcoming" },
    { title: "Entertainment Show", time: "9:00 PM", description: "Live orchestra performance in the grand hall", status: "upcoming" },
  ];

  const progressData = [
    { title: "Occupancy Rate", value: 92, color: colors.brown },
    { title: "Service Quality", value: 96, color: colors.gold },
    { title: "Cleanliness Score", value: 98, color: colors.copper },
    { title: "Tech Satisfaction", value: 94, color: colors.terracotta },
  ];

  // Enhanced Navigation
  const EnhancedNavigation = () => {
    const sections = ["Home", "Suites", "Amenities", "Experiences", "Technology", "Contact"];
    
    return (
      <motion.div style={{ y }}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: alpha(colors.surface, 0.98),
            backdropFilter: "blur(20px)",
            borderBottom: `1px solid ${alpha(colors.brown, 0.1)}`,
            py: 1,
            transition: "all 0.4s ease",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
              {/* Logo */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{
                    width: 55,
                    height: 55,
                    borderRadius: "16px",
                    background: gradients.brownGold,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    animation: `${pulse} 3s infinite`,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      inset: 2,
                      borderRadius: "14px",
                      background: colors.surface,
                    },
                  }}>
                    <DiamondIcon sx={{ 
                      color: colors.gold, 
                      fontSize: 30,
                      position: "relative",
                      zIndex: 1,
                    }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{
                      fontWeight: 900,
                      background: gradients.brownGold,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      letterSpacing: "1px",
                      fontSize: "1.3rem",
                    }}>
                      GOLDEN BROWN
                    </Typography>
                    <Typography sx={{
                      fontSize: "0.75rem",
                      color: colors.textSecondary,
                      letterSpacing: "3px",
                      fontWeight: 300,
                    }}>
                      HAVEN
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>

              {/* Desktop Navigation */}
              {!isMobile && (
                <Stack direction="row" spacing={0.5}>
                  {sections.map((section, i) => (
                    <motion.div key={section} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={() => setActiveSection(i)}
                        sx={{
                          px: 3,
                          py: 1.5,
                          color: activeSection === i ? colors.brown : colors.textSecondary,
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          position: "relative",
                          borderRadius: "10px",
                          minWidth: "auto",
                          "&:hover": {
                            color: colors.brown,
                            bgcolor: alpha(colors.brown, 0.08),
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 8,
                            left: "20%",
                            width: "60%",
                            height: "2px",
                            background: gradients.brownGold,
                            transform: activeSection === i ? "scaleX(1)" : "scaleX(0)",
                            transition: "transform 0.3s ease",
                          },
                        }}
                      >
                        {section}
                      </Button>
                    </motion.div>
                  ))}
                </Stack>
              )}

              {/* Controls - WITH BEAUTIFUL AUTH BUTTONS */}
              <Stack direction="row" spacing={2} alignItems="center">
                {/* User Profile or Auth Buttons */}
                {user ? (
                  <Tooltip title="My Account">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <IconButton sx={{
                        color: colors.textSecondary,
                        bgcolor: alpha(colors.brown, 0.1),
                      }}>
                        <AccountCircleIcon />
                      </IconButton>
                    </motion.div>
                  </Tooltip>
                ) : (
                  <Stack direction="row" spacing={1.5}>
                    <SignUpButton colors={colors} gradients={gradients} />
                    <SignInButton colors={colors} gradients={gradients} />
                  </Stack>
                )}

                {/* AI Assistant */}
                <Tooltip title="AI Assistant">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <IconButton
                      onClick={() => setAiAssistantActive(!aiAssistantActive)}
                      sx={{
                        color: aiAssistantActive ? colors.gold : colors.textSecondary,
                        bgcolor: alpha(colors.gold, aiAssistantActive ? 0.2 : 0.1),
                      }}
                    >
                      <PsychologyIcon />
                    </IconButton>
                  </motion.div>
                </Tooltip>

                {/* Theme Toggle */}
                <Tooltip title={darkMode ? "Light Mode" : "Dark Mode"}>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <IconButton
                      onClick={() => setDarkMode(!darkMode)}
                      sx={{
                        color: colors.brown,
                        bgcolor: alpha(colors.brown, 0.1),
                      }}
                    >
                      {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                  </motion.div>
                </Tooltip>

                {/* Notifications */}
                <Tooltip title="Notifications">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <IconButton sx={{
                      color: colors.textSecondary,
                      bgcolor: alpha(colors.brown, 0.1),
                    }}>
                      <Badge badgeContent={3} color="error">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                  </motion.div>
                </Tooltip>

                {/* Search */}
                <Tooltip title="Search">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <IconButton sx={{
                      color: colors.textSecondary,
                      bgcolor: alpha(colors.brown, 0.1),
                    }}>
                      <SearchIcon />
                    </IconButton>
                  </motion.div>
                </Tooltip>

                {isMobile && (
                  <IconButton onClick={() => setMobileOpen(true)} sx={{ color: colors.textPrimary }}>
                    <MenuIcon />
                  </IconButton>
                )}
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>
    );
  };

  // Enhanced Hero Section WITH BEAUTIFUL BOOK NOW BUTTON
  const EnhancedHero = () => {
    const [bgIndex, setBgIndex] = useState(0);
    const backgrounds = [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=2000&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=2000&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=2000&q=80",
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setBgIndex((prev) => (prev + 1) % backgrounds.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    return (
      <Box sx={{ 
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 8, md: 10 },
      }}>
        {/* Background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${backgrounds[bgIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: darkMode ? "brightness(0.4) sepia(0.3)" : "brightness(0.7) sepia(0.1)",
            }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <Box sx={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, 
            ${alpha("#1A1818", darkMode ? 0.8 : 0.4)} 0%,
            ${alpha(colors.brown, darkMode ? 0.3 : 0.15)} 50%,
            ${alpha(colors.gold, darkMode ? 0.1 : 0.05)} 100%
          )`,
        }} />

        {/* Decorative Elements */}
        <Box sx={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(colors.gold, 0.1)} 0%, transparent 70%)`,
          filter: "blur(60px)",
        }} />

        <Container sx={{ position: "relative", zIndex: 2, height: "100%" }}>
          <Grid container alignItems="center" sx={{ minHeight: "90vh" }}>
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Tag */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Chip
                    icon={<AutoAwesomeIcon />}
                    label="BROWN × GOLD × COPPER ELEGANCE"
                    sx={{
                      bgcolor: alpha(colors.brown, 0.2),
                      color: colors.brown,
                      fontWeight: 700,
                      px: 3,
                      py: 1.5,
                      mb: 4,
                      fontSize: "0.9rem",
                      border: `1px solid ${alpha(colors.brown, 0.3)}`,
                      backdropFilter: "blur(10px)",
                    }}
                  />
                </motion.div>

                {/* Title */}
                <Typography variant="h1" sx={{
                  fontSize: { xs: "3rem", md: "4.5rem", lg: "5.5rem" },
                  fontWeight: 900,
                  lineHeight: 1,
                  mb: 3,
                  background: gradients.full,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: `${shimmer} 3s infinite linear`,
                  backgroundSize: "200% auto",
                }}>
                  Golden Brown
                  <Box component="span" sx={{
                    display: "block",
                    fontSize: { xs: "2rem", md: "3rem", lg: "3.5rem" },
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: colors.cream,
                    mt: 1,
                  }}>
                    Luxury Haven
                  </Box>
                </Typography>

                {/* Description */}
                <Typography sx={{
                  fontSize: "1.2rem",
                  color: colors.cream,
                  mb: 6,
                  maxWidth: 600,
                  lineHeight: 1.8,
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}>
                  Experience the warmth of brown leather, the luxury of gold accents, 
                  and the elegance of copper details. Where traditional craftsmanship 
                  meets modern luxury.
                </Typography>

                {/* Search Bar */}
                <Box sx={{ mb: 6 }}>
                  <EnhancedSearchBar colors={colors} />
                </Box>

                {/* Stats */}
                <Grid container spacing={3} sx={{ mb: 6 }}>
                  {stats.map((stat, i) => (
                    <Grid item xs={6} sm={3} key={i}>
                      <EnhancedStat {...stat} colors={colors} />
                    </Grid>
                  ))}
                </Grid>

                {/* CTA - WITH BEAUTIFUL BOOK NOW BUTTON */}
                <Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems="center">
                  {/* Main Book Now Button - HERO PROMINENT */}
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <BookNowButton 
                      colors={colors} 
                      gradients={gradients} 
                      size="xlarge"
                      onClick={() => setBookingOpen(true)}
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        px: 5,
                        py: 1.5,
                        borderRadius: "16px",
                        fontWeight: 700,
                        textTransform: "none",
                        fontSize: "1rem",
                        color: colors.cream,
                        border: `2px solid ${alpha(colors.cream, 0.3)}`,
                        "&:hover": {
                          borderColor: colors.cream,
                          background: alpha(colors.cream, 0.1),
                          boxShadow: `0 10px 30px ${alpha(colors.cream, 0.1)}`,
                        },
                      }}
                    >
                      Virtual Tour
                    </Button>
                  </motion.div>
                  <IconButton sx={{ 
                    color: colors.cream,
                    border: `2px solid ${alpha(colors.cream, 0.3)}`,
                    "&:hover": {
                      borderColor: colors.cream,
                      bgcolor: alpha(colors.cream, 0.1),
                    }
                  }}>
                    <CameraIcon />
                  </IconButton>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };

  // Enhanced Rooms Section
  const EnhancedRooms = () => (
    <Box sx={{ 
      py: { xs: 8, md: 12 },
      position: "relative",
      overflow: "hidden",
      background: colors.background,
    }}>
      {/* Background Pattern */}
      <Box sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(${alpha(colors.brown, 0.05)} 1px, transparent 1px)`,
        backgroundSize: "30px 30px",
        opacity: 0.5,
      }} />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Stack spacing={8}>
            {/* Header with Tabs */}
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h2" sx={{
                fontWeight: 900,
                mb: 2,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                color: colors.textPrimary,
              }}>
                <Box component="span" sx={{
                  background: gradients.brownGold,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Luxury Suites
                </Box>
              </Typography>
              <Typography sx={{
                color: colors.textSecondary,
                fontSize: "1.1rem",
                maxWidth: 600,
                mx: "auto",
                mb: 4,
              }}>
                Each suite is a masterpiece of design, combining rich materials 
                with modern comfort.
              </Typography>

              {/* Tabs */}
              <Box sx={{ borderBottom: 1, borderColor: alpha(colors.brown, 0.1), mb: 6 }}>
                <Tabs 
                  value={activeTab} 
                  onChange={(e, v) => setActiveTab(v)}
                  centered
                  sx={{
                    "& .MuiTab-root": {
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: colors.textSecondary,
                      "&.Mui-selected": {
                        color: colors.brown,
                      },
                    },
                    "& .MuiTabs-indicator": {
                      background: gradients.brownGold,
                      height: 3,
                    },
                  }}
                >
                  <Tab label="All Suites" />
                  <Tab label="Premium" />
                  <Tab label="Luxury" />
                  <Tab label="Boutique" />
                  <Tab label="Family" />
                </Tabs>
              </Box>
            </Box>

            {/* Rooms Grid */}
            <Grid container spacing={4}>
              {rooms.map((room, i) => (
                <Grid item xs={12} md={4} key={room.id}>
                  <EnhancedRoomCard room={room} colors={colors} index={i} />
                </Grid>
              ))}
            </Grid>

            {/* View More & Additional Book Now Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{ textAlign: "center" }}
            >
              <Stack direction={{ xs: "column", sm: "row" }} spacing={3} justifyContent="center" alignItems="center">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      minWidth: 200,
                      px: 4,
                      py: 1.2,
                      borderRadius: "14px",
                      fontWeight: 700,
                      textTransform: "none",
                      fontSize: "0.9rem",
                      color: colors.brown,
                      border: `2px solid ${alpha(colors.brown, 0.3)}`,
                      "&:hover": {
                        borderColor: colors.brown,
                        background: alpha(colors.brown, 0.08),
                        boxShadow: `0 10px 25px ${alpha(colors.brown, 0.2)}`,
                      },
                    }}
                  >
                    View All 12 Suites
                  </Button>
                </motion.div>
                
                {/* Book Now Button in Rooms Section */}
                <BookNowButton 
                  colors={colors} 
                  gradients={gradients} 
                  size="large"
                  onClick={() => setBookingOpen(true)}
                />
              </Stack>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );

  // Enhanced Features Section
  const EnhancedFeatures = () => {
    const features = [
      {
        icon: <DiamondIcon />,
        title: "Brown Leather Luxury",
        description: "Handcrafted brown leather furniture and accents throughout",
        color: colors.brown,
        count: 24,
      },
      {
        icon: <WhatshotIcon />,
        title: "Gold Accent Details",
        description: "24K gold leaf and gold-plated fixtures in every suite",
        color: colors.gold,
        count: 18,
      },
      {
        icon: <ScienceIcon />,
        title: "Copper Bathrooms",
        description: "Custom copper tubs and sinks with artisanal craftsmanship",
        color: colors.copper,
        count: 12,
      },
      {
        icon: <PsychologyIcon />,
        title: "AI Concierge",
        description: "24/7 personalized AI assistant for all your needs",
        color: colors.terracotta,
        count: "∞",
      },
    ];

    return (
      <Box sx={{ 
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${alpha(colors.brown, 0.03)} 0%, ${alpha(colors.gold, 0.02)} 100%)`,
        position: "relative",
      }}>
        {/* Decorative Elements */}
        <Box sx={{
          position: "absolute",
          top: "50%",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(colors.gold, 0.05)} 0%, transparent 70%)`,
          filter: "blur(80px)",
        }} />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Stack spacing={4}>
                  <Typography variant="h2" sx={{
                    fontWeight: 900,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    color: colors.textPrimary,
                  }}>
                    <Box component="span" sx={{
                      background: gradients.brownGold,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}>
                      Premium
                    </Box>{" "}
                    Features
                  </Typography>
                  
                  <Typography sx={{
                    color: colors.textSecondary,
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    mb: 2,
                  }}>
                    Every detail is carefully curated to provide an unforgettable 
                    experience. From the materials to the technology, we've 
                    thought of everything.
                  </Typography>

                  {/* Progress Charts */}
                  <Box sx={{ mt: 4 }}>
                    {progressData.map((item, i) => (
                      <EnhancedProgressChart key={i} {...item} colors={colors} />
                    ))}
                  </Box>

                  {/* Book Now Button in Features Section */}
                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <BookNowButton 
                      colors={colors} 
                      gradients={gradients} 
                      size="medium"
                      onClick={() => setBookingOpen(true)}
                    />
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="outlined"
                        sx={{
                          px: 4,
                          py: 1.2,
                          borderRadius: "14px",
                          fontWeight: 700,
                          textTransform: "none",
                          fontSize: "0.9rem",
                          color: colors.brown,
                          border: `2px solid ${alpha(colors.brown, 0.3)}`,
                          "&:hover": {
                            borderColor: colors.brown,
                            background: alpha(colors.brown, 0.08),
                          },
                        }}
                      >
                        View All Amenities
                      </Button>
                    </motion.div>
                  </Stack>
                </Stack>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} lg={6}>
              <Grid container spacing={3}>
                {features.map((feature, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <EnhancedCard hover={true} intensity={15}>
                        <Card sx={{
                          p: 3,
                          borderRadius: "20px",
                          background: colors.surface,
                          border: `1px solid ${alpha(feature.color, 0.2)}`,
                          height: "100%",
                          position: "relative",
                          overflow: "hidden",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "4px",
                            background: `linear-gradient(90deg, ${feature.color}, ${alpha(feature.color, 0.7)})`,
                          },
                        }}>
                          <Stack spacing={2}>
                            <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                              <Box sx={{
                                width: 60,
                                height: 60,
                                borderRadius: "15px",
                                background: alpha(feature.color, 0.1),
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2,
                              }}>
                                <Box sx={{ 
                                  color: feature.color, 
                                  fontSize: 28,
                                }}>
                                  {feature.icon}
                                </Box>
                              </Box>
                              <Chip
                                label={feature.count}
                                sx={{
                                  bgcolor: alpha(feature.color, 0.1),
                                  color: feature.color,
                                  fontWeight: 700,
                                  fontSize: "0.9rem",
                                }}
                              />
                            </Stack>
                            <Typography variant="h6" sx={{
                              color: colors.textPrimary,
                              fontWeight: 700,
                              fontSize: "1.1rem",
                              mb: 1,
                            }}>
                              {feature.title}
                            </Typography>
                            <Typography sx={{
                              color: colors.textSecondary,
                              fontSize: "0.9rem",
                              lineHeight: 1.6,
                            }}>
                              {feature.description}
                            </Typography>
                          </Stack>
                        </Card>
                      </EnhancedCard>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };

  // Enhanced Analytics Dashboard
  const EnhancedAnalytics = () => (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Card sx={{
            p: { xs: 3, md: 4 },
            borderRadius: "28px",
            background: colors.surface,
            border: `1px solid ${alpha(colors.brown, 0.2)}`,
            boxShadow: `0 40px 80px ${alpha(colors.brown, 0.08)}`,
          }}>
            <Stack spacing={4}>
              {/* Header */}
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h4" sx={{ 
                  fontWeight: 800,
                  background: gradients.brownGold,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Hotel Analytics Dashboard
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Tooltip title="Download Report">
                    <IconButton sx={{ color: colors.textSecondary }}>
                      <DownloadIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Print">
                    <IconButton sx={{ color: colors.textSecondary }}>
                      <PrintIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Share">
                    <IconButton sx={{ color: colors.textSecondary }}>
                      <ShareIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Stack>

              {/* Timeline */}
              <Box>
                <Typography variant="h6" sx={{ 
                  color: colors.textPrimary,
                  fontWeight: 700,
                  mb: 3,
                }}>
                  Today's Schedule
                </Typography>
                <EnhancedTimeline events={timelineEvents} colors={colors} />
              </Box>

              {/* Quick Stats */}
              <Grid container spacing={3} sx={{ mt: 4 }}>
                <Grid item xs={12} md={6}>
                  <Box sx={{
                    p: 3,
                    borderRadius: "20px",
                    background: alpha(colors.brown, 0.05),
                    border: `1px solid ${alpha(colors.brown, 0.1)}`,
                  }}>
                    <Typography sx={{ 
                      color: colors.textSecondary,
                      fontSize: "0.9rem",
                      mb: 2,
                    }}>
                      Current Occupancy
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Typography variant="h3" sx={{ 
                        color: colors.brown,
                        fontWeight: 900,
                      }}>
                        92%
                      </Typography>
                      <Chip 
                        label="+5% from yesterday" 
                        size="small"
                        sx={{ 
                          bgcolor: alpha(colors.success, 0.2),
                          color: colors.success,
                          fontWeight: 600,
                        }}
                      />
                    </Stack>
                    <LinearProgress 
                      variant="determinate" 
                      value={92} 
                      sx={{ 
                        mt: 2,
                        height: 8,
                        borderRadius: 4,
                        bgcolor: alpha(colors.brown, 0.1),
                        "& .MuiLinearProgress-bar": {
                          background: gradients.brownGold,
                          borderRadius: 4,
                        }
                      }}
                    />
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Box sx={{
                    p: 3,
                    borderRadius: "20px",
                    background: alpha(colors.gold, 0.05),
                    border: `1px solid ${alpha(colors.gold, 0.1)}`,
                  }}>
                    <Typography sx={{ 
                      color: colors.textSecondary,
                      fontSize: "0.9rem",
                      mb: 2,
                    }}>
                      Revenue Today
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Typography variant="h3" sx={{ 
                        color: colors.gold,
                        fontWeight: 900,
                      }}>
                        $24,580
                      </Typography>
                      <Chip 
                        label="+12% from target" 
                        size="small"
                        sx={{ 
                          bgcolor: alpha(colors.success, 0.2),
                          color: colors.success,
                          fontWeight: 600,
                        }}
                      />
                    </Stack>
                    <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ 
                          color: colors.textSecondary,
                          fontSize: "0.8rem",
                          mb: 0.5,
                        }}>
                          Room Revenue
                        </Typography>
                        <Typography sx={{ 
                          color: colors.textPrimary,
                          fontWeight: 600,
                        }}>
                          $18,420
                        </Typography>
                      </Box>
                      <Divider orientation="vertical" flexItem />
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ 
                          color: colors.textSecondary,
                          fontSize: "0.8rem",
                          mb: 0.5,
                        }}>
                          Services
                        </Typography>
                        <Typography sx={{ 
                          color: colors.textPrimary,
                          fontWeight: 600,
                        }}>
                          $6,160
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
              
              {/* Call to Action at Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                style={{ textAlign: "center", marginTop: "2rem" }}
              >
                <Typography variant="h5" sx={{ 
                  color: colors.textPrimary,
                  fontWeight: 700,
                  mb: 2,
                }}>
                  Ready to Experience Luxury?
                </Typography>
                <BookNowButton 
                  colors={colors} 
                  gradients={gradients} 
                  size="large"
                  onClick={() => setBookingOpen(true)}
                />
              </motion.div>
            </Stack>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );

  // AI Assistant Component
  const AIAssistant = () => {
    if (!aiAssistantActive) return null;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        style={{
          position: "fixed",
          bottom: 100,
          right: 30,
          zIndex: 9999,
        }}
      >
        <EnhancedCard intensity={20} glow={true}>
          <Card sx={{
            width: 320,
            borderRadius: "24px",
            background: colors.surface,
            border: `1px solid ${alpha(colors.gold, 0.3)}`,
            boxShadow: `0 30px 60px ${alpha(colors.gold, 0.2)}`,
          }}>
            <CardContent>
              <Stack spacing={2}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "12px",
                    background: gradients.brownGold,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: `${float} 2s infinite ease-in-out`,
                  }}>
                    <PsychologyIcon sx={{ color: colors.white, fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ 
                      color: colors.textPrimary,
                      fontWeight: 700,
                    }}>
                      Golden AI Assistant
                    </Typography>
                    <Typography sx={{ 
                      color: colors.textSecondary,
                      fontSize: "0.8rem",
                    }}>
                      Available 24/7
                    </Typography>
                  </Box>
                </Stack>
                
                <Typography sx={{ 
                  color: colors.textSecondary,
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                  p: 2,
                  bgcolor: alpha(colors.brown, 0.05),
                  borderRadius: "12px",
                }}>
                  "Hello! I'm your AI assistant. How can I enhance your stay today?"
                </Typography>
                
                <TextField
                  placeholder="Type your question..."
                  size="small"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end" size="small">
                          <ArrowForwardIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
            </CardContent>
          </Card>
        </EnhancedCard>
      </motion.div>
    );
  };

  // Footer with Book Now Button
  const EnhancedFooter = () => (
    <Box sx={{ 
      py: 8,
      background: `linear-gradient(135deg, ${alpha(colors.brown, 0.1)} 0%, ${alpha(colors.black, darkMode ? 0.9 : 0.1)} 100%)`,
      borderTop: `1px solid ${alpha(colors.brown, 0.2)}`,
      position: "relative",
    }}>
      <Container maxWidth="xl">
        <Stack spacing={6} alignItems="center">
          <Typography variant="h3" sx={{
            fontWeight: 900,
            textAlign: "center",
            fontSize: { xs: "2rem", md: "2.5rem" },
            background: gradients.brownGold,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Your Luxury Experience Awaits
          </Typography>
          
          <Typography sx={{
            color: colors.textSecondary,
            fontSize: "1.1rem",
            textAlign: "center",
            maxWidth: 600,
            mb: 2,
          }}>
            Don't miss the opportunity to experience unparalleled luxury. 
            Book your stay today and immerse yourself in elegance.
          </Typography>
          
          {/* Final Prominent Book Now Button in Footer */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <BookNowButton 
              colors={colors} 
              gradients={gradients} 
              size="xlarge"
              onClick={() => setBookingOpen(true)}
            />
          </motion.div>
          
          <Typography sx={{
            color: colors.textSecondary,
            fontSize: "0.9rem",
            textAlign: "center",
            mt: 4,
          }}>
            Limited availability. Premium suites book quickly.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );

  return (
    <Box sx={{
      minHeight: "100vh",
      background: colors.background,
      color: colors.textPrimary,
      overflowX: "hidden",
    }}>
      <EnhancedNavigation />
      <EnhancedHero />
      <EnhancedRooms />
      <EnhancedFeatures />
      <EnhancedAnalytics />
      <EnhancedFooter />
      
      <AIAssistant />

      {/* Notification */}
      <Snackbar
        open={!!notification}
        autoHideDuration={4000}
        onClose={() => setNotification(null)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert 
          severity="success" 
          sx={{ 
            width: '100%',
            borderRadius: '12px',
            background: alpha(colors.success, 0.1),
            border: `1px solid ${alpha(colors.success, 0.2)}`,
            color: colors.textPrimary,
          }}
        >
          {notification}
        </Alert>
      </Snackbar>

      {/* Scroll to Top */}
      <Fade in={scrollY.get() > 400}>
        <Box sx={{ position: "fixed", bottom: 30, right: 30, zIndex: 1000 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Fab
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              sx={{
                bgcolor: colors.brown,
                color: colors.white,
                boxShadow: `0 10px 30px ${alpha(colors.brown, 0.3)}`,
                "&:hover": {
                  bgcolor: colors.brownDark,
                },
              }}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </motion.div>
        </Box>
      </Fade>
    </Box>
  );
}