import { BrainCog, Send } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";

export function AsIde() {
  return (
    <div className="px-4 lg:px-6">
      <Card>
        <CardHeader className="gap-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-muted rounded-md p-1.5">
                <BrainCog className="size-4" />
              </div>
              <CardTitle className="text-base">Ask AI</CardTitle>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="secondary">Summarize my shipments</Badge>
            <Badge variant="secondary">What’s delayed today?</Badge>
            <Badge variant="secondary">Show quotes expiring</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex h-64 flex-col gap-3 overflow-y-auto rounded-md border p-3">
            <div className="flex items-start gap-2">
              <div className="bg-muted rounded px-2 py-1 text-xs font-medium">
                AI
              </div>
              <div className="bg-accent text-accent-foreground rounded-lg px-3 py-2 text-sm">
                Hi! How can I help you today?
              </div>
            </div>
            <div className="ml-auto flex max-w-[75%] items-start gap-2">
              <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 text-sm">
                Summarize today’s priorities.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-muted rounded px-2 py-1 text-xs font-medium">
                AI
              </div>
              <div className="bg-accent text-accent-foreground rounded-lg px-3 py-2 text-sm">
                You have 5 items. 1 delayed shipment and 1 quote expiring today.
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <form className="flex w-full items-end gap-2">
            <Textarea
              placeholder="Ask something about your logistics..."
              className="min-h-[44px] resize-none"
              disabled
            />
            <Button type="button" disabled>
              <Send className="mr-1 size-4" />
              Send
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
