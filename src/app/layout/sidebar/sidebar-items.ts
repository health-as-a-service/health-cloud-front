import { RouteInfo } from "./sidebar.metadata";
export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "MENUITEMS.MAIN.TEXT",
    moduleName: "",
    iconType: "",
    icon: "",
    class: "",
    groupTitle: true,
    badge: "",
    badgeClass: "",
    role: ["All"],
    submenu: [],
  },


  // Stagiaire module 
  {
    path: "",
    title: "Stage",
    moduleName: "stage",
    iconType: "material-icons-two-tone",
    icon: "space_dashboard",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["stagiare"],
    submenu: [
      {
        path: "/stagiaire/stage/all",
        title: "Courses",
        moduleName: "stage",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },


  // Admin Modules
  {
    path: "",
    title: "Stage",
    moduleName: "stage",
    iconType: "material-icons-two-tone",
    icon: "space_dashboard",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [
      {
        path: "/admin/stage/all",
        title: "Courses",
        moduleName: "stage",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },

  {
    path: "",
    title: "Day off",
    moduleName: "day-offs",
    iconType: "material-icons-two-tone",
    icon: "space_dashboard",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [
      {
        path: "/admin/day-off/pending",
        title: "Pending",
        moduleName: "day-offs",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["admin"],
        submenu: [],
      },
      {
        path: "/admin/day-off/all-day-offs",
        title: "All dayoffs",
        moduleName: "day-offs",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["admin"],
        submenu: [],
      },
    ],
        role: [""],
        submenu: [],
      },
    ],
  },
  
  //mayysa
  {
    path: "",
    title: "donateur",
    moduleName: "donateurs",
    iconType: "material-icons-two-tone",
    icon: "space_dashboard",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [{
      path: "/admin/donateurs/donateur",
      title: "donateurs",
      moduleName: "donateurs",
      iconType: "",
      icon: "",
      class: "ml-menu",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: [""],
      submenu: [],
    },
    {
      path: "/admin/donateurs/ajouterdonateur",
      title: "ajouter donateur",
      moduleName: "donateurs",
      iconType: "",
      icon: "",
      class: "ml-menu",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: [""],
      submenu: [],
    },]
  },

  {
    path: "",
    title: "banque",
    moduleName: "banques",
    iconType: "material-icons-two-tone",
    icon: "space_dashboard",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [{
      path: "/admin/BanqueSang/afficherbanque",
      title: "afficher banque",
      moduleName: "BanqueSang",
      iconType: "",
      icon: "",
      class: "ml-menu",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: [""],
      submenu: [],
    },
    // {
    //   path: "/admin/donateurs/ajouterdonateur",
    //   title: "ajouter donateur",
    //   moduleName: "donateurs",
    //   iconType: "",
    //   icon: "",
    //   class: "ml-menu",
    //   groupTitle: false,
    //   badge: "",
    //   badgeClass: "",
    //   role: [""],
    //   submenu: [],
    // },
  ]
  },


  // ajouteeer 
 
  {

    path: "",
    title: "MENUITEMS.DASHBOARD.TEXT",
    moduleName: "dashboard",
    iconType: "material-icons-two-tone",
    icon: "space_dashboard",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [
      {
        path: "/admin/dashboard/main",
        title: "MENUITEMS.DASHBOARD.LIST.DASHBOARD1",
        moduleName: "dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/dashboard/dashboard2",
        title: "MENUITEMS.DASHBOARD.LIST.DASHBOARD2",
        moduleName: "dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/dashboard/doctor-dashboard",
        title: "MENUITEMS.DASHBOARD.LIST.DOCTOR-DASHBOARD",
        moduleName: "doctor-dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/dashboard/patient-dashboard",
        title: "MENUITEMS.DASHBOARD.LIST.PATIENT-DASHBOARD",
        moduleName: "patient-dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "Operations",
    moduleName: "operations",
    iconType: "material-icons-two-tone",
    icon: "space_dashboard",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [
      {
        path: "/admin/operations",
        title: "Operations list",
        moduleName: "operations",
        iconType: "",
        icon: "list",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/operations/add-operation",
        title: "Add new operation",
        moduleName: "operations",
        iconType: "",
        icon: "plus",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "Logistiques",
    moduleName: "logistics",
    iconType: "material-icons-two-tone",
    icon: "space_dashboard",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [
      {
        path: "/admin/logistics",
        title: "All logistics",
        moduleName: "logistics",
        iconType: "",
        icon: "list",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/logistics/add-logistic",
        title: "Add new logistic",
        moduleName: "logistics",
        iconType: "",
        icon: "plus",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.APPOINTMENTS.TEXT",
    moduleName: "appointment",
    iconType: "material-icons-two-tone",
    icon: "assignment",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [
      {
        path: "/admin/appointment/viewAppointment",
        title: "MENUITEMS.APPOINTMENTS.LIST.VIEW-APPOINTMENT",
        moduleName: "appointment",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/appointment/bookAppointment",
        title: "MENUITEMS.APPOINTMENTS.LIST.BOOK-APPOINTMENT",
        moduleName: "appointment",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/appointment/edit-ppointment",
        title: "MENUITEMS.APPOINTMENTS.LIST.EDIT-APPOINTMENT",
        moduleName: "appointment",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.DOCTORS.TEXT",
    moduleName: "doctors",
    iconType: "material-icons-two-tone",
    icon: "supervised_user_circle",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [
      {
        path: "/admin/doctors/allDoctors",
        title: "MENUITEMS.DOCTORS.LIST.ALL-DOCTOR",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/doctors/add-doctor",
        title: "MENUITEMS.DOCTORS.LIST.ADD-DOCTOR",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/doctors/edit-doctor",
        title: "MENUITEMS.DOCTORS.LIST.EDIT-DOCTOR",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/doctors/doctor-profile",
        title: "MENUITEMS.DOCTORS.LIST.PROFILE",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.STAFF.TEXT",
    moduleName: "staff",
    iconType: "material-icons-two-tone",
    icon: "people_alt",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [
      {
        path: "/admin/staff/all-staff",
        title: "MENUITEMS.STAFF.LIST.ALL-STAFF",
        moduleName: "staff",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/staff/add-staff",
        title: "MENUITEMS.STAFF.LIST.ADD-STAFF",
        moduleName: "staff",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/staff/edit-staff",
        title: "MENUITEMS.STAFF.LIST.EDIT-STAFF",
        moduleName: "staff",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/staff/staff-profile",
        title: "MENUITEMS.STAFF.LIST.PROFILE",
        moduleName: "staff",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.PATIENTS.TEXT",
    moduleName: "patients",
    iconType: "material-icons-two-tone",
    icon: "face",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [
      {
        path: "/admin/patients/all-patients",
        title: "MENUITEMS.PATIENTS.LIST.ALL-PATIENT",
        moduleName: "patients",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/patients/add-patient",
        title: "MENUITEMS.PATIENTS.LIST.ADD-PATIENT",
        moduleName: "patients",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/patients/edit-patient",
        title: "MENUITEMS.PATIENTS.LIST.EDIT-PATIENT",
        moduleName: "patients",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/patients/patient-profile",
        title: "MENUITEMS.PATIENTS.LIST.PROFILE",
        moduleName: "patients",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.ROOMS.TEXT",
    moduleName: "room",
    iconType: "material-icons-two-tone",
    icon: "hotel",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [
      {
        path: "/admin/room/all-rooms",
        title: "MENUITEMS.ROOMS.LIST.ALLOTED-ROOMS",
        moduleName: "room",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/room/add-allotment",
        title: "MENUITEMS.ROOMS.LIST.NEW-ALLOTMENT",
        moduleName: "room",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/room/edit-allotment",
        title: "MENUITEMS.ROOMS.LIST.EDIT-ALLOTMENT",
        moduleName: "room",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.BILLING.TEXT",
    moduleName: "billing",
    iconType: "material-icons-two-tone",
    icon: "monetization_on",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [
      {
        path: "/admin/billing/bill-list",
        title: "MENUITEMS.BILLING.LIST.BILL-LIST",
        moduleName: "billing",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/billing/add-bill",
        title: "MENUITEMS.BILLING.LIST.ADD-BILL",
        moduleName: "billing",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/billing/invoice",
        title: "MENUITEMS.BILLING.LIST.INVOICE",
        moduleName: "billing",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.RECORDS.TEXT",
    moduleName: "records",
    iconType: "material-icons-two-tone",
    icon: "list_alt",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [
      {
        path: "/admin/records/birth",
        title: "MENUITEMS.RECORDS.LIST.BIRTH-RECORDS",
        moduleName: "records",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/records/death",
        title: "MENUITEMS.RECORDS.LIST.DEATH-RECORDS",
        moduleName: "records",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.AMBULANCE.TEXT",
    moduleName: "ambulance",
    iconType: "material-icons-two-tone",
    icon: "airport_shuttle",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [
      {
        path: "/admin/ambulance/call-list",
        title: "MENUITEMS.AMBULANCE.LIST.AMBULANCE-CALL-LIST",
        moduleName: "ambulance",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/ambulance/list",
        title: "MENUITEMS.AMBULANCE.LIST.AMBULANCE-LIST",
        moduleName: "ambulance",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.PHARMACY.TEXT",
    moduleName: "pharmacy",
    iconType: "material-icons-two-tone",
    icon: "local_pharmacy",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [
      {
        path: "/admin/pharmacy/medicine-list",
        title: "MENUITEMS.PHARMACY.LIST.MEDICINE-LIST",
        moduleName: "pharmacy",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/pharmacy/add-medicine",
        title: "MENUITEMS.PHARMACY.LIST.ADD-MEDICINE",
        moduleName: "pharmacy",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.DEPARTMENTS.TEXT",
    moduleName: "departments",
    iconType: "material-icons-two-tone",
    icon: "group_work",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [
      {
        path: "/admin/departments/department-list",
        title: "MENUITEMS.DEPARTMENTS.LIST.DEPARTMENT-LIST",
        moduleName: "departments",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/departments/add-department",
        title: "MENUITEMS.DEPARTMENTS.LIST.ADD-DEPARTMENT",
        moduleName: "departments",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.INVENTORY.TEXT",
    moduleName: "inventory",
    iconType: "material-icons-two-tone",
    icon: "shopping_bag",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [
      {
        path: "/admin/inventory/item-stock-list",
        title: "MENUITEMS.INVENTORY.LIST.ITEM-STOCK-LIST",
        moduleName: "inventory",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/inventory/issued-items",
        title: "MENUITEMS.INVENTORY.LIST.ISSUED-ITEMS",
        moduleName: "inventory",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },

  // Doctor Modules
  {
    path: "/doctor/operations",
    title: "Operations list",
    moduleName: "operations",
    iconType: "material-icons-two-tone",
    icon: "space_dashboard",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["doctor"],
    submenu: [],
  },
  {
    path: "/doctor/dashboard",
    title: "MENUITEMS.DOCTOR.DASHBOARD",
    moduleName: "dashboard",
    iconType: "material-icons-two-tone",
    icon: "space_dashboard",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["doctor"],
    submenu: [],
  },
  {
    path: "/doctor/appointments",
    title: "MENUITEMS.DOCTOR.APPOINTMENTS",
    moduleName: "appointments",
    iconType: "material-icons-two-tone",
    icon: "assignment",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["doctor"],
    submenu: [],
  },
  {
    path: "/doctor/doctors",
    title: "MENUITEMS.DOCTOR.DOCTORS",
    moduleName: "doctors",
    iconType: "material-icons-two-tone",
    icon: "supervised_user_circle",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["doctor"],
    submenu: [],
  },
  {
    path: "/doctor/patients",
    title: "MENUITEMS.DOCTOR.PATIENTS",
    moduleName: "patients",
    iconType: "material-icons-two-tone",
    icon: "face",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["doctor"],
    submenu: [],
  },
  {
    path: "/doctor/settings",
    title: "MENUITEMS.DOCTOR.SETTINGS",
    moduleName: "settings",
    iconType: "material-icons-two-tone",
    icon: "settings",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["doctor"],
    submenu: [],
  },
  {
    path: "/apps/chat",
    title: "MENUITEMS.DOCTOR.CHAT",
    moduleName: "apps",
    iconType: "material-icons-two-tone",
    icon: "chat",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["doctor"],
    submenu: [],
  },
  // Patient Modules
  {
    path: "/patient/dashboard",
    title: "MENUITEMS.PATIENT.DASHBOARD",
    moduleName: "dashboard",
    iconType: "material-icons-two-tone",
    icon: "space_dashboard",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["patient"],
    submenu: [],
  },
  {
    path: "",
    title: "MENUITEMS.PATIENT.APPOINTMENTS.TEXT",
    moduleName: "appointments",
    iconType: "material-icons-two-tone",
    icon: "assignment",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["patient"],
    submenu: [
      {
        path: "/patient/appointments/today",
        title: "MENUITEMS.PATIENT.APPOINTMENTS.LIST.TODAY",
        moduleName: "appointments",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/patient/appointments/upcoming",
        title: "MENUITEMS.PATIENT.APPOINTMENTS.LIST.UPCOMING",
        moduleName: "appointments",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/patient/appointments/past",
        title: "MENUITEMS.PATIENT.APPOINTMENTS.LIST.PAST",
        moduleName: "appointments",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "/patient/prescriptions",
    title: "MENUITEMS.PATIENT.PRESCRIPTIONS",
    moduleName: "prescriptions",
    iconType: "material-icons-two-tone",
    icon: "receipt_long",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["patient"],
    submenu: [],
  },
  {
    path: "/patient/records",
    title: "MENUITEMS.PATIENT.MEDICAL-RECORD",
    moduleName: "records",
    iconType: "material-icons-two-tone",
    icon: "restore_page",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["patient"],
    submenu: [],
  },
  {
    path: "/patient/billing",
    title: "MENUITEMS.PATIENT.BILLING",
    moduleName: "records",
    iconType: "material-icons-two-tone",
    icon: "receipt",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["patient"],
    submenu: [],
  },
  {
    path: "/apps/chat",
    title: "MENUITEMS.PATIENT.CHAT",
    moduleName: "apps",
    iconType: "material-icons-two-tone",
    icon: "chat",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["patient"],
    submenu: [],
  },
  {
    path: "/patient/settings",
    title: "MENUITEMS.PATIENT.SETTINGS",
    moduleName: "settings",
    iconType: "material-icons-two-tone",
    icon: "settings",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["patient"],
    submenu: [],
  },

  // Common Modules

  {
    path: "",
    title: "Apps",
    moduleName: "",
    iconType: "",
    icon: "",
    class: "",
    groupTitle: true,
    badge: "",
    badgeClass: "",
    role: ["Admin", "Doctor"],
    submenu: [],
  },

  {
    path: "",
    title: "More Apps",
    moduleName: "apps",
    iconType: "material-icons-two-tone",
    icon: "stars",
    class: "menu-toggle",
    groupTitle: false,
    badge: "4",
    badgeClass: "badge bg-orange sidebar-badge float-end",
    role: ["admin"],
    submenu: [
      {
        path: "/apps/chat",
        title: "Chat",
        moduleName: "apps",
        iconType: "material-icons-two-tone",
        icon: "chat",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/apps/contact-grid",
        title: "Contact Grid",
        moduleName: "apps",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/apps/support",
        title: "Support",
        moduleName: "apps",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },

  // {
  //   path: "",
  //   title: "Components",
  //   moduleName: "",
  //   iconType: "",
  //   icon: "",
  //   class: "",
  //   groupTitle: true,
  //   badge: "",
  //   badgeClass: "",
  //   role: ["admin"],
  //   submenu: [],
  // },

  {
    path: "",
    title: "Authentication",
    moduleName: "authentication",
    iconType: "material-icons-two-tone",
    icon: "supervised_user_circle",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [
      {
        path: "/authentication/signin",
        title: "Sign In",
        moduleName: "authentication",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/signup",
        title: "Sign Up",
        moduleName: "authentication",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/forgot-password",
        title: "Forgot Password",
        moduleName: "authentication",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/locked",
        title: "Locked",
        moduleName: "authentication",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/page404",
        title: "404 - Not Found",
        moduleName: "authentication",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/page500",
        title: "500 - Server Error",
        moduleName: "authentication",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
];
