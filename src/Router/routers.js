import Dashboard from './../Pages/Dashboard/Dashboard';
import UsersTable from './../Pages/Users/UsersTable';


const router= [
    {
        path:'/',
        component:<Dashboard/>
    },
    {
        path:'/home',
        component:<Dashboard/>
    },
    {
        path:'/user',
        component:<UsersTable/>
    }
]

export default router;