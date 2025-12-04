import { HubspotSplitPage } from "@/components/pages/HubspotSplitPage";

export default function Page() {
  return (
    <div className="flex h-screen justify-center items-center">
      <HubspotSplitPage
        heading="Schedule Now!"
        description="Secure a complimentary 15-minute consultation with a top project manager tailored to your needs."
        portalId="45924609"
        formId="61639d17-746d-4d8f-9827-2c9e16ad8359"
      />
    </div>
  );
}
