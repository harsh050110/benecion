import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800">

      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">
        Last Updated: 05 April 2026
      </p>

      <p className="mb-6 leading-relaxed">
        Welcome to the Beneicon website. These Terms & Conditions govern your 
        use of the website and services provided by Beneicon. By accessing or 
        using this website, you agree to comply with and be bound by the terms 
        outlined below.
      </p>

      <p className="mb-8 font-medium">
        If you do not agree with these terms, please refrain from using this website.
      </p>

      {/* Section 1 */}
      <h2 className="text-xl font-semibold mb-3">1. About Beneicon</h2>
      <p className="mb-8 leading-relaxed">
        Beneicon is a technology-driven company specializing in LED display 
        solutions, including digital standees, indoor and outdoor LED video 
        walls, and customized display systems for commercial and advertising use.
        The information provided on this website is intended for general 
        informational purposes regarding our products, services, and 
        technological capabilities.
      </p>

      {/* Section 2 */}
      <h2 className="text-xl font-semibold mb-3">2. Use of the Website</h2>
      <p className="mb-4 leading-relaxed">
        By using this website, you agree to use it only for lawful purposes and 
        in accordance with these Terms & Conditions.
      </p>
      <p className="mb-2 font-medium">You agree not to:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Use the website in any way that violates applicable laws or regulations</li>
        <li>Attempt to gain unauthorized access to website systems or servers</li>
        <li>Disrupt the functionality or security of the website</li>
        <li>Copy, reproduce, or distribute website content without permission</li>
      </ul>
      <p className="mb-8 leading-relaxed">
        Beneicon reserves the right to restrict or terminate access to the 
        website if these terms are violated.
      </p>

      {/* Section 3 */}
      <h2 className="text-xl font-semibold mb-3">3. Intellectual Property</h2>
      <p className="mb-4 leading-relaxed">
        All content on this website, including but not limited to:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Text</li>
        <li>Graphics</li>
        <li>Product visuals</li>
        <li>Logos</li>
        <li>Brand elements</li>
        <li>Technical specifications</li>
        <li>Website design and structure</li>
      </ul>
      <p className="mb-8 leading-relaxed">
        is the intellectual property of Beneicon unless otherwise stated. No 
        material from this website may be copied, reproduced, modified, 
        distributed, or used for commercial purposes without prior written 
        permission from Beneicon.
      </p>

      {/* Section 4 */}
      <h2 className="text-xl font-semibold mb-3">4. Products & Services</h2>
      <p className="mb-4 leading-relaxed">
        The information related to products and services on this website is for 
        general informational purposes only and does not constitute a binding offer.
      </p>
      <p className="mb-4">All engagements will be subject to separate agreements outlining:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Product specifications</li>
        <li>Pricing</li>
        <li>Warranty terms</li>
        <li>Delivery timelines</li>
        <li>Installation scope</li>
      </ul>

      {/* Section 5 */}
      <h2 className="text-xl font-semibold mb-3">5. Information Accuracy</h2>
      <p className="mb-8 leading-relaxed">
        While Beneicon strives to ensure that all information on this website is 
        accurate and up to date, we do not guarantee the completeness, reliability, 
        or accuracy of the content. Product specifications, pricing, and 
        availability may change without prior notice.
      </p>

      {/* Section 6 */}
      <h2 className="text-xl font-semibold mb-3">6. Third-Party Links</h2>
      <p className="mb-8 leading-relaxed">
        The Beneicon website may include links to third-party websites or 
        resources. These links are provided for convenience only. Beneicon does 
        not control or endorse the content, policies, or practices of any 
        third-party websites and assumes no responsibility for them. Users access 
        third-party websites at their own risk.
      </p>

      {/* Section 7 */}
      <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
      <p className="mb-4 leading-relaxed">
        To the fullest extent permitted by applicable law, Beneicon shall not be 
        liable for:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Use or inability to use this website</li>
        <li>Reliance on information provided on this website</li>
        <li>Errors, interruptions, or delays in website functionality</li>
      </ul>
      <p className="mb-8 font-medium">
        Use of the website is at your own discretion and risk.
      </p>

      {/* Section 8 */}
      <h2 className="text-xl font-semibold mb-3">8. Privacy</h2>
      <p className="mb-8 leading-relaxed">
        Your use of the Beneicon website is also governed by our{" "}
        <Link to="/privacy-policy" className="text-blue-600 hover:underline">
          Privacy Policy
        </Link>, which explains how we collect, store, and use personal information.
      </p>

      {/* Section 9 */}
      <h2 className="text-xl font-semibold mb-3">9. Changes to These Terms</h2>
      <p className="mb-8 leading-relaxed">
        Beneicon reserves the right to update or modify these Terms & Conditions 
        at any time without prior notice. Changes will be effective immediately 
        upon publication on this page. Continued use of the website following any 
        updates constitutes acceptance of the revised terms.
      </p>

      {/* Section 10 */}
      <h2 className="text-xl font-semibold mb-3">10. Governing Law</h2>
      <p className="mb-8 leading-relaxed">
        These Terms & Conditions shall be governed by and interpreted in 
        accordance with the laws of India. Any disputes shall be subject to the 
        jurisdiction of the courts located in India.
      </p>

      {/* Section 11 */}
      <h2 className="text-xl font-semibold mb-3">11. Contact Information</h2>
      <p className="mb-2">If you have any questions, please contact:</p>
      <p className="mb-2 font-medium">Beneicon</p>
      <p className="mb-2">Email: support@beneicon.com</p>
      <p>Website: www.beneicon.com</p>

    </div>
  );
};

export default TermsConditions;