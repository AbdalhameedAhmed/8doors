import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { Page, Section, UserTemplate } from 'components/shared';
import NoItemsFound from "components/sites/clinic/configuration/add-clinic/no-items/NoItemsFound"
import ClinicForm from "components/sites/clinic/configuration/add-clinic/form/clinicForm"
import Modal from "components/shared/modal";
import ConfirmationModal from 'components/shared/confirmationModal';
import { useGetClinicsQuery } from "redux/services/clinic/addAndGetClinics"
import { useDeleteClinicMutation } from 'redux/services/clinic/deleteClinic';
import { changeActiveClinic } from "redux/slices/clinic/activeClinic"
import { rootState } from "redux/store"
import { removeDashAndCapitalize } from "utiles"
import useToast from 'hooks/useToast';

import Edit from "assets/pen-to-square-solid.svg"
import Join from "assets/right-to-bracket-solid.svg"

type clinicData = {
  id: string
  clinicName: string;
  address: string;
  img?: string
}
export default function Dashboard() {

  const [showAddBtn, changeBtnState] = useState(true)
  const [clinics, setClinics] = useState<clinicData[]>([])
  const [modal, setModal] = useState(false)
  const [openConfirmationModal, changeConfirmationModal] = useState(false)
  const activeClinic = useSelector(reduxData => (reduxData as rootState).activeClinic)
  const {data:apiClinicsData,refetch} = useGetClinicsQuery(null)
  const router = useRouter();
  const [removeClinic] = useDeleteClinicMutation()
  const dispatch = useDispatch()
  const addToast = useToast()


  const sectionBtnHandler = () => {
    setModal(!modal)

  }

  const joinBtnHandler = (clinic: clinicData) => {
    router.push('/clinic-dashboard');
    dispatch(changeActiveClinic(clinic))
  }

  const editBtnHandler = (clinic: clinicData) => {
    setModal(true)
    dispatch(changeActiveClinic(clinic))
  }

  const deleteClinic = async (id: string) => {
    await removeClinic({ id: id }).unwrap().then(() => { addToast("success", "deleted Successfully") }).catch(error => { addToast("error", "something wrong") })
    refetch()
  }

  useEffect(() => {
    setClinics(apiClinicsData)
    document.title = removeDashAndCapitalize(router.asPath)
    !(clinics == undefined || clinics.length) ? changeBtnState(false) : changeBtnState(true)
    refetch()
  }, [clinics, apiClinicsData, router.asPath, refetch,activeClinic])

  return (
    <>
      <Modal
        openModal={modal}
        changeModalState={setModal}
        title={(activeClinic && activeClinic.id) ? "Update clinic" : "Add clinic"}
        onModalClose={() => { dispatch(changeActiveClinic(null)) }}
      >
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
                    <div className='mr-[4px] flex items-center justify-between gap-3'>

                      <button
                        onClick={() => {
                          editBtnHandler(clinic)
                        }}
                        className="p-2 "
                      >

                        <Edit width={20} hieght={20} className="fill-secondary hover:fill-primary" />
                      </button>
                      <button
                        onClick={() => joinBtnHandler(clinic)}
                        className="p-2 pr-0"
                      >

                        <Join width={20} height={20} className="fill-secondary hover:fill-primary"/>
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