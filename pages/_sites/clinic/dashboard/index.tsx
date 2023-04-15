import { Page, Section, UserTemplate } from 'components/shared';
import CustomBtn from "components/shared/button/CustomBtn"
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { removeDashAndCapitalize } from "utiles"
import Trash from "assets/trash-solid.svg"
import Join from "assets/right-to-bracket-solid.svg"
import Edit from "assets/pen-to-square-solid.svg"
import { useGetClinicsQuery } from "redux/services/clinic/addAndGetClinics"
import { useDeleteClinicMutation } from 'redux/services/clinic/deleteClinic';
import NoItemsFound from "components/sites/clinic/configuration/add-clinic/no-items/NoItemsFound"
import Modal from "components/shared/modal";
import ConfirmationModal from 'components/shared/confirmationModal';
import useToast from 'hooks/useToast';
import ClinicForm from "components/sites/clinic/configuration/add-clinic/form/clinicForm"
import { changeActiveClinic } from "redux/slices/clinic/activeClinic"
import { useDispatch, useSelector } from 'react-redux';

type clinicData = {
  clinicName: string;
  address: string;
  img?: string
}
export default function Dashboard() {

  const [showAddBtn, changeBtnState] = useState(true)
  const [clinics, setClinics] = useState<clinicData[]>([])
  const [modal, setModal] = useState(false)
  const [openConfirmationModal, changeConfirmationModal] = useState(false)
  const activeClinic = useSelector(reduxData => reduxData.activeClinic)
  const reduxdata = useSelector(state=>state)

  const apiClinicsData = useGetClinicsQuery().data
  let reFetch = useGetClinicsQuery().refetch
  const router = useRouter();
  const [removeClinic] = useDeleteClinicMutation()
  const addToast = useToast()
  const dispatch = useDispatch()
console.log("redux data equal",reduxdata);

  const sectionBtnHandler = () => {
    setModal(!modal)

  }
  const joinBtnHandler = (clinic) => {
    router.push('/clinic-dashboard');
    dispatch(changeActiveClinic(clinic))
  }
  const editBtnHandler = (clinic) => {
    setModal(true)
    dispatch(changeActiveClinic(clinic))
  }
  const deleteBtnHandler = (clinic) => {
    changeConfirmationModal(true)
    dispatch(changeActiveClinic(clinic))
  }

  const deleteClinic = async (id: string) => {
    await removeClinic({ id: id }).unwrap().then(() => { addToast("success", "deleted Successfully") }).catch(error => { addToast("error", "something wrong") })
    reFetch()
  }

  useEffect(() => {
    setClinics(apiClinicsData)
    document.title = removeDashAndCapitalize(router.asPath)
    !(clinics == undefined || clinics.length) ? changeBtnState(false) : changeBtnState(true)
    reFetch()
  }, [clinics, apiClinicsData])

  return (
    <>
      <Modal
        openModal={modal}
        changeModalState={setModal}
        title={activeClinic ? "Update clinic" : "Add clinic"}
        onModalClose={() => { dispatch(changeActiveClinic(null)) }}
      >
        {/* {activeClinic?<UpdateClinicForm openModal={setModal} clinicData={activeClinic}/>:<ClinicForm openModal={setModal} />} */}
        <ClinicForm openModal={setModal} />
      </Modal>
      <ConfirmationModal openModal={openConfirmationModal} changeModalState={changeConfirmationModal} deleteFunction={() => { deleteClinic(activeClinic.id) }} warningMessage='Do you realy want to delete this clinic?' />
      <Page navbarTitle="Dashboard" showSiderMenu>
        <Section
          sectionHeaderBtnTitle="Add clinic"
          sectionHeaderBtnVisibility={showAddBtn}
          sectionHeaderBtnHandler={sectionBtnHandler}
          title='Clinics'
          subtitle='create / choose a clinic'
          childernClassName='p-0'
          className='w-full'
        >
          {
            showAddBtn ? (
              <ul>
                {clinics?.map((clinic) => (
                  <li
                    key={clinic.id}
                    className='border-b last:border-0 flex px-5 xs:px-3 py-[10px] justify-between items-center bg-layout-primary hover:bg-layout-secondary ease-in-out duration-150'
                  >
                    <UserTemplate
                      title={clinic.clinicName}
                      subtitle={clinic.address}
                      img={clinic.img}
                    />
                    <div className='mr-[4px] flex items-center justify-between gap-8'>
                      {/* <button className='p-2' onClick={() => {

                        deleteBtnHandler(clinic)
                      }}>

                        <Trash width={20} height={20} />
                      </button> */}

                      <button
                        onClick={() => {
                          editBtnHandler(clinic)
                        }}
                        className="p-2 "
                      >

                        <Edit width={20} hieght={20} />
                      </button>
                      <button
                        onClick={() => joinBtnHandler(clinic)}
                        className="p-2 pr-0"
                      >

                        <Join width={20} height={20} />
                      </button>
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
