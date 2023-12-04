import React from "react"
import { useRouter } from 'next/router';

import classNames from "classnames"


import { UserTemplate } from 'components/shared';
import CustomMenu from "components/shared/customMenu"

import ClinicIcon from "assets/clinic.svg"
import Join from "assets/right-to-bracket-solid.svg"
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllClinics } from "tanstack/fetchers/sites/clinic/dashboard";



type clinicData = {
  id: string
  clinicName: string;
  address: string;
  img?: string
}
export default function ChooseClinic() {


  const [clinics, setClinics] = React.useState<clinicData[]>([])
  const [subMenu, openSubMenu] = React.useState(false)
  const queryClient = useQueryClient()

  const { data: apiClinicsData, refetch } = useQuery({ queryKey: ["clinics"], queryFn: getAllClinics })

  const router = useRouter()

  const joinBtnHandler = (clinic: clinicData) => {
    router.push('/clinic-dashboard');
    queryClient.setQueryData(["activeClinic"], clinic)
  }


  React.useEffect(() => {
    setClinics(apiClinicsData)
    refetch()
  }, [clinics, apiClinicsData])

  const icon = (<ClinicIcon className="w-[20px] h-[20px]" />)
  return (

    <CustomMenu icon={icon} style={{
      maxHeight: "264px"
    }}>
      <ul className={classNames("w-full max-h-full  flex flex-col items-start justify-evenly gap-1 "
      )}
      >
        {clinics?.map((clinic) => (
          <li
            key={clinic.id}
            className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center justify-between rounded-lg",)}
            onClick={() => joinBtnHandler(clinic)}
          >

            <div className="flex flex-col items-start justify-start ">

              <UserTemplate
                title={clinic.clinicName}
                subtitle={clinic.address}
                img={clinic.img}
                textContainer="justify-between h-[40px]"
                titleStyle="!text-[13px] "
                subTitleStyle="text-[12px]"
                circleClassName="!w-[39px] !h-[39px] border-none"
                className="gap-4"
              />
            </div>

          </li>
        ))
        }

      </ul>
    </CustomMenu>


  )
}