import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../assets/logo.svg';
import { CustomInput } from 'components/shared';
import { login } from 'api'
import { useGetPetQuery, api } from "redux/services/clinic/auth";


function SignIn() {
  const { t } = useTranslation('common');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.asPath);
  console.log(router.query);
  //@ts-ignore

  // const  [ trigger, { data } ] = api.endpoints.getPet.useLazyGetPetQuery()
  // const { trigger, isLoading, data: pet } = useGetPetQuery(1);

  const [trigger, { data }] = api.useLazyGetPetQuery();

  const onSubmit = async (data: any) => {
    const res = await login(data)
    if (res) {
      await trigger(true)
      console.log(data)
      router.push('/');
    } else {
      setError('User is not registered yet!!');
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  return (
    <div className={`self-center px-10 py-10 w-96`}>
      <div className="flex  align-center justify-center">
        <Logo style={{ height: 65, width: 65 }} />
      </div>
      <h1 className="text-center text-3xl my-2 text-white"> {t('signin.login')}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label=""
              placeholder={t('signup.email')}
              error={errors?.email ? t('signin.emailIsRequired') : ''}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className={`signin-signout-input w-full rounded-lg ${errors?.email ? 'border-red-500' : ''
                }`}
              type="text"
            />
          )}
          name="username"
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
              className={`signin-signout-input w-full rounded-lg ${errors?.password ? 'border-red-500' : ''
                }`}
            />
          )}
          name="password"
        />

        {error && <p className="text-red-500 text-center text-sm mt-2">{error}</p>}
        <button type="submit" className="mt-5 w-full rounded-lg text-white p-4 bg-sky-500/100">
          {t('signin.login')}
        </button>
        <p className="mt-3 text-sm text-white text-center">
          <Link href="/forget-password">
            <u>{' ' + t('signin.forgetPassword')}</u>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
