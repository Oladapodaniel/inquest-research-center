import LandingPage from './views/landingpage/Index.vue'
import SignIn from './views/participantonboarding/SignIn.vue'
import SignUp from './views/participantonboarding/SignUp.vue'
import ApplicationProcess from './views/participantonboarding/ApplicationProcess.vue'

const routes = [
    {
        path: '/',
        name: 'Index',
        component:  LandingPage
    },
    {
        path: '/signup',
        name: 'SignUp',
        component:  SignUp
    },
    {
        path: '/signin',
        name: 'SignIn',
        component:  SignIn
    },
    {
        path: '/clinicalresearchapplicationform',
        name: 'ApplicationProcess',
        component:  ApplicationProcess
    },
]

export default routes