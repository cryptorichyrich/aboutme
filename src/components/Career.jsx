import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
  import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
  
  const historyData = [
    {
        company:"Coway",
        startDate: "Oct 2024",
        endDate: "Present",
        position:"Sales, Marketing and Business Developer Specialist",
        description: "Manage and work with team to increase sales for health product sales for home, commercial and industrial sectors using innovative proprietary strategy.",
        icon: "https://media.licdn.com/dms/image/v2/C4E0BAQHyevkvNUG0Xw/company-logo_100_100/company-logo_100_100/0/1656408698920/coway_indonesia_logo?e=1738800000&v=beta&t=K9cCMa0paOitCVjOkl3X3-UgeAy7QWkSJfZ2_66X1Fo"
      },     
    {
        company:"Funded Prop Bx",
        startDate: "Jan2022",
        endDate: "Sep 2024",
        position:"Information Technology Manager",
        description: "I specialized in blending marketing strategy with technical execution, ensuring both the business and its customers succeeded. Partnering with marketing teams, I helped transform ideas into actionable campaigns while developing and optimizing user-friendly, mobile-responsive websites. From building referral systems and FAQ pages to testing and debugging web solutions, I ensured seamless digital experiences.<br><br>Beyond the code, I actively managed customer relationships and marketing activities through Discord, providing hands-on support to traders, resolving issues, and keeping users informed so they could trade confidently. My daily technical market insights on Twitter helped build trust and engagement within the community.<br><br><ul className='list-disc text-white list-inside pl-5'><li>Front end web development</li><li>Affiliate system development</li><li>Coupon based promotion system development</li><li>Backend integration</li><li>Payment system integration</li><li>System deployment with Docker Compose</li><li>CRM system integration</li><li>Chat system integration</li><li>Inbound and outbount marketing</li><li>Implement SEO strategy & audit</li></ul>",
        icon: "https://media.licdn.com/dms/image/v2/C4E0BAQHV4vaWZlHA_g/company-logo_100_100/company-logo_100_100/0/1630631078184/baxiamarkets_logo?e=1738800000&v=beta&t=xCWS5jGrDZnO5eQJ8GRW7ZIKIFaarnhYiV9iQA4rVxM" // Replace with actual path or URL
      },    
    {
      company:"Baxia Markets",
      startDate: "Jan 2020",
      endDate: "Sep 2024",
      position:"Information Technology Manager",
      description: "I specialized in blending marketing strategy with technical execution, ensuring both the business and its customers succeeded. Partnering with marketing teams, I helped transform ideas into actionable campaigns while developing and optimizing user-friendly, mobile-responsive websites. From building referral systems and FAQ pages to testing and debugging web solutions, I ensured seamless digital experiences. <br/><br/>Beyond the code, I actively managed customer relationships and marketing activities through Discord, providing hands-on support to traders, resolving issues, and keeping users informed so they could trade confidently. My daily technical market insights on Twitter helped build trust and engagement within the community.<br><br><ul className='list-disc text-white list-inside pl-5'><li>Front end web development</li><li>Backend integration</li><li>Payment system integration</li><li>CRM system integration</li><li>Chat system integration</li><li>Data synchronization automation accross multiple CRMs</li><li>Inbound and outbount marketing</li><li>Implement SEO strategy & audit</li></ul>",
      icon: "https://media.licdn.com/dms/image/v2/C4E0BAQHV4vaWZlHA_g/company-logo_100_100/company-logo_100_100/0/1630631078184/baxiamarkets_logo?e=1738800000&v=beta&t=xCWS5jGrDZnO5eQJ8GRW7ZIKIFaarnhYiV9iQA4rVxM" // Replace with actual path or URL
    },
    {
    company:"TitanFx",
      startDate: "Jan 2018",
      endDate: "Jul 2022 ",
      position:"Customer Relationship Specialist & Risk Specialist",
      description: "1. Handle inbound customer service inquiries via telephone, chat, and email and resolve 85% of complex customer issues regarding deposits, withdrawals, payments, and trading.<br><br>2. Escalate customer issues to the appropriate department or manager as needed.<br><br>3. Participate in training and development programs to improve customer service skills and knowledge.<br><br>4. Handle trading risk management",
      icon: "https://media.licdn.com/dms/image/v2/D560BAQGJJIcMvm8V1g/company-logo_100_100/company-logo_100_100/0/1721373282893/titan_fx_logo?e=1738800000&v=beta&t=mLgYk2Vm_zlBWkIKLTlCIGbZL98nukIQoIVFnJhVVfU" // Replace with actual path or URL
    },
    {company:"Liquidity Connect LLC",
        startDate: "Jan 2016",
        endDate: "Jul 2019",
        position:"Operations specialist",
        description: "I addressed customer complaints received via email, efficiently escalating them to the appropriate divisions through various communication channels to ensure swift resolutions. I also tackled general issues for our brokerage partners' customers, providing support with tasks such as resetting, recreating, and deleting VPS, thereby enhancing their overall experience and satisfaction.",
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAjVBMVEX////n5uaur69WV1j39va3t7dCREVaW134+PhbXV5PUVLTp5jKfmPSelrmlnj0x7bw6eamPQC3RhDGTxfbUg/jUQDpe0777ec/P0GnQQy1PwDFSQDaTgDlYB325NwzMzXEgWjs1s7yv6zncD341srx8fGAgIHExMRmZmeIiIliYmJqamt2d3fQ0dGXl5jlkvsPAAAAjElEQVR4Ac3QNQKAMAwFUNzd3V16/+PRnaQr/PW1Me7j8AwTRAk1WVE1zDTdwFFSGaiphi6Zlu24GljW8PwgjOIkBTBTvLwoq6hu3ii2itf1zTBOQFmlVSR02qw1cFRYRxANdeawLKIqo7iK27ZqHC+A//fj3K7lPBZIZ6o0h3HDlZdzOwmPLjRzf84DItkJyeJjd4wAAAAASUVORK5CYII="
      },      
    {company:"Traderscolo LLC",
      startDate: "Jan 2014",
      endDate: "Jul 2020",
      position:"Operations specialist",
      description: "Developed, monitor & maintain front-end and back-end websites. Addressed customer complains received by email and chats. Efficintly escalated issues to the appropriate department or manager as needed. Participated in training and development programs to improve customer service skills and knowledge.",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAmVBMVEUAAwQnfLoZc7kZdbtKw/Iac7obdrwzptgicJ4ab7MqiccadLoXtO9eyfQxu/Ffx/Eac7lszfVbyPRky/RSxfIac7lhyPJVxvNbx/JGve1RxfNtzfMadLoPmdo1lsoadLpdyfNSxfJXx/NJw/NrzfRjyvQit/A9v/EbbrAxu/AHr+4Usu9KxfQaZqcdk9A8seUTh8saX544oNQ9PES8AAAAH3RSTlMBF7GWh9tpDwWJKMeHxog2OeerkXpMR+Vd+PFsfLmiFHKEvAAAAPZJREFUKJGt0mlzgjAQBuAQJLFEVA6PsUdsQ7nx6P//cSW7CS2IfvL9wOzmmSzLDIT8zzaMOZnOKkjTNHydIh6nmGB1Y/vwu0/kjCYeB5n9kRN86eyS7hFFujwe9sbmn5CY62JGtjtoE4NKNUqvwZVS3UCeHBooEJvzByyszJn/0/SYn64vgHmew5nTyrPFom17XEJBKWUWiwKxLMvl6Psfo5QSMcuyh7iAhYQQ7C7aE0QKWNc14HqI0lv3yF05wu6yQ6qqWhCGLbMbudi7Hb570g6y8Sny6YLEyCAbvIEThn+Czpsh4d8QMVt6mymCVws2v2fPyy+5XiJCnek+wQAAAABJRU5ErkJggg=="
    },    
    {
      company:"CITT Services",
      startDate: "Jan 2014",
      endDate: "Sep 2024",
      position:"Head of CITT Services Indonesia",
      description: "I took ownership of the entire business lifecycle—from recruiting and training staff to ensuring operational efficiency. My role spans managing staff schedules, assigning responsibilities, and overseeing cash handling, ensuring accurate cash reconciliation with receipts. This hands-on approach to both leadership and logistics allows me to keep operations running smoothly.<br><br>In addition to business operations, I apply my technical expertise to drive web development projects, streamline processes, and enhance digital marketing strategies. I’m skilled in building and managing websites, integrating complex systems, and ensuring seamless user experiences.<br><br><ul><li>Procurement</li><li>Resource management</li><li>Quality assurance</li><li>Web development</li><li>Reporting</li></ul>",
      icon: "https://media.licdn.com/dms/image/v2/C4E0BAQHGS0jrv_GAdA/company-logo_100_100/company-logo_100_100/0/1630600186427/cittservices_logo?e=1738800000&v=beta&t=a-QXGemA78RhP97BuTv4j2ScbmL-8jsPVjF9m3xIAMQ" // Replace with actual path or URL
    },
    {
        company:"Permata Bank",
        startDate: "Dec 2013",
        endDate: "Dec 2013",
        position:"Host Integration Lead & J2EE Developer",
        description: "<ul><li>Wirecard's client</li><li>Assisting and documenting host integration</li></ul>",
        icon: "https://media.licdn.com/dms/image/v2/D560BAQEzb1bacY3ntw/img-crop_100/img-crop_100/0/1727492898381?e=1738800000&v=beta&t=7NZ81s3qKjnD7ANVjTf1S4aaPZ0F0b-pjI_QWUiMbyE" // Replace with actual path or URL
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
        icon: "https://media.licdn.com/dms/image/v2/D560BAQEJZYfQyPK5lg/company-logo_100_100/company-logo_100_100/0/1721381066171?e=1738800000&v=beta&t=q04jIl2n95tMp8nMnXX6Fwjx-zJxvCLzTr-tRD4otk0" // Replace with actual path or URL
    },  
    {
        company:"Bank Mega",
        startDate: "18-8-2022",
        endDate: "15-10-2022",
        position:"Host Integration Lead & J2EE Developer",
        description: "<ul><li>Wirecard's client</li><li>Host integration for corporate and retail banking</li></ul>",
        icon: "https://media.licdn.com/dms/image/v2/C560BAQFgNSzajcqHpg/company-logo_100_100/company-logo_100_100/0/1676280826075/pt_bank_mega_tbk_logo?e=1738800000&v=beta&t=2FazbohKorIGYxMrcYYMe6a4ZwTc0g45P0_FJSMDi7k"
    },     
    {
        company:"ANZ Bank",
        startDate: "18-8-2022",
        endDate: "15-10-2022",
        position:"Host Integration Lead & J2EE Developer",
        description: "<ul><li>Wirecard's client</li><li>Host integration for corporate and retail banking</li></ul>",
        icon: "https://media.licdn.com/dms/image/v2/D560BAQEECWx-aseqAw/company-logo_100_100/company-logo_100_100/0/1713248286913/anz_logo?e=1738800000&v=beta&t=Q8QdsIJP4qcBoejFxjC0JDIgUCl3som9HkO_mbC6rRU"
    },         
    {
        company:"Wirecard",
        startDate: "18-8-2022",
        endDate: "15-10-2022",
        position:"Host Integration Lead & J2EE Developer",
        description: "Visited clients to develop, update and maintain host integrations per project's spec.",
        icon: "https://media.licdn.com/dms/image/v2/C4D0BAQHboKLflfg2Xw/company-logo_100_100/company-logo_100_100/0/1630569158663/wirecard_logo?e=1738800000&v=beta&t=5vucWnN1pMyF-phFvxBSINYxEPM2s1Ue6dXXbuMKkxk"
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
        icon: "https://media.licdn.com/dms/image/v2/C560BAQHXmx-OR4FTjw/company-logo_100_100/company-logo_100_100/0/1630664396654/garuda_indonesia_logo?e=1738800000&v=beta&t=YCz-nw-oFomwustcUqGu_eoQn8xTutcyPwFkhtpib94"
    },    
    {
        company:"SCHOTT",
        startDate: "18-8-2022",
        endDate: "15-10-2022",
        position:"Internship",
        description: "Developed logistic application using VB",
        icon: "https://media.licdn.com/dms/image/v2/C4D0BAQGfVKDSBjn6HA/company-logo_100_100/company-logo_100_100/0/1630546077310/schott_logo?e=1738800000&v=beta&t=SdzjrzGB47-CLaKMtVvmUEkWhERmg36unJ7IX0i3hYY"
    },                         
  ];
  

  export function TimelineWithIcon() {
    return (
      <div className="bg-black py-20 place-items-center">
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
  