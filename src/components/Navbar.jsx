import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
   { label: "About", path: "/AboutPage" },
     { label: "Treatment", path: "/Treatment" },

  { label: "Contact", path: "/contact" },
  
];

export default function Navbar() {
  const location = useLocation();

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
          backdropFilter: "blur(10px)",
          background: "primary.main",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(45deg,#00e5ff,#00ff9c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PhysioTattva
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
                        color: "white",
                        textTransform: "none",
                        fontSize: "16px",
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>

                  {/* Animated underline */}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      style={{
                        height: "3px",
                        background: "linear-gradient(90deg,#00e5ff,#00ff9c)",
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

            {/* Animated CTA Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              animate={{ boxShadow: ["0 0 0px #00e5ff", "0 0 20px #00e5ff", "0 0 0px #00e5ff"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Button
                component={NavLink}
                to="/contact"
                sx={{
                  borderRadius: "30px",
                  px: 3,
                  py: 1,
                  fontWeight: "bold",
                  background: "linear-gradient(45deg,#00e5ff,#00ff9c)",
                  color: "black",
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
