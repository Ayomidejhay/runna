// import React from "react";
// import Footer from "../components/Footer";

// export default function PrivacyPolicyPage() {
//   return (
//     <div>
//         <main className="max-w-4xl mx-auto px-6 pt-16 text-gray-800">
//       <h1 className="text-3xl font-bold mb-2 text-center">Privacy Policy</h1>
//       <p className="text-sm text-gray-500 text-center mb-10">
//         Last Updated: October, 2025
//       </p>

//       <p className="mb-6">
//         At <span className="font-semibold">Runnars</span>, your privacy matters.
//         We’re committed to protecting your personal and pet-related data, and to
//         being transparent about how we collect, use, and store it.
//       </p>

//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
//         <p className="mb-3">
//           We collect limited information to make the app function properly and improve your experience:
//         </p>
//         <ul className="list-disc pl-6 space-y-2">
//           <li>
//             <span className="font-semibold">Account Information:</span> Email, username, and profile photo (if provided).
//           </li>
//           <li>
//             <span className="font-semibold">Pet Data:</span> Pet name, breed, age, weight, and health activity details.
//           </li>
//           <li>
//             <span className="font-semibold">Activity Data:</span> Walk duration, distance, GPS location (only during active walks), and performance insights.
//           </li>
//           <li>
//             <span className="font-semibold">Device Information:</span> Type of device, app version, and crash logs (to improve app reliability).
//           </li>
//         </ul>
//       </section>

//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
//         <p className="mb-3">We use your data to:</p>
//         <ul className="list-disc pl-6 space-y-2">
//           <li>Enable walk tracking and wellness insights</li>
//           <li>Improve app performance and personalization</li>
//           <li>Support community interactions like challenges, comments, and messaging</li>
//           <li>Provide customer support and technical updates</li>
//         </ul>
//         <p className="mt-4">
//           We <span className="font-semibold">do not sell or share</span> your personal or pet data with third-party advertisers.
//         </p>
//       </section>

//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-3">3. Data Security</h2>
//         <p>
//           Your data is stored securely using modern encryption standards. Only you
//           control what’s visible publicly (for example, when joining challenges or
//           sharing posts).
//         </p>
//       </section>

//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-3">4. Third-Party Services</h2>
//         <p>
//           We may use trusted third-party services such as Firebase, Google Maps, or
//           analytics tools to improve app performance and location tracking. These
//           providers comply with data protection standards (e.g., GDPR).
//         </p>
//       </section>

//       <section className="">
//         <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
//         <p className="mb-3">You can:</p>
//         <ul className="list-disc pl-6 space-y-2">
//           <li>Request a copy of your data</li>
//           <li>Delete your account at any time</li>
//           <li>Manage what you share in community features</li>
//         </ul>
//         <p className="mt-4">
//           To make a request, contact us at{" "}
//           <a
//             href="mailto:support@runnarsapp.com"
//             className="text-blue-600 hover:underline"
//           >
//             support@runnarsapp.com
//           </a>
//           .
//         </p>
//       </section>

      
//     </main>
//     </div>
//   );
// }


