
import Dashboard from "@/components/dashboard/Dashboard";
import axios from "axios";

export async function getData() {
  const username = 'coalition';
  const password = 'skills-test';
  const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';
  const {data} = await axios.get(url,{
    auth:{
      username,
      password
    }
  })



 return data
}

export default  async function Home() {

  const data = await getData()
  
  
  return (
    <main className="w-screen h-full bg-gray-100 bg-no-repeat bg-padding-box opacity-100">
      <Dashboard patients={data} />
    </main>
  );
}
