import termsImage from '../../assets/terms.png'
// TermsOfUse.jsx
import React from 'react';

const TermsOfUse = () => {
  return (
    <div className=" w-full ">
    {/* Wavy background with text overlay */}
    <div className="relative w-full h-[700px] bg-gray-200 overflow-hidden">
      <img
        src={termsImage}
        alt="Terms Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <h1 className="text-xl md:text-6xl font-bold text-white">
          Conditions And Terms Of Use
        </h1>
      </div>
    </div>
    <div className="w-full bg-gray-200 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-600 mb-8">
          <a href="/" className="hover:underline">Home</a> &gt;&gt; <span>Terms of Use</span>
        </nav>

        {/* Section 1: Preamble */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800">1. Preamble</h1>
        <p className="text-gray-700 mb-8 text-justify">
          Please read the Terms of Service ("Agreement") carefully and completely before using the services provided by Lorepa. By using the services of this platform and booking a trailer rental or listing a trailer for rent, you agree to all of the terms and conditions. If you do not agree to all of the terms and conditions, you are not authorized to use the services or the platform. The Company reserves the right to suspend or permanently block any User who chooses to violate these terms and conditions. The Company reserves the right to change or modify these terms and conditions at any time and without prior notice.
        </p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">2. Interpretation and Definitions</h2>

<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Interpretation:</h3>
<p className="text-gray-700 mb-6 text-justify">
  Words whose initial letter is capitalized have a meaning defined under the following conditions. The following definitions have the same meaning whether they appear in the singular or the plural.
</p>

<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Definitions:</h3>
<div className="text-gray-700 space-y-4">
  <p><strong>Province:</strong> Refers to Quebec.</p>
  <p><strong>Content:</strong> Means content such as text, images, or other information that may be displayed, uploaded, linked, or otherwise made available by you, regardless of the form of such content.</p>
  <p><strong>Device:</strong> Any device that can access the Service, such as a computer, mobile phone, or digital tablet.</p>
  <p><strong>Feedback:</strong> Means feedback, innovations, or suggestions you send regarding the attributes, performance, or features of our Service.</p>
  <p><strong>Reservation:</strong> Means a request to rent a trailer through the platform.</p>
  <p><strong>Promotions:</strong> Means contests, sweepstakes, or other promotions offered through the Service.</p>
  <p><strong>You:</strong> Means the individual accessing or using the Service or Platform, or a company or other legal entity on behalf of which such individual is accessing or using the Service or Platform, as applicable.</p>
  <p><strong>The Company:</strong> Refers to Lorepa.</p>
  <p>
    <strong>Services/Platform/Website:</strong> Refers to the software and applications offered by the Company and accessible at{' '}
    <a href="http://www.lorepa.ca" className="text-blue-500 hover:underline">
      http://www.lorepa.ca
    </a>.
  </p>
  <p><strong>Terms/Terms of Service:</strong> Refers to the written guidelines that describe the practices and procedures constituting the entire agreement between you and the Company.</p>
  <p><strong>Renter/Trailer Renter:</strong> Refers to any person or company requesting to rent a trailer through the platform.</p>
</div>

<h2 className="text-3xl font-bold mb-6 text-gray-800 ">3. Recognition</h2>
<p className="text-gray-700 mb-6 text-justify">
  These Terms and Conditions govern the use of this Service and constitute the agreement between you and the Company. These Terms define the rights and obligations of all Users with respect to the use of the Service.
</p>
<p className="text-gray-700 mb-6 text-justify">
  Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms and Conditions. These Terms apply to all visitors, users and others who access or use the Service.
</p>
<p className="text-gray-700 mb-6 text-justify">
  By accessing or using the Service you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms then you may not access the Service.
</p>
<p className="text-gray-700 mb-6 text-justify">
  You represent that you are over 25 years of age. The Company does not authorize the use of the Service by persons under the age of 25.
</p>
<p className="text-gray-700 mb-6 text-justify">
  Your access to and use of the Service is also conditioned on your acceptance of and compliance with the Company’s Privacy Policy. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800 ">4. User Accounts</h2>
<p className="text-gray-700 mb-6 text-justify">
  When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
</p>
<p className="text-gray-700 mb-6 text-justify">
  You are responsible for safeguarding the password that you use to access the Service and for any activities or actions that occur under your password, whether on our Service or a third-party Social Media Service.
</p>
<p className="text-gray-700 mb-6 text-justify">
  You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
</p>
<p className="text-gray-700 mb-6 text-justify">
  You may not use as a username the name of another person or entity or a name that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than You without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.
</p>
<p className="text-gray-700 mb-6 text-justify">
  All user accounts must contain the user's legal first name in the "First Name" field and the user's legal name in the "Last Name" field. All users must provide and maintain a current phone number and email address in their profile. This information will not be publicly visible. Contact information, full personal names, and company names should not be included in the profile bio.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">5. Trailer Reservations</h2>
<p className="text-gray-700 mb-6 text-justify">
  By making a reservation for a trailer rental through the Service, you warrant that you are legally capable of entering into binding contracts.
</p>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Your Information</h3>
<p className="text-gray-700 mb-6 text-justify">
  If You wish to make a reservation for the rental of a trailer available on the Service, You will be asked to provide certain information relating to Your Reservation, including, without limitation, Your name, Your email, Your phone number, Your credit card number, the expiration date of Your credit card, Your billing address, and a photo of Your driver's license.
</p>
<p className="text-gray-700 mb-6 text-justify">
  You represent and warrant that (i) You have the legal right to use any credit or debit card(s) in connection with any Reservation; and that (ii) the information You provide to us is true, correct and complete.
</p>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Minimum Requirements for Renting a Trailer</h3>
<p className="text-gray-700 mb-6 text-justify">
  For the safety of all users of the platform, renters must meet the following minimum requirements:
</p>
<ul className="list-disc pl-6 space-y-2 text-gray-700">
  <li>Be at least 25 years old.</li>
  <li>Have a valid driver's license.</li>
  <li>Create an account on the platform.</li>
  <li>Verify phone or email with a one-time password.</li>
  <li>Fill out all fields on the profile page.</li>
  <li>Complete identity verification.</li>
  <li>Pay using a valid credit card in the renter's name.</li>
</ul>
<p className="text-gray-700 mb-6 text-justify">
  To process a reservation, all renters must complete identity verification. For security purposes, a digital copy of the renter's driver's license will be visible to the trailer owner when accepting the reservation. The renter may be asked to present a valid driver's license at the time of receiving the trailer for additional identity verification.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">6. Cancellation of Reservation</h2>
<p className="text-gray-700 mb-6 text-justify">
  We reserve the right to refuse or cancel your reservation at any time for certain reasons, including but not limited to:
</p>
<ul className="list-disc pl-6 space-y-2 text-gray-700">
  <li>Trailer availability</li>
  <li>Errors in trailer descriptions or prices</li>
  <li>Errors in your booking</li>
  <li>Errors in your profile</li>
  <li>Failure to meet the minimum requirements to rent a trailer</li>
  <li>Any violation of our terms</li>
</ul>
<p className="text-gray-700 mb-6 text-justify">
  We reserve the right to refuse or cancel your booking if we suspect fraud or an unauthorized or illegal transaction.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">7. Rights to Cancellation of Your Reservation</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Cancellation Policy</h3>
<p className="text-gray-700 mb-6 text-justify">
  Full refund if cancelled within 1 hour of an accepted booking.<br />
  25% deduction if cancelled after 1 hour but within 2 hours of an accepted booking.<br />
  50% deduction if cancelled after 2 hours but within 6 hours of an accepted booking.<br />
  No refund if cancelled after 6
</p>
<h2 className="text-3xl font-bold mb-6 text-gray-800">8. Availability, errors and inaccuracies</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Availability, Errors and Inaccuracies</h3>
<p className="text-gray-700 mb-6 text-justify">
  We are constantly updating our trailer listings on the Service. Trailers available on our Service may be mispriced, described inaccurately, or unavailable, and we may experience delays in updating information about trailers on the Service and in our advertising on other websites.<br />
  We cannot and do not guarantee the accuracy or completeness of any information, including prices, product images, specifications, availability, and services. We reserve the right to change or update information and to correct any errors, inaccuracies, or omissions at any time without prior notice.
</p>

<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Pricing Policy</h3>
<p className="text-gray-700 mb-6 text-justify">
  The Company reserves the right to allow trailer owners to revise trailer rental rates at any time prior to accepting a reservation.<br />
  The rental rates shown are subject to revision by the trailer owner after a reservation is accepted in the event of an event affecting the change of delivery distance, change of delivery location, request for a different trailer, change, or addition of accessories.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">9. Payments</h2>
<p>All rentals are subject to rental fees, reservation fees, deposit processing fees, and other fees for additional options.</p>

<p>When you create a reservation, your credit card is authorized, but payment is not taken until the reservation is accepted.</p>

<p>Payment cards (credit cards) are subject to validation checks and authorization by your card issuer. If the Company does not receive the required authorization, it will not be liable for any delay in your booking.</p>

<p>The Company accepts all major credit cards as payment for rentals and no other form of payment will be accepted. The Company uses Stripe, a third-party payment processor. By using the services offered by the Company, you understand and agree that the Company is not responsible for any terms and conditions, limitations set by Stripe, or monetary actions taken by Stripe. This includes, but is not limited to, refunds, service fees, fraudulent charges, or any other fees imposed by Stripe.</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">10. Refusal of payment</h2>
<p>A chargeback occurs when the renter disputes a charge on your credit card. In the event a chargeback is initiated, Company will investigate whether the chargeback was justified. If not, Company will dispute the chargeback on behalf of Company and the trailer owner. Company will request the cooperation of the trailer owner to obtain the necessary details and documentation. Should Company lose a chargeback for any reason, the trailer owner will not be entitled to a refund.</p>

<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Rental Fees</h3>
<p>The Trailer Owner is responsible for setting the daily, weekly, and monthly rental fees, accessory rental fees, cleaning fees, delivery fees, and all other fees associated with the rental. If the Owner accepts a reservation, the Owner must honor the rental price stated in the reservation. The Trailer Owner is obligated to manage rental extensions and ensure that the Renter pays for the additional rental days through the "Rental Extension" link in the Renter’s account.</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">11. Security deposits</h2>
<p>The deposit amount is set by the trailer owner. All deposits are charged at the time of booking. If a booking is accepted, the deposit amount will be charged. The deposit or a portion thereof may be retained if a trailer is returned damaged or lost or if a rental accessory is not returned or is returned damaged. Other reasons why a deposit may be retained include, but are not limited to, late return of a rental trailer. If a trailer is returned on time and without incident, the deposit will be refunded in full which marks the end of the transaction. It may take several days for the deposit refund to appear on the renter's bank statement.</p>

<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Rental Period</h3>
<p>The “Rental Period” begins and ends on the date and time of the start and end of the reservation, unless the Owner and the Renter mutually agree to change the start and end time of the rental.</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">12. Rental extensions</h2>
<p>If Renter is unable to return on the scheduled date, Renter must go to the Company’s platform or mobile app and request an extension. Any verbal or written agreement to extend a rental outside of the Company’s platform will not include insurance coverage and will not be supported by the Company in collecting rental fees or other charges or withholding any deposit for damages, citations, tolls, or any other incident that occurs during the extended rental period if the rental period has not been paid through the Company’s platform. If an extension of the rental is not submitted by Renter, Renter agrees that Company has the authority to charge your credit card without prior authorization. If the extension request is not processed through the platform by Renter prior to the end of the rental date, insurance will not apply to the rental.</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">13. Prohibition on the use of rented trailers</h2>
<p>A. Any person not listed on the rental agreement is not authorized to use or tow the rental trailer.</p>

<p>B. No person under the age of 25 is permitted to rent, tow or operate a rental trailer.</p>

<p>C. The weight limits specified by the manufacturer must never be exceeded, regardless of the contents being transported.</p>

<p>D. No rental trailer shall be used in an illegal manner.</p>

<p>E. No person operating or towing a rental trailer shall plead ignorance of any local, state, or federal law concerning the safe operation or use of the trailer.</p>

<p>F. The renter is prohibited from towing a trailer with an unsuitable vehicle or a load on a trailer that does not comply with SAAQ standards.</p>

<p>G. Renter is prohibited from operating a tow vehicle with improper towing equipment, such as an improperly sized ball, improper lighting plug connection, no or defective brake controller, or improper tow hitch.</p>

<p>H. Renter is prohibited from changing towing vehicles after taking possession of the trailer if the towing vehicle is not suitable for the trailer.</p>

<p>I. Renter is prohibited from operating a trailer without knowing how to operate it, load it, and knowing all weight specifications.</p>

<p>J. The tenant is prohibited from parking illegally on the streets and from violating the highway code.</p>

<p>K. Renter or any other driver is prohibited from driving or towing a trailer while under the influence of alcohol, marijuana, or any other controlled substance that may impair his or her ability to drive.</p>

<p>L. The renter or driver is prohibited from leaving the scene of an accident without reporting it to the police.</p>

<p>M. The Renter or Driver is prohibited from using a cell phone, electronic device, or any other activity that may distract him or her while driving or operating or towing a trailer.</p>

<p>N. Renter is prohibited from operating or towing a trailer that requires a special permit to operate, tow or transport a load on a rented trailer unless Renter holds the required and valid permit. Renter is prohibited from renting, operating or towing a trailer on the platform unless he or she is in possession of a valid driver's license legally issued by a local government in the country where the trailer is rented.</p>

<p>O. The tenant is prohibited from carrying out mechanical work on a rented trailer without the owner's consent.</p>

<p>P. The lessee is prohibited from remaining in possession of a rented trailer or refusing to dispose of it when the owner refuses to extend the rental period.</p>

<p>Q. The Renter is prohibited from remaining in possession of a rented trailer or refusing to dispose of it after the rental has been terminated for any reason.</p>

<p>R. Renter is prohibited from lending, giving, re-renting or allowing use of a rented trailer to any person not named as the driver or renter on the reservation.</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">14. Costs incurred by the tenant</h2>
<p>Renter is responsible for payment of all charges, including but not limited to rental days, tolls, tickets, towing, impound, damage, cleaning, late fees, loss, abandonment, unreturned accessories, etc. If Renter is late in payment for any period and charges are unpaid at the end of the paid rental period, Renter agrees that Renter may charge Renter's credit card without prior authorization to pay the applicable charges.</p>

<p>Unpaid fees will be subject to an additional $30 administrative fee per Lorepa per incident or citation. Past due accounts will be sent to collections and will incur an additional 35% surcharge and may be reported to credit reporting agencies. You acknowledge that you have no right to dispute any charges imposed for such fees. You agree to indemnify and hold harmless the Company and the trailer owner from any actions, consequences, or penalties associated with any activity or use while the trailer is in your possession.</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">15. Late Fees</h2>
<p>No grace period will be offered to the renter. If the trailer is not returned on the scheduled date and time, an additional 24 hours of rental time will be withheld from the renter's deposit, unless an extension request has been submitted and paid in advance. If the renter does not submit an extension request and the late fee exceeds the deposit amount, the renter agrees that the rental company is authorized to charge the late fee
</p>
<h2 className="text-3xl font-bold mb-6 text-gray-800">16. Non-use and Acceptance of the Condition</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Non-use and Acceptance of the Condition</h3>
<p className="text-gray-700 mb-6 text-justify">
  Renter acknowledges that by booking the rental and taking possession of the trailer, he accepts the condition and usability of the trailer and is fully responsible for full payment of the rental and any additional charges.<br />
  No refund will be considered in the event of the Hirer being unable to use the trailer, under any circumstances, for any reason after the Hirer has taken possession of the trailer. The Hirer agrees that while using the Company's platform and renting from trailer owners, the Company will not be held responsible for the condition or usability of any trailer rented.<br />
  It is the renter's responsibility to inspect the trailer prior to taking possession. Once the renter takes possession of the trailer, the renter accepts the condition and use of the trailer. Both the renter and the owner must take pictures of the trailer at the time of rental. If the renter discovers a defect or mechanical problem with any part of the trailer, including but not limited to lights, brakes, tires, suspension, electrical, durability or safety of the trailer, the renter must immediately notify the trailer owner and the company prior to taking possession of the trailer.<br />
  Costs incurred for downtime due to mechanical, electrical or structural failure during a rental, such as hotel expenses, meals or any other costs, will not be reimbursed under any circumstances.<br />
  You agree to use the rental trailer in a legal manner. You agree to adhere to specified weight limits and not overload the rental trailer. You agree not to transport hazardous materials or illegal substances prohibited by state or federal laws. You agree to obey all laws and always operate the trailer in a safe manner.<br />
  You agree to indemnify and hold the Company harmless from any and all liability for any mechanical, structural or electrical failure of a rented trailer or for any communication or miscommunication of any instructions or misrepresentation regarding any advertised or rented trailer and its specifications, descriptions or trailer images appearing on the Company Platform or other advertising materials.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">17. Damages</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Damages</h3>
<p className="text-gray-700 mb-6 text-justify">
  Any damage to the trailer during the rental period is the sole responsibility of the renter, not the owner or company. The renter is liable for any damage that cannot be proven to have existed prior to the rental. The renter is liable for damage even if repairs are never made. The owner is free to choose to make their own repairs, have them done by a workshop or not do them at all.<br />
  Renter shall ensure the safety and maintenance of the rented trailer during the rental period, at his own expense. Renter agrees to return the trailer in the same condition in which he received it.<br />
  Renter shall pay Owner full compensation for the replacement and/or repair of the rented trailer or attachments that are not returned due to being lost or stolen or any part of the trailer or attachment that is damaged and requires repair to return it to the same condition it was in at the time of rental. Renter agrees that Owner shall be entitled to hold Renter financially responsible for any such loss or damage by not returning the full or partial amount of the security deposit.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">18. Claim for Compensation for Withholding of Deposit</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Claim for Compensation for Withholding of Deposit</h3>
<p className="text-gray-700 mb-6 text-justify">
  A security deposit deduction request is not insurance. It is a request to withhold some or all of the renter’s security deposit in the event of damage or loss. A loss is defined as physical damage to a trailer, missing or damaged rental accessories, or late return fees. All security deposit deduction requests must be submitted by checking the “Security Deposit Retention Request” box during the “End of Rental” process.<br />
  If a loss occurs and the trailer owner does not retain some or all of the deposit at the time of rental closing, the loss will not be recoverable by the company. A claim for damage deduction can only be filed for the loss of an accessory if the accessory was included in the rental and paid for as an additional accessory during the booking process. The company is not responsible for recovering charges for a trailer or accessory that is borrowed and is not listed as part of the rental list as part of the booking.<br />
  If the security deposit deduction claim cannot be filed immediately upon completion of the rental, you must immediately notify the Company of the damage or loss by emailing or messaging the Company. All security deposit deduction claims must be filed within 72 hours of the Renter returning the trailer. If a longer period of time is required to file a claim, you must notify the Company of the reason for the delay in filing the claim.<br />
  All claims for deposit deduction must include all images that clearly identify the damage or loss, a complete description of the damage or loss, and all receipts for repairs or replacement parts. The claim must provide a fair estimate of the cost of repair or replacement parts and labor. Any images, descriptions, receipts, or amounts of loss not listed in the claim will not be considered for deposit deduction.<br />
  A claim can only be filed once per rental. Claims cannot be edited once they have been submitted. In order for a claim to be considered for security deposit deduction, you must have uploaded photos at the start of the rental, photos at the end of the rental, and you must have been present with the renter at the start of the rental and at the end of the rental. If you are not present when the renter receives and returns the trailer, the company may deny your claim for damage deduction if the damage or loss cannot be proven or if there is doubt that the renter caused the damage or loss.<br />
  The company can only hold the full amount of the deposit. The company will assess the cost of replacements, repairs and labor based on market value. Repairs must be limited to the part(s) involved. For example, if the renter runs over a nail and causes one (1) tire to blow out, the renter is responsible for the cost of replacing one (1) tire and not the other tires if they were not damaged. Or, if a paint scratch occurs, the renter is responsible for the cost of repairing the scratch; the cost of repainting the entire trailer will be disallowed.<br />
  If the Renter has an objection to the claim after it has been opened but before it is closed, the Renter must contact the Company immediately upon receiving notification of the claim. The Trailer Owner and the Trailer Renter agree that the Company will make the final decision on the outcome of the claim for deduction of the deposit, including the amount of money withheld from the deposit.<br />
  All claims will be processed within 48 business hours or less unless further investigation is required. The Trailer Owner and Trailer Renter agree that once a claim has been approved or denied, the decision is final and cannot be reopened or appealed unless the Company chooses to do so.<br />
  Once the claim is closed, the trailer renter and trailer owner agree not to dispute the claim with each other or with the Company or the renter's credit card company. Harassment by the trailer owner or trailer renter is automatic grounds for permanent removal from the platform. You agree to indemnify and hold the Company harmless from any and all liability for our decision not to refund all or part of your deposit due to damages, losses, or any disputes that may arise before, during, or after a reservation or rental.
</p>
<h2 className="text-3xl font-bold mb-6 text-gray-800">19. UNINSURED RENTALS</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Uninsured Rentals</h3>
<p className="text-gray-700 mb-6 text-justify">
  Any rental processed on the Company Platform without insurance for any reason, including, but not limited to, refusal, software glitch, or incomplete information, will be your responsibility to provide outside coverage or self-insure. You agree to release the Company from any liability for any bookings generated without insurance coverage and for any physical damage to your trailer, vehicle, third-party property, bodily injury or death, accident, loss of time, loss of income, or any other liability or incident involving a rental for which insurance was not included or offered for any reason during your rental.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">20. RESPONSIBILITY</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Responsibility</h3>
<p className="text-gray-700 mb-6 text-justify">
  Renter accepts liability while the trailer is in his possession. Renter agrees to provide his own liability coverage and to release the owner and company from any liability during the rental period.<br />
  The trailer owner agrees to release the company from any liability in the event of an incident occurring during the rental. The company is not responsible for any verbal or written agreements, statements or any other means of communication between the renter and the owner.<br />
  The Tenant and the Owner understand and agree that the Company is not obligated to provide advice or review communication and is not required to correct any miscommunication of the Company's policy or any other procedure or to monitor the conduct of the Tenant or the Owner. The Company is not responsible for conducting background checks or ensuring any level of trustworthiness, credibility or qualification of a Tenant or Owner.<br />
  By using the Company's Services, you agree to indemnify and hold the Company harmless from any damages, losses, or criminal or civil litigation arising out of the conduct of business and use of the Company's Platform and Services.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">21. Termination of rental</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Termination of Rental</h3>
<p className="text-gray-700 mb-6 text-justify">
  The Renter shall not pledge or encumber the rented trailer in any way. The Owner may terminate the rental immediately if the Renter fails to comply with the rules set forth in the Rental Terms.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">22. Non-restitution</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Non-restitution</h3>
<p className="text-gray-700 mb-6 text-justify">
  If a trailer is not returned on the date specified in the contract, and in the absence of an extension of the rental period or cooperation from the renter, the owner reserves the right to file a criminal complaint with local law enforcement authorities.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">23. Late payment penalties</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Late Payment Penalties</h3>
<p className="text-gray-700 mb-6 text-justify">
  If Renter fails to return the Trailer, cooperate in scheduling the Trailer pickup, and prepay for the Trailer to be picked up and returned, Renter will be charged late possession penalties of at least $7 per kilometer round trip and at least $500. This amount may be increased at Owner's discretion.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">24. Warranty</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Warranty</h3>
<p className="text-gray-700 mb-6 text-justify">
  Renter accepts the rental of the trailer on an as-is basis without any warranty that such trailer will provide the desired function or performance and intended use. The trailer owner or company does not warrant the condition, quality or performance of the trailer.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">25. Rental contract</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Rental Contract</h3>
<p className="text-gray-700 mb-6 text-justify">
  A rental agreement will be emailed to you at the start of each rental. The company is not a party to any verbal or written agreements between the trailer owner and the trailer renter outside of this agreement. If the trailer owner chooses to use their own rental agreement, this does not void the policies set forth in Lorepa's current terms of service.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">26. Communication</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Communication</h3>
<p className="text-gray-700 mb-6 text-justify">
  You agree, in the context of your business activities on the Company's platform, to present yourself in a professional manner. Abusive, inappropriate language or threats will not be tolerated and will result in suspension from the platform.<br />
  You are prohibited from attempting to circumvent the Platform in any way. For security, privacy, and the benefit of the Platform, you are prohibited from posting or messaging any direct means of contact prior to accepting a booking, including, but not limited to, posting or messaging a full or partial phone number, email address, social media link or name, website link or name, physical address, approximate address, approximate location, company name, company logo, trademark, or other direct means of contact on any public listing page, profile page, profile image, listing page, listing image, trailer image, or message on the Platform prior to accepting a booking.<br />
  If you violate this policy, your post or published content will be immediately removed from public or intended user view. Violation of this policy will be grounds for permanent suspension from the platform and/or application of the Company's service abuse policy.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">27. Service Fees</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Service Fees</h3>
<p className="text-gray-700 mb-6 text-justify">
  Listing your trailer on the Company's platform is free. The fee payable to Lorepa is 15% of the total rental amount (excluding the deposit) of each rental transaction. The Company charges the renter a 5% service fee and a 2% deposit processing fee. This fee allows the platform to operate and contributes to advertising.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">28. Guidelines for Registration of Trailers</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Guidelines for Registration of Trailers</h3>
<p className="text-gray-700 mb-6 text-justify">
  All listings must include a description of at least 200 characters, complete and accurate trailer specifications, a minimum of 4 unique photos of the trailer, the city in the province of Quebec where it is located, and a fair and reasonable rental rate.<br />
  Trailer images must be actual photos of the trailer being rented. Trailer description and images must not include direct contact information, company logo, company name, phone number, email address, website, or any other form of contact information or anything else deemed inappropriate or unacceptable by the company. Manufacturer logos are permitted if they do not provide a direct means of contact and circumvention.<br />
  The Company reserves the right to edit, modify, rewrite or alter any listing descriptions and images used in listings or advertising in order to comply with these terms. By submitting images with your listing, you agree to grant the Company copyright privileges.<br />
  Trailer owners may list their trailer for the purpose of offering rentals. It is prohibited to list a trailer for the sole purpose of advertising a transport service. Trailers with a salvage title cannot be listed on the platform.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">29. Rental procedures for owners</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Rental Procedures for Owners</h3>
<p className="text-gray-700 mb-6 text-justify">
  Trailer owners are required to review the “Getting Started” guide and the “Rental Process Guide”, located in the Owner Dashboard Library, when creating an account.<br />
  Trailer Owners are responsible for managing their own reservations, rental extensions, and responding to questions from renters or potential renters in a timely manner. Owners who do not respond within a reasonable time will receive automated and/or direct contact from the Company.<br />
  All bookings must be accepted or declined as soon as possible or within one hour, if possible, by the trailer owner. If no action is taken to accept or decline a booking within 24 hours, the booking will be declined by the Company and the registration and user account may be deactivated at any time at the Company's discretion.<br />
  The Trailer Owner must respond to all messages as soon as possible or within one hour, if possible. If messages are ignored or go unanswered by the Trailer Owner, the listing and user account may be deactivated at any time at the Company's discretion.<br />
  Trailer Owner agrees that after accepting a reservation, the Trailer Owner is obligated to fulfill the rental. If the Trailer Owner accepts a reservation and is unable to provide the trailer to the Renter on the agreed upon date and time and is unable to reschedule the reservation and must cancel the reservation request, Company reserves the right to charge the Trailer Owner any applicable reservation fees of the total transaction amount to Company to cover credit card and advertising fees, except as provided in the Trailer Owner's reservation cancellation policy.<br />
  If for any reason the trailer is not available on the scheduled rental date and time, the trailer owner must notify the trailer renter in advance and may offer to reschedule the rental to a mutually convenient date and time. The trailer owner must be present at the time of rental and return to assist and follow all steps provided in the “Rental Process Guide” located in your user account library.<br />
  Trailer owners are required to manage rentals by meeting with renters to hand over the trailer. Owners must upload at least four recent photos of the rental trailer before and after each rental and indicate the condition of the trailer. If the trailer is damaged upon return, photos and a description of the damage must be noted on the “Deposit Deduction Request” before the rental ends.<br />
  Trailer owners must start the rental from their account by selecting the “Start Rental” option immediately after returning the trailer to the renter. Trailer owners must end the rental from their account by selecting the “End Rental” option immediately after receiving the trailer when it is returned by the renter. An end of rental period may be required for damage assessment.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">30. FAILURE TO COMPLY WITH OWNER’S RENTAL PROCEDURES</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Failure to Comply with Owner’s Rental Procedures</h3>
<p className="text-gray-700 mb-6 text-justify">
  If an accepted reservation has not been sent on the date and time scheduled by the Platform by selecting “Start Rental” or received on the date and time scheduled by selecting “End Rental”, the Platform’s customer service will attempt to contact you one (1) time to remind you to start or end the rental. Any further delay in performing the rental start or end function will be considered a failure to comply with the rental procedures.<br />
  The company reserves the right to refuse an “accepted” or “renting” reservation at any time for failure to follow rental procedures. Failure to do so may result in forfeiture of your payment depending on the circumstances and whether or not the renter has taken possession of the trailer. The penalty for failure to follow rental procedures is at the sole discretion of the company.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">31. Trailer Maintenance Requirements</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Trailer Maintenance Requirements</h3>
<p className="text-gray-700 mb-6 text-justify">
  Owner agrees that the rental trailer is well maintained, roadworthy and mechanically safe, in good cosmetic condition, has a current license plate associated with the rental trailer, has a manufacturer VIN sticker indicating weight specifications including weight capacity, and has a current DOT inspection if required by state law.<br />
  It is the responsibility of each trailer owner to ensure that the electrical and mechanical components of the trailer are in good working order at all times prior to each rental, including but not limited to tires, spare tires, axles, bearings, hubs, drums, brakes, leaf springs, shackle links, suspensions, electrical wiring, hitch, hitch lock, safety chains, breakaway box, breakaway cable, frame, breakaway battery, bed, structure, walls, lights, hinges, doors, running boards, etc.<br />
  You agree to indemnify and hold the Company harmless from any mechanical, electrical or structural failure of any Rented Trailer or from the communication or miscommunication of any instructions or misrepresentation regarding any Rented Trailer and its specifications contained on the Company Platform, Trailer Listing Page or other advertising materials.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">32. Owner Payments</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Owner Payments</h3>
<p className="text-gray-700 mb-6 text-justify">
  Owner payments are controlled by Company0 (the trailer owner). A payment is automatically initiated when you end the rental by selecting the “End Rental” button associated with the reservation. A payment typically takes 2-3 business days from the time you end the rental to arrive in your bank account. Holidays, weekends, restrictions on your account, or not setting up your bank account will delay payments. You must add your bank account information by selecting “My Bank Account” in your account to receive payments.<br />
  You will not be entitled to a payment for any booking transaction that is associated with or suspected of fraud, or for any booking transaction for which a dispute is lost due to the bank ruling in favor of the cardholder. If you have already received payment, the money will be deducted from your next payment.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">33. Cancellation of the Reservation by the Owner</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Cancellation of the Reservation by the Owner</h3>
<p className="text-gray-700 mb-6 text-justify">
  Trailer owners are allowed to cancel up to two times within a six-month period without a fee. Subsequent cancellations by the trailer owner will incur a $100 fee if the cancellation occurs at least 2 days before the rental begins. The fee is deducted from the trailer owner's future payment. Any cancellation requests after the rental has started or been sent will be denied. Owner cancellations are only for unavoidable circumstances. The company will use reasonable judgment in determining what constitutes an “unavoidable circumstance”. Any cancellation by the owner in an attempt to circumvent the platform will be considered abuse of service.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">34. Abuse of Services</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Abuse of Services</h3>
<p className="text-gray-700 mb-6 text-justify">
  By using Lorepa's services, you agree not to attempt to circumvent the Platform. Any Trailer Owner who attempts to circumvent the Platform in any way by attempting to exchange contact information, attempting to establish a meeting location, or sharing any other information that may prevent the booking from being completed on the Platform prior to an accepted booking is in violation of these Terms.<br />
  Any Trailer Owner who uses contact information shared by a Renter in violation of these Terms prior to an accepted booking is in violation of these Terms. Any Trailer Owner who baits a Renter into circumventing the Platform is in violation of these Terms. Any Trailer Owner who causes or attempts to cause the Renter to cancel the booking after it has been accepted in order to circumvent the Platform is in violation of these Terms.<br />
  If the Company, in its reasonable judgment, believes that the Trailer Owner has abused the Terms of Service and circumvented the Platform in any way or caused the Rental or a potential Rental to be removed from the Platform, Lorepa reserves the right to charge all applicable booking fees and a $200 administrative fee to the Trailer Owner. The Company reserves the right to block or permanently delete any user account at any time and for any reason.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">35. Contents</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Your Right to Post Content</h3>
<p className="text-gray-700 mb-6 text-justify">
  Our Service allows you to post Content. You are responsible for the Content you post to the Service, including its legality, reliability, and appropriateness.<br />
  By posting Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You retain all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights. You agree that this license includes the right for Us to make Your Content available to other users of the Service, who may also use Your Content subject to these Terms.<br />
  You represent and warrant that (i) the Content is yours (you own it) or you have the right to use it and grant Us the rights and license as provided in these Terms, and (ii) the posting of Your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">36. Content Restrictions</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Content Restrictions</h3>
<p className="text-gray-700 mb-6 text-justify">
  The Company is not responsible for the content of users of the Service. You expressly understand and agree that you are solely responsible for the content and all activities that occur under your account, whether conducted by you or by any third party using your account.<br />
  You may not transmit any content that is unlawful, offensive, disturbing, intended to disgust, threatening, libelous, defamatory, obscene or otherwise objectionable. Examples of objectionable content include, but are not limited to, the following:<br />
  illegal or promoting illegal activity.<br />
  Defamatory, discriminatory, or mean-spirited content, including references or comments about religion, race, sexual orientation, gender, national/ethnic origin, or other targeted groups.<br />
  Spam, whether machine-generated or randomly generated, constituting unauthorized or unsolicited advertising, chain letters, any other form of unauthorized solicitation, or any form of lottery or gambling.<br />
  Contain or install viruses, worms, malware, Trojan horses, or other material that is designed or intended to disrupt, damage, or limit the functionality of any software, hardware, or telecommunications equipment, or to damage or gain unauthorized access to any data or other information of any third party. Infringe upon any proprietary rights of any party, including patents, trademarks, trade secrets, copyrights, rights of publicity, or other rights.<br />
  Impersonating any person or entity, including the Company and its employees or representatives, or trailer owners and renters.<br />
  Violating a third party’s privacy.<br />
  False information and characteristics.<br />
  The Company reserves the right, but not the obligation, to determine, in its sole discretion, whether any Content is appropriate and complies with these Terms, and to refuse or remove such Content. The Company further reserves the right to make edits, modifications, and change the manner in which any Content is presented. The Company may also limit or terminate your use of the Service if you post any Content that is objectionable. Because the Company cannot control all Content posted by users and/or third parties on the Service, you agree to use the Service at your own risk. You understand that by using the Service, you may be exposed to Content that you may find offensive, indecent, incorrect, or objectionable, and you agree that under no circumstances will the Company be liable in any way for any Content, including any errors or omissions in any Content, or any loss or damage of any kind incurred as a result of the use of any Content.
</p>

<h2 className="text-3xl font-bold mb-6 text-gray-800">37. Content Backups</h2>
<h3 className="text-xl font-semibold mb-4 text-gray-800 text-left">Content Backups</h3>
<p className="text-gray-700 mb-6 text-justify">
  Although regular backups of content are performed, the Company does not guarantee that there will be no loss or corruption of data.<br />
  Corrupted or invalid savepoints may be caused by, without limitation, content that becomes corrupted before it is backed up or that changes during the duration of the backup.<br />
  The Company will provide assistance and attempt to resolve known or discovered issues that may affect backups of the Content. However, you acknowledge that the Company is not responsible for the integrity of the Content or the inability to successfully restore the Content to a usable state.<br />
  You agree to keep a complete and accurate copy of all Content in a location separate from the Service.
</p>


        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
