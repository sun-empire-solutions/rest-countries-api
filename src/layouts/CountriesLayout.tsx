const CountriesLayout = ({ children }: IProps) => (
  <div className="layout">
    <div className="layout_header">{children[0]}</div>
    <div className="layout_main-content">{children[1]}</div>
  </div>
);

type IProps = {
  children: JSX.Element[];
};

export { CountriesLayout };
