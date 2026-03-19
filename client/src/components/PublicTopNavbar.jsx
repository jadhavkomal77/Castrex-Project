
import { useGetPublicTopNavbarQuery } from "../redux/apis/topNavbarApi";

export default function PublicTopNavbar() {
  const { data, isLoading } = useGetPublicTopNavbarQuery();

  if (isLoading) return null;

  return (
    <div className="w-full bg-gray-100 text-xs md:text-sm">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex flex-wrap justify-between md:justify-end items-center gap-2 md:gap-6">

        {data?.links?.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="hover:text-[#9E1C1F] transition whitespace-nowrap"
          >
            {item.label}
          </a>
        ))}

      </div>

    </div>
  );
}