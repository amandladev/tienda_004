import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { X } from "lucide-react";

const features = [
  {
    id: "feature1",
    title: "Automated Reports",
    description: "Generate detailed reports with real-time data insights.",
    image: "/images/reports.png",
  },
  {
    id: "feature2",
    title: "Cloud Integration",
    description: "Seamlessly connect with cloud services for better scalability.",
    image: "/images/cloud.png",
  },
  {
    id: "feature3",
    title: "AI Analytics",
    description: "Leverage AI-driven analytics to optimize your business decisions.",
    image: "/images/ai.png",
  },
];

export default function ServicesModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState(features[0].id);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-white shadow-lg rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800 flex justify-between">
            Our Premium Features
            <Button variant="ghost" className="p-2" onClick={onClose}><X size={20} /></Button>
          </DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <TabsList className="grid grid-cols-3 gap-2 bg-gray-100 p-2 rounded-lg">
            {features.map((feature) => (
              <TabsTrigger key={feature.id} value={feature.id} className="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-200">
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="mt-4">
              <Card className="border border-gray-200 rounded-xl shadow-md">
                <CardHeader className="text-xl font-semibold text-gray-900 px-6 py-4">
                  {feature.title}
                </CardHeader>
                <CardContent className="flex flex-col items-center p-6">
                  <Image src={feature.image} alt={feature.title} className="w-48 h-48 object-cover rounded-lg shadow-sm" />
                  <p className="mt-4 text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
