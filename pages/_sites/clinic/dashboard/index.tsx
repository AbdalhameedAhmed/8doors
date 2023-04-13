import { Page, Section, UserTemplate } from 'components/shared';
import CustomBtn from "components/shared/button/CustomBtn"
import { useRouter } from 'next/router';
import { generate } from 'randomized-string';
import React, { useState, useEffect } from 'react';
import {removeDashAndCapitalize} from "utiles"
import NoItemsFound from "../../../../src/components/sites/clinic/configuration/add-clinic/no-items/NoItemsFound"
import Modal from "components/shared/modal";
import ClinicForm from "components/sites/clinic/configuration/add-clinic/form/clinicForm"
const dummyData = [
  {
    title: 'First',
    subtitle: 'First subtitle',
  },
  {
    title: 'Second',
    subtitle: 'Second subtitle',
  },
  {
    title: 'Third',
  },
];

type Props = {
  list: {
    title: string;
    subtitle?: string;
    img?: string;
  }[];
};

export default function Dashboard({ list = dummyData }: Props) {
  const router = useRouter();
  const [showAddBtn, changeBtnState] = useState(true)
  const [modal, setModal] = useState(false)

  
  const handelBun = () => {
    setModal(!modal)

  }
  
  useEffect(() => {
    document.title =removeDashAndCapitalize( router.asPath)
    !list.length ? changeBtnState(false) : changeBtnState(true)
  }, [list])
  return (
    <>
       <Modal
        openModal={modal}
        changeModalState={setModal}
        title={"Add Secretary"}
      >
        <ClinicForm openModal={setModal} />
      </Modal>
      <Page navbarTitle="Dashboard" showSiderMenu>
        <Section
          sectionHeaderBtnTitle="Add clinic"
          sectionHeaderBtnVisibility={showAddBtn}
          sectionHeaderBtnHandler={handelBun}
          title='Clinics'
          subtitle='create / choose a clinic'
          childernClassName='p-0'
          className='w-full'
        >
          {
            showAddBtn ? (
              <ul>
                {list.map((item) => (
                  <li
                    key={generate(8)}
                    className='border-b last:border-0 flex px-5 xs:px-3 py-[10px] justify-between items-center bg-layout-primary hover:bg-layout-secondary ease-in-out duration-150'
                  >
                    <UserTemplate
                      title={item.title}
                      subtitle={item.subtitle}
                      img={item.img}
                    />
                    <div className='mr-[4px]'>

                      <CustomBtn
                        onClick={() => router.push('/clinic-dashboard')}
                        className="px-2 !bg-transparent !shadow-[4px_4px_0_0_rgba(241,241,241,1),4px_4px_0_1px_rgba(0,0,0,1)] active:!shadow-[2px_2px_0_0_rgba(241,241,241,1),2px_2px_0_1px_rgba(0,0,0,1)]"
                      >

                        Join Clinic
                      </CustomBtn>
                    </div>
                  </li>
                ))}
              </ul>
            )
              : <NoItemsFound onClick={() => { setModal(!modal) }} />
          }
        </Section>
      </Page>
    </>
  );
}
