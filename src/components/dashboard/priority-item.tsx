import { ChevronRight, Package, ShipWheel } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "~/components/ui/item";

export interface PriorityItemData {
  assetCode: string;
  title: string;
  vessel?: string;
  packagesLabel?: string;
  dueLabel: string;
  statusLabel?: string; // e.g., "Delayed"
  statusVariant?: "default" | "secondary" | "destructive" | "outline";
}

interface PriorityItemProps {
  item: PriorityItemData;
}

export function PriorityItem({ item }: PriorityItemProps) {
  const {
    assetCode,
    title,
    vessel,
    packagesLabel,
    dueLabel,
    statusLabel,
    statusVariant = "secondary",
  } = item;

  return (
    <Item variant="outline" className="rounded-lg p-3">
      <ItemContent>
        <ItemHeader>
          <ItemTitle>
            <Badge variant="outline">{assetCode}</Badge>
            <span className="text-foreground text-sm">{title}</span>
          </ItemTitle>
          <ItemActions>
            <ChevronRight className="text-foreground/80 size-4" />
          </ItemActions>
        </ItemHeader>
        <ItemFooter>
          <div className="text-muted-foreground flex items-center gap-4 text-xs">
            {vessel ? (
              <div className="flex items-center gap-1">
                <ShipWheel className="size-4" />
                <span>{vessel}</span>
              </div>
            ) : null}
            {packagesLabel ? (
              <div className="flex items-center gap-1">
                <Package className="size-4" />
                <span>{packagesLabel}</span>
              </div>
            ) : null}
          </div>
          <div className="flex items-center gap-2">
            {statusLabel ? (
              <Badge variant={statusVariant}>{statusLabel}</Badge>
            ) : null}
            <span className="text-muted-foreground text-xs">
              Due to: {dueLabel}
            </span>
          </div>
        </ItemFooter>
      </ItemContent>
    </Item>
  );
}

// Helper wrapper for external usage if needed
export function PriorityGroup({ children }: { children: React.ReactNode }) {
  return <ItemGroup className="gap-2">{children}</ItemGroup>;
}
