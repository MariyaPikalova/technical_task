export const Images = props => (
  <span className="">
    <ul className="">
      {props.list.map((item, i) =>
        <li
          className=""
          key={i}>
          <a
            className=""
            href={item}>{item}
          </a>
        </li>)
      }
    </ul>
  </span>
);