import BenefitCard from "./Benefit-Card";
function Benefits() {
  //        headings
  const heading1 = "Roles into Careers: Career Roadmaps";
  const heading2 = "Training, Development & Internship Programs";
  const heading3 = "Values based Culture";
  const heading4 = "Paid Courses & Workshops";
  const heading5 = "Annual  Bonuses & Incentives";
  const heading6 = "Paid Leaves";
  const heading7 = "Provident Fund, EOBI";
  const heading8 = "Medical & Health Insurance";
  const heading9 = "Recreational Areas (gaming, sports, cafe)";
  return (
    <>
      <div className="lg:p-[70px] p-[10px] bg-pink-50 lg:pb-[70px] overflow-hidden">
        <div>
          <h1 className="text-center font-bold lg:text-4xl text-2xl mb-3">
            {" "}
            Employment Benefits
          </h1>
        </div>

        {/*   benefits cards */}

        <div className="gap-[20px] mt-[50px] grid grid-cols-2 lg:grid-cols-3 place-items-center p-[10px] lg:p-[70px]">
          <BenefitCard
            heading={heading1}
            imgsrc="images/b-card1.webp"
          ></BenefitCard>

          <BenefitCard
            heading={heading2}
            imgsrc="images/b-card2.webp"
          ></BenefitCard>

          <BenefitCard
            heading={heading3}
            imgsrc="images/b-card3.webp"
          ></BenefitCard>

          <BenefitCard
            heading={heading4}
            imgsrc="images/b-card4.webp"
          ></BenefitCard>

          <BenefitCard
            heading={heading5}
            imgsrc="images/b-card5.webp"
          ></BenefitCard>

          <BenefitCard
            heading={heading6}
            imgsrc="images/b-card6.webp"
          ></BenefitCard>

          <BenefitCard
            heading={heading7}
            imgsrc="images/b-card7.webp"
          ></BenefitCard>

          <BenefitCard
            heading={heading8}
            imgsrc="images/b-card8.webp"
          ></BenefitCard>

          <BenefitCard
            heading={heading9}
            imgsrc="images/b-card9.webp"
          ></BenefitCard>
        </div>
      </div>
    </>
  );
}

export default Benefits;
