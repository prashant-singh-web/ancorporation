import React from "react";

function Company_states() {
  const stats: any[] = [
    {
      id: 1,
      name: "YEAR OF ESTABLISHMENT",
      value: 2019,
    },
    {
      id: 2,
      name: "NO OF EMPLOYEE",
      value: "75+",
    },
    {
      id: 3,
      name: "ANNUAL GROUP TURNOVER",
      value: "2.35 cr",
    },
    {
      id: 4,
      name: "EXPERIENCE",
      value: "15 years",
    },
  ];
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat: any) => (
            <div
            data-aos="zoom-in-up"
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
              // data-aos="fade-up"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Company_states;
