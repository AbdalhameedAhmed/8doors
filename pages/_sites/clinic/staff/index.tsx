import React from "react";
import { useRouter } from "next/router";

import { Page, Section } from "components/shared";
import SecondCard from "components/shared/infoCard/SecondCard";

import { removeDashAndCapitalize } from "utiles"
import ConfirmationModal from "components/shared/confirmationModal";
import Modal from "components/shared/modal";
import { AddStaff } from "components/sites/clinic/configuration";
import { data } from "./doctorDeta";

export default function Staff() {

  const [modal, setModal] = React.useState(false);
  const [conmodal, setconModal] = React.useState(false);

  const router = useRouter()

  const sectionBtnHandler = () => {
    setModal(!modal)
  }

  React.useEffect(() => {
    document.title = removeDashAndCapitalize(router.asPath)

  }, [router.asPath])
  return (
    <>
      <Modal
        openModal={modal}
        changeModalState={setModal}
        title={"Add Secretary"}
      >
        <AddStaff openModal={setModal} />
      </Modal>

      <ConfirmationModal openModal={conmodal} changeModalState={setconModal} warningMessage="Do you realy want to delete this card ?" />
      <Page
        navbarTitle="Clinic"
        handelModalState={setModal}
      >
        <Section
          childernClassName="px-0 py-0 relative"
          sectionHeaderBtnVisibility={true}
          className="!w-[1200px]"
          sectionHeaderBtnTitle="Add staff"
          sectionHeaderBtnHandler={sectionBtnHandler}
          title='Staff'
          subtitle='Create . Choose . Update a staff'
          subtitleStyle="ml-0 text-[0.875rem] bold font-[400]"

        >
          <div className="grid justify-items-center grid-cols-1  sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8 xs:gap-3 py-5 xs:py-3 bg-layout-primary">
            {data.map((card) => (
              <SecondCard
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
