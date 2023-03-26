import { Page, Section } from "components/shared";
import React from "react";
import MainCalendar from "components/MainCalendar";
import ProtectedRoute from "components/protectedRoute"
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function ClinicPage() {
    return (
        <ProtectedRoute>
            <Page title="Home Page" showSiderMenu>
                <Section title="Book Appointment">
                    <MainCalendar />
                </Section>
            </Page>
        </ProtectedRoute>
    );
}