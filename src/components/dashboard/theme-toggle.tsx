"use client";

import * as React from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import { Switch } from "~/components/ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";
  const checked = mounted && isDark;

  return (
    <SidebarMenuItem>
      <div className="flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
        <div className="flex items-center gap-2">
          {isDark ? (
            <IconMoon className="size-4" />
          ) : (
            <IconSun className="size-4" />
          )}
          <span>Dark Mode</span>
        </div>
        <Switch
          checked={checked}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          aria-label="Toggle dark mode"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </SidebarMenuItem>
  );
}

