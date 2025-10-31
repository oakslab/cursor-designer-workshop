import Head from "next/head";
import * as React from "react";

import { AppSidebar } from "~/components/dashboard/app-sidebar";
import { ChartAreaInteractive } from "~/components/dashboard/chart-area-interactive";
import { DataTable } from "~/components/dashboard/data-table";
import { SectionCards } from "~/components/dashboard/section-cards";
import { AsIde } from "~/components/dashboard/as-ide";
import { SiteHeader } from "~/components/dashboard/site-header";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
import { Toaster } from "~/components/ui/sonner";

import data from "~/components/dashboard/data.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard - Design Workshop</title>
        <meta
          name="description"
          content="Dashboard with sidebar, charts and data table"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="py-4 md:py-6">
                <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <SectionCards />
                  </div>
                  <div>
                    <AsIde />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
      <Toaster />
    </>
  );
}
