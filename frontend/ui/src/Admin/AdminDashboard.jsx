import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Badge,
  Paper,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
  Chip,
  alpha,
  CircularProgress,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  Slider,
  Switch,
  FormControlLabel,
  Tooltip,
  Fade,
  Zoom,
  LinearProgress,
  Rating,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from '@mui/material';
import {
  Dashboard,
  Analytics,
  KingBed,
  People,
  Receipt,
  Settings,
  Menu as MenuIcon,
  ChevronLeft,
  Search,
  Notifications,
  AccountCircle,
  Logout,
  Add,
  Edit,
  Delete,
  Phone,
  Email,
  CalendarToday,
  AttachMoney,
  TrendingUp,
  TrendingDown,
  Star,
  Diamond,
  WbSunny,
  NightsStay,
  DateRange,
  Person,
  Room,
  LocalHotel,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  Timeline,
  Chat,
  ContactPhone,
  Visibility,
  Download,
  FilterList,
  Refresh,
  MoreVert,
  CheckCircle,
  Cancel,
  AccessTime,
  Place,
  Wifi,
  Bathtub,
  Pool,
  Restaurant,
  Spa,
  FitnessCenter,
  BusinessCenter,
  LocalParking,
  RoomService,
  LocationOn,
  Call,
  Message,
  WhatsApp,
  ShowChart,
  Equalizer,
  MultilineChart,
  ScatterPlot,
  BubbleChart,
  DonutLarge,
  Timeline as TimelineIcon,
  Map,
  KeyboardArrowUp,
  KeyboardArrowDown,
  CompareArrows,
  Insights,
  Psychology,
  AutoGraph,
  Dataset,
  DataThresholding,
  Schema,
  StackedLineChart,
  CandlestickChart,
  AreaChart as AreaChartIcon,
  Splitscreen,
  ViewQuilt,
  TableView,
  Numbers,
  Calculate,
  Functions,
  Pattern,
  TrendingFlat,
  Compare,
  Timeline as TimelineChart,
  Water,
  Waves,
  Gradient,
  Opacity,
  BlurOn,
  ColorLens,
  Palette,
  AcUnit,
  PowerOff,
  WindPower,
  Description,
  PhotoCamera,
  CloudUpload,
  Save,
  Image as ImageIcon,
  Block,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
  Scatter,
  ZAxis,
  Treemap,
  FunnelChart,
  Funnel,
  LabelList,
  RadialBarChart,
  RadialBar,
  Brush,
  ReferenceLine,
  ErrorBar,
  Label,
  ReferenceArea,
  ReferenceDot,
} from 'recharts';

// ========== ENHANCED COLOR PALETTE ==========
const getColors = (isDarkMode) => ({
  // Enhanced Brown/Gold Elegant Palette with gradients
  brown: '#8B4513',
  brownLight: '#A67C52',
  brownDark: '#5D4037',
  gold: '#D4AF37',
  goldLight: '#FFD700',
  goldDark: '#B8860B',
  cream: '#FFF8E1',
  creamDark: '#F5E6D3',
  copper: '#B87333',
  copperLight: '#D98748',
  copperDark: '#964B00',
  terracotta: '#E2725B',
  terracottaLight: '#F08C7A',
  terracottaDark: '#C45A42',
  bronze: '#CD7F32',
  bronzeLight: '#E6B87F',
  bronzeDark: '#8B5A2B',
  
  // New gradient colors for charts
  gradient1: isDarkMode ? '#2D2424' : '#FFE4B5',
  gradient2: isDarkMode ? '#3A3030' : '#FFDAB9',
  gradient3: isDarkMode ? '#4A3F3F' : '#E6BE8A',
  
  // Chart specific colors
  chartBlue: '#4A90E2',
  chartGreen: '#50C878',
  chartPurple: '#9C27B0',
  chartOrange: '#FF9800',
  chartCyan: '#00BCD4',
  chartPink: '#E91E63',
  acColor: '#4A90E2', // Blue for A/C rooms
  nonAcColor: '#FF9800', // Orange for Non-A/C rooms
  
  white: '#FFFFFF',
  black: '#1A1818',
  gray: '#8B8680',
  lightGray: '#D3CEC4',
  
  success: '#2E7D32',
  warning: '#ED6C02',
  error: '#D32F2F',
  info: '#0288D1',
  
  background: isDarkMode ? '#0F0E0E' : '#FAF3E0',
  surface: isDarkMode ? '#1E1B1B' : '#FFFFFF',
  surfaceAlt: isDarkMode ? '#2A2525' : '#FFFCF5',
  
  textPrimary: isDarkMode ? '#F5F5F5' : '#3E2723',
  textSecondary: isDarkMode ? '#B0A9A1' : '#5D4037',
  
  // Glass morphism effects
  glass: isDarkMode ? 'rgba(30, 27, 27, 0.7)' : 'rgba(255, 255, 255, 0.7)',
  glassBorder: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(139, 69, 19, 0.1)',
});

// API Configuration
const API_BASE = 'http://localhost:8080';

// Enhanced Chart Data Generators - UPDATED FOR A/C vs Non-A/C
const generateAdvancedChartData = (rooms = [], bookings = [], isDarkMode = false) => {
  const colors = getColors(isDarkMode);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  // ========== CALCULATE A/C VS NON-A/C DISTRIBUTION ==========
  let acCount = 0;
  let nonAcCount = 0;
  let singleCount = 0;
  let doubleCount = 0;
  
  rooms.forEach(room => {
    const roomType = room.roomType?.toLowerCase() || '';
    const acType = room.acType?.toLowerCase() || '';
    
    // Count AC/Non-AC
    if (acType.includes('ac') || acType.includes('a/c') || acType.includes('air')) {
      acCount++;
    } else if (acType.includes('non') || acType.includes('no ac') || acType.includes('fan')) {
      nonAcCount++;
    } else {
      // Default to AC if type is ambiguous
      acCount++;
    }
    
    // Count Single/Double
    if (roomType.includes('single')) {
      singleCount++;
    } else if (roomType.includes('double')) {
      doubleCount++;
    }
  });
  
  const totalRooms = rooms.length || 1; // Avoid division by zero
  const acPercentage = Math.round((acCount / totalRooms) * 100);
  const nonAcPercentage = Math.round((nonAcCount / totalRooms) * 100);
  const singlePercentage = Math.round((singleCount / totalRooms) * 100);
  const doublePercentage = Math.round((doubleCount / totalRooms) * 100);
  
  // Room type distribution with A/C vs Non-A/C
  const roomDistribution = [
    { name: 'A/C Rooms', value: acCount, color: colors.acColor, percentage: acPercentage },
    { name: 'Non A/C Rooms', value: nonAcCount, color: colors.nonAcColor, percentage: nonAcPercentage },
    { name: 'Single Rooms', value: singleCount, color: colors.chartGreen, percentage: singlePercentage },
    { name: 'Double Rooms', value: doubleCount, color: colors.chartPurple, percentage: doublePercentage },
  ];
  
  // ========== BOOKING DATE VS TYPE COMPARISON DATA ==========
  // Group bookings by month and room type
  const monthlyBookingData = {};
  
  bookings.forEach(booking => {
    if (!booking.checkInDate || !booking.room) return;
    
    const month = new Date(booking.checkInDate).getMonth(); // 0-11
    const acType = booking.room.acType?.toLowerCase() || '';
    const roomType = booking.room.roomType?.toLowerCase() || '';
    
    const isAc = acType.includes('ac') || acType.includes('a/c') || acType.includes('air');
    const isSingle = roomType.includes('single');
    const isDouble = roomType.includes('double');
    
    if (!monthlyBookingData[month]) {
      monthlyBookingData[month] = { AC: 0, 'Non-AC': 0, Single: 0, Double: 0 };
    }
    
    if (isAc) {
      monthlyBookingData[month].AC++;
    } else {
      monthlyBookingData[month]['Non-AC']++;
    }
    
    if (isSingle) {
      monthlyBookingData[month].Single++;
    } else if (isDouble) {
      monthlyBookingData[month].Double++;
    }
  });
  
  // Convert to chart data format
  const bookingTypeComparisonData = months.map((monthName, index) => {
    const monthData = monthlyBookingData[index] || { AC: 0, 'Non-AC': 0, Single: 0, Double: 0 };
    return {
      month: monthName,
      AC: monthData.AC,
      'Non-AC': monthData['Non-AC'],
      Single: monthData.Single,
      Double: monthData.Double,
      total: monthData.AC + monthData['Non-AC'],
    };
  });
  
  // ========== REVENUE BY ROOM TYPE ==========
  const revenueByType = bookings.reduce((acc, booking) => {
    if (!booking.room) return acc;
    
    const roomType = booking.room.roomType?.toLowerCase() || '';
    const acType = booking.room.acType?.toLowerCase() || '';
    const isAc = acType.includes('ac') || acType.includes('a/c') || acType.includes('air');
    const isSingle = roomType.includes('single');
    const isDouble = roomType.includes('double');
    
    const revenue = parseFloat(booking.room.roomPrice) || 0;
    
    if (isAc) {
      if (!acc.AC) acc.AC = 0;
      acc.AC += revenue;
    } else {
      if (!acc['Non-AC']) acc['Non-AC'] = 0;
      acc['Non-AC'] += revenue;
    }
    
    if (isSingle) {
      if (!acc.Single) acc.Single = 0;
      acc.Single += revenue;
    } else if (isDouble) {
      if (!acc.Double) acc.Double = 0;
      acc.Double += revenue;
    }
    
    return acc;
  }, { AC: 0, 'Non-AC': 0, Single: 0, Double: 0 });
  
  const revenueComparisonData = [
    { name: 'A/C Rooms', value: Math.round(revenueByType.AC), color: colors.acColor },
    { name: 'Non A/C Rooms', value: Math.round(revenueByType['Non-AC']), color: colors.nonAcColor },
    { name: 'Single Rooms', value: Math.round(revenueByType.Single), color: colors.chartGreen },
    { name: 'Double Rooms', value: Math.round(revenueByType.Double), color: colors.chartPurple },
  ];
  
  // ========== OCCUPANCY RATE BY TYPE ==========
  const occupancyByType = bookings.reduce((acc, booking) => {
    if (!booking.room) return acc;
    
    const roomType = booking.room.roomType?.toLowerCase() || '';
    const acType = booking.room.acType?.toLowerCase() || '';
    const isAc = acType.includes('ac') || acType.includes('a/c') || acType.includes('air');
    const isSingle = roomType.includes('single');
    const isDouble = roomType.includes('double');
    
    if (isAc) {
      if (!acc.AC) acc.AC = { bookings: 0, rooms: 0 };
      acc.AC.bookings++;
    } else {
      if (!acc['Non-AC']) acc['Non-AC'] = { bookings: 0, rooms: 0 };
      acc['Non-AC'].bookings++;
    }
    
    if (isSingle) {
      if (!acc.Single) acc.Single = { bookings: 0, rooms: 0 };
      acc.Single.bookings++;
    } else if (isDouble) {
      if (!acc.Double) acc.Double = { bookings: 0, rooms: 0 };
      acc.Double.bookings++;
    }
    
    return acc;
  }, { AC: { bookings: 0, rooms: 0 }, 'Non-AC': { bookings: 0, rooms: 0 }, Single: { bookings: 0, rooms: 0 }, Double: { bookings: 0, rooms: 0 } });
  
  // Count rooms by type
  rooms.forEach(room => {
    const roomType = room.roomType?.toLowerCase() || '';
    const acType = room.acType?.toLowerCase() || '';
    
    const isAc = acType.includes('ac') || acType.includes('a/c') || acType.includes('air');
    const isSingle = roomType.includes('single');
    const isDouble = roomType.includes('double');
    
    if (isAc) {
      if (occupancyByType.AC) occupancyByType.AC.rooms++;
    } else {
      if (occupancyByType['Non-AC']) occupancyByType['Non-AC'].rooms++;
    }
    
    if (isSingle) {
      if (occupancyByType.Single) occupancyByType.Single.rooms++;
    } else if (isDouble) {
      if (occupancyByType.Double) occupancyByType.Double.rooms++;
    }
  });
  
  const occupancyComparisonData = [
    { 
      name: 'A/C Rooms', 
      occupancy: occupancyByType.AC.rooms > 0 
        ? Math.round((occupancyByType.AC.bookings / occupancyByType.AC.rooms) * 100) 
        : 0,
      color: colors.acColor,
      bookings: occupancyByType.AC.bookings,
      rooms: occupancyByType.AC.rooms,
    },
    { 
      name: 'Non A/C Rooms', 
      occupancy: occupancyByType['Non-AC'].rooms > 0 
        ? Math.round((occupancyByType['Non-AC'].bookings / occupancyByType['Non-AC'].rooms) * 100) 
        : 0,
      color: colors.nonAcColor,
      bookings: occupancyByType['Non-AC'].bookings,
      rooms: occupancyByType['Non-AC'].rooms,
    },
  ];
  
  // ========== AVERAGE PRICE COMPARISON ==========
  const avgPriceByType = rooms.reduce((acc, room) => {
    const roomType = room.roomType?.toLowerCase() || '';
    const acType = room.acType?.toLowerCase() || '';
    const isAc = acType.includes('ac') || acType.includes('a/c') || acType.includes('air');
    const isSingle = roomType.includes('single');
    const isDouble = roomType.includes('double');
    
    const price = parseFloat(room.roomPrice) || 0;
    
    if (isAc) {
      if (!acc.AC) acc.AC = { total: 0, count: 0 };
      acc.AC.total += price;
      acc.AC.count++;
    } else {
      if (!acc['Non-AC']) acc['Non-AC'] = { total: 0, count: 0 };
      acc['Non-AC'].total += price;
      acc['Non-AC'].count++;
    }
    
    if (isSingle) {
      if (!acc.Single) acc.Single = { total: 0, count: 0 };
      acc.Single.total += price;
      acc.Single.count++;
    } else if (isDouble) {
      if (!acc.Double) acc.Double = { total: 0, count: 0 };
      acc.Double.total += price;
      acc.Double.count++;
    }
    
    return acc;
  }, { AC: { total: 0, count: 0 }, 'Non-AC': { total: 0, count: 0 }, Single: { total: 0, count: 0 }, Double: { total: 0, count: 0 } });
  
  const priceComparisonData = [
    { 
      name: 'A/C Rooms', 
      price: avgPriceByType.AC.count > 0 
        ? Math.round(avgPriceByType.AC.total / avgPriceByType.AC.count) 
        : 0,
      color: colors.acColor,
    },
    { 
      name: 'Non A/C Rooms', 
      price: avgPriceByType['Non-AC'].count > 0 
        ? Math.round(avgPriceByType['Non-AC'].total / avgPriceByType['Non-AC'].count) 
        : 0,
      color: colors.nonAcColor,
    },
    { 
      name: 'Single Rooms', 
      price: avgPriceByType.Single.count > 0 
        ? Math.round(avgPriceByType.Single.total / avgPriceByType.Single.count) 
        : 0,
      color: colors.chartGreen,
    },
    { 
      name: 'Double Rooms', 
      price: avgPriceByType.Double.count > 0 
        ? Math.round(avgPriceByType.Double.total / avgPriceByType.Double.count) 
        : 0,
      color: colors.chartPurple,
    },
  ];
  
  // ========== GENERATE ADDITIONAL DATA FOR OTHER CHARTS ==========
  // Revenue with prediction
  const revenueData = months.map((month, i) => {
    const base = 50000 + Math.random() * 30000;
    const actual = base + Math.sin(i) * 15000;
    const predicted = actual * (1 + 0.05 + Math.random() * 0.1);
    
    return {
      month,
      revenue: Math.round(actual),
      predicted: Math.round(predicted),
      target: 75000,
      occupancy: 60 + Math.random() * 30,
      satisfaction: 4 + Math.random(),
    };
  });
  
  // Detailed room type distribution (if we have more specific types)
  const detailedRoomDistribution = rooms.reduce((acc, room) => {
    const type = room.roomType || 'Unknown';
    if (!acc[type]) acc[type] = 0;
    acc[type]++;
    return acc;
  }, {});

  const pieChartData = Object.entries(detailedRoomDistribution).map(([name, value], index) => ({
    name: name.length > 15 ? name.substring(0, 15) + '...' : name,
    value,
    color: [colors.brown, colors.gold, colors.copper, colors.terracotta, colors.acColor, colors.nonAcColor][index % 6]
  }));

  // Guest demographics radar data
  const guestRadarData = [
    { subject: 'Business', A: 85, B: 70, fullMark: 100 },
    { subject: 'Leisure', A: 92, B: 85, fullMark: 100 },
    { subject: 'Family', A: 78, B: 65, fullMark: 100 },
    { subject: 'Luxury', A: 95, B: 88, fullMark: 100 },
    { subject: 'Budget', A: 65, B: 72, fullMark: 100 },
    { subject: 'International', A: 88, B: 82, fullMark: 100 },
  ];

  // Time-series occupancy data
  const occupancyData = Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}:00`,
    occupancy: 20 + Math.sin(i / 3) * 30 + Math.random() * 20,
    revenue: 1000 + Math.sin(i / 2) * 500 + Math.random() * 300,
    staff: 5 + Math.floor(Math.sin(i / 4) * 3 + Math.random() * 2),
  }));

  // Scatter plot data for room price vs satisfaction
  const scatterData = Array.from({ length: 50 }, (_, i) => ({
    price: 100 + Math.random() * 400,
    satisfaction: 3.5 + Math.random() * 1.5,
    occupancy: 50 + Math.random() * 50,
    size: 1 + Math.random() * 4,
    type: ['AC', 'Non-AC'][Math.floor(Math.random() * 2)],
  }));

  // Stacked bar chart data for booking sources
  const stackedBarData = months.slice(0, 6).map(month => ({
    month,
    direct: 30 + Math.random() * 30,
    online: 40 + Math.random() * 40,
    agent: 20 + Math.random() * 20,
    corporate: 10 + Math.random() * 15,
  }));

  // Funnel data for booking conversion
  const funnelData = [
    { value: 1000, name: 'Website Visits', fill: '#8884d8' },
    { value: 800, name: 'Room Views', fill: '#83a6ed' },
    { value: 600, name: 'Add to Cart', fill: '#8dd1e1' },
    { value: 400, name: 'Checkout Start', fill: '#82ca9d' },
    { value: 300, name: 'Bookings', fill: '#a4de6c' },
  ];

  // Radial bar chart data for performance metrics
  const radialData = [
    { name: 'Occupancy', value: 78, fill: '#D4AF37' },
    { name: 'Revenue', value: 85, fill: '#8B4513' },
    { name: 'Satisfaction', value: 92, fill: '#B87333' },
    { name: 'Repeat Guests', value: 65, fill: '#E2725B' },
    { name: 'Staff Efficiency', value: 88, fill: '#2E7D32' },
  ];

  // Treemap data for revenue sources
  const treemapData = [
    { size: 100, name: 'Room Revenue', color: '#D4AF37' },
    { size: 65, name: 'Restaurant', color: '#8B4513' },
    { size: 45, name: 'Spa', color: '#B87333' },
    { size: 30, name: 'Events', color: '#E2725B' },
    { size: 25, name: 'Parking', color: '#2E7D32' },
    { size: 20, name: 'Laundry', color: '#4A90E2' },
    { size: 15, name: 'Minibar', color: '#9C27B0' },
  ];

  return {
    // A/C vs Non-A/C specific data
    roomDistribution,
    bookingTypeComparisonData,
    revenueComparisonData,
    occupancyComparisonData,
    priceComparisonData,
    
    // Other chart data
    revenueData,
    detailedRoomDistribution: pieChartData,
    guestRadarData,
    occupancyData,
    scatterData,
    stackedBarData,
    funnelData,
    radialData,
    treemapData,
  };
};

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label, colors }) => {
  if (active && payload && payload.length) {
    return (
      <Paper
        sx={{
          p: 2,
          borderRadius: 2,
          background: colors.glass,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${colors.glassBorder}`,
          boxShadow: `0 8px 32px ${alpha(colors.brown, 0.2)}`,
        }}
      >
        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: colors.textPrimary }}>
          {label}
        </Typography>
        {payload.map((entry, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: entry.color,
              }}
            />
            <Typography variant="body2" sx={{ color: colors.textSecondary }}>
              {entry.name}:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700, color: colors.textPrimary, ml: 'auto' }}>
              {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
            </Typography>
          </Box>
        ))}
      </Paper>
    );
  }
  return null;
};

