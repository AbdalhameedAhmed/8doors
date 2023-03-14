import React from "react";
import { Page, Section } from "components/shared";
import { AddStaff } from "components/sites/clinic/configuration";
import { data } from "./doctorDeta";
import InfoCard from "components/shared/infoCard";
import ConfirmationModal from "components/shared/confirmationModal";
import Modal from "components/shared/modal";

export default function Staff() {
  const [modal, setModal] = React.useState(false);
  const [conmodal, setconModal] = React.useState(false);

  return (
    <>
      <Modal
        openModal={modal}
        changeModalState={setModal}
        title={"Add Secretary"}
      >
        <AddStaff />
      </Modal>
      <ConfirmationModal openModal={conmodal} changeModalState={setconModal} />
      <Page
        title="Configuration Page"
        showSiderMenu={true}
        showModal={modal}
        handelModalState={setModal}
        showModalButton={true}
      >
        <Section childernClassName="px-0 py-0 relative">
          <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8 py-8 px-8 bg-layout-primary ">
            {data.map((card, index) => (
              <InfoCard
                key={index}
                openConfirmModal={setconModal}
                data={card}
                openModal={setModal}
              />
            ))}
          </div>
        </Section>
      </Page>
    </>
  );
}
