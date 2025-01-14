'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, Box } from '@mui/material';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { enqueueSnackbar } from 'notistack';

import ControlledInput from '@/components/controlled/ControlledInput';
import {
  IForgotPasswordReq,
  IForgotPasswordRes,
  IReactQueryError,
} from '@/lib/types';
import { ForgotPasswordValidation } from '@/lib/validation';
import { forgotPassword } from '@/tools';
import BaseButton from '../ui/BaseButton';
import { buttonStyles } from '@/styles/commonStyles';

const defaultValues = {
  email: '',
};

const ForgotPasswordForm = () => {
  const { handleSubmit, control } = useForm<
    z.infer<typeof ForgotPasswordValidation>
  >({
    resolver: zodResolver(ForgotPasswordValidation),
    defaultValues,
  });

  const mutation: UseMutationResult<
    IForgotPasswordRes,
    IReactQueryError,
    IForgotPasswordReq
  > = useMutation({
    mutationFn: forgotPassword,
    onError(error) {
      enqueueSnackbar(error.message || 'Something went wrong!', {
        variant: 'error',
        autoHideDuration: 10000,
      });
    },
  });

  const onSubmit = async (data: z.infer<typeof ForgotPasswordValidation>) => {
    await mutation.mutateAsync({
      email: data.email,
    });
  };

  if (mutation.isSuccess) {
    return (
      <Alert
        severity="success"
        sx={{
          maxWidth: '436px',
          py: '14px',
          my: '14px',
          fontSize: '16px',
          borderRadius: '8px',
        }}
      >
        Success. Please, check your email inbox
      </Alert>
    );
  }

  return (
    <Box
      component="form"
      sx={{
        m: '40px 0 16px 0',
        display: 'flex',
        flexDirection: 'column',
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <ControlledInput
        name="email"
        control={control}
        label="Email"
        required
        placeholder="example@mail.com"
      />

      <BaseButton type="submit" sx={{ ...buttonStyles.authBtn, mt: '20px' }}>
        Reset Password
      </BaseButton>
    </Box>
  );
};

export default ForgotPasswordForm;
