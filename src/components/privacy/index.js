import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl md:text-6xl font-bold text-black ml-48">
                    Privacy Policy
                </h1>

                <h1 className="text-3xl font-bold mb-6 text-gray-800">1. Introduction</h1>
                <p className="text-gray-700 mb-8 text-justify">
                    Welcome to Lorepa! Lorepa ("we," "us," "our") values your privacy and is committed to protecting the personal information we collect. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you interact with our platform, including our website, mobile application, and services ("Platform").
                    By accessing or using the Platform, you agree to this Privacy Policy. If you disagree with any part of this policy, please discontinue using the Platform.
                </p>

                <h1 className="text-3xl font-bold mb-6 text-gray-800">2. Information We Collect</h1>
                <p className="text-gray-700 mb-8 text-justify">
                    We collect personal and non-personal information to provide, improve, and secure our services. This includes:
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">2.1. Information You Provide</h2>
                <ul className="pl-5 mb-8 list-none">
                    <li><strong>Account Information:</strong> When creating an account, we collect your name, email address, phone number, password, and other relevant details.</li>
                    <li><strong>Verification Documents:</strong> For renters: Proof of driver’s license, insurance documents (including Endorsement 27), and vehicle registration. For owners: Proof of trailer ownership, insurance, and registration documents.</li>
                    <li><strong>Rental Details:</strong> Information related to bookings, including rental dates, payment amounts, trailer details, and reviews.</li>
                    <li><strong>Customer Support Interactions:</strong> Information shared during communications with our support team.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">2.2. Information We Collect Automatically</h2>
                <ul className="pl-5 mb-8 list-none">
                    <li><strong>Usage Data:</strong> Data on your interactions with our Platform, such as pages viewed, time spent, and actions taken.</li>
                    <li><strong>Device Information:</strong> Details about your device, including IP address, browser type, operating system, and unique identifiers.</li>
                    <li><strong>Location Data:</strong> If you allow, we may collect your precise geolocation to facilitate booking or navigation services.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">2.3. Information from Third Parties</h2>
                <ul className="pl-5 mb-8 list-none">
                    <li><strong>Payment Providers:</strong> Information related to payment processing, including transaction IDs and billing details.</li>
                    <li><strong>Background Check Services:</strong> When applicable, we may collect verification information from third-party services to ensure security and trust.</li>
                </ul>

                <h1 className="text-3xl font-bold mb-6 text-gray-800">3. How We Use Your Information</h1>
                <p className="text-gray-700 mb-8 text-justify">
                    We use your information to provide and enhance the Platform and ensure its safety and functionality. Specifically, we use your data for:
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">3.1. Service Delivery</h2>
                <ul className="pl-5 mb-8 list-none">
                    <li>Facilitating bookings and transactions between renters and owners.</li>
                    <li>Verifying your identity and eligibility to use the Platform.</li>
                    <li>Managing payments, cancellations, and refunds.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">3.2. Security and Compliance</h2>
                <ul className="pl-5 mb-8 list-none">
                    <li>Detecting and preventing fraud, abuse, and unauthorized activity.</li>
                    <li>Enforcing our Terms of Service and other policies.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">3.3. Personalization</h2>
                <ul className="pl-5 mb-8 list-none">
                    <li>Tailoring content, recommendations, and offers based on your preferences and usage.</li>
                    <li>Providing location-based features and services.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">3.4. Communication</h2>
                <ul className="pl-5 mb-8 list-none">
                    <li>Sending transactional emails or notifications about bookings, account updates, or service changes.</li>
                    <li>Responding to inquiries and providing customer support.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">3.5. Analytics and Improvement</h2>
                <ul className="pl-5 mb-8 list-none">
                    <li>Monitoring and analyzing trends, usage, and activities to improve the Platform’s performance.</li>
                    <li>Conducting research and development to introduce new features or services.</li>
                </ul>

                <h1 className="text-3xl font-bold mb-6 text-gray-800">4. Sharing Your Information</h1>
                <p className="text-gray-700 mb-8 text-justify">
                    We do not sell your personal information. However, we may share your information under the following conditions:
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">4.1. With Other Users</h2>
                <p className="text-gray-700 mb-8 text-justify">
                    When booking a trailer, limited information (e.g., your name, contact details, and booking history) is shared between renters and owners.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">4.2. With Third-Party Service Providers</h2>
                <ul className="pl-5 mb-8 list-none">
                    <li>Process payments securely.</li>
                    <li>Verify user identities and documents.</li>
                    <li>Host data and provide technical support.</li>
                    <li>Analyze data for Platform improvements.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">4.3. Legal Obligations and Protection</h2>
                <ul className="pl-5 mb-8 list-none">
                    <li>To comply with legal obligations or requests from authorities.</li>
                    <li>To enforce our terms, policies, and agreements.</li>
                    <li>To protect our rights, users, or others in case of fraud, safety concerns, or disputes.</li>
                </ul>

                <h1 className="text-3xl font-bold mb-6 text-gray-800">5. Cookies and Tracking Technologies</h1>
                <p className="text-gray-700 mb-8 text-justify">
                    We use cookies and similar technologies to enhance your experience. These may include:
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">5.1. Types of Cookies</h2>
                <ul className="pl-5 mb-8 list-none">
                    <li>Essential Cookies: Required for the Platform to function.</li>
                    <li>Performance Cookies: Collect data on how users interact with the Platform.</li>
                    <li>Functional Cookies: Remember your preferences to enhance usability.</li>
                    <li>Advertising Cookies: Deliver personalized ads based on your interests.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">5.2. Managing Cookies</h2>
                <p className="text-gray-700 mb-8 text-justify">
                    You can manage your cookie preferences via your browser settings or through our Cookie Settings page. Disabling cookies may affect certain features.
                </p>

                <h1 className="text-3xl font-bold mb-6 text-gray-800">6. Your Rights and Choices</h1>
                <ul className="pl-5 mb-8 list-none">
                    <li><strong>Access and Portability:</strong> Request access to your personal information or obtain a copy in a portable format.</li>
                    <li><strong>Correction:</strong> Request corrections to inaccurate or incomplete data.</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal or contractual requirements.</li>
                    <li><strong>Marketing Opt-Out:</strong> Unsubscribe from promotional emails or adjust communication preferences.</li>
                </ul>
                <p className="text-gray-700 mb-8 text-justify">
                    To exercise these rights, contact us at <a href="mailto:privacy@lorepa.com" className="text-blue-600">privacy@lorepa.com</a>.
                </p>

                <h1 className="text-3xl font-bold mb-6 text-gray-800">7. Data Retention</h1>
                <p className="text-gray-700 mb-8 text-justify">
                    We retain your personal information only for as long as necessary to:
                </p>
                <ul className="pl-5 mb-8 list-none">
                    <li>Provide the services you request.</li>
                    <li>Comply with legal and regulatory obligations.</li>
                    <li>Resolve disputes or enforce our agreements.</li>
                </ul>

                <h1 className="text-3xl font-bold mb-6 text-gray-800">8. Security Measures</h1>
                <p className="text-gray-700 mb-8 text-justify">
                    We implement advanced security measures, such as encryption, secure servers, and access controls, to protect your data. However, no system is entirely secure, and we cannot guarantee complete protection.
                </p>

                <h1 className="text-3xl font-bold mb-6 text-gray-800">9. International Data Transfers</h1>
                <p className="text-gray-700 mb-8 text-justify">
                    Your information may be transferred and stored in countries outside your residence. We ensure compliance with applicable laws for cross-border data transfers through mechanisms like Standard Contractual Clauses (SCCs).
                </p>

                <h1 className="text-3xl font-bold mb-6 text-gray-800">10. Updates to This Policy</h1>
                <p className="text-gray-700 mb-8 text-justify">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Updated versions will be posted on this page with the revision date.
                </p>

                <h1 className="text-3xl font-bold mb-6 text-gray-800">11. Contact Us</h1>
                <p className="text-gray-700 mb-8 text-justify">
                    If you have any questions or concerns about this Privacy Policy, please contact us at:
                </p>
                <p className="text-gray-700 mb-8 text-justify">
                    <strong>Email:</strong> <a href="mailto:contact@lorepa.ca" className="text-blue-600">contact@lorepa.ca</a><br />
                    <strong>Address:</strong> 3910 Rue de Bellechasse, Montréal, Québec, H1X 1J4
                </p>

                <h1 className="text-3xl font-bold mb-6 text-gray-800">12. Consent</h1>
                <p className="text-gray-700 mb-8 text-justify">
                    By using the Platform, you consent to the collection, use, and sharing of your information as outlined in this Privacy Policy. If you do not agree with any part of this policy, please discontinue use of the Platform.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
