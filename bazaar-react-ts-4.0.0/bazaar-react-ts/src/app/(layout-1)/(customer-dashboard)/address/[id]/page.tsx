import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AddressDetailsPageView } from "pages-sections/customer-dashboard/address/page-view";
// API FUNCTIONS
import api from "utils/__api__/address";

export const metadata: Metadata = {
  title: "Address - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  viewport: "width=device-width, initial-scale=1",
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

export default async function Address({ params }: { params: { id: string } }) {
  try {
    const address = await api.getAddress(params.id);
    return <AddressDetailsPageView address={address} />;
  } catch (error) {
    notFound();
  }
}
