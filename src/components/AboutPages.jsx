import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const treatments = [
  {
    title: "Orthopedic Physiotherapy",
    desc: "Orthopedic physiotherapy focuses on injuries and disorders of the musculoskeletal system including bones, joints, ligaments, and muscles. Our specialists use evidence-based rehabilitation programs for fractures, arthritis, back pain, neck pain, and post-surgical recovery.",
    img: "https://aica.com/wp-content/uploads/2024/09/Top-5-Treatments-You-May-Receive-in-Orthopedic-Physiotherapy-e1612576187237.jpg",
  },
  {
    title: "Sports Physiotherapy",
    desc: "Sports physiotherapy is designed for athletes and physically active individuals. It helps in injury prevention, performance enhancement, and fast recovery. We treat ligament injuries, muscle tears, sprains, and sports-related trauma.",
    img: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955",
  },
  {
    title: "Neurological Rehabilitation",
    desc: "Neuro physiotherapy helps patients suffering from stroke, Parkinson’s disease, multiple sclerosis, and spinal cord injuries. Our approach focuses on restoring balance, coordination, and independence through guided therapy.",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
  },
  {
    title: "Geriatric Physiotherapy",
    desc: "Geriatric physiotherapy improves mobility, balance, and strength in elderly patients. It helps manage arthritis, osteoporosis, joint replacements, and age-related movement disorders.",
    img: "https://assets.thehansindia.com/h-upload/2023/04/05/1345227-pgyh.webp",
  },
  {
    title: "Pediatric Physiotherapy",
    desc: "Pediatric physiotherapy supports children with developmental delays, cerebral palsy, and neurological disorders. Therapy focuses on motor skills, posture, and coordination development.",
    img: "https://images.unsplash.com/photo-1550831107-1553da8c8464",
  },
  {
    title: "Cardio-Pulmonary Physiotherapy",
    desc: "This therapy improves lung capacity and heart endurance in patients with respiratory and cardiac conditions. It includes breathing exercises and chest physiotherapy.",
    img: "https://images.unsplash.com/photo-1584467735871-bf4ec5eae4e8",
  },
];

const doctors = [
  {
    name: "Dr. Ananya Rao",
    qualification: "MPT (Orthopedics), PhD in Rehabilitation Science",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Rajesh Kumar",
    qualification: "MPT (Sports Physiotherapy), Certified Dry Needling Therapist",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Priya Sharma",
    qualification: "MPT (Neurology), NDT & Stroke Rehabilitation Specialist",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Dr. Arjun Patel",
    qualification: "MPT (Cardio Pulmonary), Respiratory Rehab Expert",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

export default function About() {
  return (
    <Box sx={{ background: "#f5f9fc", py: 8 }}>
      <Container maxWidth="lg">

        {/* INTRO */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <Typography variant="h3" textAlign="center" fontWeight="bold" gutterBottom>
            About PhysioTattva
          </Typography>
          <Typography textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            Healing through science, care, and movement. PhysioTattva is a holistic physiotherapy and rehabilitation center
            dedicated to restoring mobility, relieving pain, and improving quality of life.
          </Typography>
        </motion.div>

        {/* WHO WE ARE */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <motion.img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzNRjE29ltigAGDrhCXWbn_tt9laTbjV0nw&s"
              alt="Clinic"
              style={{ width: "1200px",height:"400px" ,borderRadius: 16 }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Who We Are
              </Typography>
              <Typography sx={{ lineHeight: 1.8 }}>
                PhysioTattva is a multidisciplinary physiotherapy and rehabilitation clinic providing
                personalized care through evidence-based clinical practice. We believe that movement
                is medicine and education empowers patients to recover faster and live healthier lives.
                Our expert team of physiotherapists assess the root cause of pain and dysfunction to
                design customized therapy programs for each individual.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* TREATMENTS */}
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
          Our Physiotherapy Treatments
        </Typography>

        <Grid container spacing={4} sx={{ my: 4 }}>
          {treatments.map((t, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <Card sx={{ height: "100%", borderRadius: 3 }}>
                  <img src={t.img} alt={t.title} style={{ width: "100%", height: 200, objectFit: "cover" }} />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {t.title}
                    </Typography>
                    <Typography variant="body2">{t.desc}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* DOCTORS */}
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom sx={{ mt: 8 }}>
          Our Expert Doctors
        </Typography>

        <Grid container spacing={4} sx={{ mt: 3 }}>
          {doctors.map((doc, i) => (
            <Grid item xs={12} md={3} key={i}>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <Card sx={{ textAlign: "center", p: 3, borderRadius: 3, height: "280px", width: "250px",  }}>
                  <Avatar
                    src={doc.img}
                    sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
                  />
                  <Typography variant="h6" fontWeight="bold">
                    {doc.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doc.qualification}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* MISSION & VISION */}
        <Grid container spacing={4} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Our Mission
              </Typography>
              <Typography sx={{ lineHeight: 1.8 }}>
                Our mission is to deliver compassionate, innovative, and result-driven physiotherapy
                services that empower individuals to regain mobility, independence, and confidence.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Our Vision
              </Typography>
              <Typography sx={{ lineHeight: 1.8 }}>
                To become the most trusted physiotherapy and rehabilitation brand by delivering
                world-class patient outcomes through research, technology, and education.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
}
