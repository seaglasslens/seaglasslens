import Magnifier from "../magnifier/Magnifier.tsx";
import pdfIconAsset from "../../assets/pdf-icon.png";

const Staff = () => {
  return (
    <>
      <div className="staff-container">
        <Magnifier
          source="src/assets/staff-page.png"
          alt="Staff page"
          magnifierWidth={225}
          magnifierHeight={225}
          magnifierBorderRadius={50}
          magnifierOffsetX={175}
          magnifierOffsetY={0}
          zoom={2}
        />
        <a
          href="src/assets/seaglass-staff.pdf"
          target="_blank"
          className="staff-page-pdf"
        >
          Print & color your own copy!
          <img src={pdfIconAsset} alt="PDF icon" />
        </a>
      </div>
    </>
  );
};

export default Staff;
