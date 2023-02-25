import { Page, Section,ModalPage } from 'components/shared';
import React from 'react';
import MainCalendar from "components/MainCalendar"


import "react-big-calendar/lib/css/react-big-calendar.css";

export default function ClinicPage() {
  return (
    <Page title='Home Page' subTitle='sub-text' showSiderMenu>
      <Section title='Book Appointment'>
        <MainCalendar/>
      </Section>  
    </Page>
  );
}
