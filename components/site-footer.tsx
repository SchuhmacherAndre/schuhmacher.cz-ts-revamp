"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

if (!process.env.NEXT_PUBLIC_MAP_BOX) {
   throw new Error('NEXT_PUBLIC_MAP_BOX environment variable is not defined');
 }
 
 // Now TypeScript knows that MAP_BOX is defined
 mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_BOX;
 
// Define types for footer navigation items
interface FooterNavItem {
   href: string;
   name: string;
   isEmail?: boolean; // Optional property
}

interface FooterNav {
   label: string;
   items: FooterNavItem[];
}

const footerNavs: FooterNav[] = [
   {
      label: 'Contact',
      items: [
         {
            href: 'mailto:info@schuhmacher.cz',
            name: 'info@schuhmacher.cz',
            isEmail: true,
         },
         {
            href: '#',
            name: '+420 - 326 - 716 900',
            isEmail: false,
         },
      ],
   },
   {
      label: 'Legal',
      items: [
         {
            href: '#', // This will trigger the modal
            name: 'Privacy',
            isEmail: false,
         },
      ],
   },
];

export function SiteFooter() {
   const mapContainer = useRef<HTMLDivElement>(null);
   const map = useRef<mapboxgl.Map | null>(null);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

   useEffect(() => {
      if (map.current) return; // Initialize map only once
      if (mapContainer.current) {
         const coordinates: [number, number] = [14.9067868, 50.4142567]; // [longitude, latitude]

         map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v11',
            center: coordinates, // Set center to Mladá Boleslav
            zoom: 16,
         });

         new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map.current);
      }
   }, []);

   const handleModalOpen = (content: JSX.Element) => {
      setModalContent(content);
      setIsModalOpen(true);
   };

   const handleModalClose = () => {
      setIsModalOpen(false);
      setModalContent(null);
   };

   const privacyContent = (
      <div className="p-4 text-black">
         <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
         <p className="text-sm text-gray-600 mb-2">Last updated: October 18, 2024</p>
         <p className="mb-4">
         This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
         </p>
         <p className="mb-4">
         We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy
         </p>
         <h2 className="text-2xl font-semibold mt-6 mb-3">Interpretation and Definitions</h2>
         <h3 className="text-xl font-medium mt-4 mb-2">Interpretation</h3>
         <p className="mb-4">
         The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
         </p>
         <h3 className="text-xl font-medium mt-4 mb-2">Definitions</h3>
         <p className="mb-4">For the purposes of this Privacy Policy:</p>
         <ul className="list-disc list-inside space-y-4">
  <li>
    <strong className="font-semibold">Account</strong>: means a unique account created for You to access our Service or parts of our Service.
  </li>
  <li>
    <strong className="font-semibold">Affiliate</strong>: means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
  </li>
  <li>
    <strong className="font-semibold">Company</strong>: (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Schuhmacher Projektservice s.r.o., Jaselská 134/18, 29301 Mladá Boleslav.
  </li>
  <li>
    <strong className="font-semibold">Cookies</strong>: are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
  </li>
  <li>
    <strong className="font-semibold">Country</strong>: refers to Czechia.
  </li>
  <li>
    <strong className="font-semibold">Device</strong>: means any device that can access the Service such as a computer, a cellphone or a digital tablet.
  </li>
  <li>
    <strong className="font-semibold">Personal Data</strong>: is any information that relates to an identified or identifiable individual.
  </li>
  <li>
    <strong className="font-semibold">Service</strong>: refers to the Website.
  </li>
  <li>
    <strong className="font-semibold">Service Provider</strong>: means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
  </li>
  <li>
    <strong className="font-semibold">Usage Data</strong>: refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
  </li>
  <li>
    <strong className="font-semibold">Website</strong>: refers to Schuhmacher Projektservice, accessible from <a href="https://schuhmacher.cz" rel="external nofollow noopener" target="_blank" className="text-blue-500 hover:underline">https://schuhmacher.cz</a>.
  </li>
  <li>
    <strong className="font-semibold">You</strong>: means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
  </li>
</ul>
<h2 className="text-2xl font-bold mt-6">Collecting and Using Your Personal Data</h2>
<h3 className="text-xl font-semibold mt-4">Types of Data Collected</h3>
<h4 className="text-lg font-semibold mt-3">Personal Data</h4>
<p className="mt-2">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
<ul className="list-disc list-inside mt-2 space-y-2">
  <li>
    Email address
  </li>
  <li>
    First name and last name
  </li>
  <li>
    Usage Data
  </li>
</ul>
<h4 className="text-lg font-semibold mt-3">Usage Data</h4>
<p className="mt-2">Usage Data is collected automatically when using the Service.</p>
<p className="mt-2">Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
<p className="mt-2">When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
<p className="mt-2">We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
<h4 className="text-lg font-semibold mt-3">Tracking Technologies and Cookies</h4>
<p className="mt-2">We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
<ul className="list-disc list-inside mt-2 space-y-2">
  <li>
    <strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
  </li>
  <li>
    <strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
  </li>
</ul>
<p className="mt-2">Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. You can learn more about cookies on <a href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies" target="_blank" className="text-blue-500 underline">TermsFeed website</a> article.</p>
<p className="mt-2">We use both Session and Persistent Cookies for the purposes set out below:</p>
<ul className="list-disc list-inside mt-2 space-y-4">
  <li>
    <strong>Necessary / Essential Cookies</strong>
    <p>Type: Session Cookies</p>
    <p>Administered by: Us</p>
    <p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
  </li>
  <li>
   <strong>Cookies Policy / Notice Acceptance Cookies</strong>
    <p>Type: Persistent Cookies</p>
    <p>Administered by: Us</p>
    <p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
  </li>
  <li>
    <strong>Functionality Cookies</strong>
    <p>Type: Persistent Cookies</p>
    <p>Administered by: Us</p>
    <p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
  </li>
</ul>
<p className="mt-4">
  For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.
</p>
<h3 className="mt-6 text-lg font-semibold">Use of Your Personal Data</h3>
<p className="mt-2">The Company may use Personal Data for the following purposes:</p>
<ul className="list-disc list-inside mt-2 space-y-2">
  <li>
    <strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.
  </li>
  <li>
    <strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
  </li>
  <li>
    <strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
  </li>
  <li>
    <strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
  </li>
  <li>
    <strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
  </li>
  <li>
    <strong>To manage Your requests:</strong> To attend and manage Your requests to Us.
  </li>
  <li>
    <strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
  </li>
  <li>
    <strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
  </li>
</ul>
<p className="mt-4">We may share Your personal information in the following situations: </p>
<ul className="list-disc list-inside mt-2 space-y-2">
  <li>
    <strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
  </li>
  <li>
    <strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
  </li>
  <li>
    <strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
  </li>
  <li>
    <strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.
  </li>
  <li>
    <strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.
  </li>
  <li>
    <strong>With Your consent:</strong> We may disclose Your personal information for any other purpose with Your consent.
  </li>
</ul>
<h3 className="mt-6 text-lg font-semibold">Retention of Your Personal Data</h3>
<p className="mt-2">
  The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
</p>
<p className="mt-2">
  The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
</p>

<h3 className="mt-6 text-lg font-semibold">Transfer of Your Personal Data</h3>
<p className="mt-2">
  Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
</p>
<p className="mt-2">
  Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
</p>
<p className="mt-2">
  The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
</p>

<h3 className="mt-6 text-lg font-semibold">Delete Your Personal Data</h3>
<p className="mt-2">
  You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
</p>
<p className="mt-2">
  Our Service may give You the ability to delete certain information about You from within the Service.
</p>
<p className="mt-2">
  You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.
</p>
<p className="mt-2">
  Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
</p>

<h3 className="mt-6 text-lg font-semibold">Disclosure of Your Personal Data</h3>

<h4 className="mt-4 text-md font-semibold">Business Transactions</h4>
<p className="mt-2">
  If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
</p>

<h4 className="mt-4 text-md font-semibold">Law enforcement</h4>
<p className="mt-2">
  Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
</p>

<h4 className="mt-4 text-md font-semibold">Other legal requirements</h4>
<p className="mt-2">
  The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
</p>
<ul className="list-disc list-inside mt-2 space-y-1">
  <li>Comply with a legal obligation</li>
  <li>Protect and defend the rights or property of the Company</li>
  <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
  <li>Protect the personal safety of Users of the Service or the public</li>
  <li>Protect against legal liability</li>
</ul>
<h3 className="mt-6 text-lg font-semibold">Security of Your Personal Data</h3>
<p className="mt-2">
  The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
</p>

<h2 className="mt-6 text-xl font-bold">Children's Privacy</h2>
<p className="mt-2">
  Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
</p>
<p className="mt-2">
  If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
</p>

<h2 className="mt-6 text-xl font-bold">Links to Other Websites</h2>
<p className="mt-2">
  Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
</p>
<p className="mt-2">
  We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
</p>

<h2 className="mt-6 text-xl font-bold">Changes to this Privacy Policy</h2>
<p className="mt-2">
  We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
</p>
<p className="mt-2">
  We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
</p>
<p className="mt-2">
  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
</p>

<h2 className="mt-6 text-xl font-bold">Contact Us</h2>
<p className="mt-2">
  If you have any questions about this Privacy Policy, You can contact us:
</p>
<ul className="list-disc list-inside mt-2 space-y-1">
  <li>By email: <a href="mailto:info@schuhmacher.cz" className="text-blue-600 underline">info@schuhmacher.cz</a></li>
</ul>


      </div>
   );

   return (
      <footer>
         <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
            <div className="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
               {/* Map on the left */}
               <div className="md:w-1/2 mb-12">
                  <div ref={mapContainer} className="w-full h-48 rounded-md" />
               </div>

               {/* Address next to the map */}
               <div className="md:w-1/3 mb-12">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">You can find us here</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                     Jaselská 134/18<br />
                     293 01 Mladá Boleslav<br />
                     Czech Republic
                  </p>
               </div>

               <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
                  {footerNavs.map(nav => (
                     <div key={nav.label}>
                        <h2 className="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white">
                           {nav.label}
                        </h2>
                        <ul className="grid gap-2 pr-8">
                           {nav.items.map(item => (
                              <li key={item.name}>
                                 {item.isEmail ? (
                                    <Link
                                       href={item.href}
                                       className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                                    >
                                       {item.name}
                                    </Link>
                                 ) : (
                                    <span
                                       onClick={() => handleModalOpen(privacyContent)}
                                       className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                                    >
                                       {item.name}
                                    </span>
                                 )}
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </div>

            <div className="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
               <div className="flex space-x-5 sm:mt-0 sm:justify-center">
                  {/* Add any additional links or icons here if needed */}
               </div>
               <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  Copyright ©
                  {' '}
                  {new Date().getFullYear()}
                  {' '}
                  <Link href="/" className="cursor-pointer">
                     André Schuhmacher
                  </Link>
                  . All Rights Reserved.
               </span>
            </div>
         </div>

         {/* Modal for displaying the privacy policy */}
         {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
               <div className="bg-white rounded-lg p-8 w-11/12 max-w-2xl max-h-[80vh] overflow-y-auto">
                  <button onClick={handleModalClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                     &times;
                  </button>
                  {modalContent}
               </div>
            </div>
         )}
      </footer>
   );
}
