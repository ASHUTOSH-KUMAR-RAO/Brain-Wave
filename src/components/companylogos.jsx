import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h5 className="mb-6 text-center text-n-1/50 tagline">
        Helping People create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((company) => (
          <li
            className="flex flex-col items-center justify-center flex-1 h-[8.5rem] gap-2"
            key={company.id}
          >
            <img
              src={company.logo}
              className="max-w-[100px] max-h-[40px] object-contain"
              alt={company.name}
            />
            <p className="text-sm text-n-1/70">{company.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