// Glass Card Component
const GlassCard = ({ children, sx, ...props }) => (
  <Paper
    sx={{
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      ...sx,
    }}
    {...props}
  >
    {children}
  </Paper>
);

// Stat Card Component
const StatCard = ({ title, value, icon, color, change, subtitle }) => {
  const colors = getColors(false); // Default colors for stat card
  
  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Paper
        sx={{
          p: 3,
          borderRadius: 3,
          height: '100%',
          background: `linear-gradient(145deg, ${alpha(color, 0.2)} 0%, ${alpha(colors.surface, 0.8)} 100%)`,
          border: `1px solid ${alpha(color, 0.3)}`,
          backdropFilter: 'blur(20px)',
          boxShadow: `0 20px 60px ${alpha(color, 0.15)}`,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${color}, ${alpha(color, 0.5)})`,
          }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="caption" sx={{ 
              color: colors.textSecondary,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: 1,
              fontSize: '0.7rem',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}>
              {title}
            </Typography>
            <Typography variant="h3" sx={{ 
              fontWeight: 900,
              mt: 1,
              mb: 0.5,
              color: colors.textPrimary,
              fontSize: { xs: '2rem', md: '2.5rem' },
              background: `linear-gradient(135deg, ${color} 0%, ${alpha(color, 0.7)} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: `0 2px 10px ${alpha(color, 0.2)}`,
            }}>
              {value}
            </Typography>
            {subtitle && (
              <Typography variant="caption" sx={{ 
                color: colors.textSecondary,
                fontWeight: 500,
                display: 'block',
                mb: 1,
              }}>
                {subtitle}
            </Typography>
            )}
            {change && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  bgcolor: change > 0 ? alpha(colors.success, 0.2) : alpha(colors.error, 0.2),
                  border: `1px solid ${change > 0 ? alpha(colors.success, 0.3) : alpha(colors.error, 0.3)}`,
                }}>
                  {change > 0 ? (
                    <TrendingUp sx={{ 
                      fontSize: 16, 
                      color: colors.success,
                    }} />
                  ) : (
                    <TrendingDown sx={{ 
                      fontSize: 16, 
                      color: colors.error,
                    }} />
                  )}
                  <Typography variant="caption" sx={{ 
                    color: change > 0 ? colors.success : colors.error,
                    fontWeight: 700,
                    fontSize: '0.75rem',
                  }}>
                    {change > 0 ? '+' : ''}{change}%
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                  from last month
                </Typography>
              </Box>
            )}
          </Box>
          <Box sx={{
            p: 2,
            borderRadius: '50%',
            bgcolor: alpha(color, 0.2),
            color: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 8px 32px ${alpha(color, 0.3)}`,
            border: `2px solid ${alpha(color, 0.3)}`,
          }}>
            {React.cloneElement(icon, { sx: { fontSize: 32 } })}
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

const AdminDashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  
  // State
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [activeTab, setActiveTab] = useState(0);
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  const [profileData, setProfileData] = useState(null);
  
  // Data States
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Dialog States
  const [roomDialogOpen, setRoomDialogOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  
  // Analytics States
  const [timeRange, setTimeRange] = useState('month');
  const [chartType, setChartType] = useState('line');
  const [predictiveMode, setPredictiveMode] = useState(true);
  const [animationEnabled, setAnimationEnabled] = useState(true);
  
  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  // New Room Form
  const [roomForm, setRoomForm] = useState({
    roomType: '',
    roomPrice: '',
    roomCapacity: '',
    roomDescription: '',
    acType: '',
    photo: null,
  });

  const colors = getColors(darkMode);
  
  // Initialize chart data with actual room and booking data
  const chartData = generateAdvancedChartData(rooms, bookings, darkMode);
  
  // Enhanced Sidebar Navigation Items
  const sidebarItems = [
    { id: 0, name: 'Dashboard', icon: <Dashboard />, color: colors.gold },
    { id: 1, name: 'Bookings', icon: <Receipt />, color: colors.brown },
    { id: 2, name: 'Rooms', icon: <KingBed />, color: colors.copper },
    { id: 3, name: 'Guests', icon: <People />, color: colors.terracotta },
    { id: 4, name: 'Analytics', icon: <Analytics />, color: colors.chartBlue },
    { id: 8, name: 'Room Type Analytics', icon: <AcUnit />, color: colors.acColor },
    { id: 5, name: 'Contact Center', icon: <ContactPhone />, color: colors.success },
    { id: 6, name: 'Profile', icon: <AccountCircle />, color: colors.info },
    { id: 7, name: 'Settings', icon: <Settings />, color: colors.gray },
  ];
  
  // Initialize
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    
    fetchDashboardData();
    fetchProfileData();
  }, [navigate]);
  
  const fetchDashboardData = async () => {
    setLoading(true);
    setError('');
    
    try {
      const token = localStorage.getItem('token');
      const headers = { Authorization: `Bearer ${token}` };
      
      // Fetch all data in parallel
      const [bookingsRes, roomsRes, usersRes] = await Promise.all([
        axios.get(`${API_BASE}/bookings/all`, { headers }),
        axios.get(`${API_BASE}/rooms/all`, { headers }),
        axios.get(`${API_BASE}/users/all`, { headers }),
      ]);
      
      if (bookingsRes.data.statusCode === 200) {
        setBookings(bookingsRes.data.bookingList || []);
      }
      
      if (roomsRes.data.statusCode === 200) {
        setRooms(roomsRes.data.roomList || []);
      }
      
      if (usersRes.data.statusCode === 200) {
        setUsers(usersRes.data.userList || []);
      }
      
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to load dashboard data. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const fetchProfileData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_BASE}/users/get-logged-in-profile-info`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.data.statusCode === 200) {
        setProfileData(response.data.user);
      }
    } catch (err) {
      console.error('Error fetching profile:', err);
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };
  
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setPage(0);
  };
  
  const handleUserMenuOpen = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };
  
  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };
  
  const handleRoomFormSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      
      formData.append('roomType', roomForm.roomType);
      formData.append('roomPrice', roomForm.roomPrice);
      formData.append('roomCapacity', roomForm.roomCapacity);
      formData.append('roomDescription', roomForm.roomDescription);
      formData.append('acType', roomForm.acType);
      if (roomForm.photo) {
        formData.append('photo', roomForm.photo);
      }
      
      const url = editMode && selectedRoom 
        ? `${API_BASE}/rooms/update/${selectedRoom.id}`
        : `${API_BASE}/rooms/add`;
      
      const method = editMode && selectedRoom ? 'put' : 'post';
      
      const response = await axios[method](url, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      
      if (response.data.statusCode === 200) {
        setSuccess(editMode ? 'Room updated successfully!' : 'Room added successfully!');
        fetchDashboardData();
        setRoomDialogOpen(false);
        resetRoomForm();
      } else {
        setError(response.data.message || `Failed to ${editMode ? 'update' : 'add'} room`);
      }
    } catch (err) {
      setError(`Failed to ${editMode ? 'update' : 'add'} room. Please try again.`);
      console.error('Room form error:', err);
    }
  };
  
  const handleDeleteRoom = async (roomId) => {
    if (window.confirm('Are you sure you want to delete this room?')) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${API_BASE}/rooms/delete/${roomId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        if (response.data.statusCode === 200) {
          setSuccess('Room deleted successfully!');
          fetchDashboardData();
        }
      } catch (err) {
        setError('Failed to delete room');
      }
    }
  };

  // ========== NEW: HANDLE DELETE USER ==========
  const handleDeleteUser = async (userId, userName) => {
    if (window.confirm(`Are you sure you want to delete user "${userName}"? This action cannot be undone.`)) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${API_BASE}/users/delete/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        if (response.data.statusCode === 200) {
          setSuccess('User deleted successfully!');
          fetchDashboardData();
        } else {
          setError(response.data.message || 'Failed to delete user');
        }
      } catch (err) {
        setError('Failed to delete user. Please try again.');
        console.error('User delete error:', err);
      }
    }
  };
  
  const resetRoomForm = () => {
    setRoomForm({
      roomType: '',
      roomPrice: '',
      roomCapacity: '',
      roomDescription: '',
      acType: '',
      photo: null,
    });
    setEditMode(false);
    setSelectedRoom(null);
  };
  
  const handleContactGuest = (phoneNumber) => {
    if (phoneNumber) {
      window.open(`tel:${phoneNumber}`, '_blank');
    }
  };
  
  const handleWhatsAppGuest = (phoneNumber) => {
    if (phoneNumber) {
      window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}`, '_blank');
    }
  };
  
  const handleEmailGuest = (email) => {
    if (email) {
      window.open(`mailto:${email}`, '_blank');
    }
  };
  
  // Filter only regular users (not admins)
  const regularUsers = users.filter(user => user.role !== 'ROLE_ADMIN');
  
  // Calculate analytics data for charts
  const calculateAnalytics = () => {
    const totalBookings = bookings.length;
    const totalUsers = regularUsers.length;
    const totalRooms = rooms.length;
    
    // Revenue calculation
    let totalRevenue = 0;
    bookings.forEach(booking => {
      const room = rooms.find(r => r.id === booking.room?.id);
      if (room && booking.checkInDate && booking.checkOutDate) {
        const price = parseFloat(room.roomPrice) || 0;
        totalRevenue += price;
      }
    });
    
    // Monthly revenue data
    const monthlyRevenue = Array.from({ length: 12 }, (_, i) => {
      const month = new Date(2024, i, 1).toLocaleString('default', { month: 'short' });
      const monthBookings = bookings.filter(b => {
        if (!b.checkInDate) return false;
        const date = new Date(b.checkInDate);
        return date.getMonth() === i;
      });
      const revenue = monthBookings.reduce((sum, b) => {
        const room = rooms.find(r => r.id === b.room?.id);
        return sum + (parseFloat(room?.roomPrice) || 0);
      }, 0);
      return { month, revenue };
    });
    
    // Room type distribution
    const roomTypeData = rooms.reduce((acc, room) => {
      const type = room.roomType || 'Unknown';
      if (!acc[type]) acc[type] = 0;
      acc[type]++;
      return acc;
    }, {});
    
    const pieChartData = Object.entries(roomTypeData).map(([name, value], index) => ({
      name,
      value,
      color: [colors.brown, colors.gold, colors.copper, colors.terracotta][index % 4]
    }));
    
    // Booking trends
    const bookingTrends = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - i));
      const day = date.toLocaleDateString('default', { weekday: 'short' });
      const count = bookings.filter(b => {
        if (!b.checkInDate) return false;
        const bookingDate = new Date(b.checkInDate);
        return bookingDate.toDateString() === date.toDateString();
      }).length;
      return { day, bookings: count };
    });
    
    return {
      totalBookings,
      totalRevenue: totalRevenue.toFixed(2),
      totalUsers,
      totalRooms,
      monthlyRevenue,
      pieChartData,
      bookingTrends,
      avgRating: 4.8,
      occupancyRate: 78.5
    };
  };
  
  const analyticsData = calculateAnalytics();
  
  // ========== NEW A/C vs NON-A/C ANALYTICS COMPONENTS ==========
  
  // 1. A/C vs Non-A/C Distribution Pie Chart
  const ACTypeDistributionChart = () => (
    <GlassCard sx={{ p: 3, borderRadius: 3, height: 400 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 900, color: colors.textPrimary, mb: 0.5 }}>
            Room Type Distribution
          </Typography>
          <Typography variant="caption" sx={{ color: colors.textSecondary }}>
            Total Rooms: {rooms.length}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip 
            icon={<AcUnit />} 
            label={`${chartData.roomDistribution[0]?.percentage || 0}% A/C`}
            size="small"
            sx={{ 
              bgcolor: alpha(colors.acColor, 0.1), 
              color: colors.acColor,
              border: `1px solid ${alpha(colors.acColor, 0.3)}`,
              fontWeight: 600,
            }}
          />
          <Chip 
            icon={<PowerOff />} 
            label={`${chartData.roomDistribution[1]?.percentage || 0}% Non-A/C`}
            size="small"
            sx={{ 
              bgcolor: alpha(colors.nonAcColor, 0.1), 
              color: colors.nonAcColor,
              border: `1px solid ${alpha(colors.nonAcColor, 0.3)}`,
              fontWeight: 600,
            }}
          />
        </Box>
      </Box>
      
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={chartData.roomDistribution}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ name, percentage }) => `${name}\n${percentage}%`}
              outerRadius={120}
              innerRadius={60}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={1}
              stroke={colors.surface}
              strokeWidth={3}
            >
              {chartData.roomDistribution.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                  strokeWidth={2}
                  stroke={colors.surface}
                />
              ))}
            </Pie>
            <RechartsTooltip 
              content={<CustomTooltip colors={colors} />}
              formatter={(value, name, props) => [
                `${value} rooms (${props.payload.percentage}%)`,
                name
              ]}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value, entry) => (
                <span style={{ color: colors.textPrimary, fontSize: '12px', fontWeight: 600 }}>
                  {value}
                </span>
              )}
            />
          </RechartsPieChart>
        </ResponsiveContainer>
      </Box>
    </GlassCard>
  );

  // 2. Booking Comparison by Type (Stacked Bar Chart)
  const BookingTypeComparisonChart = () => (
    <GlassCard sx={{ p: 3, borderRadius: 3, height: 400 }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 900, color: colors.textPrimary }}>
        Monthly Bookings: A/C vs Non-A/C
      </Typography>
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={chartData.bookingTypeComparisonData}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={alpha(colors.textSecondary, 0.1)}
            />
            <XAxis 
              dataKey="month" 
              stroke={colors.textSecondary}
              fontSize={12}
            />
            <YAxis 
              stroke={colors.textSecondary}
              fontSize={12}
              label={{ 
                value: 'Number of Bookings', 
                angle: -90, 
                position: 'insideLeft',
                offset: -5,
                style: { fill: colors.textSecondary }
              }}
            />
            <RechartsTooltip 
              content={<CustomTooltip colors={colors} />}
            />
            <Legend />
            <Bar 
              dataKey="AC" 
              stackId="a" 
              fill={colors.acColor} 
              name="A/C Bookings"
              radius={[0, 0, 0, 0]}
            />
            <Bar 
              dataKey="Non-AC" 
              stackId="a" 
              fill={colors.nonAcColor} 
              name="Non-A/C Bookings"
              radius={[4, 4, 0, 0]}
            />
            <ReferenceLine 
              y={0} 
              stroke={colors.textSecondary}
              strokeWidth={1}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </Box>
    </GlassCard>
  );

  // 3. Revenue Comparison by Room Type
  const RevenueByTypeChart = () => (
    <GlassCard sx={{ p: 3, borderRadius: 3, height: 350 }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 900, color: colors.textPrimary }}>
        Revenue by Room Type
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 200 }}>
        <RechartsBarChart
          width={300}
          height={200}
          data={chartData.revenueComparisonData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={alpha(colors.textSecondary, 0.1)} />
          <XAxis dataKey="name" stroke={colors.textSecondary} />
          <YAxis 
            stroke={colors.textSecondary}
            tickFormatter={(value) => `$${(value/1000).toFixed(1)}K`}
          />
          <RechartsTooltip 
            content={<CustomTooltip colors={colors} />}
            formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
          />
          <Bar 
            dataKey="value" 
            radius={[4, 4, 0, 0]}
          >
            {chartData.revenueComparisonData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </RechartsBarChart>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 2 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="caption" sx={{ color: colors.textSecondary, display: 'block' }}>
            A/C Room Revenue
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 900, color: colors.acColor }}>
            ${chartData.revenueComparisonData[0]?.value?.toLocaleString() || '0'}
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="caption" sx={{ color: colors.textSecondary, display: 'block' }}>
            Non-A/C Room Revenue
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 900, color: colors.nonAcColor }}>
            ${chartData.revenueComparisonData[1]?.value?.toLocaleString() || '0'}
          </Typography>
        </Box>
      </Box>
    </GlassCard>
  );

  // 4. Occupancy Rate Comparison
  const OccupancyByTypeChart = () => (
    <GlassCard sx={{ p: 3, borderRadius: 3, height: 350 }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 900, color: colors.textPrimary }}>
        Occupancy Rate by Type
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 200 }}>
        <RechartsBarChart
          width={300}
          height={200}
          data={chartData.occupancyComparisonData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={alpha(colors.textSecondary, 0.1)} />
          <XAxis dataKey="name" stroke={colors.textSecondary} />
          <YAxis 
            stroke={colors.textSecondary}
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
          />
          <RechartsTooltip 
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <Paper sx={{ p: 2, bgcolor: colors.glass, borderRadius: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                      {label}
                    </Typography>
                    <Typography variant="body2">
                      Occupancy: {data.occupancy}%
                    </Typography>
                    <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                      {data.bookings} bookings / {data.rooms} rooms
                    </Typography>
                  </Paper>
                );
              }
              return null;
            }}
          />
          <Bar 
            dataKey="occupancy" 
            radius={[4, 4, 0, 0]}
          >
            {chartData.occupancyComparisonData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList 
              dataKey="occupancy" 
              position="top" 
              formatter={(value) => `${value}%`}
              fill={colors.textPrimary}
              fontSize={12}
            />
          </Bar>
        </RechartsBarChart>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 2 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="caption" sx={{ color: colors.textSecondary, display: 'block' }}>
            A/C Rooms
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700, color: colors.acColor }}>
            {chartData.occupancyComparisonData[0]?.bookings || 0} bookings
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="caption" sx={{ color: colors.textSecondary, display: 'block' }}>
            Non-A/C Rooms
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700, color: colors.nonAcColor }}>
            {chartData.occupancyComparisonData[1]?.bookings || 0} bookings
          </Typography>
        </Box>
      </Box>
    </GlassCard>
  );

  // 5. Average Price Comparison
  const PriceComparisonChart = () => (
    <GlassCard sx={{ p: 3, borderRadius: 3, height: 300 }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 900, color: colors.textPrimary }}>
        Average Price per Night
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60%', flexWrap: 'wrap', gap: 2 }}>
        {chartData.priceComparisonData.map((item, index) => (
          <Box 
            key={index} 
            sx={{ 
              textAlign: 'center', 
              p: 2,
              borderRadius: 2,
              bgcolor: alpha(item.color, 0.1),
              border: `2px solid ${alpha(item.color, 0.3)}`,
              minWidth: 120,
              flex: 1,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
              {item.name.includes('A/C') ? (
                <AcUnit sx={{ color: item.color, fontSize: 24, mr: 1 }} />
              ) : item.name.includes('Non-A/C') ? (
                <PowerOff sx={{ color: item.color, fontSize: 24, mr: 1 }} />
              ) : item.name.includes('Single') ? (
                <Person sx={{ color: item.color, fontSize: 24, mr: 1 }} />
              ) : (
                <People sx={{ color: item.color, fontSize: 24, mr: 1 }} />
              )}
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: item.color }}>
                {item.name}
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 900, color: item.color }}>
              ${item.price}
            </Typography>
            <Typography variant="caption" sx={{ color: colors.textSecondary }}>
              per night
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Chip 
          label={`Price Difference: $${Math.abs(chartData.priceComparisonData[0]?.price - chartData.priceComparisonData[1]?.price || 0)}`}
          color="primary"
          variant="outlined"
          sx={{ fontWeight: 600 }}
        />
      </Box>
    </GlassCard>
  );

  // 6. Revenue Forecast Chart with Prediction
  const RevenueForecastChart = () => (
    <GlassCard sx={{ p: 3, borderRadius: 3, height: 400 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 900, color: colors.textPrimary, mb: 0.5 }}>
            Revenue Forecast with AI Prediction
          </Typography>
          <Typography variant="caption" sx={{ color: colors.textSecondary }}>
            Actual vs Predicted Revenue with Confidence Intervals
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Chip 
            icon={<AutoGraph />} 
            label="AI Powered" 
            size="small"
            sx={{ 
              bgcolor: alpha(colors.gold, 0.1), 
              color: colors.gold,
              border: `1px solid ${alpha(colors.gold, 0.2)}`,
            }}
          />
          <Switch 
            size="small" 
            checked={predictiveMode}
            onChange={(e) => setPredictiveMode(e.target.checked)}
            color="primary"
          />
        </Box>
      </Box>
      
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData.revenueData}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={alpha(colors.textSecondary, 0.1)}
              strokeOpacity={0.5}
            />
            <XAxis 
              dataKey="month" 
              stroke={colors.textSecondary}
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: alpha(colors.textSecondary, 0.2) }}
            />
            <YAxis 
              stroke={colors.textSecondary}
              fontSize={12}
              tickFormatter={(value) => `$${(value/1000).toFixed(0)}K`}
              tickLine={false}
              axisLine={{ stroke: alpha(colors.textSecondary, 0.2) }}
            />
            <RechartsTooltip 
              content={<CustomTooltip colors={colors} />}
              cursor={{ stroke: alpha(colors.brown, 0.3), strokeWidth: 1 }}
            />
            <Legend />
            
            {/* Target Line */}
            <ReferenceLine 
              y={75000} 
              stroke={colors.error} 
              strokeDasharray="3 3"
              strokeWidth={2}
              label={{
                value: 'Target',
                position: 'right',
                fill: colors.error,
                fontSize: 12,
              }}
            />
            
            {/* Actual Revenue Area */}
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="transparent"
              fill={alpha(colors.gold, 0.2)}
              fillOpacity={0.3}
            />
            
            {/* Actual Revenue Line */}
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke={colors.gold}
              strokeWidth={4}
              dot={{ 
                fill: colors.gold, 
                strokeWidth: 2, 
                r: 4,
                stroke: colors.white 
              }}
              activeDot={{ 
                r: 8, 
                fill: colors.gold,
                stroke: colors.white,
                strokeWidth: 2,
              }}
              name="Actual Revenue"
            />
            
            {/* Predicted Revenue Line */}
            {predictiveMode && (
              <Line 
                type="monotone" 
                dataKey="predicted" 
                stroke={colors.brown}
                strokeWidth={3}
                strokeDasharray="5 5"
                dot={{ 
                  fill: colors.brown, 
                  strokeWidth: 2, 
                  r: 3,
                  stroke: colors.white 
                }}
                name="Predicted"
              />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </Box>
    </GlassCard>
  );

  // 7. Interactive Pie Chart
  const InteractivePieChart = () => (
    <GlassCard sx={{ p: 3, borderRadius: 3, height: 400 }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 900, color: colors.textPrimary }}>
        Detailed Room Type Distribution
      </Typography>
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={chartData.detailedRoomDistribution}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
              outerRadius={100}
              innerRadius={40}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={2}
              stroke={colors.surface}
              strokeWidth={2}
            >
              {chartData.detailedRoomDistribution.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                  strokeWidth={2}
                  stroke={colors.surface}
                />
              ))}
            </Pie>
            <RechartsTooltip 
              content={<CustomTooltip colors={colors} />}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value, entry) => (
                <span style={{ color: colors.textPrimary, fontSize: '12px' }}>
                  {value}
                </span>
              )}
            />
          </RechartsPieChart>
        </ResponsiveContainer>
      </Box>
    </GlassCard>
  );

  // 8. Room Type Analytics Dashboard
  const RoomTypeAnalyticsDashboard = () => (
    <Box>
      <GlassCard sx={{ p: 3, mb: 4, borderRadius: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h3" sx={{ 
                fontWeight: 900,
                mb: 1,
                background: `linear-gradient(135deg, ${colors.acColor} 0%, ${colors.nonAcColor} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Room Type Analytics
              </Typography>
              <Typography variant="body1" sx={{ color: colors.textSecondary }}>
                A/C vs Non-A/C room performance comparison and insights
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'flex-end' }}>
              <Button
                variant="outlined"
                startIcon={<Refresh />}
                onClick={fetchDashboardData}
                sx={{
                  borderColor: alpha(colors.brown, 0.3),
                  color: colors.brown,
                  '&:hover': {
                    borderColor: colors.brown,
                    bgcolor: alpha(colors.brown, 0.1),
                  }
                }}
              >
                Refresh Data
              </Button>
              <Button
                variant="contained"
                startIcon={<Download />}
                sx={{
                  background: `linear-gradient(135deg, ${colors.acColor} 0%, ${colors.nonAcColor} 100%)`,
                  '&:hover': {
                    background: `linear-gradient(135deg, ${colors.acColor}80 0%, ${colors.nonAcColor}80 100%)`,
                  }
                }}
              >
                Export Report
              </Button>
            </Box>
          </Grid>
        </Grid>
      </GlassCard>

      {/* Room Type Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ 
            p: 3, 
            borderRadius: 3,
            height: '100%',
            bgcolor: alpha(colors.acColor, 0.1),
            border: `2px solid ${alpha(colors.acColor, 0.3)}`,
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <AcUnit sx={{ color: colors.acColor, fontSize: 24, mr: 1 }} />
              <Typography variant="h6" sx={{ color: colors.acColor, fontWeight: 700 }}>
                A/C Rooms
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ 
              fontWeight: 900, 
              color: colors.acColor,
              mb: 1,
              fontSize: '2.5rem',
            }}>
              {chartData.roomDistribution[0]?.value || 0}
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textSecondary }}>
              {chartData.roomDistribution[0]?.percentage || 0}% of total inventory
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ 
            p: 3, 
            borderRadius: 3,
            height: '100%',
            bgcolor: alpha(colors.nonAcColor, 0.1),
            border: `2px solid ${alpha(colors.nonAcColor, 0.3)}`,
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PowerOff sx={{ color: colors.nonAcColor, fontSize: 24, mr: 1 }} />
              <Typography variant="h6" sx={{ color: colors.nonAcColor, fontWeight: 700 }}>
                Non-A/C Rooms
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ 
              fontWeight: 900, 
              color: colors.nonAcColor,
              mb: 1,
              fontSize: '2.5rem',
            }}>
              {chartData.roomDistribution[1]?.value || 0}
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textSecondary }}>
              {chartData.roomDistribution[1]?.percentage || 0}% of total inventory
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ 
            p: 3, 
            borderRadius: 3,
            height: '100%',
            bgcolor: alpha(colors.success, 0.1),
            border: `2px solid ${alpha(colors.success, 0.3)}`,
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <TrendingUp sx={{ color: colors.success, fontSize: 24, mr: 1 }} />
              <Typography variant="h6" sx={{ color: colors.success, fontWeight: 700 }}>
                Total Revenue
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ 
              fontWeight: 900, 
              color: colors.success,
              mb: 1,
              fontSize: '2rem',
            }}>
              ${(chartData.revenueComparisonData[0]?.value + chartData.revenueComparisonData[1]?.value || 0).toLocaleString()}
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textSecondary }}>
              Combined revenue from all rooms
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ 
            p: 3, 
            borderRadius: 3,
            height: '100%',
            bgcolor: alpha(colors.gold, 0.1),
            border: `2px solid ${alpha(colors.gold, 0.3)}`,
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocalHotel sx={{ color: colors.gold, fontSize: 24, mr: 1 }} />
              <Typography variant="h6" sx={{ color: colors.gold, fontWeight: 700 }}>
                Avg Occupancy
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ 
              fontWeight: 900, 
              color: colors.gold,
              mb: 1,
              fontSize: '2rem',
            }}>
              {Math.round(
                (chartData.occupancyComparisonData[0]?.occupancy + chartData.occupancyComparisonData[1]?.occupancy) / 2 || 0
              )}%
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textSecondary }}>
              Average occupancy rate
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Main Comparison Charts */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={6}>
          <ACTypeDistributionChart />
        </Grid>
        <Grid item xs={12} lg={6}>
          <BookingTypeComparisonChart />
        </Grid>
      </Grid>

      {/* Detailed Metrics */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <RevenueByTypeChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <OccupancyByTypeChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <PriceComparisonChart />
        </Grid>
      </Grid>

      {/* Insights Section */}
      <GlassCard sx={{ p: 3, mt: 4, borderRadius: 3 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 900, color: colors.textPrimary }}>
          Room Type Performance Insights
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ 
              p: 3, 
              borderRadius: 2, 
              bgcolor: alpha(colors.acColor, 0.1),
              border: `1px solid ${alpha(colors.acColor, 0.3)}`,
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <AcUnit sx={{ color: colors.acColor, fontSize: 32 }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: colors.textPrimary }}>
                    A/C Room Performance
                  </Typography>
                  <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                    Higher revenue, better occupancy
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ color: colors.textSecondary }}>
                • Generates ${chartData.revenueComparisonData[0]?.value?.toLocaleString() || '0'} in revenue
                <br />
                • {chartData.occupancyComparisonData[0]?.occupancy || 0}% occupancy rate
                <br />
                • Average price: ${chartData.priceComparisonData[0]?.price || 0}/night
                <br />
                • {chartData.roomDistribution[0]?.percentage || 0}% of total rooms
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ 
              p: 3, 
              borderRadius: 2, 
              bgcolor: alpha(colors.nonAcColor, 0.1),
              border: `1px solid ${alpha(colors.nonAcColor, 0.3)}`,
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <PowerOff sx={{ color: colors.nonAcColor, fontSize: 32 }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: colors.textPrimary }}>
                    Non-A/C Room Performance
                  </Typography>
                  <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                    Budget-friendly option
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ color: colors.textSecondary }}>
                • Generates ${chartData.revenueComparisonData[1]?.value?.toLocaleString() || '0'} in revenue
                <br />
                • {chartData.occupancyComparisonData[1]?.occupancy || 0}% occupancy rate
                <br />
                • Average price: ${chartData.priceComparisonData[1]?.price || 0}/night
                <br />
                • {chartData.roomDistribution[1]?.percentage || 0}% of total rooms
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 3, p: 2, bgcolor: alpha(colors.info, 0.1), borderRadius: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.info, mb: 1 }}>
            💡 Recommendation:
          </Typography>
          <Typography variant="body2" sx={{ color: colors.textSecondary }}>
            {chartData.roomDistribution[0]?.percentage > chartData.roomDistribution[1]?.percentage 
              ? 'Consider adding more Non-A/C rooms to cater to budget-conscious guests and increase overall occupancy.'
              : 'Consider adding more A/C rooms to increase average revenue per booking and cater to premium guests.'
            }
          </Typography>
        </Box>
      </GlassCard>
    </Box>
  );

  // Advanced Analytics Dashboard Component
  const AdvancedAnalyticsDashboard = () => (
    <Box>
      {/* Dashboard Header with Controls */}
      <GlassCard sx={{ p: 3, mb: 4, borderRadius: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h3" sx={{ 
                fontWeight: 900,
                mb: 1,
                background: `linear-gradient(135deg, ${colors.brown} 0%, ${colors.gold} 50%, ${colors.chartBlue} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Advanced Analytics Suite
              </Typography>
              <Typography variant="body1" sx={{ color: colors.textSecondary }}>
                AI-powered insights, predictive analytics, and real-time data visualization
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'flex-end' }}>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel sx={{ color: colors.textSecondary }}>Time Range</InputLabel>
                <Select
                  value={timeRange}
                  label="Time Range"
                  onChange={(e) => setTimeRange(e.target.value)}
                  sx={{ 
                    bgcolor: alpha(colors.surface, 0.8),
                    color: colors.textPrimary,
                  }}
                >
                  <MenuItem value="day">Daily</MenuItem>
                  <MenuItem value="week">Weekly</MenuItem>
                  <MenuItem value="month">Monthly</MenuItem>
                  <MenuItem value="quarter">Quarterly</MenuItem>
                  <MenuItem value="year">Yearly</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel sx={{ color: colors.textSecondary }}>Chart Type</InputLabel>
                <Select
                  value={chartType}
                  label="Chart Type"
                  onChange={(e) => setChartType(e.target.value)}
                  sx={{ 
                    bgcolor: alpha(colors.surface, 0.8),
                    color: colors.textPrimary,
                  }}
                >
                  <MenuItem value="line">Line</MenuItem>
                  <MenuItem value="bar">Bar</MenuItem>
                  <MenuItem value="area">Area</MenuItem>
                  <MenuItem value="scatter">Scatter</MenuItem>
                  <MenuItem value="radar">Radar</MenuItem>
                </Select>
              </FormControl>
              
              <FormControlLabel
                control={
                  <Switch
                    checked={predictiveMode}
                    onChange={(e) => setPredictiveMode(e.target.checked)}
                    color="primary"
                  />
                }
                label="AI Predictions"
                sx={{ color: colors.textSecondary }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={animationEnabled}
                    onChange={(e) => setAnimationEnabled(e.target.checked)}
                    color="secondary"
                  />
                }
                label="Animations"
                sx={{ color: colors.textSecondary }}
              />
              
              <Button
                variant="contained"
                startIcon={<Download />}
                sx={{
                  background: `linear-gradient(135deg, ${colors.brown} 0%, ${colors.gold} 100%)`,
                  '&:hover': {
                    background: `linear-gradient(135deg, ${colors.brownDark} 0%, ${colors.goldDark} 100%)`,
                  }
                }}
              >
                Export Report
              </Button>
            </Box>
          </Grid>
        </Grid>
      </GlassCard>

      {/* Show Room Type Analytics when tab is 8 */}
      {activeTab === 8 ? (
        <RoomTypeAnalyticsDashboard />
      ) : (
        <>
          {/* KPI Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                title="Revenue Forecast"
                value="$284.5K"
                icon={<TrendingUp />}
                color={colors.success}
                change={12.5}
                subtitle="Next 30 days"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                title="Occupancy Rate"
                value="92.3%"
                icon={<LocalHotel />}
                color={colors.gold}
                change={8.2}
                subtitle="Peak season"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                title="Guest Satisfaction"
                value="4.8"
                icon={<Star />}
                color={colors.terracotta}
                change={2.1}
                subtitle="Out of 5 stars"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                title="Predictive Accuracy"
                value="94.7%"
                icon={<Psychology />}
                color={colors.chartBlue}
                change={1.4}
                subtitle="AI Model"
              />
            </Grid>
          </Grid>

          {/* Main Charts Grid */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} lg={8}>
              <RevenueForecastChart />
            </Grid>
            <Grid item xs={12} lg={4}>
              <ACTypeDistributionChart />
            </Grid>
          </Grid>

          {/* Secondary Charts Grid */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <BookingTypeComparisonChart />
            </Grid>
            <Grid item xs={12} md={6}>
              <InteractivePieChart />
            </Grid>
          </Grid>

          {/* Additional Insights Section */}
          <GlassCard sx={{ p: 3, mt: 4, borderRadius: 3 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 900, color: colors.textPrimary }}>
              AI Insights & Recommendations
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3, borderRadius: 2, bgcolor: alpha(colors.success, 0.1) }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Insights sx={{ color: colors.success, fontSize: 32 }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: colors.textPrimary }}>
                        Peak Revenue Hours
                      </Typography>
                      <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                        AI detected pattern
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{ color: colors.textSecondary }}>
                    Revenue peaks between 6-9 PM. Consider dynamic pricing and additional staff during these hours.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3, borderRadius: 2, bgcolor: alpha(colors.warning, 0.1) }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <CompareArrows sx={{ color: colors.warning, fontSize: 32 }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: colors.textPrimary }}>
                        Occupancy Trend
                      </Typography>
                      <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                        Weekly pattern detected
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{ color: colors.textSecondary }}>
                    Weekends show 35% higher occupancy. Adjust marketing spend accordingly.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3, borderRadius: 2, bgcolor: alpha(colors.info, 0.1) }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <AutoGraph sx={{ color: colors.info, fontSize: 32 }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: colors.textPrimary }}>
                        Revenue Prediction
                      </Typography>
                      <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                        Next quarter forecast
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{ color: colors.textSecondary }}>
                    Predicted 15% revenue increase next quarter. Consider expanding capacity.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </GlassCard>
        </>
      )}
    </Box>
  );

  // Quick Actions Speed Dial
  const QuickActionsSpeedDial = () => (
    <SpeedDial
      ariaLabel="Quick Actions"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction
        icon={<Download />}
        tooltipTitle="Export Report"
        onClick={() => {/* Export logic */}}
      />
      <SpeedDialAction
        icon={<Refresh />}
        tooltipTitle="Refresh Data"
        onClick={fetchDashboardData}
      />
      <SpeedDialAction
        icon={<FilterList />}
        tooltipTitle="Filter Data"
        onClick={() => {/* Filter logic */}}
      />
      <SpeedDialAction
        icon={<Add />}
        tooltipTitle="Add New"
        onClick={() => setRoomDialogOpen(true)}
      />
    </SpeedDial>
  );

  // Sidebar
  const drawer = (
    <Box sx={{ 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: `linear-gradient(180deg, ${colors.surface} 0%, ${alpha(colors.background, 0.95)} 100%)`,
      borderRight: `1px solid ${alpha(colors.brown, 0.1)}`,
      boxShadow: `0 0 60px ${alpha(colors.brown, 0.05)}`,
    }}>
      {/* Logo */}
      <Box sx={{ 
        p: 3,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        borderBottom: `1px solid ${alpha(colors.brown, 0.1)}`,
      }}>
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            bgcolor: alpha(colors.brown, 0.1),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: colors.brown,
            border: `2px solid ${alpha(colors.brown, 0.2)}`,
            boxShadow: `0 4px 20px ${alpha(colors.brown, 0.2)}`,
          }}>
            <Diamond sx={{ fontSize: 28 }} />
          </Box>
        </motion.div>
        <Box>
          <Typography variant="h6" sx={{ 
            fontWeight: 900,
            background: `linear-gradient(135deg, ${colors.brown} 0%, ${colors.gold} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '1.25rem',
          }}>
            GOLDENBROWN
          </Typography>
          <Typography variant="caption" sx={{ 
            color: colors.textSecondary,
            letterSpacing: 3,
            fontWeight: 300,
            fontSize: '0.65rem',
          }}>
            HAVEN
          </Typography>
        </Box>
      </Box>
      
      {/* User Profile */}
      <Box sx={{ 
        p: 3,
        borderBottom: `1px solid ${alpha(colors.brown, 0.1)}`,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            sx={{
              width: 56,
              height: 56,
              border: `3px solid ${alpha(colors.brown, 0.3)}`,
              bgcolor: alpha(colors.brown, 0.1),
              boxShadow: `0 4px 20px ${alpha(colors.brown, 0.2)}`,
            }}
          >
            <Person sx={{ fontSize: 32 }} />
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" sx={{ 
              fontWeight: 700,
              color: colors.textPrimary,
              fontSize: '1.1rem',
            }}>
              {profileData?.name || 'Admin User'}
            </Typography>
            <Typography variant="caption" sx={{ 
              color: colors.gold,
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}>
              <Star sx={{ fontSize: 12 }} />
              Administrator
            </Typography>
            {profileData?.email && (
              <Typography variant="caption" sx={{ 
                color: colors.textSecondary,
                display: 'block',
                mt: 0.5,
                fontSize: '0.75rem',
              }}>
                {profileData.email}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
      
      {/* Navigation */}
      <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
        <List>
          {sidebarItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  selected={activeTab === item.id}
                  onClick={() => handleTabChange(null, item.id)}
                  sx={{
                    borderRadius: 2,
                    bgcolor: activeTab === item.id ? alpha(item.color, 0.15) : 'transparent',
                    borderLeft: activeTab === item.id ? `4px solid ${item.color}` : '4px solid transparent',
                    py: 1.5,
                    '&:hover': {
                      bgcolor: alpha(item.color, 0.1),
                      transform: 'translateX(4px)',
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <ListItemIcon sx={{ 
                    minWidth: 40,
                    color: activeTab === item.id ? item.color : colors.textSecondary,
                  }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.name}
                    primaryTypographyProps={{
                      fontWeight: activeTab === item.id ? 700 : 500,
                      color: activeTab === item.id ? item.color : colors.textPrimary,
                      fontSize: '0.95rem',
                    }}
                  />
                  {activeTab === item.id && (
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: item.color,
                        ml: 1,
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>
      
      {/* Theme Toggle */}
      <Box sx={{ p: 2, borderTop: `1px solid ${alpha(colors.brown, 0.1)}` }}>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            fullWidth
            startIcon={darkMode ? <WbSunny /> : <NightsStay />}
            onClick={() => setDarkMode(!darkMode)}
            sx={{
              justifyContent: 'flex-start',
              color: colors.textPrimary,
              bgcolor: alpha(colors.brown, 0.08),
              borderRadius: 2,
              py: 1.5,
              '&:hover': {
                bgcolor: alpha(colors.brown, 0.15),
              }
            }}
          >
            {darkMode ? 'Switch to Light' : 'Switch to Dark'}
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
  
  // Render Content based on Active Tab
  const renderContent = () => {
    switch (activeTab) {
      case 0: // Dashboard
        return (
          <Box>
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography variant="h3" sx={{ 
                  fontWeight: 900,
                  mb: 1,
                  background: `linear-gradient(135deg, ${colors.brown} 0%, ${colors.gold} 50%, ${colors.terracotta} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}>
                  Welcome back, {profileData?.name?.split(' ')[0] || 'Admin'}! 👑
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: colors.textSecondary,
                  maxWidth: '600px',
                  fontSize: '1.1rem',
                }}>
                  Here's what's happening with your luxury hotel today. Manage everything from one dashboard.
                </Typography>
              </Box>
            </motion.div>
            
            {/* Stats */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6} lg={3}>
                <StatCard
                  title="Total Revenue"
                  value={`$${analyticsData.totalRevenue}`}
                  icon={<AttachMoney />}
                  color={colors.brown}
                  change={12.5}
                  subtitle="This month"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <StatCard
                  title="Total Bookings"
                  value={analyticsData.totalBookings}
                  icon={<Receipt />}
                  color={colors.gold}
                  change={8.2}
                  subtitle="Active reservations"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <StatCard
                  title="Occupancy Rate"
                  value={`${analyticsData.occupancyRate}%`}
                  icon={<LocalHotel />}
                  color={colors.copper}
                  change={-3.4}
                  subtitle="Current capacity"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <StatCard
                  title="Guest Rating"
                  value={analyticsData.avgRating}
                  icon={<Star />}
                  color={colors.terracotta}
                  change={2.1}
                  subtitle="Out of 5 stars"
                />
              </Grid>
            </Grid>
            
            {/* Advanced Charts */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} lg={8}>
                <RevenueForecastChart />
              </Grid>
              <Grid item xs={12} lg={4}>
                <ACTypeDistributionChart />
              </Grid>
            </Grid>
            
            {/* Recent Bookings & Quick Actions */}
            <Grid container spacing={3}>
              <Grid item xs={12} lg={8}>
                <Paper sx={{ p: 3, borderRadius: 3, height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary }}>
                      Recent Bookings
                    </Typography>
                    <Button
                      startIcon={<Refresh />}
                      onClick={fetchDashboardData}
                      sx={{ 
                        color: colors.brown,
                        '&:hover': { bgcolor: alpha(colors.brown, 0.1) }
                      }}
                    >
                      Refresh
                    </Button>
                  </Box>
                  
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Guest</TableCell>
                          <TableCell>Contact</TableCell>
                          <TableCell>Room</TableCell>
                          <TableCell>Dates</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {bookings.slice(0, 5).map((booking) => (
                          <TableRow key={booking.id} hover>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar sx={{ width: 32, height: 32, bgcolor: alpha(colors.brown, 0.1) }}>
                                  {booking.user?.name?.charAt(0) || 'G'}
                                </Avatar>
                                <Box>
                                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    {booking.user?.name || 'Guest'}
                                  </Typography>
                                  <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                                    ID: {booking.bookingConfirmationCode}
                                  </Typography>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box sx={{ display: 'flex', gap: 1 }}>
                                <IconButton 
                                  size="small" 
                                  onClick={() => handleContactGuest(booking.phoneNumber)}
                                  sx={{ color: colors.success }}
                                >
                                  <Phone fontSize="small" />
                                </IconButton>
                                <IconButton 
                                  size="small" 
                                  onClick={() => handleWhatsAppGuest(booking.phoneNumber)}
                                  sx={{ color: '#25D366' }}
                                >
                                  <WhatsApp fontSize="small" />
                                </IconButton>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Chip 
                                label={booking.room?.roomType || 'N/A'} 
                                size="small"
                                sx={{ 
                                  bgcolor: alpha(colors.brown, 0.1), 
                                  color: colors.brown,
                                  fontWeight: 600,
                                }}
                              />
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2">
                                {booking.checkInDate ? new Date(booking.checkInDate).toLocaleDateString('short') : 'N/A'}
                              </Typography>
                              <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                                to {booking.checkOutDate ? new Date(booking.checkOutDate).toLocaleDateString('short') : 'N/A'}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Chip 
                                icon={<CheckCircle sx={{ fontSize: 14 }} />}
                                label="Confirmed"
                                size="small"
                                sx={{ 
                                  bgcolor: alpha(colors.success, 0.1), 
                                  color: colors.success,
                                  fontWeight: 600,
                                }}
                              />
                            </TableCell>
                            <TableCell>
                              <IconButton size="small" sx={{ color: colors.brown }}>
                                <Visibility fontSize="small" />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
              
              <Grid item xs={12} lg={4}>
                <Paper sx={{ p: 3, borderRadius: 3, height: '100%' }}>
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: colors.textPrimary }}>
                    Quick Actions
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<Add />}
                      onClick={() => setRoomDialogOpen(true)}
                      sx={{
                        background: `linear-gradient(135deg, ${colors.brown} 0%, ${colors.gold} 100%)`,
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 600,
                        '&:hover': {
                          background: `linear-gradient(135deg, ${colors.brownDark} 0%, ${colors.goldDark} 100%)`,
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s',
                      }}
                    >
                      Add New Room
                    </Button>
                    
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<People />}
                      onClick={() => setActiveTab(3)}
                      sx={{
                        borderColor: alpha(colors.brown, 0.3),
                        color: colors.brown,
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 600,
                        '&:hover': {
                          borderColor: colors.brown,
                          bgcolor: alpha(colors.brown, 0.08),
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s',
                      }}
                    >
                      Manage Guests
                    </Button>
                    
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<Analytics />}
                      onClick={() => setActiveTab(4)}
                      sx={{
                        borderColor: alpha(colors.chartBlue, 0.3),
                        color: colors.chartBlue,
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 600,
                        '&:hover': {
                          borderColor: colors.chartBlue,
                          bgcolor: alpha(colors.chartBlue, 0.08),
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s',
                      }}
                    >
                      View Analytics
                    </Button>
                    
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<ContactPhone />}
                      onClick={() => setActiveTab(5)}
                      sx={{
                        borderColor: alpha(colors.success, 0.3),
                        color: colors.success,
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 600,
                        '&:hover': {
                          borderColor: colors.success,
                          bgcolor: alpha(colors.success, 0.08),
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s',
                      }}
                    >
                      Contact Center
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        );
        
      case 1: // Bookings - REMOVED DELETE BUTTON
        return (
          <Box>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
                <Box>
                  <Typography variant="h4" sx={{ 
                    fontWeight: 900,
                    mb: 1,
                    background: `linear-gradient(135deg, ${colors.brown} 0%, ${colors.gold} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    Booking Management
                  </Typography>
                  <Typography variant="body1" sx={{ color: colors.textSecondary }}>
                    Manage all hotel bookings and reservations
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <TextField
                    size="small"
                    placeholder="Search bookings..."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search sx={{ color: colors.textSecondary }} />
                        </InputAdornment>
                      ),
                      sx: { borderRadius: 2 }
                    }}
                    sx={{ width: 250 }}
                  />
                  <Button
                    variant="contained"
                    startIcon={<Download />}
                    sx={{
                      background: `linear-gradient(135deg, ${colors.brown} 0%, ${colors.gold} 100%)`,
                      '&:hover': {
                        background: `linear-gradient(135deg, ${colors.brownDark} 0%, ${colors.goldDark} 100%)`,
                      }
                    }}
                  >
                    Export
                  </Button>
                </Box>
              </Box>
              
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Booking Details</TableCell>
                      <TableCell>Guest Information</TableCell>
                      <TableCell>Room</TableCell>
                      <TableCell>Stay Duration</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bookings
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((booking) => {
                        const checkIn = booking.checkInDate ? new Date(booking.checkInDate) : null;
                        const checkOut = booking.checkOutDate ? new Date(booking.checkOutDate) : null;
                        const nights = checkIn && checkOut ? Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24)) : 0;
                        const amount = (parseFloat(booking.room?.roomPrice) || 0) * nights;
                        
                        return (
                          <TableRow key={booking.id} hover>
                            <TableCell>
                              <Box>
                                <Typography variant="body2" sx={{ fontWeight: 700, color: colors.textPrimary }}>
                                  #{booking.bookingConfirmationCode}
                                </Typography>
                                <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                                  Booked: {booking.checkInDate ? new Date(booking.checkInDate).toLocaleDateString() : 'N/A'}
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar sx={{ width: 40, height: 40, bgcolor: alpha(colors.brown, 0.1) }}>
                                  {booking.user?.name?.charAt(0) || 'G'}
                                </Avatar>
                                <Box>
                                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    {booking.user?.name || 'Guest'}
                                  </Typography>
                                  <Typography variant="caption" sx={{ color: colors.textSecondary, display: 'block' }}>
                                    {booking.user?.email}
                                  </Typography>
                                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                                    <Call sx={{ fontSize: 12, color: colors.textSecondary }} />
                                    <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                                      {booking.phoneNumber || 'No phone'}
                                    </Typography>
                                  </Box>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Chip 
                                label={booking.room?.roomType || 'N/A'} 
                                sx={{ 
                                  bgcolor: alpha(colors.gold, 0.1), 
                                  color: colors.goldDark,
                                  fontWeight: 600,
                                }}
                              />
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                {nights} night{nights > 1 ? 's' : ''}
                              </Typography>
                              <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                                {checkIn ? checkIn.toLocaleDateString('short') : 'N/A'} - {checkOut ? checkOut.toLocaleDateString('short') : 'N/A'}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2" sx={{ fontWeight: 700, color: colors.brown }}>
                                ${amount.toFixed(2)}
                              </Typography>
                              <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                                ${booking.room?.roomPrice || '0'}/night
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Chip 
                                icon={<CheckCircle sx={{ fontSize: 14 }} />}
                                label="Confirmed"
                                sx={{ 
                                  bgcolor: alpha(colors.success, 0.1), 
                                  color: colors.success,
                                  fontWeight: 600,
                                }}
                              />
                            </TableCell>
                            <TableCell>
                              <Box sx={{ display: 'flex', gap: 1 }}>
                                <IconButton 
                                  size="small" 
                                  onClick={() => handleContactGuest(booking.phoneNumber)}
                                  disabled={!booking.phoneNumber}
                                  sx={{ 
                                    color: booking.phoneNumber ? colors.success : colors.textSecondary,
                                    bgcolor: alpha(booking.phoneNumber ? colors.success : colors.textSecondary, 0.1),
                                    '&:hover': booking.phoneNumber ? { bgcolor: alpha(colors.success, 0.2) } : {},
                                  }}
                                >
                                  <Phone fontSize="small" />
                                </IconButton>
                                <IconButton 
                                  size="small" 
                                  onClick={() => handleWhatsAppGuest(booking.phoneNumber)}
                                  disabled={!booking.phoneNumber}
                                  sx={{ 
                                    color: booking.phoneNumber ? '#25D366' : colors.textSecondary,
                                    bgcolor: alpha(booking.phoneNumber ? '#25D366' : colors.textSecondary, 0.1),
                                    '&:hover': booking.phoneNumber ? { bgcolor: alpha('#25D366', 0.2) } : {},
                                  }}
                                >
                                  <WhatsApp fontSize="small" />
                                </IconButton>
                                {/* REMOVED DELETE BUTTON */}
                              </Box>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              
              <TablePagination
                component="div"
                count={bookings.length}
                page={page}
                onPageChange={(event, newPage) => setPage(newPage)}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={(event) => {
                  setRowsPerPage(parseInt(event.target.value, 10));
                  setPage(0);
                }}
                sx={{ borderTop: `1px solid ${alpha(colors.brown, 0.1)}`, mt: 2 }}
              />
            </Paper>
          </Box>
        );
        
      case 2: // Rooms
        return (
          <Box>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
                <Box>
                  <Typography variant="h4" sx={{ 
                    fontWeight: 900,
                    mb: 1,
                    background: `linear-gradient(135deg, ${colors.brown} 0%, ${colors.gold} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    Room Management
                  </Typography>
                  <Typography variant="body1" sx={{ color: colors.textSecondary }}>
                    Manage all hotel rooms and suites
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  startIcon={<Add />}
                  onClick={() => setRoomDialogOpen(true)}
                  sx={{
                    background: `linear-gradient(135deg, ${colors.brown} 0%, ${colors.gold} 100%)`,
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    '&:hover': {
                      background: `linear-gradient(135deg, ${colors.brownDark} 0%, ${colors.goldDark} 100%)`,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s',
                  }}
                >
                  Add New Room
                </Button>
              </Box>
              
              <Grid container spacing={3}>
                {rooms.map((room) => (
                  <Grid item xs={12} sm={6} md={4} key={room.id}>
                    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                      <Paper sx={{ 
                        p: 3, 
                        borderRadius: 3,
                        height: '100%',
                        border: `2px solid ${alpha(colors.brown, 0.1)}`,
                        background: `linear-gradient(145deg, ${alpha(colors.surface, 0.9)} 0%, ${alpha(colors.background, 0.5)} 100%)`,
                        backdropFilter: 'blur(10px)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          borderColor: colors.brown,
                          boxShadow: `0 20px 60px ${alpha(colors.brown, 0.15)}`,
                        }
                      }}>
                        {/* Room Type Badge */}
                        <Box sx={{ 
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          zIndex: 1,
                        }}>
                          <Chip 
                            label={room.roomType} 
                            sx={{ 
                              bgcolor: alpha(colors.brown, 0.15), 
                              color: colors.brown,
                              fontWeight: 700,
                              fontSize: '0.75rem',
                              border: `1px solid ${alpha(colors.brown, 0.2)}`,
                            }}
                          />
                        </Box>
                        
                        {/* AC Type Badge */}
                        {room.acType && (
                          <Box sx={{ 
                            position: 'absolute',
                            top: 16,
                            left: 16,
                            zIndex: 1,
                          }}>
                            <Chip 
                              label={room.acType}
                              size="small"
                              sx={{ 
                                bgcolor: room.acType.toLowerCase().includes('ac') ? alpha(colors.acColor, 0.15) : alpha(colors.nonAcColor, 0.15),
                                color: room.acType.toLowerCase().includes('ac') ? colors.acColor : colors.nonAcColor,
                                fontWeight: 700,
                                fontSize: '0.7rem',
                                border: `1px solid ${room.acType.toLowerCase().includes('ac') ? alpha(colors.acColor, 0.2) : alpha(colors.nonAcColor, 0.2)}`,
                              }}
                            />
                          </Box>
                        )}
                        
                        {/* Room Image Placeholder */}
                        <Box sx={{
                          height: 180,
                          borderRadius: 2,
                          mb: 3,
                          bgcolor: alpha(colors.brown, 0.1),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          overflow: 'hidden',
                        }}>
                          <KingBed sx={{ fontSize: 80, color: alpha(colors.brown, 0.3) }} />
                          {room.roomPhotoUrl && (
                            <Box
                              component="img"
                              src={room.roomPhotoUrl}
                              sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                              }}
                              alt={room.roomType}
                            />
                          )}
                        </Box>
                        
                        {/* Room Details */}
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="h5" sx={{ 
                            fontWeight: 900,
                            color: colors.textPrimary,
                            mb: 1,
                            fontSize: '1.5rem',
                          }}>
                            ${room.roomPrice}
                            <Typography component="span" variant="body2" sx={{ 
                              color: colors.textSecondary, 
                              ml: 1,
                              fontSize: '0.9rem',
                            }}>
                              / night
                            </Typography>
                          </Typography>
                          
                          <Typography variant="body2" sx={{ 
                            color: colors.textSecondary,
                            mb: 2,
                            minHeight: 40,
                          }}>
                            {room.roomDescription || 'Luxurious room with premium amenities'}
                          </Typography>
                          
                          {/* Room Features */}
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                            <Chip 
                              icon={<People sx={{ fontSize: 14 }} />}
                              label={`${room.roomCapacity} Guests`}
                              size="small"
                              variant="outlined"
                              sx={{ 
                                borderColor: alpha(colors.gold, 0.3), 
                                color: colors.gold,
                                fontSize: '0.75rem',
                              }}
                            />
                            <Chip 
                              icon={<Wifi sx={{ fontSize: 14 }} />}
                              label="Free WiFi"
                              size="small"
                              variant="outlined"
                              sx={{ 
                                borderColor: alpha(colors.brown, 0.3), 
                                color: colors.brown,
                                fontSize: '0.75rem',
                              }}
                            />
                            {room.acType && (
                              <Chip 
                                icon={room.acType.toLowerCase().includes('ac') ? <AcUnit sx={{ fontSize: 14 }} /> : <PowerOff sx={{ fontSize: 14 }} />}
                                label={room.acType}
                                size="small"
                                variant="outlined"
                                sx={{ 
                                  borderColor: room.acType.toLowerCase().includes('ac') ? alpha(colors.acColor, 0.3) : alpha(colors.nonAcColor, 0.3),
                                  color: room.acType.toLowerCase().includes('ac') ? colors.acColor : colors.nonAcColor,
                                  fontSize: '0.75rem',
                                }}
                              />
                            )}
                          </Box>
                        </Box>
                        
                        {/* Action Buttons */}
                        <Box sx={{ 
                          display: 'flex', 
                          gap: 2,
                          borderTop: `1px solid ${alpha(colors.brown, 0.1)}`,
                          pt: 2,
                        }}>
                          <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<Edit />}
                            onClick={() => {
                              setSelectedRoom(room);
                              setEditMode(true);
                              setRoomForm({
                                roomType: room.roomType || '',
                                roomPrice: room.roomPrice || '',
                                roomCapacity: room.roomCapacity || '',
                                roomDescription: room.roomDescription || '',
                                acType: room.acType || '',
                                photo: null,
                              });
                              setRoomDialogOpen(true);
                            }}
                            sx={{
                              borderColor: alpha(colors.brown, 0.3),
                              color: colors.brown,
                              '&:hover': {
                                borderColor: colors.brown,
                                bgcolor: alpha(colors.brown, 0.05),
                              }
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<Delete />}
                            onClick={() => handleDeleteRoom(room.id)}
                            sx={{
                              borderColor: alpha(colors.error, 0.3),
                              color: colors.error,
                              '&:hover': {
                                borderColor: colors.error,
                                bgcolor: alpha(colors.error, 0.05),
                              }
                            }}
                          >
                            Delete
                          </Button>
                        </Box>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Box>
        );
        
      case 3: // Guests (Only regular users) - ADDED DELETE BUTTON
        return (
          <Box>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
                <Box>
                  <Typography variant="h4" sx={{ 
                    fontWeight: 900,
                    mb: 1,
                    background: `linear-gradient(135deg, ${colors.brown} 0%, ${colors.gold} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    Guest Management
                  </Typography>
                  <Typography variant="body1" sx={{ color: colors.textSecondary }}>
                    Manage hotel guests and their information
                  </Typography>
                </Box>
                <TextField
                  size="small"
                  placeholder="Search guests..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search sx={{ color: colors.textSecondary }} />
                      </InputAdornment>
                    ),
                    sx: { borderRadius: 2 }
                  }}
                  sx={{ width: 250 }}
                />
              </Box>
              
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Guest</TableCell>
                      <TableCell>Contact Information</TableCell>
                      <TableCell>Bookings</TableCell>
                      <TableCell>Last Stay</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {regularUsers.map((user) => {
                      const userBookings = bookings.filter(b => b.user?.id === user.id);
                      const lastBooking = userBookings.length > 0 
                        ? userBookings.reduce((latest, current) => {
                            const latestDate = new Date(latest.checkInDate);
                            const currentDate = new Date(current.checkInDate);
                            return currentDate > latestDate ? current : latest;
                          })
                        : null;
                      
                      return (
                        <TableRow key={user.id} hover>
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                              <Avatar
                                sx={{ 
                                  width: 48, 
                                  height: 48, 
                                  bgcolor: alpha(colors.brown, 0.1),
                                  border: `2px solid ${alpha(colors.brown, 0.2)}`,
                                }}
                              >
                                <Typography variant="h6" sx={{ color: colors.brown, fontWeight: 700 }}>
                                  {user.name?.charAt(0).toUpperCase() || 'U'}
                                </Typography>
                              </Avatar>
                              <Box>
                                <Typography variant="body1" sx={{ fontWeight: 700, color: colors.textPrimary }}>
                                  {user.name || 'Unknown'}
                                </Typography>
                                <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                                  Member since {user.createdAt ? new Date(user.createdAt).getFullYear() : new Date().getFullYear()}
                                </Typography>
                              </Box>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Email sx={{ fontSize: 16, color: colors.textSecondary }} />
                                <Typography variant="body2">
                                  {user.email || 'No email'}
                                </Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Phone sx={{ fontSize: 16, color: colors.textSecondary }} />
                                <Typography variant="body2">
                                  {user.phoneNumber || 'No phone'}
                                </Typography>
                              </Box>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Chip 
                              label={`${userBookings.length} bookings`}
                              sx={{ 
                                bgcolor: alpha(colors.gold, 0.1), 
                                color: colors.goldDark,
                                fontWeight: 600,
                              }}
                            />
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2">
                              {lastBooking 
                                ? new Date(lastBooking.checkInDate).toLocaleDateString()
                                : 'Never'
                              }
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Chip 
                              icon={<CheckCircle sx={{ fontSize: 14 }} />}
                              label="Active"
                              sx={{ 
                                bgcolor: alpha(colors.success, 0.1), 
                                color: colors.success,
                                fontWeight: 600,
                              }}
                            />
                          </TableCell>
                          <TableCell>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                              <IconButton 
                                size="small" 
                                onClick={() => handleContactGuest(user.phoneNumber)}
                                disabled={!user.phoneNumber}
                                sx={{ 
                                  color: user.phoneNumber ? colors.success : colors.textSecondary,
                                  bgcolor: alpha(user.phoneNumber ? colors.success : colors.textSecondary, 0.1),
                                  '&:hover': user.phoneNumber ? { bgcolor: alpha(colors.success, 0.2) } : {},
                                }}
                              >
                                <Call fontSize="small" />
                              </IconButton>
                              <IconButton 
                                size="small" 
                                onClick={() => handleWhatsAppGuest(user.phoneNumber)}
                                disabled={!user.phoneNumber}
                                sx={{ 
                                  color: user.phoneNumber ? '#25D366' : colors.textSecondary,
                                  bgcolor: alpha(user.phoneNumber ? '#25D366' : colors.textSecondary, 0.1),
                                  '&:hover': user.phoneNumber ? { bgcolor: alpha('#25D366', 0.2) } : {},
                                }}
                              >
                                <WhatsApp fontSize="small" />
                              </IconButton>
                              <IconButton 
                                size="small" 
                                onClick={() => handleEmailGuest(user.email)}
                                disabled={!user.email}
                                sx={{ 
                                  color: user.email ? colors.info : colors.textSecondary,
                                  bgcolor: alpha(user.email ? colors.info : colors.textSecondary, 0.1),
                                  '&:hover': user.email ? { bgcolor: alpha(colors.info, 0.2) } : {},
                                }}
                              >
                                <Email fontSize="small" />
                              </IconButton>
                              {/* ========== ADDED DELETE BUTTON ========== */}
                              <IconButton 
                                size="small" 
                                onClick={() => handleDeleteUser(user.id, user.name)}
                                sx={{ 
                                  color: colors.error,
                                  bgcolor: alpha(colors.error, 0.1),
                                  '&:hover': { bgcolor: alpha(colors.error, 0.2) }
                                }}
                              >
                                <Delete fontSize="small" />
                              </IconButton>
                            </Box>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
        );
        
      case 4: // Analytics
      case 8: // Room Type Analytics
        return <AdvancedAnalyticsDashboard />;
        
      case 5: // Contact Center
        return (
          <Box>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ 
                  fontWeight: 900,
                  mb: 1,
                  background: `linear-gradient(135deg, ${colors.brown} 0%, ${colors.gold} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Contact Center
                </Typography>
                <Typography variant="body1" sx={{ color: colors.textSecondary }}>
                  Communicate with guests via multiple channels
                </Typography>
              </Box>
              
              <Grid container spacing={3}>
                {/* Quick Contact Options */}
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 3, borderRadius: 3, height: '100%' }}>
                    <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: colors.textPrimary }}>
                      Quick Contact Channels
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        startIcon={<Call />}
                        onClick={() => window.open('tel:+15551234567', '_blank')}
                        sx={{
                          background: `linear-gradient(135deg, ${colors.success} 0%, #4CAF50 100%)`,
                          py: 2,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          '&:hover': {
                            background: `linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)`,
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s',
                        }}
                      >
                        Call Support: +1 (555) 123-4567
                      </Button>
                      
                      <Button
                        fullWidth
                        variant="contained"
                        startIcon={<WhatsApp />}
                        onClick={() => window.open('https://wa.me/15551234567', '_blank')}
                        sx={{
                          background: `linear-gradient(135deg, #25D366 0%, #128C7E 100%)`,
                          py: 2,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          '&:hover': {
                            background: `linear-gradient(135deg, #128C7E 0%, #075E54 100%)`,
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s',
                        }}
                      >
                        WhatsApp Support
                      </Button>
                      
                      <Button
                        fullWidth
                        variant="contained"
                        startIcon={<Email />}
                        onClick={() => window.open('mailto:support@goldenbrownhaven.com', '_blank')}
                        sx={{
                          background: `linear-gradient(135deg, ${colors.info} 0%, #2196F3 100%)`,
                          py: 2,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          '&:hover': {
                            background: `linear-gradient(135deg, #0D47A1 0%, #1565C0 100%)`,
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s',
                        }}
                      >
                        Email: support@goldenbrownhaven.com
                      </Button>
                      
                      <Button
                        fullWidth
                        variant="contained"
                        startIcon={<Message />}
                        sx={{
                          background: `linear-gradient(135deg, ${colors.warning} 0%, #FF9800 100%)`,
                          py: 2,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          '&:hover': {
                            background: `linear-gradient(135deg, #E65100 0%, #EF6C00 100%)`,
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s',
                        }}
                      >
                        Live Chat Support
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
                
                {/* Recent Contacts */}
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 3, borderRadius: 3, height: '100%' }}>
                    <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: colors.textPrimary }}>
                      Recent Guest Contacts
                    </Typography>
                    <List sx={{ maxHeight: 400, overflow: 'auto' }}>
                      {bookings.slice(0, 10).map((booking, index) => (
                        <ListItem key={index} sx={{ 
                          px: 0,
                          mb: 1,
                          bgcolor: alpha(colors.background, 0.5),
                          borderRadius: 2,
                          '&:hover': {
                            bgcolor: alpha(colors.brown, 0.05),
                          }
                        }}>
                          <ListItemButton sx={{ borderRadius: 2 }}>
                            <ListItemIcon>
                              <Avatar sx={{ 
                                width: 40, 
                                height: 40, 
                                bgcolor: alpha(colors.brown, 0.1),
                                border: `2px solid ${alpha(colors.brown, 0.2)}`,
                              }}>
                                {booking.user?.name?.charAt(0).toUpperCase() || 'G'}
                              </Avatar>
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                  {booking.user?.name || 'Guest'}
                                </Typography>
                              }
                              secondary={
                                <Box>
                                  <Typography variant="caption" sx={{ color: colors.textSecondary, display: 'block' }}>
                                    {booking.phoneNumber || 'No phone'}
                                  </Typography>
                                  <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                                    Room: {booking.room?.roomType || 'Unknown'}
                                  </Typography>
                                </Box>
                              }
                            />
                            <Box sx={{ display: 'flex', gap: 1 }}>
                              <IconButton 
                                size="small" 
                                onClick={() => handleContactGuest(booking.phoneNumber)}
                                disabled={!booking.phoneNumber}
                                sx={{ 
                                  color: booking.phoneNumber ? colors.success : colors.textSecondary,
                                  '&:hover': booking.phoneNumber ? { bgcolor: alpha(colors.success, 0.1) } : {},
                                }}
                              >
                                <Call fontSize="small" />
                              </IconButton>
                              <IconButton 
                                size="small" 
                                onClick={() => handleWhatsAppGuest(booking.phoneNumber)}
                                disabled={!booking.phoneNumber}
                                sx={{ 
                                  color: booking.phoneNumber ? '#25D366' : colors.textSecondary,
                                  '&:hover': booking.phoneNumber ? { bgcolor: alpha('#25D366', 0.1) } : {},
                                }}
                              >
                                <WhatsApp fontSize="small" />
                              </IconButton>
                            </Box>
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        );
        
      case 6: // Profile
        return (
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Avatar
                      sx={{
                        width: 140,
                        height: 140,
                        margin: '0 auto 24px',
                        border: `4px solid ${alpha(colors.brown, 0.3)}`,
                        bgcolor: alpha(colors.brown, 0.1),
                        boxShadow: `0 8px 32px ${alpha(colors.brown, 0.2)}`,
                      }}
                    >
                      <Person sx={{ fontSize: 70 }} />
                    </Avatar>
                  </motion.div>
                  
                  <Typography variant="h4" sx={{ 
                    fontWeight: 900, 
                    mb: 1, 
                    color: colors.textPrimary,
                    background: `linear-gradient(135deg, ${colors.brown} 0%, ${colors.gold} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    {profileData?.name || 'Admin User'}
                  </Typography>
                  
                  <Chip 
                    icon={<Star sx={{ color: colors.gold }} />}
                    label="Administrator"
                    sx={{ 
                      mb: 3,
                      bgcolor: alpha(colors.brown, 0.1), 
                      color: colors.brown,
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      px: 2,
                      py: 1,
                    }}
                  />
                  
                  <Box sx={{ textAlign: 'left', mb: 4, px: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Email sx={{ color: colors.textSecondary, fontSize: 20 }} />
                      <Typography variant="body2" sx={{ color: colors.textPrimary, fontWeight: 500 }}>
                        {profileData?.email || 'admin@goldenbrownhaven.com'}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Phone sx={{ color: colors.textSecondary, fontSize: 20 }} />
                      <Typography variant="body2" sx={{ color: colors.textPrimary, fontWeight: 500 }}>
                        {profileData?.phoneNumber || '+1 (555) 123-4567'}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background: `linear-gradient(135deg, ${colors.brown} 0%, ${colors.gold} 100%)`,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 700,
                      '&:hover': {
                        background: `linear-gradient(135deg, ${colors.brownDark} 0%, ${colors.goldDark} 100%)`,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s',
                    }}
                  >
                    Edit Profile
                  </Button>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={8}>
                <Paper sx={{ p: 4, borderRadius: 3 }}>
                  <Typography variant="h5" sx={{ 
                    mb: 4, 
                    fontWeight: 900,
                    color: colors.textPrimary,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}>
                    <AccountCircle sx={{ color: colors.brown }} />
                    Account Information
                  </Typography>
                  
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        value={profileData?.name || 'Admin User'}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Person sx={{ color: colors.textSecondary }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        value={profileData?.email || 'admin@goldenbrownhaven.com'}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email sx={{ color: colors.textSecondary }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        value={profileData?.phoneNumber || '+1 (555) 123-4567'}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Phone sx={{ color: colors.textSecondary }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Role"
                        value="Administrator"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Star sx={{ color: colors.textSecondary }} />
                            </InputAdornment>
                          ),
                        }}
                        disabled
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Hotel Address"
                        defaultValue="123 Luxury Lane, Beverly Hills, CA 90210"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LocationOn sx={{ color: colors.textSecondary }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{ mb: 3 }}
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
                        <Button 
                          variant="outlined" 
                          sx={{ 
                            color: colors.brown, 
                            borderColor: colors.brown,
                            px: 4,
                            py: 1.5,
                            fontWeight: 600,
                            '&:hover': {
                              borderColor: colors.brownDark,
                              bgcolor: alpha(colors.brown, 0.05),
                            }
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="contained"
                          sx={{
                            background: `linear-gradient(135deg, ${colors.brown} 0%, ${colors.gold} 100%)`,
                            px: 4,
                            py: 1.5,
                            fontSize: '1rem',
                            fontWeight: 700,
                            '&:hover': {
                              background: `linear-gradient(135deg, ${colors.brownDark} 0%, ${colors.goldDark} 100%)`,
                              transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.3s',
                          }}
                        >
                          Save Changes
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        );
        
      case 7: // Settings
        return (
          <Box>
            <Paper sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h4" sx={{ 
                fontWeight: 900,
                mb: 1,
                background: `linear-gradient(135deg, ${colors.brown} 0%, ${colors.gold} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 4,
              }}>
                System Settings
              </Typography>
              
              <Tabs 
                value={0}
                sx={{ 
                  borderBottom: 1, 
                  borderColor: 'divider', 
                  mb: 4,
                  '& .MuiTab-root': {
                    fontWeight: 600,
                    color: colors.textSecondary,
                    '&.Mui-selected': {
                      color: colors.brown,
                    }
                  }
                }}
              >
                <Tab label="General" />
                <Tab label="Notifications" />
                <Tab label="Security" />
                <Tab label="Integrations" />
              </Tabs>
              
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 3, borderRadius: 3 }}>
                    <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: colors.textPrimary }}>
                      Hotel Information
                    </Typography>
                    
                    <TextField
                      fullWidth
                      label="Hotel Name"
                      defaultValue="GoldenBrown Haven"
                      sx={{ mb: 3 }}
                    />
                    
                    <TextField
                      fullWidth
                      label="Hotel Address"
                      defaultValue="123 Luxury Lane, Beverly Hills, CA 90210"
                      sx={{ mb: 3 }}
                    />
                    
                    <TextField
                      fullWidth
                      label="Contact Email"
                      defaultValue="info@goldenbrownhaven.com"
                      sx={{ mb: 3 }}
                    />
                    
                    <TextField
                      fullWidth
                      label="Contact Phone"
                      defaultValue="+1 (555) 123-4567"
                      sx={{ mb: 4 }}
                    />
                    
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        background: `linear-gradient(135deg, ${colors.brown} 0%, ${colors.gold} 100%)`,
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 700,
                        '&:hover': {
                          background: `linear-gradient(135deg, ${colors.brownDark} 0%, ${colors.goldDark} 100%)`,
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s',
                      }}
                    >
                      Save Hotel Settings
                    </Button>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 3, borderRadius: 3 }}>
                    <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: colors.textPrimary }}>
                      System Preferences
                    </Typography>
                    
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="body2" sx={{ mb: 2, color: colors.textSecondary, fontWeight: 600 }}>
                        Theme Mode
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                          fullWidth
                          variant={!darkMode ? 'contained' : 'outlined'}
                          startIcon={<WbSunny />}
                          onClick={() => setDarkMode(false)}
                          sx={{
                            py: 1.5,
                            '&.MuiButton-contained': {
                              background: `linear-gradient(135deg, ${colors.gold} 0%, #FFD700 100%)`,
                              color: colors.brownDark,
                            }
                          }}
                        >
                          Light Mode
                        </Button>
                        <Button
                          fullWidth
                          variant={darkMode ? 'contained' : 'outlined'}
                          startIcon={<NightsStay />}
                          onClick={() => setDarkMode(true)}
                          sx={{
                            py: 1.5,
                            '&.MuiButton-contained': {
                              background: `linear-gradient(135deg, ${colors.brownDark} 0%, #1A1818 100%)`,
                            }
                          }}
                        >
                          Dark Mode
                        </Button>
                      </Box>
                    </Box>
                    
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="body2" sx={{ mb: 2, color: colors.textSecondary, fontWeight: 600 }}>
                        Email Notifications
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <Typography variant="body2">New Bookings</Typography>
                          <Chip label="Enabled" size="small" color="success" />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Cancellations</Typography>
                          <Chip label="Enabled" size="small" color="success" />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Guest Reviews</Typography>
                          <Chip label="Enabled" size="small" color="success" />
                        </Box>
                      </Box>
                    </Box>
                    
                    <Button
                      variant="outlined"
                      color="error"
                      fullWidth
                      onClick={handleLogout}
                      startIcon={<Logout />}
                      sx={{
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 700,
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                        }
                      }}
                    >
                      Logout
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <Box sx={{ 
      display: 'flex', 
      minHeight: '100vh',
      background: `radial-gradient(circle at 20% 50%, ${alpha(colors.brown, 0.05)} 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, ${alpha(colors.gold, 0.05)} 0%, transparent 50%),
                  ${colors.background}`,
      color: colors.textPrimary,
    }}>
      {/* Sidebar */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: 300,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
            border: 'none',
            boxShadow: `0 0 60px ${alpha(colors.brown, 0.05)}`,
          },
          display: { xs: sidebarOpen ? 'block' : 'none', md: 'block' },
        }}
      >
        {drawer}
      </Drawer>
      
      {/* Main Content */}
      <Box sx={{ 
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        ml: { md: sidebarOpen ? 0 : -300 },
        transition: 'margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
      }}>
        {/* Top AppBar */}
        <AppBar 
          position="sticky"
          elevation={0}
          sx={{
            background: alpha(colors.surface, 0.95),
            backdropFilter: 'blur(20px)',
            borderBottom: `1px solid ${alpha(colors.brown, 0.1)}`,
            boxShadow: `0 4px 20px ${alpha(colors.brown, 0.05)}`,
          }}
        >
          <Toolbar sx={{ px: { xs: 2, md: 3 } }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleSidebarToggle}
              sx={{ 
                mr: 2, 
                color: colors.textPrimary,
                bgcolor: alpha(colors.brown, 0.1),
                '&:hover': { bgcolor: alpha(colors.brown, 0.2) }
              }}
            >
              <MenuIcon />
            </IconButton>
            
            <Typography variant="h6" noWrap sx={{ 
              flexGrow: 1,
              fontWeight: 900,
              color: colors.textPrimary,
              fontSize: '1.25rem',
            }}>
              {sidebarItems.find(item => item.id === activeTab)?.name || 'Dashboard'}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton 
                sx={{ 
                  color: colors.textSecondary,
                  bgcolor: alpha(colors.brown, 0.1),
                  '&:hover': { bgcolor: alpha(colors.brown, 0.2) }
                }}
              >
                <Badge badgeContent={3} color="error">
                  <Notifications />
                </Badge>
              </IconButton>
              
              <IconButton 
                onClick={handleUserMenuOpen}
                sx={{ 
                  color: colors.textSecondary,
                  bgcolor: alpha(colors.brown, 0.1),
                  '&:hover': { bgcolor: alpha(colors.brown, 0.2) }
                }}
              >
                <AccountCircle />
              </IconButton>
              
              <Menu
                anchorEl={userMenuAnchor}
                open={Boolean(userMenuAnchor)}
                onClose={handleUserMenuClose}
                PaperProps={{
                  sx: {
                    mt: 1.5,
                    minWidth: 200,
                    background: colors.surface,
                    border: `1px solid ${alpha(colors.brown, 0.1)}`,
                    boxShadow: `0 8px 32px ${alpha(colors.brown, 0.1)}`,
                  }
                }}
              >
                <MenuItem 
                  onClick={() => { handleUserMenuClose(); setActiveTab(6); }}
                  sx={{ 
                    color: colors.textPrimary,
                    '&:hover': { bgcolor: alpha(colors.brown, 0.1) }
                  }}
                >
                  <ListItemIcon>
                    <AccountCircle fontSize="small" sx={{ color: colors.brown }} />
                  </ListItemIcon>
                  Profile
                </MenuItem>
                <MenuItem 
                  onClick={() => { handleUserMenuClose(); setActiveTab(7); }}
                  sx={{ 
                    color: colors.textPrimary,
                    '&:hover': { bgcolor: alpha(colors.brown, 0.1) }
                  }}
                >
                  <ListItemIcon>
                    <Settings fontSize="small" sx={{ color: colors.brown }} />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <Divider />
                <MenuItem 
                  onClick={handleLogout}
                  sx={{ 
                    color: colors.error,
                    '&:hover': { bgcolor: alpha(colors.error, 0.1) }
                  }}
                >
                  <ListItemIcon>
                    <Logout fontSize="small" sx={{ color: colors.error }} />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        
        {/* Main Content Area */}
        <Box component="main" sx={{ 
          flex: 1,
          p: { xs: 2, sm: 3, md: 4 },
          overflow: 'auto',
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {loading ? (
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  height: '50vh',
                  gap: 3,
                }}>
                  <CircularProgress 
                    size={60} 
                    thickness={4}
                    sx={{ 
                      color: colors.brown,
                      '& .MuiCircularProgress-circle': {
                        strokeLinecap: 'round',
                      }
                    }} 
                  />
                  <Typography variant="h6" sx={{ 
                    color: colors.textSecondary,
                    fontWeight: 600,
                  }}>
                    Loading dashboard data...
                  </Typography>
                </Box>
              ) : error ? (
                <Alert 
                  severity="error" 
                  sx={{ 
                    mb: 3, 
                    borderRadius: 2,
                    bgcolor: alpha(colors.error, 0.1),
                    border: `1px solid ${alpha(colors.error, 0.2)}`,
                  }}
                  onClose={() => setError('')}
                >
                  {error}
                </Alert>
              ) : success ? (
                <Alert 
                  severity="success" 
                  sx={{ 
                    mb: 3, 
                    borderRadius: 2,
                    bgcolor: alpha(colors.success, 0.1),
                    border: `1px solid ${alpha(colors.success, 0.2)}`,
                  }}
                  onClose={() => setSuccess('')}
                >
                  {success}
                </Alert>
              ) : (
                renderContent()
              )}
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>
      
      {/* ========== ENHANCED ROOM DIALOG FORM ========== */}
      <Dialog 
        open={roomDialogOpen} 
        onClose={() => { setRoomDialogOpen(false); resetRoomForm(); }}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            background: `linear-gradient(145deg, ${alpha(colors.surface, 0.95)} 0%, ${alpha(colors.background, 0.9)} 100%)`,
            backdropFilter: 'blur(20px)',
            border: `2px solid ${alpha(colors.gold, 0.2)}`,
            boxShadow: `0 25px 50px ${alpha(colors.brown, 0.15)}`,
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: `linear-gradient(90deg, ${colors.gold} 0%, ${colors.brown} 50%, ${colors.gold} 100%)`,
            }
          }
        }}
      >
        <DialogTitle sx={{ 
          p: 4,
          borderBottom: `1px solid ${alpha(colors.gold, 0.1)}`,
          background: `linear-gradient(135deg, ${alpha(colors.brown, 0.05)} 0%, transparent 100%)`,
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{
              p: 2,
              borderRadius: '50%',
              bgcolor: alpha(colors.gold, 0.1),
              border: `2px solid ${alpha(colors.gold, 0.2)}`,
              boxShadow: `0 4px 20px ${alpha(colors.gold, 0.2)}`,
            }}>
              <KingBed sx={{ 
                fontSize: 32, 
                color: colors.gold,
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
              }} />
            </Box>
            <Box>
              <Typography variant="h4" sx={{ 
                fontWeight: 900,
                color: colors.textPrimary,
                mb: 0.5,
                fontSize: { xs: '1.5rem', sm: '2rem' },
                background: `linear-gradient(135deg, ${colors.brown} 0%, ${colors.gold} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {editMode ? 'Edit Room Details' : 'Add New Luxury Room'}
              </Typography>
              <Typography variant="body2" sx={{ 
                color: colors.textSecondary,
                fontSize: '0.9rem',
                maxWidth: '400px',
              }}>
                {editMode ? 'Update room information and amenities' : 'Fill in the details to add a new room to your luxury hotel'}
              </Typography>
            </Box>
          </Box>
        </DialogTitle>
        
        <DialogContent sx={{ p: 4 }}>
          <Grid container spacing={3}>
            {/* Left Column - Basic Information */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ 
                p: 3, 
                borderRadius: 3,
                height: '100%',
                background: `linear-gradient(145deg, ${alpha(colors.surface, 0.8)} 0%, ${alpha(colors.background, 0.6)} 100%)`,
                border: `1px solid ${alpha(colors.gold, 0.15)}`,
                boxShadow: `0 8px 32px ${alpha(colors.brown, 0.08)}`,
              }}>
                <Typography variant="h6" sx={{ 
                  mb: 3, 
                  fontWeight: 700,
                  color: colors.textPrimary,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}>
                  <Room sx={{ color: colors.gold }} />
                  Room Information
                </Typography>
                
                {/* ========== ROOM TYPE FIELD (UPDATED WITH DROPDOWN) ========== */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="caption" sx={{ 
                    fontWeight: 600,
                    color: colors.textSecondary,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    fontSize: '0.75rem',
                    mb: 1,
                    display: 'block',
                  }}>
                    Room Type *
                  </Typography>
                  <FormControl fullWidth>
                    <Select
                      value={roomForm.roomType}
                      onChange={(e) => setRoomForm({ ...roomForm, roomType: e.target.value })}
                      sx={{ 
                        borderRadius: 2,
                        bgcolor: alpha(colors.background, 0.5),
                        border: `1px solid ${alpha(colors.gold, 0.2)}`,
                        '&:hover': {
                          borderColor: colors.gold,
                          boxShadow: `0 0 0 2px ${alpha(colors.gold, 0.1)}`,
                        },
                        '&.Mui-focused': {
                          borderColor: colors.gold,
                          boxShadow: `0 0 0 3px ${alpha(colors.gold, 0.15)}`,
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none',
                        }
                      }}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            mt: 1,
                            borderRadius: 2,
                            bgcolor: colors.surface,
                            border: `1px solid ${alpha(colors.gold, 0.2)}`,
                            boxShadow: `0 8px 32px ${alpha(colors.brown, 0.1)}`,
                            '& .MuiMenuItem-root': {
                              py: 1.5,
                              '&:hover': {
                                bgcolor: alpha(colors.gold, 0.1),
                              },
                              '&.Mui-selected': {
                                bgcolor: alpha(colors.gold, 0.2),
                                color: colors.gold,
                                fontWeight: 600,
                              }
                            }
                          }
                        }
                      }}
                    >
                      <MenuItem value="">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ width: 24, display: 'flex', justifyContent: 'center' }}>
                            <KingBed sx={{ fontSize: 18, color: colors.textSecondary }} />
                          </Box>
                          <Box>
                            <Typography sx={{ fontWeight: 600, color: colors.textPrimary }}>
                              All Types
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="Single">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ width: 24, display: 'flex', justifyContent: 'center' }}>
                            <Person sx={{ fontSize: 18, color: colors.gold }} />
                          </Box>
                          <Box>
                            <Typography sx={{ fontWeight: 600, color: colors.textPrimary }}>
                              Single Room
                            </Typography>
                            <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                              Perfect for solo travelers
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="Double">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ width: 24, display: 'flex', justifyContent: 'center' }}>
                            <People sx={{ fontSize: 18, color: colors.gold }} />
                          </Box>
                          <Box>
                            <Typography sx={{ fontWeight: 600, color: colors.textPrimary }}>
                              Double Room
                            </Typography>
                            <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                              Ideal for couples or two guests
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="Family">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ width: 24, display: 'flex', justifyContent: 'center' }}>
                            <KingBed sx={{ fontSize: 18, color: colors.gold }} />
                          </Box>
                          <Box>
                            <Typography sx={{ fontWeight: 600, color: colors.textPrimary }}>
                              Family Suite
                            </Typography>
                            <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                              Spacious room for families
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="Suite">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ width: 24, display: 'flex', justifyContent: 'center' }}>
                            <Diamond sx={{ fontSize: 18, color: colors.gold }} />
                          </Box>
                          <Box>
                            <Typography sx={{ fontWeight: 600, color: colors.textPrimary }}>
                              Executive Suite
                            </Typography>
                            <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                              Premium business accommodation
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="Presidential">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ width: 24, display: 'flex', justifyContent: 'center' }}>
                            <Star sx={{ fontSize: 18, color: colors.gold }} />
                          </Box>
                          <Box>
                            <Typography sx={{ fontWeight: 600, color: colors.textPrimary }}>
                              Presidential Suite
                            </Typography>
                            <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                              Ultimate luxury experience
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                {/* Price & Capacity Row */}
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={6}>
                    <Typography variant="caption" sx={{ 
                      fontWeight: 600,
                      color: colors.textSecondary,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      fontSize: '0.75rem',
                      mb: 1,
                      display: 'block',
                    }}>
                      Price per Night *
                    </Typography>
                    <TextField
                      fullWidth
                      type="number"
                      placeholder="0.00"
                      value={roomForm.roomPrice}
                      onChange={(e) => setRoomForm({ ...roomForm, roomPrice: e.target.value })}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start" sx={{ color: colors.gold }}>
                            <AttachMoney />
                          </InputAdornment>
                        ),
                        sx: { 
                          borderRadius: 2,
                          bgcolor: alpha(colors.background, 0.5),
                          border: `1px solid ${alpha(colors.gold, 0.2)}`,
                          '&:hover': {
                            borderColor: colors.gold,
                            boxShadow: `0 0 0 2px ${alpha(colors.gold, 0.1)}`,
                          },
                          '&.Mui-focused': {
                            borderColor: colors.gold,
                            boxShadow: `0 0 0 3px ${alpha(colors.gold, 0.15)}`,
                          }
                        }
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { border: 'none' },
                          '&:hover fieldset': { border: 'none' },
                          '&.Mui-focused fieldset': { border: 'none' },
                        }
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Typography variant="caption" sx={{ 
                      fontWeight: 600,
                      color: colors.textSecondary,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      fontSize: '0.75rem',
                      mb: 1,
                      display: 'block',
                    }}>
                      Capacity *
                    </Typography>
                    <TextField
                      fullWidth
                      type="number"
                      placeholder="e.g., 2"
                      value={roomForm.roomCapacity}
                      onChange={(e) => setRoomForm({ ...roomForm, roomCapacity: e.target.value })}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start" sx={{ color: colors.gold }}>
                            <People sx={{ fontSize: 20 }} />
                          </InputAdornment>
                        ),
                        sx: { 
                          borderRadius: 2,
                          bgcolor: alpha(colors.background, 0.5),
                          border: `1px solid ${alpha(colors.gold, 0.2)}`,
                          '&:hover': {
                            borderColor: colors.gold,
                            boxShadow: `0 0 0 2px ${alpha(colors.gold, 0.1)}`,
                          },
                          '&.Mui-focused': {
                            borderColor: colors.gold,
                            boxShadow: `0 0 0 3px ${alpha(colors.gold, 0.15)}`,
                          }
                        }
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { border: 'none' },
                          '&:hover fieldset': { border: 'none' },
                          '&.Mui-focused fieldset': { border: 'none' },
                        }
                      }}
                    />
                  </Grid>
                </Grid>

                {/* ========== A/C TYPE FIELD (UPDATED WITH DROPDOWN) ========== */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="caption" sx={{ 
                    fontWeight: 600,
                    color: colors.textSecondary,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    fontSize: '0.75rem',
                    mb: 1,
                    display: 'block',
                  }}>
                    Air Conditioning Type *
                  </Typography>
                  <FormControl fullWidth>
                    <Select
                      value={roomForm.acType}
                      onChange={(e) => setRoomForm({ ...roomForm, acType: e.target.value })}
                      sx={{ 
                        borderRadius: 2,
                        bgcolor: alpha(colors.background, 0.5),
                        border: `1px solid ${alpha(colors.gold, 0.2)}`,
                        '&:hover': {
                          borderColor: colors.gold,
                          boxShadow: `0 0 0 2px ${alpha(colors.gold, 0.1)}`,
                        },
                        '&.Mui-focused': {
                          borderColor: colors.gold,
                          boxShadow: `0 0 0 3px ${alpha(colors.gold, 0.15)}`,
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none',
                        }
                      }}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            mt: 1,
                            borderRadius: 2,
                            bgcolor: colors.surface,
                            border: `1px solid ${alpha(colors.gold, 0.2)}`,
                            boxShadow: `0 8px 32px ${alpha(colors.brown, 0.1)}`,
                            '& .MuiMenuItem-root': {
                              py: 1.5,
                              '&:hover': {
                                bgcolor: alpha(colors.gold, 0.1),
                              },
                              '&.Mui-selected': {
                                bgcolor: alpha(colors.gold, 0.2),
                                color: colors.gold,
                                fontWeight: 600,
                              }
                            }
                          }
                        }
                      }}
                    >
                      <MenuItem value="">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ width: 24, display: 'flex', justifyContent: 'center' }}>
                            <AcUnit sx={{ fontSize: 18, color: colors.textSecondary }} />
                          </Box>
                          <Box>
                            <Typography sx={{ fontWeight: 600, color: colors.textPrimary }}>
                              All Types
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="A/C">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ width: 24, display: 'flex', justifyContent: 'center' }}>
                            <AcUnit sx={{ fontSize: 18, color: colors.acColor }} />
                          </Box>
                          <Box>
                            <Typography sx={{ fontWeight: 600, color: colors.textPrimary }}>
                              Air Conditioned
                            </Typography>
                            <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                              Full AC with climate control
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="Non-AC">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ width: 24, display: 'flex', justifyContent: 'center' }}>
                            <PowerOff sx={{ fontSize: 18, color: colors.nonAcColor }} />
                          </Box>
                          <Box>
                            <Typography sx={{ fontWeight: 600, color: colors.textPrimary }}>
                              Non-A/C
                            </Typography>
                            <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                              Natural ventilation only
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="Fan">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ width: 24, display: 'flex', justifyContent: 'center' }}>
                            <WindPower sx={{ fontSize: 18, color: colors.brownLight }} />
                          </Box>
                          <Box>
                            <Typography sx={{ fontWeight: 600, color: colors.textPrimary }}>
                              Fan Only
                            </Typography>
                            <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                              Ceiling fan provided
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Paper>
            </Grid>

            {/* Right Column - Description & Photo */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ 
                p: 3, 
                borderRadius: 3,
                height: '100%',
                background: `linear-gradient(145deg, ${alpha(colors.surface, 0.8)} 0%, ${alpha(colors.background, 0.6)} 100%)`,
                border: `1px solid ${alpha(colors.gold, 0.15)}`,
                boxShadow: `0 8px 32px ${alpha(colors.brown, 0.08)}`,
              }}>
                {/* Room Description */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ 
                    mb: 2, 
                    fontWeight: 700,
                    color: colors.textPrimary,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}>
                    <Description sx={{ color: colors.gold }} />
                    Room Description
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    placeholder="Describe the room features, amenities, views, and special characteristics..."
                    value={roomForm.roomDescription}
                    onChange={(e) => setRoomForm({ ...roomForm, roomDescription: e.target.value })}
                    InputProps={{
                      sx: { 
                        borderRadius: 2,
                        bgcolor: alpha(colors.background, 0.5),
                        border: `1px solid ${alpha(colors.gold, 0.2)}`,
                        '&:hover': {
                          borderColor: colors.gold,
                          boxShadow: `0 0 0 2px ${alpha(colors.gold, 0.1)}`,
                        },
                        '&.Mui-focused': {
                          borderColor: colors.gold,
                          boxShadow: `0 0 0 3px ${alpha(colors.gold, 0.15)}`,
                        }
                      }
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { border: 'none' },
                        '&:hover fieldset': { border: 'none' },
                        '&.Mui-focused fieldset': { border: 'none' },
                      }
                    }}
                  />
                </Box>

                {/* Photo Upload */}
                <Box>
                  <Typography variant="h6" sx={{ 
                    mb: 2, 
                    fontWeight: 700,
                    color: colors.textPrimary,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}>
                    <PhotoCamera sx={{ color: colors.gold }} />
                    Room Photos
                  </Typography>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Paper
                      component="label"
                      sx={{
                        p: 4,
                        borderRadius: 3,
                        bgcolor: alpha(colors.background, 0.3),
                        border: `2px dashed ${alpha(colors.gold, 0.3)}`,
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.3s',
                        '&:hover': {
                          bgcolor: alpha(colors.gold, 0.05),
                          borderColor: colors.gold,
                          boxShadow: `0 8px 32px ${alpha(colors.gold, 0.1)}`,
                        }
                      }}
                    >
                      <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={(e) => setRoomForm({ ...roomForm, photo: e.target.files[0] })}
                      />
                      
                      {roomForm.photo ? (
                        <Box>
                          <Avatar
                            variant="rounded"
                            sx={{
                              width: 100,
                              height: 100,
                              margin: '0 auto 16px',
                              bgcolor: alpha(colors.gold, 0.1),
                              border: `2px solid ${alpha(colors.gold, 0.2)}`,
                              boxShadow: `0 4px 20px ${alpha(colors.gold, 0.2)}`,
                            }}
                          >
                            <ImageIcon sx={{ fontSize: 40, color: colors.gold }} />
                          </Avatar>
                          <Typography variant="body1" sx={{ 
                            fontWeight: 600,
                            color: colors.textPrimary,
                            mb: 0.5,
                          }}>
                            {roomForm.photo.name}
                          </Typography>
                          <Typography variant="caption" sx={{ 
                            color: colors.gold,
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 0.5,
                          }}>
                            <Edit sx={{ fontSize: 14 }} />
                            Click to change photo
                          </Typography>
                        </Box>
                      ) : (
                        <Box>
                          <Box sx={{
                            width: 80,
                            height: 80,
                            margin: '0 auto 16px',
                            borderRadius: '50%',
                            bgcolor: alpha(colors.gold, 0.1),
                            border: `2px solid ${alpha(colors.gold, 0.2)}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: colors.gold,
                            boxShadow: `0 4px 20px ${alpha(colors.gold, 0.2)}`,
                          }}>
                            <CloudUpload sx={{ fontSize: 40 }} />
                          </Box>
                          <Typography variant="body1" sx={{ 
                            fontWeight: 600,
                            color: colors.textPrimary,
                            mb: 1,
                          }}>
                            Upload Room Photo
                          </Typography>
                          <Typography variant="caption" sx={{ 
                            color: colors.textSecondary,
                            display: 'block',
                            mb: 2,
                          }}>
                            Recommended: 1200×800px JPG or PNG
                          </Typography>
                          <Chip 
                            icon={<Add />}
                            label="Browse Files"
                            sx={{ 
                              bgcolor: alpha(colors.gold, 0.1),
                              color: colors.gold,
                              border: `1px solid ${alpha(colors.gold, 0.3)}`,
                              fontWeight: 600,
                              '&:hover': {
                                bgcolor: alpha(colors.gold, 0.2),
                              }
                            }}
                          />
                        </Box>
                      )}
                    </Paper>
                  </motion.div>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
        
        <DialogActions sx={{ 
          p: 4,
          pt: 3,
          borderTop: `1px solid ${alpha(colors.gold, 0.1)}`,
          background: `linear-gradient(135deg, transparent 0%, ${alpha(colors.brown, 0.02)} 100%)`,
        }}>
          <Button 
            onClick={() => { setRoomDialogOpen(false); resetRoomForm(); }}
            sx={{ 
              px: 4,
              py: 1.5,
              borderRadius: 2,
              color: colors.textSecondary,
              border: `1px solid ${alpha(colors.textSecondary, 0.3)}`,
              fontWeight: 600,
              fontSize: '1rem',
              '&:hover': {
                bgcolor: alpha(colors.textSecondary, 0.1),
                borderColor: colors.textSecondary,
                transform: 'translateY(-2px)',
                boxShadow: `0 4px 12px ${alpha(colors.textSecondary, 0.1)}`,
              },
              transition: 'all 0.3s',
            }}
          >
            Cancel
          </Button>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            {editMode && (
              <Button
                onClick={handleRoomFormSubmit}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  bgcolor: alpha(colors.info, 0.1),
                  border: `1px solid ${alpha(colors.info, 0.3)}`,
                  color: colors.info,
                  fontWeight: 600,
                  fontSize: '1rem',
                  '&:hover': {
                    bgcolor: alpha(colors.info, 0.2),
                    borderColor: colors.info,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 12px ${alpha(colors.info, 0.2)}`,
                  },
                  transition: 'all 0.3s',
                }}
              >
                Save as Draft
              </Button>
            )}
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={handleRoomFormSubmit}
                variant="contained"
                disabled={!roomForm.roomType || !roomForm.roomPrice || !roomForm.roomCapacity || !roomForm.acType}
                sx={{
                  px: 6,
                  py: 1.5,
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${colors.gold} 0%, ${colors.brown} 100%)`,
                  fontWeight: 700,
                  fontSize: '1rem',
                  boxShadow: `0 8px 32px ${alpha(colors.gold, 0.3)}`,
                  '&:hover': {
                    background: `linear-gradient(135deg, ${colors.goldLight} 0%, ${colors.brown} 100%)`,
                    transform: 'translateY(-3px)',
                    boxShadow: `0 12px 40px ${alpha(colors.gold, 0.4)}`,
                  },
                  '&.Mui-disabled': {
                    background: alpha(colors.gray, 0.2),
                    color: colors.textSecondary,
                    boxShadow: 'none',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  {editMode ? <Save /> : <Add />}
                  <Typography sx={{ fontWeight: 700 }}>
                    {editMode ? 'Update Room' : 'Create New Room'}
                  </Typography>
                </Box>
              </Button>
            </motion.div>
          </Box>
        </DialogActions>
      </Dialog>

      {/* Quick Actions Speed Dial */}
      <QuickActionsSpeedDial />
    </Box>
  );
};

export default AdminDashboard;