import { AppBar, Toolbar, Typography, Button, Box, useTheme } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../images/logo-2.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/AboutPage" },
  { label: "Treatment", path: "/Treatment" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const theme = useTheme();

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          minHeight: 90,
          backdropFilter: "blur(10px)",
          background: `linear-gradient(90deg,  #ffffff 0%,
            ${theme.palette.primary.main} 50%,
            ${theme.palette.secondary.main} 100%)`,
          backgroundColor: "#f0f4f3",
        }}
      >
        <Toolbar
          sx={{
            minHeight: 90,
            display: "flex",
            justifyContent: "space-between", // ✅ logo left, buttons right
            px: 3, // small padding only
          }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              src={Logo}
              alt="PhysioTattva Logo"
              sx={{ height: 80, width: 82 }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Sri Sai Priya Physiotherapy
            </Typography>
          </motion.div>

          {/* Nav Links */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <Box key={index} sx={{ position: "relative" }}>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Button
                      component={NavLink}
                      to={item.path}
                      sx={{
                        color: "#050505",
                        textTransform: "none",
                        fontSize: "16px",
                        fontWeight: 700,
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>

                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      style={{
                        height: "3px",
                        background: `linear-gradient(90deg, 
                          ${theme.palette.text.secondary}, 
                          #ffffff)`,
                        borderRadius: "4px",
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: -4,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                </Box>
              );
            })}

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  `0 0 0px ${theme.palette.secondary.main}`,
                  `0 0 25px ${theme.palette.secondary.main}`,
                  `0 0 0px ${theme.palette.secondary.main}`,
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Button
                component={NavLink}
                to="/contact"
                sx={{
                  borderRadius: "30px",
                  px: 3.5,
                  py: 1.2,
                  fontWeight: 800,
                  background: `linear-gradient(45deg,
                    ${theme.palette.text.secondary},
                    #ffffff)`,
                  color: "#000",
                  fontSize: "16px",
                }}
              >
                Book Appointment
              </Button>
            </motion.div>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}
