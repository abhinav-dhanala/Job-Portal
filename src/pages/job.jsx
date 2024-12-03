import React, { useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import { useParams } from 'react-router-dom';
import useFetch from '@/hooks/use-fetch';
import { getSingleJob } from '@/api/apiJobs';
import { BarLoader } from 'react-spinners';
import { Briefcase, DoorClosed, MapPinIcon,DoorOpen } from 'lucide-react';

const JobPage = () => {

  const{isLoaded,user}=useUser();
  const{id}=useParams();
  const{
    loading:loadingJob,
    data:job,
    fn:fnJob,
  }=useFetch(getSingleJob,{
    job_id:id,
  });

  useEffect(()=>{
    if(isLoaded) fnJob();
  },[isLoaded]);

  if(!isLoaded || loadingJob){
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7"></BarLoader>
  }

  return(
    <div className="flex flex-col gap-8 mt-5"> 

      <div className="flex flex-col-reverse gap-6 md:flex-row justify-between items-center">
        <h1 className="gradient-title font-extrabold pb-3 text-4xl sm:text-6xl">{job?.title}</h1>
        <img src={job?.company?.logo_url} className="h-12" alt={job?.title} />
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2">
          <MapPinIcon/>
          {job?.location}
        </div>
        <div className="flex gap-2">
          <Briefcase/>
          {job?.applications?.length} Applicants
        </div>
        <div className="flex gap-2">
          {job?.isOpen?(
            <>
              <DoorOpen/>Open
            </>):(
              <>
                <DoorClosed/>Closed
              </>
            )}
        </div>
      </div>


      {/* hiring status */}
      <h2>About the Job</h2>
      <p></p>
      <p></p>
      <h2>What we are looking for</h2>
    </div>
  )
  
}

export default JobPage
