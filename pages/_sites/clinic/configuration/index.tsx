import React from 'react';
import { CollapsibleSection, Page, Section, Table } from 'components/shared';
import dynamic from 'next/dynamic';
import { AddDoctorForm, AddManagerForm, AddSecretaryForm } from 'components/sites/clinic/configuration'
import { data } from "./doctorDeta"
import MenuIcon from "../../../../src/assets/menu-icon.svg"
import classNames from "classnames"
import InfoCard from "components/shared/infoCard"
const Modal = dynamic(() => import('components/shared/modal'), { ssr: false });

export default function Configuration() {
  const [activeModal, setActiveModal] = React.useState("")
  const [modal, setModal] = React.useState(false);
  const [cardMenu, setCardMenu] = React.useState(false);

  const onActionClick = (title: any) => {
    setActiveModal(title)
    setModal(true)
  }
  const openCardMenu = () => {
    setCardMenu(!cardMenu)
  }
  return (
    <>
      <Modal openModal={modal} changeModalState={setModal} title={"Add Secretary"} >
        {/* {activeModal.includes('Doctor') && <AddDoctorForm />}
        {activeModal.includes('Manager') && <AddManagerForm />}
        {activeModal.includes('Secretary') && <AddSecretaryForm />} */}
        <AddDoctorForm />
      </Modal>
      <Page title='Configuration Page' subTitle='sub-text' showSiderMenu={true} showModal={modal} handelModalState={setModal} showModalButton={true} >
        <Section childernClassName='px-0 py-0 relative'>
          <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8 py-8 px-8 bg-layout-primary ">
            {
              data.map((card) => (
                <InfoCard data={card} />
              ))
            }
          </div>
        </Section>
      </Page>
    </>
  );
}