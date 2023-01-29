export const AppConstants = {
    API_HOST : "http://localhost:8761",

    SUBSCRIPTION : {
       ADD: '/subscriptions/create',
       GET: '/subscriptions/getAll',
       METHODS: '/subscriptions/subscribedMethods/',
       ADD_METHOD: '/subscriptions/addMethod/'
   },
   METHOD : {
       ADD: '/paymentMethod/add',
       GET: '/paymentMethod/getAll',
   },
   PAYMENT : {
        GET_METHODS: '/paymentInfo/paymentMethods/'
   }
}