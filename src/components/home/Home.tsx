import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Egg from "../egg/Egg.tsx";
import Artists from "../artists/Artists.tsx";
import Staff from "../staff/Staff.tsx";
import Contact from "../contact/Contact.tsx";
import Modal from "../modal/Modal.tsx";
import logoAsset from "../../assets/logo.png";
import PageTransition from "../page-transition/PageTransition.tsx";

const Home = () => {
  const [openContactModal, setOpenContactModal] = useState(false);
  const [openStaffModal, setOpenStaffModal] = useState(false);
  const [openEggModal, setOpenEggModal] = useState(false);
  const [openArtistsModal, setOpenArtistsModal] = useState(false);

  const contactModalOpenerRef = useRef<HTMLButtonElement | null>(null);
  const staffModalOpenerRef = useRef<HTMLButtonElement | null>(null);
  const eggModalOpenerRef = useRef<HTMLButtonElement | null>(null);
  const artistsModalOpenerRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <PageTransition>
        <div className="home-background">
          <header>
            <img src={logoAsset} alt="Seaglass logo" />
          </header>
          <div className="room">
            <div className="zzz" />
            <button
              className="contact"
              ref={contactModalOpenerRef}
              onClick={() => setOpenContactModal((prev) => !prev)}
              tabIndex={2}
            />
            <button
              className="staff"
              ref={staffModalOpenerRef}
              onClick={() => setOpenStaffModal((prev) => !prev)}
              tabIndex={2}
            />
            <button
              className="egg"
              ref={eggModalOpenerRef}
              onClick={() => setOpenEggModal((prev) => !prev)}
              tabIndex={2}
            />
            <a
              href="https://seaglasslens.bigcartel.com/"
              target="_blank"
              className="shop"
              tabIndex={2}
            />
            <Link to="/quiz" className="quiz" tabIndex={2} />
            <button
              className="artists"
              ref={artistsModalOpenerRef}
              onClick={() => setOpenArtistsModal((prev) => !prev)}
              tabIndex={2}
            />
          </div>
        </div>

        {openContactModal && (
          <Modal
            title="Contact"
            content={<Contact />}
            open={openContactModal}
            modalOpenerRef={contactModalOpenerRef}
            handleClose={() => setOpenContactModal((prev) => !prev)}
          />
        )}
        {openStaffModal && (
          <Modal
            title="Staff"
            content={<Staff />}
            open={openStaffModal}
            modalOpenerRef={staffModalOpenerRef}
            handleClose={() => setOpenStaffModal((prev) => !prev)}
          />
        )}
        {openEggModal && (
          <Modal
            title="Thank You from Nhi and Maggie"
            content={<Egg />}
            open={openEggModal}
            modalOpenerRef={eggModalOpenerRef}
            handleClose={() => setOpenEggModal((prev) => !prev)}
          />
        )}
        {openArtistsModal && (
          <Modal
            title="Featured Artists"
            content={<Artists />}
            open={openArtistsModal}
            modalOpenerRef={artistsModalOpenerRef}
            handleClose={() => setOpenArtistsModal((prev) => !prev)}
          />
        )}
      </PageTransition>
    </>
  );
};

export default Home;
