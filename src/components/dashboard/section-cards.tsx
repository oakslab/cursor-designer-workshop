import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import {
  PriorityGroup,
  PriorityItem,
  type PriorityItemData,
} from "~/components/dashboard/priority-item";

export function SectionCards() {
  return (
    <div className="px-4 lg:px-6">
      <Card>
        <CardHeader className="gap-1">
          <div className="flex items-center gap-3">
            <CardTitle className="text-lg">Daily Brief</CardTitle>
            <span className="text-muted-foreground text-sm">
              Last sync: January 15, 2025 13:21
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex w-full items-start gap-6 rounded-md">
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="text-muted-foreground text-base">
                Active Shipments
              </span>
              <span className="text-2xl font-semibold tabular-nums">12</span>
              <span className="text-destructive text-xs">2 delayed</span>
            </div>

            <Separator orientation="vertical" />

            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="text-muted-foreground text-base">
                Active Quotes
              </span>
              <span className="text-2xl font-semibold tabular-nums">23</span>
              <span className="text-muted-foreground text-xs">
                3 expiring today
              </span>
            </div>

            <Separator orientation="vertical" />

            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="text-muted-foreground text-base">
                New bookings
              </span>
              <span className="text-2xl font-semibold tabular-nums">3</span>
              <span className="text-muted-foreground text-xs">
                1 added today
              </span>
            </div>

            <Separator orientation="vertical" />

            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="text-muted-foreground text-base">Total POs</span>
              <span className="text-2xl font-semibold tabular-nums">23</span>
              <span className="text-muted-foreground text-xs">
                3 added today
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6">
        <Card>
          <CardHeader className="gap-1">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col">
                <CardTitle className="text-base">
                  Your Priorities Today
                </CardTitle>
                <span className="text-muted-foreground text-sm">
                  Review what are the upcoming tasks for you
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <PriorityGroup>
              {MOCK_PRIORITIES.map((p) => (
                <PriorityItem key={`${p.assetCode}-${p.title}`} item={p} />
              ))}
            </PriorityGroup>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const MOCK_PRIORITIES: PriorityItemData[] = [
  {
    assetCode: "PO-12342",
    title: "Upload CIPL",
    vessel: "Vessel ABS",
    packagesLabel: "12 pkgs",
    dueLabel: "Today",
  },
  {
    assetCode: "Q-12342",
    title: "Review quote expiring today",
    vessel: "Vessel ABS",
    packagesLabel: "12 pkgs",
    dueLabel: "Today",
  },
  {
    assetCode: "S-12342",
    title: "Review shipment status",
    vessel: "Vessel ABS",
    packagesLabel: "12 pkgs",
    statusLabel: "Delayed",
    statusVariant: "destructive",
    dueLabel: "Today",
  },
  {
    assetCode: "Q-12342",
    title: "Review quote expiring today",
    vessel: "Vessel ABS",
    packagesLabel: "12 pkgs",
    dueLabel: "12.12.2025",
  },
  {
    assetCode: "PO-12342",
    title: "Upload CIPL",
    vessel: "Vessel ABS",
    packagesLabel: "12 pkgs",
    dueLabel: "12.12.2024",
  },
];
