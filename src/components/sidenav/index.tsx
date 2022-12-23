import useOnClickOutside from 'hooks/useOnClickOutside';
import useWindowSize from 'hooks/useWindowSize';
import React, { useRef } from 'react';
import styles from './style.module.css';
import profilePic from '../../assets/profile_av.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
type props = {
  toggle: boolean;
  setToggle: Function;
};
function SideNav({ toggle, setToggle }: props) {
  const { width } = useWindowSize();
  const ref = useRef(null);

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
          <div className="flex gap-3">
            <FontAwesomeIcon icon={faHome} />
            Dashboard
          </div>
          <h2 className="font-bold">Dashboard</h2>
          <h2 className="font-bold">Appointment</h2>
          <h2 className="font-bold">Doctors</h2>
          <h2 className="font-bold">Patients</h2>
          <h2 className="font-bold">Payments</h2>
          <h2 className="font-bold">Departments</h2>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
