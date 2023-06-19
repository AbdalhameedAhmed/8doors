import React from "react"
import styles from "./breadCrumb.module.css"

export default function BreadCrumb() {




  return (
    <div className={`${styles.breadcrumbBar}`}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-12 col-12">
            <nav aria-label="breadcrumb" className={`${styles.pageBreadcrumb}`}>
              <ol className={`${styles.breadcrumb}`}>
                <li className={`${styles.breadcrumbItem}`}><a href="index.html">Home</a></li>
                <li className={`${styles.breadcrumbItem} active pl-2 text-white`} aria-current="page">Dashboard</li>
              </ol>
            </nav>
            <h2 className={`${styles.breadcrumbTitle}`}>Dashboard</h2>
          </div>
        </div>
      </div>
    </div>
  )
}