import React from "react";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <main className="max-w-4xl mx-auto px-6 pt-16 pb-16 text-gray-800">
        <h1 className="text-3xl font-bold mb-2 text-center">Privacy Policy</h1>
        <p className="text-sm text-gray-500 text-center mb-10">
          Last Updated: July 2026
        </p>

        <p className="mb-6">
          At <span className="font-semibold">Runnars</span>, your privacy matters.
          We’re committed to protecting your personal and pet-related data, and to
          being transparent about how we collect, use, and store it.
        </p>

        {/* 1. Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="mb-3">
            We collect limited information to make the app function properly and improve your experience:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Account Information:</span> Email, username, and profile photo (if provided).
            </li>
            <li>
              <span className="font-semibold">Pet Data:</span> Pet name, breed, age, weight, and health activity details.
            </li>
            <li>
              <span className="font-semibold">Activity Data:</span> Walk duration, distance, GPS location (only during active walks), and performance insights.
            </li>
            <li>
              <span className="font-semibold">Device Information:</span> Type of device, app version, and crash logs (to improve app reliability).
            </li>
          </ul>
        </section>

        {/* 2. Location Data */}
        <section className="mb-8 bg-gray-50 p-5 rounded-xl border border-gray-100">
          <h2 className="text-2xl font-semibold mb-3">2. Location Data</h2>
          <p className="mb-4 text-sm text-amber-700 bg-amber-50 border border-amber-100 px-3 py-2 rounded-md font-medium">
            Prominent Disclosure: Runnars accesses your precise GPS location during walk sessions. This section explains what is collected, when, why, and how it is protected.
          </p>
          
          <h3 className="text-lg font-semibold mt-3 mb-1">What We Collect</h3>
          <p className="mb-2">When you start a walk session, Runnars collects the following location data:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li><span className="font-semibold">Precise GPS coordinates</span> — your latitude and longitude throughout the walk.</li>
            <li><span className="font-semibold">Route path</span> — the sequence of GPS points that make up your walk route.</li>
            <li><span className="font-semibold">Distance traveled</span> — calculated from your GPS track.</li>
            <li><span className="font-semibold">Walk start and end location</span> — the first and last point of each session.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-3 mb-1">When We Collect It</h3>
          <p className="mb-4">
            Location data is collected <span className="font-semibold">only during an active walk session</span> — from the moment you tap "Start Walk" to the moment you end the session. We do not collect your location in the background, when the app is closed, or at any other time.
          </p>

          <h3 className="text-lg font-semibold mt-3 mb-1">Why We Collect It</h3>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li><span className="font-semibold">Tracking your route</span> — to display your walk map and route history.</li>
            <li><span className="font-semibold">Measuring distance</span> — to calculate how far you and your pet walked.</li>
            <li><span className="font-semibold">Verifying walk completion</span> — to confirm activity and calculate your reward earnings fairly.</li>
            <li><span className="font-semibold">Preventing fraudulent activity</span> — to protect the integrity of the rewards system for all users.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-3 mb-1">How We Protect It</h3>
          <p className="mb-4">
            Location data is transmitted over encrypted connections (TLS) and stored in secured databases accessible only to authorised Runnars systems. We apply access controls that limit which internal processes can read location records.
          </p>

          <h3 className="text-lg font-semibold mt-3 mb-1">Third-Party Sharing</h3>
          <p className="mb-4">
            Your location data is <span className="font-semibold">never sold, rented, or shared with advertisers or third-party marketing platforms</span>. It is not used to build advertising profiles about you. It may be shared only with infrastructure service providers (such as cloud hosting and mapping services) under strict data processing agreements to provide the service.
          </p>

          <h3 className="text-lg font-semibold mt-3 mb-1">How to Revoke Access</h3>
          <p className="mb-2">You can revoke location permission at any time in your device settings:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
            <li><span className="font-semibold text-gray-800">iOS:</span> Settings → Privacy & Security → Location Services → Runnars → Never</li>
            <li><span className="font-semibold text-gray-800">Android:</span> Settings → Apps → Runnars → Permissions → Location → Deny</li>
          </ul>
          <p className="mt-2 text-xs text-gray-500 italic">
            *Note: Removing location permission will prevent you from starting walk sessions, as location is required to track routes and calculate rewards.
          </p>
        </section>

        {/* 3. Fitness & Motion Data */}
        <section className="mb-8 bg-gray-50 p-5 rounded-xl border border-gray-100">
          <h2 className="text-2xl font-semibold mb-3">3. Fitness & Motion Data</h2>
          <p className="mb-4 text-sm text-amber-700 bg-amber-50 border border-amber-100 px-3 py-2 rounded-md font-medium">
            Prominent Disclosure: Runnars accesses your device's motion sensors and fitness activity during walk sessions. This section explains what is collected, when, why, and how it is protected.
          </p>

          <h3 className="text-lg font-semibold mt-3 mb-1">What We Collect</h3>
          <p className="mb-2">During an active walk session, Runnars accesses the following data from your device's motion sensors and the platform's health framework:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li><span className="font-semibold">Step count</span> — the number of steps taken during the session.</li>
            <li><span className="font-semibold">Cadence</span> — your walking pace (steps per minute).</li>
            <li><span className="font-semibold">Motion activity type</span> — whether you are walking, running, or stationary.</li>
            <li><span className="font-semibold">Distance (sensor-derived)</span> — distance estimate from the pedometer sensor.</li>
          </ul>
          <p className="mb-4 text-sm text-gray-600">
            On <span className="font-semibold">iOS</span> we use the Motion & Fitness framework (Core Motion). On <span className="font-semibold">Android</span> we use the Activity Recognition API. We <span className="font-semibold">do not</span> access heart rate, sleep data, menstrual health, medical conditions, or any other health categories.
          </p>

          <h3 className="text-lg font-semibold mt-3 mb-1">When We Collect It</h3>
          <p className="mb-4">
            Fitness and motion data is collected <span className="font-semibold">only during an active walk session</span>. Sensor access begins when you tap "Start Walk" and ends when the session is completed. The app does not read fitness data in the background or outside of walk sessions.
          </p>

          <h3 className="text-lg font-semibold mt-3 mb-1">Why We Collect It</h3>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li><span className="font-semibold">Activity verification</span> — to confirm that you are genuinely walking and not stationary.</li>
            <li><span className="font-semibold">Reward calculation</span> — step count and distance are used to calculate earned rewards fairly.</li>
            <li><span className="font-semibold">Walk statistics</span> — to display your personal walk summaries (steps, pace, distance).</li>
            <li><span className="font-semibold">Preventing fraud</span> — to ensure that rewards reflect real physical activity.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-3 mb-1">Third-Party Sharing</h3>
          <p className="mb-4">
            Fitness and motion data is <span className="font-semibold">never sold, rented, or shared with advertisers or third-party analytics platforms for advertising purposes</span>. It is not combined with other data sources to build a profile of your health or habits outside the app.
          </p>

          <h3 className="text-lg font-semibold mt-3 mb-1">How to Revoke Access</h3>
          <p className="mb-2">You can revoke permission at any time in your device settings:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
            <li><span className="font-semibold text-gray-800">iOS:</span> Settings → Privacy & Security → Motion & Fitness → Runnars → Off</li>
            <li><span className="font-semibold text-gray-800">Android:</span> Settings → Apps → Runnars → Permissions → Physical Activity → Deny</li>
          </ul>
        </section>

        {/* 4. How We Use Your Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">4. How We Use Your Information</h2>
          <p className="mb-3">We use your data to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Enable walk tracking and wellness insights</li>
            <li>Improve app performance and personalization</li>
            <li>Support community interactions like challenges, comments, and messaging</li>
            <li>Provide customer support and technical updates</li>
          </ul>
          <p className="mt-4">
            We <span className="font-semibold">do not sell or share</span> your personal or pet data with third-party advertisers.
          </p>
        </section>

        {/* 5. Data Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
          <p>
            Your data is stored securely using modern encryption standards. Only you
            control what’s visible publicly (for example, when joining challenges or
            sharing posts).
          </p>
        </section>

        {/* 6. Third-Party Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">6. Third-Party Services</h2>
          <p>
            We may use trusted third-party services such as Firebase, Google Maps, or
            analytics tools to improve app performance and location tracking. These
            providers comply with data protection standards (e.g., GDPR).
          </p>
        </section>

        {/* 7. Data Retention */}
        <section className="mb-8 overflow-hidden">
          <h2 className="text-2xl font-semibold mb-3">7. Data Retention</h2>
          <p className="mb-4">
            We retain personal data only for as long as it is necessary to provide the Runnars service, comply with legal obligations, resolve disputes, and enforce our agreements.
          </p>
          
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200 text-gray-700 font-semibold">
                  <th className="p-3">Data Category</th>
                  <th className="p-3">Retention Period</th>
                  <th className="p-3">Reason</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-600">
                <tr>
                  <td className="p-3 font-medium text-gray-800">Account information</td>
                  <td className="p-3">Duration of account + 30 days after closure</td>
                  <td className="p-3">Required to provide the service</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-3 font-medium text-gray-800">Walk GPS location data</td>
                  <td className="p-3">12 months from the date of each walk</td>
                  <td className="p-3">Reward verification & walk history</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-800">Fitness & motion data</td>
                  <td className="p-3">12 months from the date of each walk</td>
                  <td className="p-3">Reward verification & walk history</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-3 font-medium text-gray-800">Pet profiles</td>
                  <td className="p-3">Duration of account + 30 days after closure</td>
                  <td className="p-3">Required to provide the service</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-800">Reward & transaction records</td>
                  <td className="p-3">7 years from the date of each transaction</td>
                  <td className="p-3">Financial and legal compliance</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-3 font-medium text-gray-800">Community posts & comments</td>
                  <td className="p-3">Duration of account, or until deleted by user</td>
                  <td className="p-3">Community feature functionality</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-800">Customer support communications</td>
                  <td className="p-3">2 years from the date of last contact</td>
                  <td className="p-3">Service quality & dispute resolution</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-3 font-medium text-gray-800">App usage analytics</td>
                  <td className="p-3">90 days, rolling</td>
                  <td className="p-3">Service stability & improvement</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-800">Authentication tokens</td>
                  <td className="p-3">90 days, or until sign-out</td>
                  <td className="p-3">Security & session management</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold mt-4 mb-1">After Retention Periods Expire</h3>
          <p className="mb-3">
            When a retention period ends, data is either permanently deleted from our systems or irreversibly anonymised so that it can no longer be linked to you. Anonymised, aggregated data (for example, total steps walked per city) may be retained indefinitely for service improvement purposes.
          </p>

          <h3 className="text-lg font-semibold mt-3 mb-1">Account Closure</h3>
          <p>
            When you close your Runnars account, the deletion process begins within <span className="font-semibold">7 days</span>. Most personal data is permanently deleted within <span className="font-semibold">30 days</span>. Reward and transaction records subject to legal retention obligations are retained for the periods specified above, after which they are deleted.
          </p>
        </section>

        {/* 8. Your Right to Delete Your Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">8. Your Right to Delete Your Data</h2>
          <p className="mb-4">
            You have the right to request the permanent deletion of your personal data from Runnars systems at any time, regardless of where you live.
          </p>

          <h3 className="text-lg font-semibold mt-3 mb-1">How to Submit a Deletion Request</h3>
          <p className="mb-2"><span className="font-semibold">Option 1 — Delete your account in the app:</span></p>
          <p className="mb-3 pl-4 text-sm text-gray-600">
            Go to <span className="italic font-medium text-gray-800">Profile → Account Settings → Delete Account</span> and confirm. This initiates automatic deletion of your account and associated data.
          </p>
          
          <p className="mb-2"><span className="font-semibold">Option 2 — Submit a written request by email:</span></p>
          <p className="mb-4 pl-4 text-sm text-gray-600">
            Send an email to <a href="mailto:privacy@runnars.com" className="text-blue-600 hover:underline font-medium">privacy@runnars.com</a> with the subject line <span className="italic font-medium text-gray-800">"Data Deletion Request"</span>. Include the email address associated with your Runnars account.
          </p>

          <h3 className="text-lg font-semibold mt-3 mb-1">What Happens Next</h3>
          <ol className="list-decimal pl-6 mb-4 space-y-1">
            <li><span className="font-semibold">Identity verification</span> — We may send a confirmation to the email on file before processing. This takes up to 48 hours.</li>
            <li><span className="font-semibold">Deletion</span> — Once confirmed, deletion is completed within <span className="font-semibold">30 days</span>.</li>
            <li><span className="font-semibold">Confirmation</span> — You will receive an email when the process is complete.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-3 mb-1">What Gets Deleted</h3>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li><span className="font-semibold">Account profile</span> — your name, email address, and profile photo.</li>
            <li><span className="font-semibold">Pet profiles</span> — all pet names, breeds, and photos you have added.</li>
            <li><span className="font-semibold">Walk history</span> — your GPS routes, step data, and walk session records.</li>
            <li><span className="font-semibold">Community content</span> — your posts, comments, and shared walks.</li>
            <li><span className="font-semibold">Reward balance</span> — your accumulated points and redemption history <span className="italic text-xs text-gray-500">(note: unspent rewards are forfeited upon account deletion)</span>.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-3 mb-1">What May Be Retained</h3>
          <p className="mb-2">Certain data may be retained after a deletion request where we have a legal obligation to do so. This is limited to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><span className="font-semibold">Financial and transaction records</span> — retained for up to 7 years to comply with financial regulations. These records are kept in a restricted archive and are not used for any other purpose.</li>
            <li><span className="font-semibold">Fraud prevention records</span> — if an account was suspended for fraudulent activity, a minimal record may be kept to prevent re-registration.</li>
          </ul>
          <p className="mt-3 text-sm">
            We process all deletion requests within <span className="font-semibold">30 days</span> of identity verification. If you do not receive a confirmation within that period, contact us at{" "}
            <a href="mailto:privacy@runnars.com" className="text-blue-600 hover:underline">
              privacy@runnars.com
            </a>.
          </p>
        </section>

        {/* 9. Privacy Contact */}
        <section className="pt-6 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-3">9. Privacy Contact</h2>
          <p className="mb-2">
            For any questions about your data, retention practices, or deletion requests:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg inline-block border border-gray-100 min-w-[280px]">
            <p className="mb-1">
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:privacy@runnars.com" className="text-blue-600 hover:underline">
                privacy@runnars.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Response time:</span> Within 5 business days
            </p>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            For general product support, you can also contact us at{" "}
            <a href="mailto:support@runnarsapp.com" className="text-blue-600 hover:underline">
              support@runnarsapp.com
            </a>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}