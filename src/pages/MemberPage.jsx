import React, { useContext } from "react";
import Button from "../components/Button";
import { MemberContext } from "../context/MemberContext";
import memberData from "../data/memberData.json";
import Benefit from "../components/Benefit";

const MemberPage = () => {
  const memberContext = useContext(MemberContext);
  return (
    <section className="min-h-screen p-4 pt-32">
      <div className="grid grid-rows-2 gap-4 main">
        <div
          className={`row-start-1 row-end-3 main__inner active-${memberContext.activeSection}`}
        >
          {memberData.memberBenefits.map((benefit) => {
            return <Benefit key={benefit.id} benefits={benefit.benefits} />;
          })}
        </div>
        <div className="grid grid-cols-2 gap-4 row-start-3 mb-4">
          <Button text="Tilbake" onClick={memberContext.handlePrev} />
          <Button text="Neste" onClick={memberContext.handleNext} />
        </div>
      </div>
    </section>
  );
};

export default MemberPage;
