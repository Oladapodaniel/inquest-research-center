import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './views/landingpage/Index.vue'
import SignIn from './views/participantonboarding/SignIn.vue'
import SignUp from './views/participantonboarding/SignUp.vue'
import ApplicationProcess from './views/participantonboarding/ApplicationProcess.vue'
import UserDashboard from './views/UserDashboard.vue'
import SignupAdmin from "./views/adminonboarding/SignupAdmin.vue"
import Defaultlayout from "./components/dashboardlayout/Defaultlayout.vue"
import Applications from "./views/Applications.vue"
import Enrolments from "./views/Enrolments.vue"

const routes = [
    {
        path: '/',
        name: 'Index',
        component: LandingPage,
        meta: {
            title: 'Inquest Research Center - Landing page'
        },
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
        meta: {
            title: 'Inquest Research Center - Signup'
        },
    },
    {
        path: '/admin/signup',
        name: 'SignupAdmin',
        component: SignupAdmin,
        meta: {
            title: 'Inquest Research Center - Sign up Admin'
        },
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn,
        meta: {
            title: 'Inquest Research Center - Sign in'
        },
    },
    {
        path: '/clinicalresearchapplicationform',
        name: 'ApplicationProcess',
        component: ApplicationProcess,
        meta: {
            title: 'Inquest Research Center - Application process'
        },
    },
    {
        path: '/tenant',
        name: 'Defaultlayout',
        component: Defaultlayout,
        meta: {
            authRequired: true
        },
        children: [
            {
                path: '',
                name: 'UserDashboard',
                component: UserDashboard,
                meta: {
                    title: 'Inquest Research Center - Login Dashboard'
                },
            },
            {
                path: 'applications',
                name: 'Applications',
                component: Applications,
                meta: {
                    title: 'Inquest Research Center - Applications'
                },
            },
            {
                path: 'enrolments',
                name: 'Enrolments',
                component: Enrolments,
                meta: {
                    title: 'Inquest Research Center - Enrolments'
                },
            },
        ]
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => {
    const authenticated = firebase.auth().currentUser ? firebase.auth().currentUser._lat : localStorage.getItem('token')
    if (to.matched.some(record => record.meta.authRequired)) {
        if (authenticated) {
            next();
        } else {
            next({
                path: '/signin',
            });
        }
    } else {
        next();
    }
});


export default router