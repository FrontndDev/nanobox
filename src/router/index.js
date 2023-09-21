import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store";
import Home from "@/views/Home";
import MainLayout from "@/layouts/MainLayout.vue";
import Catalog from "@/views/Catalog.vue";
import Commodity from "@/views/Commodity.vue";
import Blog from "@/views/Blog.vue";
import Article from "@/views/Article.vue";
import FAQ from "@/views/FAQ.vue";
import AboutUs from "@/views/AboutUs.vue";
import Certificates from "@/views/Certificates.vue";
import Contacts from "@/views/Contacts.vue";
import MainLayout2 from "@/layouts/MainLayout2.vue";
import DoctorChoiceLayout from "@/layouts/DoctorChoiceLayout.vue";
import DoctorChoice from "@/views/DoctorChoice.vue";
import MakeOrder from "@/views/MakeOrder.vue";
import Thanks from "@/views/Thanks.vue";
import Reviews from "@/views/Reviews.vue";
import CabinetLayout from "@/layouts/CabinetLayout.vue";
import Cabinet from "@/views/Cabinet.vue";
import MyOrders from "@/views/MyOrders.vue";
import Operations from "@/views/Operations.vue";
import Settings from "@/views/Settings.vue";
import Partners from "@/views/Partners.vue";
import PromoMaterials from "@/views/PromoMaterials.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import DeliveryTerms from "@/views/DeliveryTerms.vue";
import ReturnProcedure from "@/views/ReturnProcedure.vue";
import OfferAgreement from "@/views/OfferAgreement.vue";
import TermsOfUse from "@/views/TermsOfUse.vue";

const routes = [
  {
    path: '/',
    component: MainLayout,

    children: [
      {
        path: '',
        component: Home,

        meta: {
          bg: 'bg1'
        }
      },
      {
        path: 'catalog',
        component: Catalog,
      },
      {
        path: 'blog',
        component: Blog,

        meta: {
          bg: 'bg2'
        }
      },
      {
        path: 'article',
        meta: {
          bg: 'bg2'
        },

        children: [
          {
            path: ':id',
            component: Article,
          }
        ]
      },
      {
        path: 'faq',
        component: FAQ,

        meta: {
          bg: 'bg2'
        }
      },
      {
        path: 'about-us',
        component: AboutUs,

        meta: {
          bg: 'bg2'
        }
      },
      {
        path: 'certificates',
        component: Certificates,

        meta: {
          bg: 'bg1'
        }
      },
      {
        path: 'contacts',
        component: Contacts,

        meta: {
          bg: 'bg1'
        }
      },
      {
        path: 'make-order',
        component: MakeOrder,
      },
      {
        path: 'thanks',
        component: Thanks,
      },
      {
        path: 'reviews',
        component: Reviews,

        meta: {
          bg: 'bg1'
        }
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicy,
      },
      {
        path: 'delivery-terms',
        component: DeliveryTerms,
      },
      {
        path: 'return-procedure',
        component: ReturnProcedure,
      },
      {
        path: 'offer-agreement',
        component: OfferAgreement,
      },
      {
        path: 'terms-of-use',
        component: TermsOfUse,
      }
    ],
  },
  {
    path: '/',
    component: MainLayout2,

    children: [
      {
        path: 'catalog',

        children: [
          {
            path: 'product/:id',
            component: Commodity,
            meta: {
              type: 'product'
            }
          },
          {
            path: 'nanobox/:id',
            component: Commodity,
            meta: {
              type: 'nanobox'
            }
          },
        ]
      }
    ]
  },
  {
    path: '/',
    component: DoctorChoiceLayout,

    children: [
      {
        path: 'doctor',
        component: DoctorChoice,
      }
    ]
  },
  {
    path: '/',
    component: CabinetLayout,
    meta: {
      auth: true,
    },

    children: [
      {
        path: 'cabinet',
        component: Cabinet,
      },
      {
        path: 'my-orders',
        component: MyOrders,
      },
      {
        path: 'operations',
        component: Operations,
      },
      {
        path: 'settings',
        component: Settings,
      },
      {
        path: 'partners',
        component: Partners,
      },
      {
        path: 'promo-materials',
        component: PromoMaterials,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth

  const fullPathSplit = to.fullPath.split('?token=')
  const validForCabinet = (fullPathSplit[0] === '/cabinet' && fullPathSplit[1])

  if (requireAuth && (store.getters["auth/isAuthenticated"] || validForCabinet)) {
    next()
  } else if (requireAuth && !store.getters["auth/isAuthenticated"]) {
    next('/')
  } else {
    next()
  }
})

export default router
