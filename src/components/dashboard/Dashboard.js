"use client"

import Diagnosis from "@/components/diagnosis/Diagnosis";
import Navigation from "@/components/navigation/Navigation";

import Patients from "@/components/patients/Patients";
import Profile from "@/components/profile/Profile";
import { useState } from "react";


const Dashboard = ({patients}) => {

    const [patient,setPatient] = useState(patients[0])
    return (
        <>
            <Navigation />

            <div className="flex flex-row my-11 gap-6 mx-16">
            <Patients  patients={patients} setPatient={setPatient} />
            <Diagnosis patient={patient} />
            <Profile patient={patient} />
            </div>
        </>
    )
}

export default Dashboard;