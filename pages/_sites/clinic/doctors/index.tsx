import { Button, Page, Section } from 'components/shared';
import React from "react";

export default function Doctors() {
  return (
    <Page title='Doctors Page' subTitle='sub-text' showSiderMenu>
      <Section title='Book Appointment' subtitle='Description text here...'>
        <div className='h-[100px] w-full bg-gray-lighter'>content 1</div>
        <div className='flex flex-wrap gap-x-2.5 mt-5'>
          <Button fit>submit</Button>
          <Button fit disabled design='secondary'>cancel</Button>
        </div>
      </Section>

    </Page>
  );
}
