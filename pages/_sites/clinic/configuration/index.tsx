import React from 'react';
import { CollapsibleSection, Page, Section, Table } from 'components/shared';
import dynamic from 'next/dynamic';
import { AddDoctorForm, AddManagerForm, AddSecretaryForm } from 'components/sites/clinic/configuration'

const Modal = dynamic(() => import('components/shared/modal'), { ssr: false });

export default function Configuration() {
  const [activeModal, setActiveModal] = React.useState("")
  const [modal, setModal] = React.useState(false);

  const onActionClick = (title: any) => {
    setActiveModal(title)
    setModal(true)
  }
  return (
    <>
      <Modal openModal={modal} changeModalState={setModal} title={activeModal} >
        {activeModal.includes('Doctor') && <AddDoctorForm />}
        {activeModal.includes('Manager') && <AddManagerForm />}
        {activeModal.includes('Secretary') && <AddSecretaryForm />}




      </Modal>
      <Page title='Configuration Page' subTitle='sub-text' showSiderMenu>
        <Section childernClassName='flex flex-col gap-[15px] px-0'>
          <CollapsibleSection
            title='Managers'
            className='!bg-layout-primary !m-0 !p-0'
            childernClassName='!px-0'
            hasAction
            modalTitle="Add Manager"
            onAction={onActionClick}
          >
            <Table />
          </CollapsibleSection>

          <CollapsibleSection
            title='Doctors'
            className='!bg-layout-primary !m-0 !p-0'
            childernClassName='!px-0'
            hasAction
            modalTitle="Add Doctor"
            onAction={onActionClick}


          >
            <Table />
          </CollapsibleSection>
          <CollapsibleSection
            title='secretaries'
            className='!bg-layout-primary !m-0 !p-0'
            childernClassName='!px-0'
            hasAction
            modalTitle="Add Secretary"
            onAction={onActionClick}
          >
            <Table />
          </CollapsibleSection>
        </Section>
      </Page>
    </>
  );
}