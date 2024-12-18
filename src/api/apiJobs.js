import supabaseClient from "@/utils/supabase";

export async function getJobs(token,{location,company_id,searchQuery}) {
  const supabase = await supabaseClient(token); // Get the authenticated client

  let query=supabase.from("jobs").select("*,company:companies(name,logo_url),saved:saved_jobs(id)");

  if(location){
    query=query.eq("location",location);
  }

  if(company_id){
    query=query.eq("company_id",company_id);
  }

  if(searchQuery){
    query=query.ilike("title",`%${searchQuery}%`);
  }
  const { data, error } = await query;
  if (error) {
    console.error('Error fetching Jobs:', error);
    return null;
  }
  return data;
}


export async function saveJobs(token,{alreadySaved},saveData) {
    const supabase = await supabaseClient(token); // Get the authenticated client

    if(alreadySaved){
        const{data,error:deleteError}=await supabase
            .from("saved_jobs")
            .delete()
            .eq("job_id",saveData.job_id);

        if(deleteError){
            console.error("Error fetching Jobs:",deleteError);
            return null;
        }

        return data;
    }else{
        const{data,error:insertError}=await supabase
            .from("saved_jobs")
            .insert([saveData])
            .select();
            if(insertError){
                console.error("Error fetching Jobs:",insertError);
                return null;
            }
        return data;
    }
  
    const { data, error } = await supabase
        .from("jobs").select("*,company:companies(name,logo_url),saved:saved_jobs(id)");
    if(error){
        console.error("Error fetching Jobs:",error);
        return null;
    }
    
    return data;
}

export async function getSingleJob(token,{job_id}){

  const supabase=await supabaseClient(token);

  const{data,error}=await supabase
  .from("jobs")
  .select("*,company:companies(name,logo_url),applications:applications(*)"
  )
  .eq("id",job_id)
  .single();

  if(error){
      console.error("Error Fetching Company:",error);
      return null;
  }

  return data;

}
