import React from "react";
import { Page, Section } from "components/shared";
import { data } from "./doctorDeta";
import {useRouter} from "next/router";
import InfoCard from "components/shared/infoCard";
import {removeDashAndCapitalize} from "utiles"
import ConfirmationModal from "components/shared/confirmationModal";
import Modal from "components/shared/modal";
import { AddStaff } from "components/sites/clinic/configuration";
import { useSelector } from "react-redux";
export default function Staff() {
  const [modal, setModal] = React.useState(false);
  const [conmodal, setconModal] = React.useState(false);
  
  const router = useRouter()
  React.useEffect(()=>{
    document.title = removeDashAndCapitalize(router.asPath)
    
  },[])
  return (
    <>
      <Modal
        openModal={modal}
        changeModalState={setModal}
        title={"Add Secretary"}
      >
        <AddStaff openModal={setModal} />
      </Modal>

      <ConfirmationModal openModal={conmodal} changeModalState={setconModal} warningMessage="Do you realy want to delete this card ?"/>
      <Page
        navbarTitle="Staff"
        showSiderMenu={true}
        showModal={modal}
        handelModalState={setModal}
        showModalButton={true}
      >
        <Section childernClassName="px-0 py-0 relative">
          <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-5 xs:gap-3 p-5 xs:p-3 bg-layout-primary ">
            {data.map((card) => (
              <InfoCard
                key={card.id}
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
