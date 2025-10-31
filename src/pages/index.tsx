import Head from "next/head";
import * as React from "react";

import { AppSidebar } from "~/components/dashboard/app-sidebar";
import { ChartAreaInteractive } from "~/components/dashboard/chart-area-interactive";
import { DataTable } from "~/components/dashboard/data-table";
import { SectionCards } from "~/components/dashboard/section-cards";
import { SiteHeader } from "~/components/dashboard/site-header";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
import { Toaster } from "~/components/ui/sonner";
import CuteCat from "~/components/cute-cat";

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
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <div className="px-4 lg:px-6">
                  <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
                    <CuteCat />
                    <div className="leading-tight">
                      <div className="text-sm font-medium">Say hi to your new friend</div>
                      <div className="text-xs text-muted-foreground">Pure HTML/CSS cat with subtle animations</div>
                    </div>
                  </div>
                </div>
                <SectionCards />
                <div className="px-4 lg:px-6">
                  <ChartAreaInteractive />
                </div>
                <DataTable data={data} />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
      <Toaster />
    </>
  );
}
