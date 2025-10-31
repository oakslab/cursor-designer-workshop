import Head from "next/head";
import * as React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

import { AppSidebar } from "~/components/dashboard/app-sidebar";
import { SiteHeader } from "~/components/dashboard/site-header";
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";
import type { ChartConfig } from "~/components/ui/chart";
import { Badge } from "~/components/ui/badge";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
import { Toaster } from "~/components/ui/sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

// Mock data for analytics
const revenueData = [
  { month: "Jan", revenue: 45000, expenses: 28000 },
  { month: "Feb", revenue: 52000, expenses: 30000 },
  { month: "Mar", revenue: 48000, expenses: 32000 },
  { month: "Apr", revenue: 61000, expenses: 29000 },
  { month: "May", revenue: 55000, expenses: 35000 },
  { month: "Jun", revenue: 67000, expenses: 38000 },
];

const trafficData = [
  { hour: "00:00", visitors: 120 },
  { hour: "04:00", visitors: 80 },
  { hour: "08:00", visitors: 450 },
  { hour: "12:00", visitors: 820 },
  { hour: "16:00", visitors: 680 },
  { hour: "20:00", visitors: 340 },
];

const deviceData = [
  { name: "Desktop", value: 45, color: "var(--chart-1)" },
  { name: "Mobile", value: 35, color: "var(--chart-2)" },
  { name: "Tablet", value: 20, color: "var(--chart-3)" },
];

