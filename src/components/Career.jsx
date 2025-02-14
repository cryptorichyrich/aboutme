// import {
//     Timeline,
//     TimelineItem,
//     TimelineConnector,
//     TimelineHeader,
//     TimelineIcon,
//     TimelineBody,
//     Typography,
//   } from "@material-tailwind/react";
//   import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
  
  const historyData = [
    {
      company:"Damai Kasih Channel",
      startDate: "Jan 2025",
      endDate: "Present",
      position:"Web Developer, Head of IT",
      description: "Developed Bible App, Church Documents app and catholic apologetic articles",
      icon: "/public/channels4_profile.jpg"
    },      
    {
        company:"Coway",
        startDate: "Oct 2024",
        endDate: "Present",
        position:"Sales, Marketing and Business Developer Specialist",
        description: "Manage and work with team to increase sales for health product sales for home, commercial and industrial sectors using innovative proprietary strategy.",
        icon: "/public/coway_indonesia_logo.jpg"
      },     
    {
        company:"Funded Prop Bx",
        startDate: "Jan2022",
        endDate: "Sep 2024",
        position:"Information Technology Manager",
        description: "I specialized in blending marketing strategy with technical execution, ensuring both the business and its customers succeeded. Partnering with marketing teams, I helped transform ideas into actionable campaigns while developing and optimizing user-friendly, mobile-responsive websites. From building referral systems and FAQ pages to testing and debugging web solutions, I ensured seamless digital experiences.<br><br>Beyond the code, I actively managed customer relationships and marketing activities through Discord, providing hands-on support to traders, resolving issues, and keeping users informed so they could trade confidently. My daily technical market insights on Twitter helped build trust and engagement within the community.<br><br><ul className='list-disc text-white list-inside pl-5'><li>Front end web development</li><li>Affiliate system development</li><li>Coupon based promotion system development</li><li>Backend integration</li><li>Payment system integration</li><li>System deployment with Docker Compose</li><li>CRM system integration</li><li>Chat system integration</li><li>Inbound and outbount marketing</li><li>Implement SEO strategy & audit</li></ul>",
        icon: "/public/baxiamarkets_logo.jpg" // Replace with actual path or URL
      },    
    {
      company:"Baxia Markets",
      startDate: "Jan 2020",
      endDate: "Sep 2024",
      position:"Information Technology Manager",
      description: "I specialized in blending marketing strategy with technical execution, ensuring both the business and its customers succeeded. Partnering with marketing teams, I helped transform ideas into actionable campaigns while developing and optimizing user-friendly, mobile-responsive websites. From building referral systems and FAQ pages to testing and debugging web solutions, I ensured seamless digital experiences. <br/><br/>Beyond the code, I actively managed customer relationships and marketing activities through Discord, providing hands-on support to traders, resolving issues, and keeping users informed so they could trade confidently. My daily technical market insights on Twitter helped build trust and engagement within the community.<br><br><ul className='list-disc text-white list-inside pl-5'><li>Front end web development</li><li>Backend integration</li><li>Payment system integration</li><li>CRM system integration</li><li>Chat system integration</li><li>Data synchronization automation accross multiple CRMs</li><li>Inbound and outbount marketing</li><li>Implement SEO strategy & audit</li></ul>",
      icon: "/public/baxiamarkets_logo.jpg" // Replace with actual path or URL
    },
    {
    company:"TitanFx",
      startDate: "Jan 2018",
      endDate: "Jul 2022 ",
      position:"Customer Relationship Specialist & Risk Specialist",
      description: "1. Handle inbound customer service inquiries via telephone, chat, and email and resolve 85% of complex customer issues regarding deposits, withdrawals, payments, and trading.<br><br>2. Escalate customer issues to the appropriate department or manager as needed.<br><br>3. Participate in training and development programs to improve customer service skills and knowledge.<br><br>4. Handle trading risk management",
      icon: "/public/titan_fx_logo.jpg" // Replace with actual path or URL
    },
    {company:"Liquidity Connect LLC",
        startDate: "Jan 2016",
        endDate: "Jul 2019",
        position:"Operations specialist",
        description: "I addressed customer complaints received via email, efficiently escalating them to the appropriate divisions through various communication channels to ensure swift resolutions. I also tackled general issues for our brokerage partners' customers, providing support with tasks such as resetting, recreating, and deleting VPS, thereby enhancing their overall experience and satisfaction.",
        icon: "/public/liquidityconnect-logo.jpg"
      },      
    {company:"Traderscolo LLC",
      startDate: "Jan 2014",
      endDate: "Jul 2020",
      position:"Operations specialist",
      description: "Developed, monitor & maintain front-end and back-end websites. Addressed customer complains received by email and chats. Efficintly escalated issues to the appropriate department or manager as needed. Participated in training and development programs to improve customer service skills and knowledge.",
      icon: "/public/traderscolo-logo.jpg"
    },    
    {
      company:"CITT Services",
      startDate: "Jan 2014",
      endDate: "Sep 2024",
      position:"Head of CITT Services Indonesia",
      description: "I took ownership of the entire business lifecycle—from recruiting and training staff to ensuring operational efficiency. My role spans managing staff schedules, assigning responsibilities, and overseeing cash handling, ensuring accurate cash reconciliation with receipts. This hands-on approach to both leadership and logistics allows me to keep operations running smoothly.<br><br>In addition to business operations, I apply my technical expertise to drive web development projects, streamline processes, and enhance digital marketing strategies. I’m skilled in building and managing websites, integrating complex systems, and ensuring seamless user experiences.<br><br><ul><li>Procurement</li><li>Resource management</li><li>Quality assurance</li><li>Web development</li><li>Reporting</li></ul>",
      icon: "/public/cittservices_logo.jpg" // Replace with actual path or URL
    },
    {
        company:"Permata Bank",
        startDate: "Dec 2013",
        endDate: "Dec 2013",
        position:"Host Integration Lead & J2EE Developer",
        description: "<ul><li>Wirecard's client</li><li>Assisting and documenting host integration</li></ul>",
        icon: "/public/permata.png" // Replace with actual path or URL
    },  
    {
        company:"Bank Mestika",
        startDate: "Oct 2013",
        endDate: "Dec 2013",
        position:"Host Integration Lead & J2EE Developer",
        description: "<ul><li>Wirecard's client</li><li>Host integration for corporate and retail banking</li></ul>",
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADKElEQVR4AWRTA3AYMBTN3Y6z7a3ubNu2jdq2datt27Zt4zzbq/mWpHdlnPz8903ERbSJiKAmOXrQnDx/5EVsrFLW+PsUaPr7FRa5u+U0eHnmNQb4FeS5uWQra6iGrXh4x51cOW9LBNdrkHVr1AkHEFynTo4ftiR+PvlaerrR7bt3mmD1SlUsWaTI5+pVati/1wzGhnG/3VyyFK5esCPr16oPA4gJa5EtG/WIo326y43rzlgwTx6rVqiCEsfNlctVsHC+PB7c84C7a5alAAVYs0qNkB2b9Ym5Sbzi3dtumDtbFosXKGDFMmVQCeMAli9VxiJKmzdHDo8feUFbM+KJmJAWIc8fe803M0n4y5gPHbBAaEgpLp63Z59HmNn59k1XhASXgJnHNLE0T/p46aztNGJsGCt57IgV5sySga1NGlj7+PE7zp624Yzs8/VrTvjx4zcjUclRmD1TBpcuOsBAN/oeCQ4oShIS0GS2U4BUDA31obe3G58+fceZUza4etmRM/f0dGFwsBdaGpEcVFREB7HRFW4kMKCojtnMHm2shwHa29v5/ubNF3z48I0z/vvXPgLANFtGfZKeWh9NAQqrqYdHAIAhZGc2oiC/BcAAnYPISK9HXm4TO48AMKGpKXURxN+3IExUWIeaIAc7u3SwFhFeBhEhbZQUtyGXMgqs00BiYjWn6WhF8b9bNukjPLTUjmhrRFy7dMGeO8bIMJZ/CvAvxLzZcjwCa1erYf5cOURFlnOaglwwZs+QBgu7skLwaXL/tss0O9u0N4sXKkKMOkZWOhDbtxrSTFQDTRQGwLNy725TThMW0KLqq8DBLr3p9DGrKWSjqDZRVQ65qKIcigVUErWPMkzORJqdI2HV0owcevHU57DAWjWWytpEiBaGiWGslIpSKM+4pYuVGAiVzk1gZ/qmSEFUmBMHX1km3adnQmnDxSQsoEEO7jUljnZpZ12cMutu3XDF1s0GzAQ+mUl377jBxSmr0tIs8fCF09a0AEeqcbicjx2yIM9oORvoxEyxt0k7k5hQbZkYX+1Pve9PdzMH2/T/c05LnMsYHz2DIch3Ajw7AwDLaxT77Zwh/AAAAABJRU5ErkJggg==" // Replace with actual path or URL
    },
    {
        company:"CIMB Bank",
        startDate: "18-8-2022",
        endDate: "15-10-2022",
        position:"Host Integration Lead & J2EE Developer",
        description: "<ul><li>Wirecard's client</li><li>Host integration for corporate and retail banking</li></ul>",
        icon: "/public/cimb.jpg" // Replace with actual path or URL
    },  
    {
        company:"Bank Mega",
        startDate: "18-8-2022",
        endDate: "15-10-2022",
        position:"Host Integration Lead & J2EE Developer",
        description: "<ul><li>Wirecard's client</li><li>Host integration for corporate and retail banking</li></ul>",
        icon: "/public/bank-mega.jpg"
    },     
    {
        company:"ANZ Bank",
        startDate: "18-8-2022",
        endDate: "15-10-2022",
        position:"Host Integration Lead & J2EE Developer",
        description: "<ul><li>Wirecard's client</li><li>Host integration for corporate and retail banking</li></ul>",
        icon: "/public/anz.jpg"
    },         
    {
        company:"Wirecard",
        startDate: "18-8-2022",
        endDate: "15-10-2022",
        position:"Host Integration Lead & J2EE Developer",
        description: "Visited clients to develop, update and maintain host integrations per project's spec.",
        icon: "/public/wirecard.jpg"
    },
    {
        company:"Zoomatra",
        startDate: "18-8-2022",
        endDate: "15-10-2022",
        position:"Internship",
        description: "<ul><li>Unity 3D programming in Javascript & C#</li><li>Developed a customization page for drinking bottles</li><li>Cinema 4D modeler</li></ul>",
        icon: "https://media.visable.com/https://wlw-1-company-facts-media20191122174836234900000006.s3.eu-central-1.amazonaws.com/c031ca8d-ffaa-4d96-8377-06c4ffcddc80.jpeg?w=89&h=89&auto=format,compress&fit=fillmax&transparency=grid&grid-colors=ffffff,ffffff"
    },    
    {
        company:"Garuda Indonesia",
        startDate: "18-8-2022",
        endDate: "15-10-2022",
        position:"Internship",
        description: "Network administration, documenting network topology",
        icon: "/public/garuda_indonesia_logo.jpg"
    },    
    {
        company:"SCHOTT",
        startDate: "18-8-2022",
        endDate: "15-10-2022",
        position:"Internship",
        description: "Developed logistic application using VB",
        icon: "/public/schott.jpg"
    },                         
  ];
  

  export function TimelineWithIcon() {
    return (
      <div className="bg-black py-20 place-items-center" id="career">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Career</h2>
          <section className="flex min-h-screen justify-center bg-black pt-20">
            <div>
              <h2 className="text-xl text-white mb-7 text-center">History</h2>
              <ul>
                {historyData.map((item, index) => (
                  <li key={index} className="relative flex items-baseline gap-6 pb-5">
                    <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        className="bi bi-circle-fill fill-gray-400"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                    </div>
                    <div>
                    <p className="text-white">{item.startDate} - {item.endDate}</p>
                        <div className="flex items-center gap-2">
                        <img src={item.icon} alt={`${item.company} icon`} width="24" height="24" className="rounded-full" />
                        <h2 className="text-white"><strong>{item.company}</strong></h2>
                        </div>
                        <h3 className="text-white ml-8"><strong>{item.position}</strong></h3>
                        <p className="mt-2 text-white ml-8" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
  
  export default TimelineWithIcon;
  