"use client";

// Bootstrap modal is handled by Bootstrap JS in layout.tsx
// This is a placeholder for the modal container
// The actual modal HTML is in layout.tsx

export function ContactModalContainer() {
  return (
    <div
      className="modal fade contactmodal-popup"
      id="contactquotemodal"
      tabIndex={-1}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-0">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              style={{ backgroundImage: "none" }}
            >
              <i
                className="fa-solid fa-circle-xmark"
                style={{ fontSize: "20px" }}
              ></i>
            </button>
          </div>
          <div className="modal-body p-0">
            {/* HubSpot form will be loaded here by ContactForm component */}
            <div id="modal-hubspot-form">
              {/* ContactForm component renders here when modal opens */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
