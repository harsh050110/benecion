const Disclaimer = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
      
      <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
      <p className="text-sm text-gray-500 mb-8">
        Last Updated: 05 April 2026
      </p>

      <p className="mb-6 leading-relaxed">
        The information provided on the Beneicon website is for general informational purposes only. 
        While we strive to keep the information accurate and up to date, Beneicon makes no 
        representations or warranties of any kind regarding the completeness, reliability, or 
        accuracy of the information contained on this website.
      </p>

      <p className="mb-8 font-medium">
        Any reliance you place on such information is strictly at your own risk.
      </p>

      {/* Section 1 */}
      <h2 className="text-xl font-semibold mb-3">1. No Professional Advice</h2>
      <p className="mb-4 leading-relaxed">
        The content available on this website, including product descriptions, technical 
        specifications, use-case examples, and other materials, is intended for informational 
        purposes only.
      </p>
      <p className="mb-4 leading-relaxed">
        Nothing on this website should be interpreted as professional technical, financial, legal, 
        or business advice.
      </p>
      <p className="mb-8 leading-relaxed">
        Any purchase, installation, or consulting engagement with Beneicon will be governed by a 
        separate written agreement, quotation, or invoice outlining the scope, responsibilities, 
        and terms. Users are encouraged to seek appropriate professional advice before making 
        purchasing or business decisions.
      </p>

      {/* Section 2 */}
      <h2 className="text-xl font-semibold mb-3">2. No Guarantees of Results</h2>
      <p className="mb-4 leading-relaxed">
        Any product demonstrations, performance claims, case references, or usage examples 
        presented on this website are intended to illustrate potential applications.
      </p>
      <p className="mb-4 leading-relaxed">
        They do not guarantee specific outcomes, performance levels, or business results.
      </p>
      <p className="mb-4">Actual performance may vary depending on factors such as:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Installation environment</li>
        <li>Usage conditions</li>
        <li>Maintenance practices</li>
        <li>External technical or environmental factors</li>
      </ul>

      {/* Section 3 */}
      <h2 className="text-xl font-semibold mb-3">3. External Links Disclaimer</h2>
      <p className="mb-8 leading-relaxed">
        The Beneicon website may contain links to third-party websites or external resources. 
        These links are provided for informational convenience only. Beneicon does not control 
        or endorse the content, policies, or practices of third-party websites and assumes no 
        responsibility for their content or activities. Users access third-party websites at 
        their own risk.
      </p>

      {/* Section 4 */}
      <h2 className="text-xl font-semibold mb-3">4. Website Availability</h2>
      <p className="mb-4 leading-relaxed">
        While Beneicon strives to ensure the website operates smoothly, we do not guarantee 
        uninterrupted or error-free access.
      </p>
      <p className="mb-4">Beneicon shall not be held responsible for any temporary unavailability due to:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Technical issues</li>
        <li>Server downtime</li>
        <li>Maintenance</li>
        <li>Circumstances beyond our control</li>
      </ul>

      {/* Section 5 */}
      <h2 className="text-xl font-semibold mb-3">5. Limitation of Liability</h2>
      <p className="mb-4 leading-relaxed">
        To the fullest extent permitted by applicable law, Beneicon shall not be liable for any 
        direct, indirect, incidental, consequential, or special damages arising from:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Use of this website</li>
        <li>Reliance on information provided on the website</li>
        <li>Errors or omissions in website content</li>
        <li>Temporary interruption or unavailability of the website</li>
      </ul>
      <p className="mb-8 font-medium">
        Use of the website is at your own discretion and risk.
      </p>

      {/* Section 6 */}
      <h2 className="text-xl font-semibold mb-3">6. Intellectual Property</h2>
      <p className="mb-4 leading-relaxed">
        All content on the Beneicon website, including:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Text</li>
        <li>Graphics</li>
        <li>Product visuals</li>
        <li>Brand assets</li>
        <li>Technical content</li>
      </ul>
      <p className="mb-8 leading-relaxed">
        is the intellectual property of Beneicon unless otherwise stated. Unauthorized use, 
        reproduction, or distribution of this content is strictly prohibited without prior 
        written permission.
      </p>

      {/* Section 7 */}
      <h2 className="text-xl font-semibold mb-3">7. Changes to This Disclaimer</h2>
      <p className="mb-8 leading-relaxed">
        Beneicon reserves the right to modify or update this Disclaimer at any time without 
        prior notice. Changes will be effective immediately upon publication on this page.
      </p>

      {/* Section 8 */}
      <h2 className="text-xl font-semibold mb-3">8. Contact Information</h2>
      <p className="mb-2">If you have any questions regarding this Disclaimer, please contact:</p>
      <p className="mb-2 font-medium">Beneicon</p>
      <p className="mb-2">Email: support@beneicon.com</p>
      <p>Website: www.beneicon.com</p>

    </div>
  );
};

export default Disclaimer;