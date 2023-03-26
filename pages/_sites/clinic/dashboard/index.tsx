import { Page, Section, UserTemplate } from 'components/shared';
import CustomBtn from "components/shared/button/CustomBtn"
import { useRouter } from 'next/router';
import { generate } from 'randomized-string';
import React from 'react';
import ProtectedRoute from "components/protectedRoute"

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

export default function Dashboard({ list = dummyData }: Props) {
  const router = useRouter();
  let token = process.env.token
  console.log("token is ", token);

  return (
    <ProtectedRoute>

      <Page title="Home Page" showSiderMenu>
        <Section
          title='Clinics'
          subtitle='Select your clinics'
          childernClassName='p-0'
          className='w-full h-full'
        >
          <ul>
            {list.map((item) => (
              <li
                key={generate(8)}
                className='border-b last:border-0 flex pr-8 justify-between items-center bg-layout-primary hover:bg-layout-secondary ease-in-out duration-150'
              >
                <UserTemplate
                  title={item.title}
                  subtitle={item.subtitle}
                  img={item.img}
                />
                <CustomBtn
                  onClick={() => router.push('/clinic-dashboard')}
                  className="px-2 !bg-transparent !shadow-[4px_4px_0_0_rgba(241,241,241,1),4px_4px_0_1px_rgba(0,0,0,1)] active:!shadow-[2px_2px_0_0_rgba(241,241,241,1),2px_2px_0_1px_rgba(0,0,0,1)]"
                >

                  Join Clinic
              </CustomBtn>
              </li>
            ))}
          </ul>
        </Section>
      </Page>
    </ProtectedRoute>
  );
}