const conversionData = [
  { date: "Week 1", conversions: 120, clicks: 1200 },
  { date: "Week 2", conversions: 180, clicks: 1500 },
  { date: "Week 3", conversions: 210, clicks: 1800 },
  { date: "Week 4", conversions: 195, clicks: 1700 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-2)",
  },
  visitors: {
    label: "Visitors",
    color: "var(--chart-3)",
  },
  conversions: {
    label: "Conversions",
    color: "var(--chart-4)",
  },
  clicks: {
    label: "Clicks",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export default function Analytics() {
  return (
    <>
      <Head>
        <title>Analytics - Design Workshop</title>
        <meta
          name="description"
          content="Analytics dashboard with charts and metrics"
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
                {/* Analytics Overview Cards */}
                <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
                  <Card className="@container/card">
                    <CardHeader>
                      <CardDescription>Total Revenue</CardDescription>
                      <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        $328,000
                      </CardTitle>
                      <CardAction>
                        <Badge variant="outline">
                          <IconTrendingUp />
                          +18.2%
                        </Badge>
                      </CardAction>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                      <div className="line-clamp-1 flex gap-2 font-medium">
                        Up from last month <IconTrendingUp className="size-4" />
                      </div>
                      <div className="text-muted-foreground">
                        +$48K vs previous period
                      </div>
                    </CardFooter>
                  </Card>
                  <Card className="@container/card">
                    <CardHeader>
                      <CardDescription>Active Users</CardDescription>
                      <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        12,450
                      </CardTitle>
                      <CardAction>
                        <Badge variant="outline">
                          <IconTrendingUp />
                          +8.5%
                        </Badge>
                      </CardAction>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                      <div className="line-clamp-1 flex gap-2 font-medium">
                        Growing steadily <IconTrendingUp className="size-4" />
                      </div>
                      <div className="text-muted-foreground">
                        +980 new users this week
                      </div>
                    </CardFooter>
                  </Card>
                  <Card className="@container/card">
                    <CardHeader>
                      <CardDescription>Conversion Rate</CardDescription>
                      <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        4.8%
                      </CardTitle>
                      <CardAction>
                        <Badge variant="outline">
                          <IconTrendingDown />
                          -0.3%
                        </Badge>
                      </CardAction>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                      <div className="line-clamp-1 flex gap-2 font-medium">
                        Slight decline <IconTrendingDown className="size-4" />
                      </div>
                      <div className="text-muted-foreground">
                        Optimize funnel needed
                      </div>
                    </CardFooter>
                  </Card>
                  <Card className="@container/card">
                    <CardHeader>
                      <CardDescription>Avg. Session</CardDescription>
                      <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        3m 24s
                      </CardTitle>
                      <CardAction>
                        <Badge variant="outline">
                          <IconTrendingUp />
                          +12s
                        </Badge>
                      </CardAction>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                      <div className="line-clamp-1 flex gap-2 font-medium">
                        Engagement improving <IconTrendingUp className="size-4" />
                      </div>
                      <div className="text-muted-foreground">
                        Better content performance
                      </div>
                    </CardFooter>
                  </Card>
                </div>

                {/* Charts Section */}
                <div className="px-4 lg:px-6">
                  <Tabs defaultValue="revenue" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="revenue">Revenue</TabsTrigger>
                      <TabsTrigger value="traffic">Traffic</TabsTrigger>
                      <TabsTrigger value="conversions">Conversions</TabsTrigger>
                      <TabsTrigger value="devices">Devices</TabsTrigger>
                    </TabsList>
                    <TabsContent value="revenue" className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Revenue & Expenses</CardTitle>
                          <CardDescription>
                            Monthly revenue and expenses over the last 6 months
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ChartContainer
                            config={chartConfig}
                            className="aspect-auto h-[300px] w-full"
                          >
                            <BarChart data={revenueData}>
                              <CartesianGrid vertical={false} />
                              <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                              />
                              <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => `$${value / 1000}k`}
                              />
                              <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent />}
                              />
                              <Bar
                                dataKey="revenue"
                                fill="var(--color-revenue)"
                                radius={[4, 4, 0, 0]}
                              />
                              <Bar
                                dataKey="expenses"
                                fill="var(--color-expenses)"
                                radius={[4, 4, 0, 0]}
                              />
                            </BarChart>
                          </ChartContainer>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="traffic" className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Traffic by Hour</CardTitle>
                          <CardDescription>
                            Visitor traffic patterns throughout the day
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ChartContainer
                            config={chartConfig}
                            className="aspect-auto h-[300px] w-full"
                          >
                            <LineChart data={trafficData}>
                              <CartesianGrid vertical={false} />
                              <XAxis
                                dataKey="hour"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                              />
                              <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                              />
                              <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent />}
                              />
                              <Line
                                type="monotone"
                                dataKey="visitors"
                                stroke="var(--color-visitors)"
                                strokeWidth={2}
                                dot={false}
                              />
                            </LineChart>
                          </ChartContainer>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="conversions" className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Conversions & Clicks</CardTitle>
                          <CardDescription>
                            Weekly conversion and click trends
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ChartContainer
                            config={chartConfig}
                            className="aspect-auto h-[300px] w-full"
                          >
                            <LineChart data={conversionData}>
                              <CartesianGrid vertical={false} />
                              <XAxis
                                dataKey="date"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                              />
                              <YAxis
                                yAxisId="left"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                              />
                              <YAxis
                                yAxisId="right"
                                orientation="right"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                              />
                              <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent />}
                              />
                              <Line
                                yAxisId="left"
                                type="monotone"
                                dataKey="conversions"
                                stroke="var(--color-conversions)"
                                strokeWidth={2}
                                dot={false}
                              />
                              <Line
                                yAxisId="right"
                                type="monotone"
                                dataKey="clicks"
                                stroke="var(--color-clicks)"
                                strokeWidth={2}
                                dot={false}
                              />
                            </LineChart>
                          </ChartContainer>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="devices" className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Device Distribution</CardTitle>
                          <CardDescription>
                            Percentage breakdown by device type
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ChartContainer
                            config={chartConfig}
                            className="mx-auto aspect-square max-h-[300px] w-full"
                          >
                            <PieChart>
                              <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent />}
                              />
                              <Pie
                                data={deviceData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label={({ name, value }) =>
                                  `${name}: ${value}%`
                                }
                              >
                                {deviceData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                            </PieChart>
                          </ChartContainer>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
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

