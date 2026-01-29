// src/components/About.jsx
import { Container, Typography, Grid, Box, Divider } from "@mui/material";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Who We Are",
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Our Clinics & Treatment",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
  },
];

export default function About() {
  return (
    <Box sx={{ bgcolor: "#f5f7fa", py: 8 }}>
      <Container maxWidth="lg">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" textAlign="center" fontWeight="bold" gutterBottom>
            About PhysioTattva
          </Typography>

          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 6, marginLeft:80 , marginTop:20}}
          >
            PhysioTattva is a holistic physiotherapy and rehabilitation centre  dedicated to healing
            through science, care, and movement. We combine evidence-based clinical practices with
            compassionate,  patient-centred treatment to restore strength, mobility, and confidence.
          </Typography>
        </motion.div>

        {/* SECTION 1 */}
        <Grid container spacing={5} alignItems="center" sx={{ mb: 8 }}>
          {/* IMAGE */}
          <Grid item xs={12} md={6}>
            <motion.img
              src={sections[0].image}
              alt="Who We Are"
              style={{
                width: "600px",
                height: "400px",
                objectFit: "cover",
                borderRadius: "16px",
                marginTop:-300
              }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </Grid>

          {/* CONTENT */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
                <Divider sx={{color:"black", }}></Divider>
              <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ml:60, mt:10}}>
                Who We Are
              </Typography>

              <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8 , marginLeft:80, marginTop:20}}>
                PhysioTattva is a leading physiotherapy and rehabilitation centre committed to restoring
                movement and enhancing quality of life. We deliver evidence-based treatments supported
                by advanced technology and modern rehabilitation techniques.
                <br /><br />
                Our focus is on personalised care, accurate diagnosis, and effective therapy to help
                patients recover safely and regain confidence in movement.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* SECTION 2 */}
        <Grid
          container
          spacing={5}
          alignItems="center"
          sx={{ mb: 8 }}
          direction="row-reverse"
        >
          {/* IMAGE */}
          <Grid item xs={12} md={6}>
            <motion.img
              src={sections[1].image}
              alt="Our Clinics & Treatment"
              style={{
                width: "600px",
                height: "400px",
                objectFit: "cover",
                borderRadius: "16px",
                marginRight:"800px",
                marginTop:-400,
              }}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </Grid>

          {/* CONTENT */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Our Clinics & Treatment
              </Typography>

              <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                PhysioTattva clinics are designed with state-of-the-art infrastructure and modern
                rehabilitation equipment to support effective care.
                <br /><br />
                We focus on personalized treatment plans tailored to individual needs, ensuring faster,
                safer recovery while improving mobility, strength, and overall wellbeing.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
}
