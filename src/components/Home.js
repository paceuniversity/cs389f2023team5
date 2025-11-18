import { Container } from 'react-bootstrap';
import * as React from 'react';
import { Button, Box } from '@mui/material';
import Logo from '../images/logo.png';
import './Home.css';

const Home = (props) => {
  return (
    <Container className="home-container">
      <Box className="home-hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to BuffBot</h1>
          <p className="hero-subtitle">Your Personal Fitness Companion</p>
          <p className="hero-description">
            Transform your workout routine with our intelligent fitness tracking and workout planning tools. 
            Whether you're a beginner or a fitness enthusiast, BuffBot helps you achieve your goals.
          </p>
          
          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon">💪</div>
              <h3>Track Progress</h3>
              <p>Log your workouts and monitor improvements</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📋</div>
              <h3>Plan Regimens</h3>
              <p>Create custom workout plans for every day</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3>Set Goals</h3>
              <p>Define and track your fitness objectives</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={Logo} alt="Fitness" className="hero-img" />
        </div>
      </Box>

      <Box className="home-cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>Sign in to unlock all features and begin your fitness transformation</p>
        <Button 
          variant="contained" 
          size="large"
          sx={{
            background: 'var(--primary-color)',
            padding: '14px 32px',
            fontSize: '16px',
            fontWeight: 600,
            borderRadius: '12px',
            textTransform: 'none'
          }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Home;