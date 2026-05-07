import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  InputAdornment,
  IconButton,
  Fade,
  CircularProgress,
  Paper,
  Divider,
  alpha,
  useTheme,
  useMediaQuery,
  Chip,
  Stepper,
  Step,
  StepLabel,
  Container,
  Stack,
  StepConnector,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  Person,
  Email,
  Lock,
  Phone,
  Visibility,
  VisibilityOff,
  ArrowForward,
  CheckCircle,
  Security,
  Star,
  VerifiedUser,
  Fingerprint,
  WbSunny,
  NightsStay,
  Error as ErrorIcon,
  Diamond,
  Spa,
  Restaurant,
  KingBed,
  Bathtub,
  Wifi,
  Pool,
  AutoAwesome,
  Whatshot,
  Science,
  Psychology,
  ArrowBack,
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

// Custom Step Connector
const CustomStepConnector = ({ darkMode, colors }) => {
  return (
    <StepConnector
      sx={{
        '& .MuiStepConnector-line': {
          borderColor: darkMode ? alpha(colors.white, 0.2) : alpha(colors.brown, 0.2),
          borderTopWidth: 2,
        },
      }}
    />
  );
};

export default function SignUpPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  
  const [darkMode, setDarkMode] = useState(false);
  const colors = getColors(darkMode);
  const gradients = getGradients(darkMode);
  
  // UPDATED: Changed username to name to match backend entity
  const [form, setForm] = useState({
    name: "", // Changed from username to name
    email: "",
    phoneNumber: "",
    password: "",
    role: "ROLE_USER",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [stepCompleted, setStepCompleted] = useState({
    step1: false,
    step2: false,
    step3: false,
  });

  const steps = ['Account Details', 'Personal Info', 'Confirmation'];

  const features = [
    { icon: <Diamond />, text: "Premium Suites Access", color: colors.brown },
    { icon: <KingBed />, text: "Luxury Bedding", color: colors.gold },
    { icon: <VerifiedUser />, text: "Secure & Verified", color: colors.copper },
    { icon: <Star />, text: "Exclusive Member Benefits", color: colors.terracotta },
  ];

  // Validate steps
  const validateStep1 = () => {
    return form.name.length >= 2 && 
           form.email.includes('@') && 
           form.email.includes('.') && 
           form.password.length >= 6 &&
           passwordStrength >= 2;
  };

  const validateStep2 = () => {
    // Phone is optional, so step 2 is always valid if we have step 1 completed
    return stepCompleted.step1;
  };

  const validateStep3 = () => {
    // Step 3 is confirmation, valid if previous steps are completed
    return stepCompleted.step1 && stepCompleted.step2;
  };

  useEffect(() => {
    // Update step completion status
    const newStepCompleted = { ...stepCompleted };
    
    if (validateStep1()) {
      newStepCompleted.step1 = true;
    }
    
    if (activeStep >= 1 && validateStep2()) {
      newStepCompleted.step2 = true;
    }
    
    if (activeStep >= 2 && validateStep3()) {
      newStepCompleted.step3 = true;
    }
    
    setStepCompleted(newStepCompleted);
  }, [form, activeStep, passwordStrength]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    if (name === 'password') {
      const strength = calculatePasswordStrength(value);
      setPasswordStrength(strength);
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  };

  const getPasswordStrengthColor = (strength) => {
    if (strength === 0) return colors.error;
    if (strength <= 2) return colors.warning;
    if (strength === 3) return colors.success;
    return colors.brown;
  };

  const getPasswordStrengthText = (strength) => {
    if (strength === 0) return 'Very Weak';
    if (strength <= 2) return 'Weak';
    if (strength === 3) return 'Good';
    return 'Strong';
  };

  const handleNext = () => {
    if (activeStep === 0 && validateStep1()) {
      setActiveStep((prevStep) => prevStep + 1);
    } else if (activeStep === 1 && validateStep2()) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // If not on confirmation step, move to next step
    if (activeStep < steps.length - 1) {
      handleNext();
      return;
    }
    
    // On confirmation step, submit the form
    setError("");
    setSuccess("");
    setLoading(true);
    
    // Form validation
    if (!form.name || !form.email || !form.password) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }
    
    if (passwordStrength < 2) {
      setError("Password is too weak. Please use a stronger password.");
      setLoading(false);
      return;
    }

    try {
      // UPDATED: Send the exact format that backend expects
      const userData = {
        name: form.name,
        email: form.email,
        phoneNumber: form.phoneNumber || "", // Optional
        password: form.password,
        role: form.role
      };

      console.log("Sending registration data:", userData);
      
      const res = await axios.post("http://localhost:8080/auth/register", userData);
      
      if (res.data.statusCode === 200 || res.data.statusCode === 201) {
        setSuccess("🎉 Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(res.data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Registration error:", err);
      if (err.response) {
        // Handle specific backend errors
        if (err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else if (err.response.status === 400) {
          setError("Invalid data. Please check your input.");
        } else if (err.response.status === 409) {
          setError("Email or phone number already exists.");
        } else if (err.response.status === 500) {
          setError("Server error. Please try again later.");
        } else {
          setError("Something went wrong. Please try again.");
        }
      } else if (err.request) {
        setError("Cannot connect to server. Please check your network.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Custom Step Icons
  const StepIcon = ({ active, completed, icon }) => {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 32,
          height: 32,
          borderRadius: '50%',
          bgcolor: completed 
            ? colors.success 
            : active 
              ? colors.brown 
              : darkMode 
                ? alpha(colors.white, 0.1) 
                : alpha(colors.brown, 0.1),
          color: completed || active ? colors.white : colors.textSecondary,
          fontWeight: 600,
          fontSize: '0.875rem',
          transition: 'all 0.3s',
          boxShadow: active ? `0 0 0 4px ${alpha(colors.brown, 0.2)}` : 'none',
        }}
      >
        {completed ? (
          <CheckCircle sx={{ fontSize: 20 }} />
        ) : (
          icon
        )}
      </Box>
    );
  };

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
        {[...Array(20)].map((_, i) => (
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
              width: '8px',
              height: '8px',
              background: colors.gold,
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </Box>

      {/* Main Container */}
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex',
          width: '100%',
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
                Begin Your<br />Luxury Journey
              </Typography>

              <Typography variant="h6" sx={{ 
                mb: 6, 
                opacity: 0.95,
                fontWeight: 300,
                fontSize: '1.1rem',
                maxWidth: '80%',
                color: colors.cream,
              }}>
                Join our exclusive community and experience unparalleled luxury in every detail
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

            {/* Benefits Chip */}
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 2, 
              mt: 'auto',
              pt: 4,
              borderTop: `1px solid ${alpha(colors.white, 0.2)}`,
            }}>
              {['24/7 Butler', 'Private Spa', 'Gourmet Dining', 'AI Concierge'].map((benefit, index) => (
                <Chip
                  key={index}
                  label={benefit}
                  sx={{
                    bgcolor: alpha(colors.white, 0.2),
                    color: colors.white,
                    fontWeight: 500,
                    '&:hover': {
                      bgcolor: alpha(colors.white, 0.3),
                    }
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Right Side - Signup Form */}
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
                    {activeStep === 0 && "Create Account"}
                    {activeStep === 1 && "Personal Details"}
                    {activeStep === 2 && "Confirmation"}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: colors.textSecondary,
                    mb: 3,
                  }}>
                    {activeStep === 0 && "Step 1: Enter your basic information"}
                    {activeStep === 1 && "Step 2: Add your personal details"}
                    {activeStep === 2 && "Step 3: Review and confirm your information"}
                  </Typography>

                  {/* Stepper */}
                  <Stepper 
                    activeStep={activeStep} 
                    sx={{ mb: 4 }}
                    connector={<CustomStepConnector darkMode={darkMode} colors={colors} />}
                  >
                    {steps.map((label, index) => (
                      <Step key={label}>
                        <StepLabel
                          StepIconComponent={(props) => (
                            <StepIcon {...props} icon={index + 1} />
                          )}
                          sx={{
                            '& .MuiStepLabel-label': {
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              color: index <= activeStep ? colors.textPrimary : colors.textSecondary,
                            },
                          }}
                        >
                          {label}
                        </StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>

                {/* Error/Success Alerts */}
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

                <AnimatePresence>
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <Alert 
                        severity="success"
                        icon={<CheckCircle />}
                        sx={{ 
                          mb: 3,
                          borderRadius: 2,
                          bgcolor: alpha(colors.success, 0.1),
                          border: `1px solid ${alpha(colors.success, 0.2)}`,
                          color: colors.success,
                        }}
                      >
                        {success}
                      </Alert>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Signup Form */}
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
                  <Stack spacing={3}>
                    {/* Step 1: Account Details */}
                    {activeStep === 0 && (
                      <>
                        <Box>
                          <Typography variant="caption" sx={{ 
                            mb: 1, 
                            display: 'block',
                            fontWeight: 600,
                            color: colors.brown,
                            textTransform: 'uppercase',
                            letterSpacing: 1,
                            fontSize: '0.75rem',
                          }}>
                            <Person sx={{ fontSize: 14, verticalAlign: 'middle', mr: 1 }} />
                            Full Name
                          </Typography>
                          <TextField
                            fullWidth
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            error={form.name && form.name.length < 2}
                            helperText={form.name && form.name.length < 2 ? "Name must be at least 2 characters" : ""}
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

                        <Box>
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
                            error={form.email && (!form.email.includes('@') || !form.email.includes('.'))}
                            helperText={form.email && (!form.email.includes('@') || !form.email.includes('.')) ? "Please enter a valid email" : ""}
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

                        <Box>
                          <Typography variant="caption" sx={{ 
                            mb: 1, 
                            display: 'block',
                            fontWeight: 600,
                            color: colors.brown,
                            textTransform: 'uppercase',
                            letterSpacing: 1,
                            fontSize: '0.75rem',
                          }}>
                            <Lock sx={{ fontSize: 14, verticalAlign: 'middle', mr: 1 }} />
                            Password
                          </Typography>
                          <TextField
                            fullWidth
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Create a strong password"
                            required
                            error={form.password && form.password.length < 6}
                            helperText={form.password && form.password.length < 6 ? "Password must be at least 6 characters" : ""}
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
                          
                          {/* Password Strength Meter */}
                          {form.password && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Box sx={{ 
                                mt: 1, 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: 2 
                              }}>
                                <Box sx={{ 
                                  flex: 1, 
                                  height: 4, 
                                  bgcolor: alpha(colors.brown, 0.1),
                                  borderRadius: 2,
                                  overflow: 'hidden',
                                }}>
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(passwordStrength / 4) * 100}%` }}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                      height: '100%',
                                      background: getPasswordStrengthColor(passwordStrength),
                                      borderRadius: 2,
                                    }}
                                  />
                                </Box>
                                <Typography variant="caption" sx={{ 
                                  fontWeight: 600,
                                  color: getPasswordStrengthColor(passwordStrength),
                                  fontSize: '0.75rem',
                                }}>
                                  {getPasswordStrengthText(passwordStrength)}
                                </Typography>
                              </Box>
                            </motion.div>
                          )}
                        </Box>
                      </>
                    )}

                    {/* Step 2: Personal Info */}
                    {activeStep === 1 && (
                      <>
                        <Box>
                          <Typography variant="caption" sx={{ 
                            mb: 1, 
                            display: 'block',
                            fontWeight: 600,
                            color: colors.brown,
                            textTransform: 'uppercase',
                            letterSpacing: 1,
                            fontSize: '0.75rem',
                          }}>
                            <Phone sx={{ fontSize: 14, verticalAlign: 'middle', mr: 1 }} />
                            Phone Number (Optional)
                          </Typography>
                          <TextField
                            fullWidth
                            name="phoneNumber"
                            value={form.phoneNumber}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
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

                        {/* Additional Info */}
                        <Alert severity="info" sx={{ 
                          borderRadius: 2,
                          bgcolor: alpha(colors.info, 0.1),
                          border: `1px solid ${alpha(colors.info, 0.2)}`,
                        }}>
                          <Typography variant="body2">
                            Adding your phone number helps us provide better service and security.
                            This information is optional and can be added later.
                          </Typography>
                        </Alert>
                      </>
                    )}

                    {/* Step 3: Confirmation */}
                    {activeStep === 2 && (
                      <>
                        <Box sx={{ textAlign: 'center', py: 2 }}>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            <Box sx={{
                              width: 80,
                              height: 80,
                              borderRadius: '50%',
                              bgcolor: alpha(colors.success, 0.1),
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto 24px',
                              border: `2px solid ${alpha(colors.success, 0.3)}`,
                            }}>
                              <CheckCircle sx={{ fontSize: 48, color: colors.success }} />
                            </Box>
                          </motion.div>
                          
                          <Typography variant="h5" sx={{ 
                            mb: 3, 
                            fontWeight: 700,
                            color: colors.textPrimary,
                          }}>
                            Almost There!
                          </Typography>
                          
                          <Typography variant="body1" sx={{ 
                            mb: 4, 
                            color: colors.textSecondary,
                            maxWidth: '80%',
                            margin: '0 auto',
                          }}>
                            Please review your information before creating your account
                          </Typography>

                          {/* Information Summary */}
                          <Paper sx={{ 
                            p: 3, 
                            bgcolor: colors.surfaceAlt, 
                            borderRadius: 2,
                            textAlign: 'left',
                            mb: 3,
                          }}>
                            <Stack spacing={2}>
                              <Box sx={{ 
                                display: 'flex', 
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                pb: 2,
                                borderBottom: `1px solid ${alpha(colors.brown, 0.1)}`,
                              }}>
                                <Typography variant="body2" color="textSecondary">
                                  <Person sx={{ fontSize: 16, verticalAlign: 'middle', mr: 1 }} />
                                  Full Name:
                                </Typography>
                                <Typography variant="body1" fontWeight={600}>
                                  {form.name}
                                </Typography>
                              </Box>
                              
                              <Box sx={{ 
                                display: 'flex', 
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                pb: 2,
                                borderBottom: `1px solid ${alpha(colors.brown, 0.1)}`,
                              }}>
                                <Typography variant="body2" color="textSecondary">
                                  <Email sx={{ fontSize: 16, verticalAlign: 'middle', mr: 1 }} />
                                  Email:
                                </Typography>
                                <Typography variant="body1" fontWeight={600}>
                                  {form.email}
                                </Typography>
                              </Box>
                              
                              <Box sx={{ 
                                display: 'flex', 
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}>
                                <Typography variant="body2" color="textSecondary">
                                  <Phone sx={{ fontSize: 16, verticalAlign: 'middle', mr: 1 }} />
                                  Phone:
                                </Typography>
                                <Typography variant="body1" fontWeight={600}>
                                  {form.phoneNumber || "Not provided"}
                                </Typography>
                              </Box>
                            </Stack>
                          </Paper>

                          <Typography variant="body2" sx={{ 
                            color: colors.textSecondary,
                            fontStyle: 'italic',
                          }}>
                            By clicking "Complete Registration", you agree to our terms and conditions
                          </Typography>
                        </Box>
                      </>
                    )}

                    {/* Navigation Buttons */}
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      mt: 2,
                      pt: 3,
                      borderTop: `1px solid ${alpha(colors.brown, 0.1)}`,
                    }}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          disabled={activeStep === 0 || loading}
                          onClick={handleBack}
                          startIcon={<ArrowBack />}
                          sx={{
                            color: colors.brown,
                            border: `1px solid ${alpha(colors.brown, 0.3)}`,
                            bgcolor: alpha(colors.brown, 0.05),
                            borderRadius: 2,
                            px: 3,
                            '&:hover': {
                              bgcolor: alpha(colors.brown, 0.1),
                            },
                            '&.Mui-disabled': {
                              color: alpha(colors.brown, 0.3),
                              borderColor: alpha(colors.brown, 0.1),
                            }
                          }}
                        >
                          Back
                        </Button>
                      </motion.div>

                      {activeStep === steps.length - 1 ? (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            disabled={loading}
                            sx={{
                              py: 1.5,
                              px: 4,
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
                                Complete Registration
                                <CheckCircle sx={{ ml: 1 }} />
                              </>
                            )}
                          </Button>
                        </motion.div>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            disabled={
                              (activeStep === 0 && !validateStep1()) ||
                              (activeStep === 1 && !validateStep2())
                            }
                            sx={{
                              py: 1.5,
                              px: 4,
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
                            Next Step
                            <ArrowForward sx={{ ml: 1 }} />
                          </Button>
                        </motion.div>
                      )}
                    </Box>

                    {/* Divider */}
                    {activeStep === 0 && (
                      <>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          my: 3 
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
                            Already a member?
                          </Typography>
                          <Divider sx={{ 
                            flex: 1, 
                            borderColor: alpha(colors.brown, 0.2) 
                          }} />
                        </Box>

                        {/* Login Link */}
                        <Box sx={{ 
                          textAlign: 'center',
                        }}>
                          <motion.div whileHover={{ scale: 1.05 }}>
                            <Link
                              to="/login"
                              style={{
                                color: colors.brown,
                                textDecoration: 'none',
                                fontWeight: 700,
                                fontSize: '1rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 4,
                                padding: '8px 16px',
                                borderRadius: 8,
                                border: `2px solid ${alpha(colors.brown, 0.3)}`,
                                background: alpha(colors.brown, 0.05),
                                transition: 'all 0.3s',
                              }}
                            >
                              Sign In to Existing Account
                              <ArrowForward sx={{ fontSize: 16 }} />
                            </Link>
                          </motion.div>
                        </Box>
                      </>
                    )}

                    {/* Terms & Conditions */}
                    <Typography variant="caption" sx={{ 
                      display: 'block',
                      textAlign: 'center',
                      mt: 2,
                      color: colors.textSecondary,
                      fontSize: '0.75rem',
                      lineHeight: 1.5,
                    }}>
                      By creating an account, you agree to our{' '}
                      <Link to="/terms" style={{ color: colors.brown, fontWeight: 500 }}>
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" style={{ color: colors.brown, fontWeight: 500 }}>
                        Privacy Policy
                      </Link>
                    </Typography>
                  </Stack>
                </Paper>

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
      </Container>
    </Box>
  );
}