'use client';

import React, { useState } from 'react';

import { Controller, useForm } from 'react-hook-form';

import { Button } from '@nextui-org/react';
import { Input } from '@/components/Form/Input';
import { Textarea } from '@/components/Form/Textarea';

import emailjs from '@emailjs/browser';

import { ToastOptions, toast } from 'react-toastify';

import {
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
  NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY,
} from '@/config/vars';
import { useTranslations } from 'next-intl';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const t = useTranslations('ContactPage');

  const [isLoading, setIsLoading] = useState(false);
  const [messageAlreadySent, setMessageAlreadySent] = useState(false);

  const { control, handleSubmit, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    setIsLoading(true);

    const toastConfig = {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
    } as ToastOptions;

    const errorToast = {
      message: (
        <p>
          Something went wrong! 😔 <br /> Try again!
        </p>
      ),
      config: {
        ...toastConfig,
        theme: 'light',
      },
    };

    const successToast = {
      message: (
        <p>
          Your message was send! <br /> Thank you!
        </p>
      ),
      config: toastConfig,
    };

    try {
      emailjs
        .send(
          NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
          NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY,
          { name: data.name, email: data.email, message: data.message },
          NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        )
        .then(() => {
          setMessageAlreadySent(true);
          reset();
          toast.success(successToast.message, successToast.config);
          setIsLoading(false);
        })
        .catch(() => {
          toast.error(errorToast.message, errorToast.config);
          setIsLoading(false);
        });
    } catch (error) {
      toast.error(errorToast.message, errorToast.config);
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        defaultValue=""
        render={({ field, fieldState }) => (
          <Input
            type="text"
            label={t('form_name_input')}
            aria-label="name"
            placeholder={t('form_name_input_placeholder')}
            value={field.value}
            onChange={field.onChange}
            isDisabled={messageAlreadySent}
            isInvalid={!!fieldState.error}
            errorMessage={fieldState.error?.message || ''}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        defaultValue=""
        rules={{
          required: t('form_required_email'),
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: t('form_invalid_email'),
          },
        }}
        render={({ field, fieldState }) => (
          <Input
            type="text"
            label="Email"
            aria-label="email"
            placeholder={t('form_email_input_placeholder')}
            value={field.value}
            onChange={field.onChange}
            isDisabled={messageAlreadySent}
            isInvalid={!!fieldState.error}
            errorMessage={fieldState.error?.message || ''}
          />
        )}
      />
      <Controller
        control={control}
        name="message"
        defaultValue=""
        render={({ field, fieldState }) => (
          <Textarea
            type="text"
            label={t('form_message_input')}
            aria-label="message"
            placeholder={t('form_message_input_placeholder')}
            value={field.value}
            onChange={field.onChange}
            isDisabled={messageAlreadySent}
            isInvalid={!!fieldState.error}
            errorMessage={fieldState.error?.message || ''}
          />
        )}
      />

      <Button
        size="sm"
        type="submit"
        color="secondary"
        variant="shadow"
        className="violet-blue-gradient lg:h-10 lg:px-4 lg:text-small"
        isLoading={isLoading}
      >
        {t('form_contact_button')}
      </Button>
    </form>
  );
};
