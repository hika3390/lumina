import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="font-sans bg-white min-h-screen overflow-x-hidden">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="mb-8">
            This privacy policy applies to the Trick app (hereby referred to as "Application") for mobile devices that was created by ルミナ合同会社 (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What information does the Application obtain and how is it used?</h2>
            <p className="mb-4">
              The Application does not obtain any information when you download and use it. Registration is not required to use the Application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Does the Application collect precise real time location information of the device?</h2>
            <p className="mb-4">
              This Application does not collect precise information about the location of your mobile device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Do third parties see and/or have access to information obtained by the Application?</h2>
            <p className="mb-4">
              Since the Application does not collect any information, no data is shared with third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What are my opt-out rights?</h2>
            <p className="mb-4">
              You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Children</h2>
            <p className="mb-4">
              The Application is not used to knowingly solicit data from or market to children under the age of 13.
            </p>
            <p className="mb-4">
              The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages all children to never submit any personally identifiable information through the Application and/or Services. The Service Provider encourage parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact the Service Provider (info@lmns.jp) so that they will be able to take the necessary actions. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country (in some countries we may allow your parent or guardian to do so on your behalf).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Security</h2>
            <p className="mb-4">
              The Service Provider is concerned about safeguarding the confidentiality of your information. However, since the Application does not collect any information, there is no risk of your data being accessed by unauthorized individuals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes</h2>
            <p className="mb-4">
              This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to their Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
            </p>
          </section>

          <section className="mb-8">
            <p className="mb-4 font-medium">
              This privacy policy is effective as of 2025-08-17
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Consent</h2>
            <p className="mb-4">
              By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by the Service Provider.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at info@lmns.jp.
            </p>
          </section>

          <section className="mb-8">
            <p className="text-sm text-gray-600">
              This privacy policy page was generated by App Privacy Policy Generator
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;