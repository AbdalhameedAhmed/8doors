import CustomInput from 'components/shared/customInput';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { generate } from 'randomized-string';
import { useDispatch } from 'react-redux';
import { addAccount } from 'redux/reducers/accountReducer';
import { useRouter } from 'next/router';
import Logo from '../../assets/logo.svg';
import styles from './style.module.css';

function SignUp() {
  const { t } = useTranslation('common');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const onSubmit = (data: any) => {
    if (data?.confirmPassword !== data?.password) {
      setError('Password confirmation error');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }
    const user = {
      id: generate(10),
      username: data?.userName,
      password: data?.password,
      email: data?.email,
    };
    dispatch(addAccount(user));
    router.push('/login');
  };
  return (
    <div className="self-center px-10 py-10 w-96">
      <div className="flex  align-center justify-center">
        <Logo style={{ height: 65, width: 65 }} />
      </div>
      <h1 className={styles.title}>{t('signup.signup')}</h1>
      <h4 className="text-white text-center">Register new membership</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              placeholder={t('signup.userName')}
              error={errors?.userName ? t('signup.userNameIsRequired') : ''}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className={`signin-signout-input w-full rounded-lg ${
                errors?.userName ? 'border-red-500' : ''
              }`}
            />
          )}
          name="userName"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              placeholder={t('signup.email')}
              error={errors?.email ? t('signin.emailIsRequired') : ''}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className={`signin-signout-input w-full rounded-lg ${
                errors?.email ? 'border-red-500' : ''
              }`}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              placeholder={t('signin.password')}
              type="password"
              value={value}
              onChange={onChange}
              error={errors?.password ? t('signin.passwordIsRequired') : ''}
              onBlur={onBlur}
              className={`signin-signout-input w-full rounded-lg ${
                errors?.email ? 'border-red-500' : ''
              }`}
            />
          )}
          name="password"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              placeholder={t('signup.confirmPassword')}
              type="password"
              value={value}
              onChange={onChange}
              error={errors?.confirmPassword ? t('signup.pleaseConfirm') : ''}
              onBlur={onBlur}
              className={`signin-signout-input w-full rounded-lg ${
                errors?.email ? 'border-red-500' : ''
              }`}
            />
          )}
          name="confirmPassword"
        />
        {error && <p className="text-red-500 text-center text-sm mt-2">{error}</p>}
        <div className="flex items-center mt-5 justify-center">
          <input type="checkbox" className="mr-3" name="" id="" />
          <p className="text-white">
            I read and agree to the <u>terms of usage</u>{' '}
          </p>
        </div>
        <button className="mt-8 w-full p-4 text-white bg-sky-500/100 rounded-lg">
          {t('signup.signup')}
        </button>
        <p className="my-2 text-sm text-white text-center flex justify-center">
          <Link href="/login">
            <b>{t('signup.alreadyHaveAccount') + ' '}</b>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
