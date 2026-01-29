import React, { useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PoolIcon from "@mui/icons-material/Pool";
import ElderlyIcon from "@mui/icons-material/Elderly";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SpaIcon from "@mui/icons-material/Spa";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/* ---------- Tilt Card ---------- */
const TiltCard = ({ service, index }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useMotionTemplate`${mouseY}deg`;
  const rotateY = useMotionTemplate`${mouseX}deg`;

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dy / 20);
    y.set(-dx / 20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        sx={{
          height: "300px",
          width: "400px",
          marginLeft: "20px",
          borderRadius: 4,
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
          transition: "0.3s",
          "&:hover": {
            boxShadow: `0 25px 50px ${service.color}40`,
            borderColor: service.color,
          },
        }}
      >
        <Box sx={{ height: 4, bgcolor: service.color }} />

        <CardContent sx={{ p: 4 }}>
          <Box
            sx={{
              width: 70,
              height: 70,
              borderRadius: 3,
              bgcolor: `${service.color}15`,
              color: service.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
            }}
          >
            {service.icon}
          </Box>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {service.title}
          </Typography>

          <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
            {service.description}
          </Typography>
        </CardContent>

        <CardActions sx={{ px: 4, pb: 3 }}>
          <Button
            endIcon={<ArrowForwardIcon />}
            sx={{ color: service.color, fontWeight: 600 }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

/* ---------- Services Data ---------- */
const services = [
  {
    title: "Musculoskeletal",
    description: "Expert care for bones, joints and muscles including back pain and arthritis.",
    icon: <FitnessCenterIcon fontSize="large" />,
    color: "#04D486",
  },
  {
    title: "Sports Injury Rehab",
    description: "Faster recovery and return to sport with advanced sports physiotherapy.",
    icon: <PoolIcon fontSize="large" />,
    color: "#3E84DC",
  },
  {
    title: "Neurological Rehab",
    description: "Specialized therapy for stroke and neurological disorders.",
    icon: <AccessibilityNewIcon fontSize="large" />,
    color: "#FF6B6B",
  },
  {
    title: "Chiropractic Care",
    description: "Spinal manipulation and posture correction for pain relief.",
    icon: <SpaIcon fontSize="large" />,
    color: "#FFB84C",
  },
  {
    title: "Geriatric Physio",
    description: "Improving mobility and balance for elderly patients.",
    icon: <ElderlyIcon fontSize="large" />,
    color: "#9D4EDD",
  },
  {
    title: "Post-Op Rehab",
    description: "Structured rehabilitation after orthopedic surgeries.",
    icon: <LocalHospitalIcon fontSize="large" />,
    color: "#00B4D8",
  },
];

/* ---------- Main Component ---------- */
export default function Services() {
  return (
    <Box sx={{ py: 12, background: "#f9fafb" }}>
      <Container maxWidth="xl">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h6" color="primary" fontWeight={700}>
            Our Specializations
          </Typography>

          <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
            Comprehensive Services
          </Typography>

          <Typography color="text.secondary" maxWidth={700} mx="auto">
            We provide world-class physiotherapy services designed to restore mobility and improve quality of life.
          </Typography>
        </Box>

        {/* Proper Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <TiltCard service={service} index={index} />
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}
