import { createBrowserRouter } from "react-router";
import { RootLayout } from "./RootLayout";
import { HomeLandingPage } from "./HomeLandingPage";
import { HomePage as EventsPage } from "./HomePage";
import { EventDetailPage } from "./EventDetailPage";
import { RegistrationPage } from "./RegistrationPage";
import { RegistrationIndexPage } from "./RegistrationIndexPage";
import { ProfilePage, AboutPage } from "./OtherPages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomeLandingPage },
      { path: "events", Component: EventsPage },
      { path: "event/:id", Component: EventDetailPage },
      { path: "registration", Component: RegistrationIndexPage },
      { path: "register/:id", Component: RegistrationPage },
      { path: "profile", Component: ProfilePage },
      { path: "about", Component: AboutPage },
      { path: "*", Component: () => <div className="p-10 text-center text-2xl font-bold">404 - Page Not Found</div> },
    ],
  },
]);
