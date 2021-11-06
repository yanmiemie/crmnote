import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      alias: "/tutorials",
      name: "tutorials",
      component: () => import("./components/TutorialsList")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/TutorialAdd")
    },
    {
      path: "/TutorialMdf",
      name: "TutorialMdf",
      component: () => import("./components/TutorialMdf")
    },
    // {
    //   path: "/p",
    //   name: "p",
    //   component: () => import("./components/p")
    // }, 

    
    
    // {
    //   path: "/posGM_0",
    //   name: "posGM",
    //   component: () => import("./components/posGM")
    // },
    // {
    //   path: "/WordList",
    //   name: "WordList",
    //   component: () => import("./components/WordList")
    // },
    // {
    //   path: "/drag",
    //   name: "drag",
    //   component: () => import("./components/drag")
    // },
    // {
    //   path: "/pd3",
    //   name: "pd3",
    //   component: () => import("./components/pd3")
    // },
    {
      path: "/pd",
      name: "pd",
      component: () => import("./components/posGMdrop")
    },
    {
      path: "/vvv",
      name: "vvv",
      component: () => import("./components/vvv")
    }, 
    {
      path: "/ppp",
      name: "ppp",
      component: () => import("./components/ppp")
    }, 
    
    {
      path: "/printa",
      name: "printa",
      component: () => import("./components/printa")
    },  
    {
      path: "/v3",
      name: "v3",
      component: () => import("./components/v3")
    },
    {
      path: "/",
      name: "PMNAdd",
      component: () => import("./components/PMNAdd")
    },
    {
      path: "/PMSAdd",
      name: "PMSAdd",
      component: () => import("./components/PMSAdd")
    },
    {
      path: "/PMSList",
      name: "PMSList",
      component: () => import("./components/PMSList")
    }, 
    {
      path: "/PMNAdd",
      name: "PMNAdd",
      component: () => import("./components/PMNAdd")
    }, 
    {
      path: "/PMNList",
      name: "PMNList",
      component: () => import("./components/PMNList")
    },
    {
      path: "/cardDisplay",
      name: "cardDisplay",
      component: () => import("./components/cardDisplay")
    },
  ]
});
