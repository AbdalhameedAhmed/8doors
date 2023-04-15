import React from "react"
import { Page, Section } from 'components/shared';
import ChangePasswordForm from "components/change-password"
export default function ChangePassword() {
  return (
    <Page navbarTitle="Settings" showSiderMenu>
      <Section
        title='Change password'
        subtitle='change your account password'
        childernClassName='p-0'
        className='w-full'
      >
        <ChangePasswordForm />
      </Section>
    </Page>
  )
}