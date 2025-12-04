import { PrivacyPolicyContent } from "@/components/privacy/PrivacyPolicyContent";

export function PrivacyPolicyPage() {
  return (
    <section className="py-5 py-lg-6 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="">
            <PrivacyPolicyContent />
          </div>
        </div>
      </div>
    </section>
  );
}
