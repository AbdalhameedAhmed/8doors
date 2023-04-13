import { Page, Section } from "components/shared";
import React from "react";
import MainCalendar from "components/MainCalendar";
import { useRouter } from 'next/router';
import {removeDashAndCapitalize } from "utiles"

import "react-big-calendar/lib/css/react-big-calendar.css";

export default function ClinicPage() {
    let router = useRouter()    
    React.useEffect(()=>{
        document.title = removeDashAndCapitalize(router.asPath)
    },[])
    return (
        <Page navbarTitle="Clinic Dashboard" showSiderMenu>
            <Section title="Book Appointment">
                <MainCalendar />
            </Section>
        </Page>
    );
}