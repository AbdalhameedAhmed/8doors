import { Page, Section } from "components/shared";
import React from "react";
import MainCalendar from "components/MainCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function ClinicPage() {
    return (
        <Page navbarTitle="Clinic Dashboard" showSiderMenu>
            <Section title="Book Appointment">
                <MainCalendar />
            </Section>
        </Page>
    );
}