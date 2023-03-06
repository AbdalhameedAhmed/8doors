import { Button, ModalPage, Section, UserTemplate } from 'components/shared';
import { useRouter } from 'next/router';
import { generate } from 'randomized-string';
import React from 'react';

const dummyData = [
  {
    title: 'First',
    subtitle: 'First subtitle',
  },
  {
    title: 'Second',
    subtitle: 'Second subtitle',
  },
  {
    title: 'Third',
  },
];

type Props = {
  list: {
    title: string;
    subtitle?: string;
    img?: string;
  }[];
};

export default function SelectClinic({ list = dummyData }: Props) {
  const router = useRouter();

  return (
    <ModalPage>
      <Section
        title='Clinics'
        subtitle='Select your clinics'
        childernClassName='p-0'
        className='max-w-[460px]'
      >
        <ul>
          {list.map((item) => (
            <li
              key={generate(8)}
              className='border-b last:border-0 flex justify-between items-center bg-layout-primary hover:bg-layout-secondary ease-in-out duration-150'
            >
              <UserTemplate
                title={item.title}
                subtitle={item.subtitle}
                img={item.img}
              />
              <Button
                onClick={() => router.push('/')}
                className='mr-[15px] py-[5px] font-medium hover:bg-primary hover:text-active hover:font-bold ease-in-out duration-200'
                fit
              >
                Join Clinic
              </Button>
            </li>
          ))}
        </ul>
      </Section>
    </ModalPage>
  );
}
