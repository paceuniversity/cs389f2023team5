import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Auth } from '@supabase/auth-ui-react';
import supabase from '../db/supa';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const AuthModal = ({ open, onClose, title = 'Please Sign In' }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <div style={{ marginTop: '1rem' }}>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={['google', 'github']}
            onlyThirdPartyProviders={false}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
