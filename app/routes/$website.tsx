import { Outlet } from "@remix-run/react";
import Page from "~/dashboard/page";




export default function WebsiteLayout() {
  return <Page>
    <Outlet />
  </Page>;
}
