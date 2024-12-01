import React, { useEffect } from 'react';
import { getJobs } from '@/api/apiJobs';
import { useSession } from '@clerk/clerk-react';
import useFetch from '@/hooks/use-fetch';


const JobListing = () => {

  const {fn:fnJobs,data:dataJobs,loading:loadingJobs}=useFetch(getJobs,{});
  console.log(dataJobs);
  useEffect(()=>{
    fnJobs();

  },[])
  

  return <div>Job Listing</div>;
};

export default JobListing;
