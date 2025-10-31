import Head from "next/head";
import * as React from "react";
import {
  IconArrowLeft,
  IconBell,
  IconPencil,
  IconPhone,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";

import { AppSidebar } from "~/components/dashboard/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Separator } from "~/components/ui/separator";
import { SidebarProvider } from "~/components/ui/sidebar";
import { Textarea } from "~/components/ui/textarea";
import { Toaster } from "~/components/ui/sonner";

export default function PatientCard() {
  const [encounterOpen, setEncounterOpen] = React.useState(true);
  const [vitalsOpen, setVitalsOpen] = React.useState(true);
  const [eligibilityOpen, setEligibilityOpen] = React.useState(true);
  const [labsOpen, setLabsOpen] = React.useState(true);
  const [medicalHistoryOpen, setMedicalHistoryOpen] = React.useState(true);
  const [medicationsOpen, setMedicationsOpen] = React.useState(true);
  const [preferredMedOpen, setPreferredMedOpen] = React.useState(true);
  const [outcomeOpen, setOutcomeOpen] = React.useState(true);

  // Allergies state
  const [allergies, setAllergies] = React.useState<string[]>([
    "Peanuts + Reaction type",
    "Shellfish",
  ]);
  const [allergiesDialogOpen, setAllergiesDialogOpen] = React.useState(false);
  const [newAllergy, setNewAllergy] = React.useState("");

  const handleAddAllergy = () => {
    if (newAllergy.trim() && !allergies.includes(newAllergy.trim())) {
      setAllergies([...allergies, newAllergy.trim()]);
      setNewAllergy("");
    }
  };

  const handleRemoveAllergy = (allergy: string) => {
    setAllergies(allergies.filter((a) => a !== allergy));
  };

  return (
    <>
      <Head>
        <title>Patient Card - Medical Weight Loss Encounter</title>
        <meta
          name="description"
          content="Medical Weight Loss Encounter - Patient Card"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <div className="flex flex-1 flex-col">
          {/* Custom Header */}
          <header className="flex h-16 shrink-0 items-center justify-between border-b px-6">
            <div className="flex items-center gap-6">
              <Button variant="outline" size="sm" asChild>
                <Link href="/">
                  <IconArrowLeft className="size-4" />
                  <span>Back</span>
                </Link>
              </Button>
              <h1 className="text-xl font-bold">Medical Weight Loss Encounter</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <IconBell className="size-5" />
              </Button>
              <Avatar className="size-10">
                <AvatarImage src="/avatars/shadcn.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </header>

          {/* Main Content Area */}
          <div className="flex flex-1 gap-3 overflow-auto p-3">
            {/* Left Sidebar - Patient Information */}
            <aside className="flex w-[280px] flex-col gap-3">
              {/* Patient Details Card */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-base">Emma Novak</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-xs">
                  <p>+420 777 123 456</p>
                  <p>emma.novak@example.com</p>
                  <p className="pb-4">3761 Venture Place, 20006</p>
                  <Button className="w-full" size="sm" variant="outline">
                    <IconPhone className="size-4" />
                    <span>Call patient</span>
                  </Button>
                </CardContent>
              </Card>

              {/* Allergies Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Allergies</CardTitle>
                    <Dialog open={allergiesDialogOpen} onOpenChange={setAllergiesDialogOpen}>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8">
                          <IconPencil className="size-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Allergies</DialogTitle>
                          <DialogDescription>
                            Add or remove patient allergies
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="flex flex-wrap gap-2">
                            {allergies.map((allergy) => (
                              <Badge
                                key={allergy}
                                variant="outline"
                                className="flex items-center gap-1 pr-1"
                              >
                                {allergy}
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="size-4 h-auto p-0 hover:bg-destructive/20"
                                  onClick={() => handleRemoveAllergy(allergy)}
                                >
                                  <IconX className="size-3" />
                                </Button>
                              </Badge>
                            ))}
                            {allergies.length === 0 && (
                              <p className="text-sm text-muted-foreground">
                                No allergies recorded
                              </p>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Input
                              placeholder="Add new allergy..."
                              value={newAllergy}
                              onChange={(e) => setNewAllergy(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  handleAddAllergy();
                                }
                              }}
                              className="flex-1"
                            />
                            <Button
                              onClick={handleAddAllergy}
                              disabled={!newAllergy.trim()}
                              size="icon"
                            >
                              <IconPlus className="size-4" />
                            </Button>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button
                            variant="outline"
                            onClick={() => setAllergiesDialogOpen(false)}
                          >
                            Close
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {allergies.map((allergy) => (
                      <Badge key={allergy} variant="outline">
                        {allergy}
                      </Badge>
                    ))}
                    {allergies.length === 0 && (
                      <p className="text-sm text-muted-foreground">No allergies recorded</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Medications Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Medications (Active)</CardTitle>
                    <Button variant="ghost" size="icon" className="size-8">
                      <IconPencil className="size-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="text-sm font-semibold">From Intake & DoseSpot</p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>Aspirin</li>
                      <li>Melatonin</li>
                      <li>Vitamin D</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Vital Signs Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Vital signs</CardTitle>
                    <Button variant="ghost" size="icon" className="size-8">
                      <IconPencil className="size-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">No data</p>
                </CardContent>
              </Card>

              {/* Conditions Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Conditions</CardTitle>
                    <Button variant="ghost" size="icon" className="size-8">
                      <IconPencil className="size-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li>Urinary Stress Incontinence</li>
                    <li>Sleep apnea</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Additional placeholder cards */}
              {[
                "Prescription history",
                "Surgical procedures history",
                "Family history",
                "Social history",
                "Documents",
                "Labs",
              ].map((title) => (
                <Card key={title}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{title}</CardTitle>
                      <Button variant="ghost" size="icon" className="size-8">
                        <IconPencil className="size-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">No data</p>
                  </CardContent>
                </Card>
              ))}
            </aside>

            {/* Center Column - Main Form */}
            <main className="flex flex-1 flex-col gap-4">
              {/* Encounter Information */}
              <Collapsible open={encounterOpen} onOpenChange={setEncounterOpen}>
                <Card>
                  <CollapsibleTrigger asChild>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Encounter information</CardTitle>
                        <Button variant="ghost" size="icon" className="size-9">
                          {encounterOpen ? "↑" : "↓"}
                        </Button>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="space-y-4">
                      <div className="space-y-1">
                        <Label className="text-sm font-semibold">Visit type</Label>
                        <p className="text-sm">Medical Weight Loss Encounter</p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="visit-type">What visit type it was?</Label>
                        <Select defaultValue="sync">
                          <SelectTrigger id="visit-type">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sync">Sync (Video, Audio)</SelectItem>
                            <SelectItem value="async">Async</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cma-presence">
                          Was Certified Medical Assistant (CMA) present?
                        </Label>
                        <Select defaultValue="sync">
                          <SelectTrigger id="cma-presence">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sync">Sync</SelectItem>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground">
                          For video visits, select "Yes" if a CMA was present and enter
                          their name below.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cma-name">CMA Name</Label>
                        <Input id="cma-name" defaultValue="Jason Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="patient-location">
                          Patient current State location
                        </Label>
                        <Select defaultValue="california">
                          <SelectTrigger id="patient-location">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="california">California, CA</SelectItem>
                            <SelectItem value="new-york">New York, NY</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>

              {/* Vitals & Physical Exam */}
              <Collapsible open={vitalsOpen} onOpenChange={setVitalsOpen}>
                <Card>
                  <CollapsibleTrigger asChild>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Vitals & Physical Exam</CardTitle>
                        <Button variant="ghost" size="icon" className="size-9">
                          {vitalsOpen ? "↑" : "↓"}
                        </Button>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="space-y-4">
                      <div className="flex gap-6">
                        <div className="space-y-1">
                          <Label className="text-sm font-semibold">Weight</Label>
                          <p className="text-sm">245 lbs</p>
                        </div>
                        <div className="space-y-1">
                          <Label className="text-sm font-semibold">BMI</Label>
                          <p className="text-sm">35.1</p>
                        </div>
                        <div className="space-y-1">
                          <Label className="text-sm font-semibold">
                            Patient Goal Weight
                          </Label>
                          <p className="text-sm">190 lbs</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="blood-pressure">Blood Pressure Range</Label>
                        <Select defaultValue="120-129">
                          <SelectTrigger id="blood-pressure">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="120-129">120-129/&lt;80</SelectItem>
                            <SelectItem value="130-139">130-139/80-89</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="heart-rate">Resting Heart Rate Range</Label>
                        <Select defaultValue="101-110">
                          <SelectTrigger id="heart-rate">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="101-110">101-110 BMP</SelectItem>
                            <SelectItem value="91-100">91-100 BMP</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="exam-findings">Exam findings</Label>
                        <Select defaultValue="standard">
                          <SelectTrigger id="exam-findings">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">Standard Video</SelectItem>
                            <SelectItem value="custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground">
                          Only select "CUSTOM" if the standard text is inaccurate for a
                          synchronous visit.
                        </p>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>

              {/* Eligibility for treatment */}
              <Collapsible open={eligibilityOpen} onOpenChange={setEligibilityOpen}>
                <Card>
                  <CollapsibleTrigger asChild>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Eligibility for treatment</CardTitle>
                        <Button variant="ghost" size="icon" className="size-9">
                          {eligibilityOpen ? "↑" : "↓"}
                        </Button>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="space-y-4">
                      <div className="space-y-1">
                        <Label className="text-sm font-semibold">Patient Age</Label>
                        <p className="text-sm">55 (No exclusion)</p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="exclusionary">Exclusionary Conditions</Label>
                        <Select>
                          <SelectTrigger id="exclusionary">
                            <SelectValue placeholder="Select all applicable exclusion conditions" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="allergy-contraindications">
                          Allergy Contraindications (Intake & DoseSpot)
                        </Label>
                        <Select>
                          <SelectTrigger id="allergy-contraindications">
                            <SelectValue placeholder="Allergies that may contraindicate MWL meds" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contraindicated-meds">
                          Contraindicated Meds (Intake & DoseSpot)
                        </Label>
                        <Select>
                          <SelectTrigger id="contraindicated-meds">
                            <SelectValue placeholder="Medications" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lab-exclusions">Lab Result Exclusions</Label>
                        <Select>
                          <SelectTrigger id="lab-exclusions">
                            <SelectValue placeholder="Select Lab result" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bmi-eligibility">BMI Eligibility</Label>
                        <Select defaultValue="eligible">
                          <SelectTrigger id="bmi-eligibility">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="eligible">
                              Eligible 25.5 (BMI ≥ 25 and &lt; 28)
                            </SelectItem>
                            <SelectItem value="not-eligible">Not Eligible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="comorbid-required">
                          Comorbid condition required
                        </Label>
                        <Select defaultValue="pre-diabetes">
                          <SelectTrigger id="comorbid-required">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pre-diabetes">
                              Pre-diabetes, Hypertension
                            </SelectItem>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground">
                          Required if BMI 25–28
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="clearance-letter">
                          Conditions Requiring Clearance Letter
                        </Label>
                        <Select>
                          <SelectTrigger id="clearance-letter">
                            <SelectValue placeholder="Choose any requiring clearance" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="sync-required" />
                        <Label
                          htmlFor="sync-required"
                          className="cursor-pointer font-normal"
                        >
                          Is Sync Visit Required?
                        </Label>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-sm font-semibold">
                          Additional Info From Patient
                        </Label>
                        <p className="text-sm">
                          I&apos;m here for medical weight loss, and I&apos;m specifically
                          hoping to start a GLP-1 medication because I understand it&apos;s a
                          very effective treatment. In my intake form, I was careful to note
                          that I have no personal or family history of medullary thyroid
                          carcinoma or MEN2, and had nausea from Semaglutide, as I know these
                          are absolute exclusions for the prescription. I&apos;m eager to get
                          started and work with the clinician on a titration plan that allows
                          for customized treatment to help me reach my goal.
                        </p>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>

              {/* Labs Section */}
              <Collapsible open={labsOpen} onOpenChange={setLabsOpen}>
                <Card>
                  <CollapsibleTrigger asChild>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Labs</CardTitle>
                        <Button variant="ghost" size="icon" className="size-9">
                          {labsOpen ? "↑" : "↓"}
                        </Button>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="labs-required">
                          Labs Required Within 3 Months Reasons
                        </Label>
                        <Select defaultValue="lab1-lab2">
                          <SelectTrigger id="labs-required">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lab1-lab2">Lab1, Lab2</SelectItem>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>

              {/* Medical History */}
              <Collapsible open={medicalHistoryOpen} onOpenChange={setMedicalHistoryOpen}>
                <Card>
                  <CollapsibleTrigger asChild>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Medical History</CardTitle>
                        <Button variant="ghost" size="icon" className="size-9">
                          {medicalHistoryOpen ? "↑" : "↓"}
                        </Button>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="allergies-intake">Allergies Intake</Label>
                        <Input
                          id="allergies-intake"
                          defaultValue="I have really bad allergies from Peanuts and Shellfish."
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-sm font-semibold">Allergies DoseSpot</Label>
                        <p className="text-sm">
                          I have really bad allergies from Shellfish and dust.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="current-meds-intake">
                          Current Meds From Intake
                        </Label>
                        <Input
                          id="current-meds-intake"
                          defaultValue="I take Vitamin D3"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-sm font-semibold">
                          Current Meds From DoseSpot
                        </Label>
                        <p className="text-sm">Melatonin</p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="comorbid-conditions">Comorbid Conditions</Label>
                        <Select>
                          <SelectTrigger id="comorbid-conditions">
                            <SelectValue placeholder="Select Comorbid Condition" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="additional-conditions">
                          Additional Conditions
                        </Label>
                        <Select>
                          <SelectTrigger id="additional-conditions">
                            <SelectValue placeholder="Select Additional Condition" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="lab-results-available" />
                        <Label
                          htmlFor="lab-results-available"
                          className="cursor-pointer font-normal"
                        >
                          Is Lab Results available?
                        </Label>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="abnormal-labs">Abnormal Labs</Label>
                        <Select defaultValue="lab1">
                          <SelectTrigger id="abnormal-labs">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lab1">Lab1</SelectItem>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>

              {/* Patient prior MWL Medications */}
              <Collapsible open={medicationsOpen} onOpenChange={setMedicationsOpen}>
                <Card>
                  <CollapsibleTrigger asChild>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>
                          Patient prior MWL Medications & Proof of Medication
                        </CardTitle>
                        <Button variant="ghost" size="icon" className="size-9">
                          {medicationsOpen ? "↑" : "↓"}
                        </Button>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Checkbox id="prior-medication" />
                        <Label
                          htmlFor="prior-medication"
                          className="cursor-pointer font-normal"
                        >
                          Is the patient currently on a prior medication? (1 month)
                        </Label>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="prior-med-name">Prior Medication Name</Label>
                        <Input
                          id="prior-med-name"
                          defaultValue="I've taken Ozempic before, I think."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-dose">Last Dose Reported</Label>
                        <Select defaultValue="less-week">
                          <SelectTrigger id="last-dose">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="less-week">&lt;1 week</SelectItem>
                            <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-sm font-semibold">
                          POM Medication Name
                        </Label>
                        <p className="text-sm">GLP-1 (Semaglutide)</p>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-sm font-semibold">
                          Proof of Medication Dose
                        </Label>
                        <p className="text-sm">2mg</p>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-sm font-semibold">
                          Proof of Medication Calculated Dose
                        </Label>
                        <p className="text-sm">2mg</p>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-sm font-semibold">
                          Proof of Medication Concentration
                        </Label>
                        <p className="text-sm">2 mg/1.5 mL pen injector</p>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-sm font-semibold">
                          Proof of Medication Prescription Date
                        </Label>
                        <p className="text-sm">06/10/2025</p>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-sm font-semibold">
                          Proof of Medication OpenLoop Level Equivalency
                        </Label>
                        <p className="text-sm">Level 2</p>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-sm font-semibold">
                          Proof of Medication Image
                        </Label>
                        <p className="text-sm underline">img.jpg</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="agree-olh" />
                        <Label
                          htmlFor="agree-olh"
                          className="cursor-pointer font-normal"
                        >
                          Does Patient agrees to only obtain MWL Meds Through OLH?
                        </Label>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>

              {/* Patient preferred medication */}
              <Collapsible open={preferredMedOpen} onOpenChange={setPreferredMedOpen}>
                <Card>
                  <CollapsibleTrigger asChild>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Patient preferred medication</CardTitle>
                        <Button variant="ghost" size="icon" className="size-9">
                          {preferredMedOpen ? "↑" : "↓"}
                        </Button>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="patient-selected-med">
                          Patient Selected Medication
                        </Label>
                        <Select defaultValue="ozempic">
                          <SelectTrigger id="patient-selected-med">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ozempic">Ozempic</SelectItem>
                            <SelectItem value="wegovy">Wegovy</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="additive-needs">
                          Patient Reported Additive Needs
                        </Label>
                        <Select defaultValue="sleep-muscle">
                          <SelectTrigger id="additive-needs">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sleep-muscle">
                              May improve sleep quality; May improve muscle mass
                            </SelectItem>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contraindications-additives">
                          Contraindications to Additives
                        </Label>
                        <Select defaultValue="none">
                          <SelectTrigger id="contraindications-additives">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contraindications-semorelin">
                          Contraindications to Semorelin / Ondansetron
                        </Label>
                        <Select defaultValue="none">
                          <SelectTrigger id="contraindications-semorelin">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>

              {/* Clinical outcome */}
              <Collapsible open={outcomeOpen} onOpenChange={setOutcomeOpen}>
                <Card>
                  <CollapsibleTrigger asChild>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Clinical outcome of encounter</CardTitle>
                        <Button variant="ghost" size="icon" className="size-9">
                          {outcomeOpen ? "↑" : "↓"}
                        </Button>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="encounter-outcome">Encounter Outcome</Label>
                        <Select defaultValue="prescribed">
                          <SelectTrigger id="encounter-outcome">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="prescribed">
                              Medication prescribed
                            </SelectItem>
                            <SelectItem value="not-prescribed">Not prescribed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="ondansetron-prescribed" />
                        <Label
                          htmlFor="ondansetron-prescribed"
                          className="cursor-pointer font-normal"
                        >
                          Was Ondansetron Prescribed?
                        </Label>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cpt-code">CPT Code</Label>
                        <Select defaultValue="xyz">
                          <SelectTrigger id="cpt-code">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="xyz">XYZ</SelectItem>
                            <SelectItem value="abc">ABC</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>

              {/* Prescribe & Chart Button */}
              <Button className="w-full bg-primary text-primary-foreground">
                Prescribe & Chart
              </Button>
            </main>

            {/* Right Sidebar - Prescription Workflow */}
            <aside className="flex w-[288px] flex-col gap-3">
              {/* Prescribing Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Prescribing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 rounded-lg border bg-muted/50 p-3">
                    <div>
                      <p className="text-sm font-medium">
                        Injectable GLP-1 (Semaglutide)
                      </p>
                      <Badge variant="secondary" className="mt-1">
                        Paid by the patient
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pharmacy Selection Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Pharmacy selection</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup defaultValue="pharmacy">
                    <div className="space-y-3">
                      <div className="rounded-lg border bg-muted/50 p-3">
                        <div className="flex items-start gap-3">
                          <RadioGroupItem value="pharmacy" id="pharmacy" />
                          <div className="flex-1 space-y-2">
                            <Label htmlFor="pharmacy" className="cursor-pointer">
                              Pharmacy
                            </Label>
                            <Select defaultValue="walgreens">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="walgreens">
                                  Walgreens #5678 - Oak Av
                                </SelectItem>
                                <SelectItem value="cvs">CVS Pharmacy</SelectItem>
                              </SelectContent>
                            </Select>
                            <p className="text-xs text-muted-foreground">
                              3761 Venture Place, CA
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-3">
                        <div className="flex items-start gap-3">
                          <RadioGroupItem value="direct" id="direct" />
                          <Label htmlFor="direct" className="cursor-pointer">
                            Send to patient directly
                          </Label>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Notes Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Add notes..."
                    className="min-h-[100px] resize-none"
                  />
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </SidebarProvider>
      <Toaster />
    </>
  );
}

