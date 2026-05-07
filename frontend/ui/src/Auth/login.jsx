import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Snackbar,
  IconButton,
  Fade,
  Zoom,
  CircularProgress,
  Paper,
  InputAdornment,
  Divider,
  alpha,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  ArrowForward,
  Security,
  CheckCircle,
  Star,
  VerifiedUser,
  WbSunny,
  NightsStay,
  Info,
  Error as ErrorIcon,
  Diamond,
  KingBed,
  Bathtub,
  Wifi,
  Pool,
} from "@mui/icons-material";

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

// Helper function to get gradients
const getGradients = (isDarkMode) => ({
  brownGold: `linear-gradient(135deg, #8B4513 0%, #D4AF37 100%)`,
  goldCopper: `linear-gradient(135deg, #D4AF37 0%, #B87333 100%)`,
  full: `linear-gradient(135deg, #8B4513 0%, #D4AF37 50%, #E2725B 100%)`,
  card: isDarkMode 
    ? `linear-gradient(145deg, #2D2424 0%, #1A1818 100%)`
    : `linear-gradient(145deg, #FFFFFF 0%, #FFF8E1 100%)`,
});

export default function LoginPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const colors = getColors(darkMode);
  const gradients = getGradients(darkMode);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // UPDATED: Changed port to 8080 and updated endpoint
      const res = await axios.post("http://localhost:8080/auth/login", form);

      if (res.data.statusCode !== 200) {
        setError(res.data.message || "Invalid credentials");
        setLoading(false);
        return;
      }

      const user = res.data.user;
      const token = res.data.token;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", user.id);
      localStorage.setItem("user", JSON.stringify(user));

      const userRole = user.role.replace("ROLE_", "").toUpperCase();

      setSuccess("🎉 Successfully logged in! Redirecting...");

      setTimeout(() => {
        if (userRole === "ADMIN") navigate("/admin-home", { replace: true });
        else if (userRole === "USER") navigate("/customer-home", { replace: true });
        else setError("Unknown role: " + userRole);
      }, 800);
    } catch (err) {
      console.error("Login error:", err);
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.response?.status === 401) {
        setError("Invalid email or password");
      } else if (err.response?.status === 400) {
        setError("Please check your email and password");
      } else {
        setError("Cannot connect to server. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const features = [
    { icon: <Diamond />, text: "Premium Suites Access", color: colors.brown },
    { icon: <KingBed />, text: "Luxury Bedding", color: colors.gold },
    { icon: <VerifiedUser />, text: "Secure & Verified", color: colors.copper },
    { icon: <Star />, text: "Exclusive Member Benefits", color: colors.terracotta },
  ];

  const stats = [
    { value: '10K+', label: 'Happy Guests' },
    { value: '99%', label: 'Satisfaction Rate' },
    { value: '24/7', label: 'Butler Service' },
  ];

  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100vw',
      overflow: 'hidden',
      position: 'relative',
      background: darkMode 
        ? 'linear-gradient(135deg, #1A1818 0%, #2D2424 100%)'
        : 'linear-gradient(135deg, #FFF8E1 0%, #F5E6D3 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      py: 4,
    }}>
      {/* Animated Background Elements */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
      }}>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              scale: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            animate={{ 
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              position: 'absolute',
              width: '6px',
              height: '6px',
              background: colors.gold,
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </Box>

      {/* Main Container */}
      <Box sx={{
        display: 'flex',
        width: '90%',
        maxWidth: 1200,
        minHeight: '85vh',
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: darkMode 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          : '0 25px 50px -12px rgba(139, 69, 19, 0.15)',
        position: 'relative',
        zIndex: 1,
        backdropFilter: 'blur(20px)',
        border: `1px solid ${alpha(colors.brown, 0.1)}`,
        bgcolor: alpha(colors.surface, 0.97),
      }}>
        {/* Left Side - Hero Section */}
        <Box sx={{
          flex: 1,
          display: { xs: 'none', lg: 'flex' },
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 6,
          background: gradients.brownGold,
          color: colors.white,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <Diamond sx={{ 
                fontSize: 48, 
                color: colors.white,
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
              }} />
              <Box>
                <Typography variant="h4" sx={{ 
                  fontWeight: 900, 
                  letterSpacing: 1,
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  color: colors.white,
                }}>
                  GOLDEN<span style={{ color: colors.goldLight }}>BROWN</span>
                </Typography>
                <Typography sx={{ 
                  fontSize: "0.75rem",
                  color: colors.goldLight,
                  letterSpacing: "3px",
                  fontWeight: 300,
                }}>
                  HAVEN
                </Typography>
              </Box>
            </Box>

            <Typography variant="h2" sx={{ 
              fontWeight: 900, 
              mb: 3,
              fontSize: '3rem',
              lineHeight: 1.2,
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              color: colors.white,
            }}>
              Welcome<br />Back
            </Typography>

            <Typography variant="h6" sx={{ 
              mb: 6, 
              opacity: 0.95,
              fontWeight: 300,
              fontSize: '1.1rem',
              maxWidth: '80%',
              color: colors.cream,
            }}>
              Access your premium account and continue your luxury journey with us
            </Typography>
          </motion.div>

          {/* Features List */}
          <Box sx={{ mt: 4 }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2, 
                  mb: 3,
                  p: 2,
                  borderRadius: 2,
                  bgcolor: alpha(colors.white, 0.15),
                  transition: 'all 0.3s',
                  '&:hover': {
                    bgcolor: alpha(colors.white, 0.25),
                    transform: 'translateX(8px)',
                  }
                }}>
                  <Box sx={{
                    p: 1.5,
                    borderRadius: '50%',
                    bgcolor: alpha(feature.color, 0.3),
                    color: colors.white,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="body1" sx={{ fontWeight: 500, color: colors.white }}>
                    {feature.text}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Stats */}
          <Box sx={{ 
            display: 'flex', 
            gap: 4, 
            mt: 'auto',
            pt: 4,
            borderTop: `1px solid ${alpha(colors.white, 0.2)}`,
          }}>
            {stats.map((stat, index) => (
              <Box key={index} sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ 
                  fontWeight: 900, 
                  color: colors.gold,
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                  {stat.value}
                </Typography>
                <Typography variant="caption" sx={{ 
                  opacity: 0.9,
                  fontSize: '0.75rem',
                  color: colors.cream,
                }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right Side - Login Form */}
        <Box sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          p: { xs: 4, md: 5, lg: 6 },
          position: 'relative',
        }}>
          {/* Theme Toggle */}
          <Box sx={{ 
            position: 'absolute', 
            top: 24, 
            right: 24,
            display: 'flex',
            gap: 1,
          }}>
            <IconButton
              onClick={() => setDarkMode(!darkMode)}
              sx={{
                bgcolor: alpha(colors.brown, 0.1),
                color: colors.brown,
                '&:hover': {
                  bgcolor: alpha(colors.brown, 0.2),
                }
              }}
            >
              {darkMode ? <WbSunny /> : <NightsStay />}
            </IconButton>
          </Box>

          <Box sx={{ 
            maxWidth: 480, 
            margin: 'auto',
            width: '100%',
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Header */}
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h3" sx={{ 
                  fontWeight: 900,
                  mb: 1,
                  background: gradients.brownGold,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}>
                  Welcome Back
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: colors.textSecondary,
                  mb: 3,
                }}>
                  Sign in to your GOLDENBROWN HAVEN account
                </Typography>
              </Box>

              {/* Error Alert */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <Alert 
                      severity="error" 
                      icon={<ErrorIcon />}
                      sx={{ 
                        mb: 3,
                        borderRadius: 2,
                        bgcolor: alpha(colors.error, 0.1),
                        border: `1px solid ${alpha(colors.error, 0.2)}`,
                        color: colors.error,
                      }}
                    >
                      {error}
                    </Alert>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Login Form */}
              <Paper
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  bgcolor: colors.surface,
                  border: `1px solid ${alpha(colors.brown, 0.1)}`,
                  boxShadow: '0 10px 40px rgba(139, 69, 19, 0.1)',
                }}
              >
                {/* Email Field */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="caption" sx={{ 
                    mb: 1, 
                    display: 'block',
                    fontWeight: 600,
                    color: colors.brown,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    fontSize: '0.75rem',
                  }}>
                    <Email sx={{ fontSize: 14, verticalAlign: 'middle', mr: 1 }} />
                    Email Address
                  </Typography>
                  <TextField
                    fullWidth
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    InputProps={{
                      sx: { 
                        borderRadius: 2,
                        bgcolor: colors.surfaceAlt,
                        border: `1px solid ${alpha(colors.brown, 0.2)}`,
                        '&:hover': {
                          borderColor: colors.brown,
                        },
                        '&.Mui-focused': {
                          borderColor: colors.brown,
                          boxShadow: `0 0 0 3px ${alpha(colors.brown, 0.1)}`,
                        }
                      }
                    }}
                  />
                </Box>

                {/* Password Field */}
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1,
                  }}>
                    <Typography variant="caption" sx={{ 
                      fontWeight: 600,
                      color: colors.brown,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      fontSize: '0.75rem',
                    }}>
                      <Lock sx={{ fontSize: 14, verticalAlign: 'middle', mr: 1 }} />
                      Password
                    </Typography>
                    <Link 
                      to="/forgot-password"
                      style={{ 
                        color: colors.brown,
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                      }}
                    >
                      Forgot password?
                      <Info sx={{ fontSize: 16 }} />
                    </Link>
                  </Box>
                  <TextField
                    fullWidth
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                            sx={{ color: colors.textSecondary }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                      sx: { 
                        borderRadius: 2,
                        bgcolor: colors.surfaceAlt,
                        border: `1px solid ${alpha(colors.brown, 0.2)}`,
                        '&:hover': {
                          borderColor: colors.brown,
                        },
                        '&.Mui-focused': {
                          borderColor: colors.brown,
                          boxShadow: `0 0 0 3px ${alpha(colors.brown, 0.1)}`,
                        }
                      }
                    }}
                  />
                </Box>

                {/* Remember Me & Login Button */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  mb: 3,
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <input
                      type="checkbox"
                      id="remember"
                      style={{
                        width: 18,
                        height: 18,
                        accentColor: colors.brown,
                        cursor: 'pointer',
                      }}
                    />
                    <label 
                      htmlFor="remember"
                      style={{
                        color: colors.textSecondary,
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                        fontWeight: 500,
                      }}
                    >
                      Remember me
                    </label>
                  </Box>
                </Box>

                {/* Login Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    fullWidth
                    disabled={loading}
                    variant="contained"
                    size="large"
                    sx={{
                      py: 2,
                      borderRadius: 2,
                      fontWeight: 700,
                      fontSize: '1rem',
                      letterSpacing: 0.5,
                      background: gradients.brownGold,
                      boxShadow: '0 4px 20px rgba(139, 69, 19, 0.3)',
                      '&:hover': {
                        background: gradients.goldCopper,
                        boxShadow: '0 8px 30px rgba(184, 134, 11, 0.4)',
                      },
                      '&.Mui-disabled': {
                        background: alpha(colors.brown, 0.3),
                      }
                    }}
                  >
                    {loading ? (
                      <CircularProgress size={24} sx={{ color: colors.white }} />
                    ) : (
                      <>
                        Sign In
                        <ArrowForward sx={{ ml: 1 }} />
                      </>
                    )}
                  </Button>
                </motion.div>

                {/* Divider */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  my: 4 
                }}>
                  <Divider sx={{ 
                    flex: 1, 
                    borderColor: alpha(colors.brown, 0.2) 
                  }} />
                  <Typography sx={{ 
                    mx: 2, 
                    color: colors.textSecondary,
                    fontSize: '0.875rem',
                    fontWeight: 500,
                  }}>
                    Don't have an account?
                  </Typography>
                  <Divider sx={{ 
                    flex: 1, 
                    borderColor: alpha(colors.brown, 0.2) 
                  }} />
                </Box>

                {/* Sign Up Link */}
                <Box sx={{ 
                  textAlign: 'center',
                }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                      to="/signup"
                      style={{
                        color: colors.brown,
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: '1rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '12px 24px',
                        borderRadius: 8,
                        border: `2px solid ${alpha(colors.brown, 0.3)}`,
                        background: alpha(colors.brown, 0.05),
                        transition: 'all 0.3s',
                      }}
                    >
                      Create New Account
                      <ArrowForward sx={{ fontSize: 16 }} />
                    </Link>
                  </motion.div>
                </Box>
              </Paper>

              {/* Quick Access Info */}
              <Box sx={{ 
                mt: 4,
                p: 3,
                borderRadius: 2,
                bgcolor: alpha(colors.brown, 0.05),
                border: `1px solid ${alpha(colors.brown, 0.1)}`,
              }}>
                <Typography variant="caption" sx={{ 
                  display: 'block',
                  fontWeight: 600,
                  color: colors.brown,
                  mb: 1,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}>
                  <VerifiedUser sx={{ fontSize: 14, verticalAlign: 'middle', mr: 1 }} />
                  Demo Access
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: colors.textSecondary,
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                }}>
                  Test login: <strong>demo@goldenbrownhaven.com</strong> / <strong>demopass123</strong>
                </Typography>
              </Box>

              {/* Security Note */}
              <Typography variant="caption" sx={{ 
                display: 'block',
                textAlign: 'center',
                mt: 3,
                color: colors.textSecondary,
                fontSize: '0.75rem',
              }}>
                <Security sx={{ fontSize: 12, verticalAlign: 'middle', mr: 0.5 }} />
                Your information is protected with 256-bit SSL encryption
              </Typography>
            </motion.div>
          </Box>
        </Box>
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={!!success}
        autoHideDuration={2000}
        onClose={() => setSuccess("")}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={Zoom}
      >
        <Alert 
          severity="success"
          icon={<CheckCircle />}
          sx={{
            borderRadius: 2,
            boxShadow: '0 10px 30px rgba(46, 125, 50, 0.3)',
            bgcolor: colors.success,
            color: colors.white,
            fontWeight: 500,
            '& .MuiAlert-icon': {
              color: colors.white,
            }
          }}
        >
          {success}
        </Alert>
      </Snackbar>
    </Box>
  );
}