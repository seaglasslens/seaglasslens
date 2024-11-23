import nhiAndMaggieAsset from "../../assets/nhi-and-maggie.png";

const Egg = () => {
  return (
    <>
      <div className="thank-you">
        <img src={nhiAndMaggieAsset} alt="Thank you note from Nhi and Maggie" />
        <a
          href="https://nhi.bigcartel.com/"
          target="_blank"
          className="nhi-shop"
        />
        <a
          href="https://www.heymugi.com/"
          target="_blank"
          className="maggie-shop"
        />
      </div>
    </>
  );
};

export default Egg;
