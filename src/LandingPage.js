// src/LandingPage.js
import React from 'react';
import { Button, Typography, Container, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <Container className="landing-container">
        <Card className="landing-card">
          <CardContent className="card-content">
            <div className="text-content">
              <Typography variant="h2" className="landing-title">
                Welcome to MyWordProcessor
              </Typography>
              <Typography variant="h5" className="landing-description">
                Experience seamless and powerful word processing with intuitive features and a user-friendly interface.
                <br />
                Start your journey with us and enhance your productivity.
              </Typography>
              <Link to="/main-screen" className="get-started-link">
                <Button variant="contained" className="get-started-button">
                  Get Started <span className="arrow">→</span>
                </Button>
              </Link>
            </div>
            {/* Optional Logo Section */}
            {/* <img src="a.jfif" alt="MyWordProcessor Logo" className="logo-image" /> */}
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default LandingPage;
