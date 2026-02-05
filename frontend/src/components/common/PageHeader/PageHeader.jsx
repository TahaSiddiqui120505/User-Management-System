import "./PageHeader.css";

const PageHeader = ({ title, right }) => {
  return (
    <div className="page-header">
      <h2>{title}</h2>
      <div>{right}</div>
    </div>
  );
};

export default PageHeader;
