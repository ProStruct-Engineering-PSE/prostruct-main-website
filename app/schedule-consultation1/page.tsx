import { HubspotSplitPage } from "@/components/pages/HubspotSplitPage";

export default function Page() {
  return (
    <div className="flex justify-center items-center">
      <HubspotSplitPage
        heading="Schedule Now!"
        description="Secure a complimentary 15-minute consultation with a top project manager tailored to your needs."
        portalId="45924609"
        formId="11c83a05-b988-4daf-af44-6d36b0aedf89"
      />
    </div>
  );
}
