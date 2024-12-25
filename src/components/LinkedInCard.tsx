import AvatarCircles from "./AvatarCircles";
interface LinkedInCardProps {
  bannerImage?: string;
  profileImage?: string;
  linkedInProfileURL?: string;
  name: string;
  headerDescription: string;
  address: string;
  connections?: string;
  mutualsConnectionsNames: string;
  remainingMutualsNumber: number;
  aboutDescription?: string;
  avators?: [{ imageUrl: string; profileUrl: string }];
  institutions?: [
    {
      institutionName: string;
      institutionImage: string;
      institutionURL?: string;
    }
  ];
}
export default function LinkedInCard({
  bannerImage = "https://media.licdn.com/dms/image/v2/D5616AQFB-ClbOnz8QQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1734755901862?e=1740614400&v=beta&t=o0lLCnyh821aOEMdeHTWwm9O8bDKijYM6nsK8YGimUE",
  profileImage = "https://media.licdn.com/dms/image/v2/D5603AQFA6NcP5-3bLw/profile-displayphoto-shrink_400_400/B56ZPKyCSeHoAg-/0/1734273935514?e=1740614400&v=beta&t=hxgEHReIpfLQJzMb2YVdFfAJpSsjc_QRzK9A-NtZlGE",
  linkedInProfileURL,
  avators,
  name,
  headerDescription,
  address,
  connections,
  mutualsConnectionsNames,
  aboutDescription,
  remainingMutualsNumber,
  institutions,
}: LinkedInCardProps) {
  const avatars = avators || [
    {
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4E03AQE6PLCTtdOeBw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1694834108800?e=2147483647&v=beta&t=g4FnHxAc_BsKsATvNfe94dDAZyFvU5gX5UGs3j9rozw",
      profileUrl: "https://www.linkedin.com/in/madivada-prithvi-501005270/",
    },
    {
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D5635AQFdoGCeZHDEgw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1726476792483?e=1735498800&v=beta&t=EgERRRGIm9dm2OMQCFxpPyFODaflD3_81NJyHKqWl6A",
      profileUrl: "https://www.linkedin.com/in/chakri-kottana-57a57725a/",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/106103625",
      profileUrl: "https://github.com/BankkRoll",
    },
  ];

  return (
    <div className="p-2  bg-[#F4F2EE] max-w-[44rem]">
      <div className=" bg-white mb-2 rounded-sm">
        <div className="w-full">
          <img
            alt="Banner"
            className="rounded-t-sm w-full"
            src={bannerImage || ""}></img>
        </div>

        <div className="relative bottom-11 left-5 size-1/5 js:bottom-16 sm:bottom-20 md:bottom-20 ">
          <div className="p-1 bg-white w-full h-full rounded-full 2xl:w-fit 2xl:h-fit">
            <img
              alt="profile"
              src={profileImage || ""}
              className="rounded-full"></img>
          </div>
        </div>
        <div className="-mb-14 md:-mb-28 relative bottom-11 js:bottom-16 sm:bottom-20 px-4 ">
          <div className="flex justify-between">
            <div className="flex flex-col w-[75%] pr-2 ">
              <h2 className=" tracking-tight text-xs  js:text-lg sm:text-xl  font-semibold">
                {name}
              </h2>
              <p className="leading-3 text-[0.55rem] js:text-[0.7rem] js:leading-4 sm:text-[0.9rem] sm:leading-5  ">
                {headerDescription}
              </p>
              <p className="text-slate-500  my-1 leading-3 text-[0.50rem] js:text-[0.6rem] js:leading-3 sm:text-[0.7rem] sm:leading-4 ">
                {address}
                <span>
                  <a
                    className="text-[#2D64BC] hover:underline decoration-1  font-semibold"
                    href={linkedInProfileURL}>
                    Contact Info
                  </a>
                </span>
              </p>
              {connections ? (
                <p className="text-[#2D64BC] font-semibold leading-3 text-[0.50rem] js:text-[0.6rem] js:leading-3 sm:text-[0.7rem] sm:leading-4 ">
                  <a
                    className="hover:text-[#2D64BC] hover:underline decoration-1  font-semibold "
                    href="https://www.linkedin.com/mynetwork/invite-connect/connections/">
                    {connections} connections
                  </a>
                </p>
              ) : (
                <></>
              )}

              <div className="my-1 flex items-center">
                <AvatarCircles
                  className="min-w-fit"
                  numPeople={99}
                  avatarUrls={avatars}
                />
                <div className="px-1 leading-[0.4rem]">
                  <a
                    href="https://www.linkedin.com/mynetwork/invite-connect/connections/"
                    className="hover:text-[#2D64BC] hover:underline decoration-1 text-slate-500 leading-3 text-[0.50rem] js:text-[0.6rem] js:leading-3 sm:text-[0.7rem] sm:leading-4 ">
                    <span className="hover:text-[#2D64BC] text-slate-600 font-medium  ">
                      {mutualsConnectionsNames}
                    </span>{" "}
                    and {remainingMutualsNumber} other mutual connections
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[25%]">
              <div className="flex flex-col items-center justify-center">
                {institutions?.map((institution) => (
                  <div className="flex h-fit">
                    <div className="w-8 h-4 lg:w-8  lg:h-8  rounded-full">
                      <img
                        src={institution.institutionImage}
                        alt="CollegeImage "
                        className=""
                      />
                    </div>

                    <p className="leading-[0.4rem] text-[0.30rem] js:text-[0.6rem] js:leading-3 sm:text-[0.7rem] sm:leading-4 max-h-fit ">
                      <a
                        className="hover:text-[#2D64BC] hover:underline decoration-1  font-semibold w-full"
                        href={institution.institutionURL}>
                        {institution.institutionName}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white p-3 rounded-sm">
        <div>
          <h2 className=" tracking-tight font-medium  my-2 text-[0.55rem] js:text-[0.7rem] js:leading-4 sm:text-[0.9rem] sm:leading-5 ">
            About
          </h2>
          <p className="leading-3 text-[0.50rem] js:text-[0.6rem] js:leading-3 sm:text-[0.7rem] sm:leading-4 ">
            {aboutDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
