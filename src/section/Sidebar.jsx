import {menu} from '../constant';
import {Link} from 'react-router-dom';

import {CreditCardIcon} from '@mui/icons-material/CreditCard';
import { HomeIcon} from '@mui/icons-material/Home';
import {PeopleIcon} from '@mui/icons-material/People';
import {SchoolIcon} from '@mui/icons-material/School';
import {SettingsIcon} from '@mui/icons-material/Settings';
import {AutoStoriesIcon} from '@mui/icons-material/AutoStories';

const Sidebar = () => {
  return (
    <div className="  px-8 py-12 m-0 h-full fixed top-0  bg-[#152259] overflow-scroll">
        <div className="py-4 ">
          <div className="relative">
        <img src="https://goshen-city.vercel.app/_next/image?url=https%3A%2F%2Fgoshencityschools.com%2Fwp-content%2Fuploads%2F2021%2F09%2FSchool-Logo-with-name.jpg&w=256&q=75"
         width={100} 
         height={100}
        alt="school logo"
        className="rounded-lg"
       />
        </div>
        <h1 className="font-bold text-xl text-center text-white pt-12"> Goshen City Schools</h1>
        </div>
        <div className="flex flex-col mt-10 gap-10">
{menu.map((item, i)=> (
  <div key={i}>
    <Link to={item.link} className='text-white'>{item.title}</Link>
  </div>
))}
        </div>
    </div>
  )
}

export default Sidebar




 
   

    
 