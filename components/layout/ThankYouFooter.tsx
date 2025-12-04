const COPYRIGHT_TEXT = "© 2025 ProStruct Engineering Inc. All Rights Reserved.";

export function ThankYouFooter() {
  return (
    <footer className="o-footer w-100" style={{ padding: "5px 0 0" }}>
      <div className="container">
        <div className="o-footer__content mt-2">
          <p className="text-center text-light mb-0">{COPYRIGHT_TEXT}</p>
        </div>
      </div>
    </footer>
  );
}
