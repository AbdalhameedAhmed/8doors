import React from 'react';
import { CollapsibleSection, Page, Section, Table } from 'components/shared';
import dynamic from 'next/dynamic';
import { AddStaffForm } from 'components/sites/clinic/configuration'
import { data } from "./doctorDeta"
import MenuIcon from "../../../../src/assets/menu-icon.svg"
import classNames from "classnames"
import InfoCard from "components/shared/infoCard"
import OpacityAnimation from 'animations/opacity-animation';
const Modal = dynamic(() => import('components/shared/modal'), { ssr: false });

export default function Configuration() {
  const [activeModal, setActiveModal] = React.useState("")
  const [modal, setModal] = React.useState(false);
  const [cardMenu, setCardMenu] = React.useState(false);
  const [selectedCard, changeSelectedCard] = React.useState(null)

  const onActionClick = (title: any) => {
    setActiveModal(title)
    setModal(true)
  }
  const openCardMenu = () => {
    setCardMenu(!cardMenu)
  }
  return (
    <div className='relative'>

      <Modal openModal={modal} changeModalState={setModal} title={"Add Staff"} >
        <AddStaffForm />
      </Modal>

      {/* <OpacityAnimation booleanValue={!!selectedCard}>
          <div
            onClick={() => changeSelectedCard(null)}
            className="shared-modal-overlay z-40"
          ></div>
        </OpacityAnimation> */}

      <Page title='Configuration Page' subTitle='sub-text' showSiderMenu={true} showModal={modal} handelModalState={setModal} showModalButton={true} >
        <Section childernClassName='px-0 py-0'>
          <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8 py-8 px-8 bg-layout-primary">
            {
              data.map((card, index) => (
                <InfoCard key={index} index={index} data={card} selectedCard={selectedCard} changeSelectedCard={changeSelectedCard} />
              ))
            }
          </div>
        </Section>
      </Page>
    </div>
  );
}