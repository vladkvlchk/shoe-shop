import Link from 'next/link';
import { Box, Typography } from '@mui/material';

import ForgotPasswordForm from '@/components/forms/ForgotPasswordForm';
import { stylingConstants } from '@/lib/constants/themeConstants';

export default function ForgotPassword() {
  return (
    <Box marginTop="40px">
      <Typography variant="h1">Forgot password?</Typography>
      <Typography variant="body1" marginTop="16px">
        Don&apos;t worry, we&apos;ll send you reset instructions.
      </Typography>

      <ForgotPasswordForm />

      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        <Link
          href="/auth/sign-in"
          style={{
            textDecorationLine: 'none',
            color: stylingConstants.palette.text.secondary,
          }}
        >
          Back to log in
        </Link>
      </Typography>
    </Box>
  );
}
