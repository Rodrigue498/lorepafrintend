import React from "react";

const InsuranceInfo = () => {
  return (
    <div className=" bg-gray-100 p-6 bg-white">
      <div className=" mx-auto  shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          No Need to Subscribe to Additional Insurance. There's Protection for You!
        </h1>
        <p className="text-gray-700 text-xl leading-relaxed mb-6">
          You can add supplementary protection (or an endorsement) to your car insurance policy
          that covers, in case of an at-fault accident, damage to rented trailers.
        </p>
        <p className="text-gray-700 text-xl leading-relaxed mb-6">
          This is referred to as F.A.Q 27 – Civil Liability for damages caused by vehicles that the insured does not own.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          What to Know About F.A.Q 27:
        </h2>
        <p className="text-gray-700 text-xl leading-relaxed mb-6">
          This endorsement will cover damages to a trailer that you do not own in the event of an at-fault accident only
          (a non-fault accident will be covered by the vehicle owner's insurance).
        </p>
        <p className="text-gray-700 text-xl leading-relaxed mb-6">
          The protections and the deductible amount may differ from your insurance policy. For example, you may have
          "Comprehensive" protection with a $750 deductible in your policy, and have "Collision and Upset" coverage with
          a $500 deductible for the endorsement. A limit for the amount of insurance per claim is established for the
          endorsement (which the trailer owner can claim for the loss).
        </p>
        <p className="text-gray-700 text-xl leading-relaxed mb-6">
          If your personal auto insurance includes F.A.Q 27 "Damage to Vehicles Not Owned by the Insured," you are
          covered for damages caused to a rented trailer, but only in Canada and the United States. Note that this
          protection is identical to what you have with your vehicle insurance. If you don't have it, check with your
          insurer to find out how much it would cost to add it.
        </p>

      </div>
    </div>
  );
};

export default InsuranceInfo;
