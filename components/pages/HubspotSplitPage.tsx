import { HubspotSplitForm } from "@/components/forms/HubspotSplitForm";

type HubspotSplitPageProps = {
  heading: string;
  description: string;
  portalId: string;
  formId: string;
  imageSrc?: string;
  imageAlt?: string;
};

const DEFAULT_IMAGE = "/images/images-removebg-preview.png";

export function HubspotSplitPage({
  heading,
  description,
  portalId,
  formId,
  imageSrc = DEFAULT_IMAGE,
  imageAlt = "ProStruct Engineering",
}: HubspotSplitPageProps) {
  return (
    <>
      <section className="py-5 py-lg-6 bg-light">
        <div className="container">
          <div className="hubspot-card mx-auto">
            <div className="row align-items-center g-4">
              <div className="col-lg-5 hubspot-card-left">
                <img src={imageSrc} alt={imageAlt} className="mb-3 img-fluid" />
                <h2 className="fw-bold mb-2">{heading}</h2>
                <p className="text-muted mb-0">{description}</p>
              </div>

              <div className="col-lg-7">
                <HubspotSplitForm portalId={portalId} formId={formId} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
