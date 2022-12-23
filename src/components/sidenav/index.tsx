import useOnClickOutside from 'hooks/useOnClickOutside';
import useWindowSize from 'hooks/useWindowSize';
import React, { useRef } from 'react';
import styles from './style.module.css';
import profilePic from '../../assets/profile_av.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowRightLong,
  faCalendar,
  faHome,
  faUser,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import DropDown from 'components/shared/dropDown';
import { generate } from 'randomized-string';
import { useRouter } from 'next/router';
type props = {
  toggle: boolean;
  setToggle: Function;
};
function SideNav({ toggle, setToggle }: props) {
  const { width } = useWindowSize();
  const ref = useRef(null);
  const router = useRouter();
  useOnClickOutside(ref, () => setToggle(false));
  return (
    <div
      className="sidenav"
      ref={ref}
      style={{
        width: width > 1184 ? '250px' : toggle ? '250px' : 0,
      }}
    >
      <div className={`${styles.container}`}>
        <div className="flex items-center justify-evenly">
          <button className="btn bg-white border p-3 rounded-lg">8door</button>
          <button className="btn bg-white border p-3 rounded-lg">Doctor</button>
        </div>
        <div className={`${styles.doctorProfile} mt-3`}>
          <div className={`${styles.imgContainer}`}>
            <Image
              src="/profile_av.png"
              width={80}
              height={80}
              alt=""
              className={`${styles.img} `}
            />
          </div>
          <h2 className="text-center">Dr. Dagi</h2>
          <h5 className="text-center">Neurologist</h5>
        </div>
        <h4 className="mt-10">Main</h4>
        <div className={styles.main}>
          <div className="flex gap-5 items-center hover:text-gray-900 hover:bg-gray-100">
            <FontAwesomeIcon icon={faHome} />
            Dashboard
          </div>
          <div className="flex gap-5 items-center hover:text-gray-900 hover:bg-gray-100">
            <FontAwesomeIcon icon={faCalendar} />
            Appointment
          </div>
          <DropDown
            title="Doctors"
            icon={<FontAwesomeIcon icon={faUserPlus} />}
            items={[
              {
                id: generate(8),
                onClick: () => router.push('/allDoctors'),
                name: 'All Doctors',
                icon: <FontAwesomeIcon icon={faArrowRightLong} />,
              },
              {
                id: generate(8),
                onClick: () => router.push('/addDoctor'),
                name: 'Add Doctor',
                icon: <FontAwesomeIcon icon={faArrowRightLong} />,
              },
              {
                id: generate(8),
                onClick: () => router.push('/doctorProfile'),
                name: 'Doctor profile',
                icon: <FontAwesomeIcon icon={faArrowRightLong} />,
              },
              {
                id: generate(8),
                onClick: () => router.push('/addDoctor'),
                name: 'Add Doctor',
                icon: <FontAwesomeIcon icon={faArrowRightLong} />,
              },
            ]}
          />
          <DropDown
            title="Patients"
            icon={<FontAwesomeIcon icon={faUser} />}
            items={[
              {
                id: generate(8),
                onClick: () => router.push('/patients'),
                name: 'All Patients',
                icon: <FontAwesomeIcon icon={faArrowRightLong} />,
              },
              {
                id: generate(8),
                onClick: () => router.push('/addPatient'),
                name: 'Add Patient',
                icon: <FontAwesomeIcon icon={faArrowRightLong} />,
              },
              {
                id: generate(8),
                onClick: () => router.push('/patientProfile'),
                name: 'Patient profile',
                icon: <FontAwesomeIcon icon={faArrowRightLong} />,
              },
              {
                id: generate(8),
                onClick: () => router.push('/invoice'),
                name: 'Invoice',
                icon: <FontAwesomeIcon icon={faArrowRightLong} />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
