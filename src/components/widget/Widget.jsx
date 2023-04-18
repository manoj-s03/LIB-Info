import "./widget.scss";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Widget = ({ type }) => {
  let data;

  const count = 14;

  switch (type) {
    case "user":
      data = {
        title: "Books",
        isMoney: false,
        link: "See all books",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{count}</span>
        <span className="link">{data.link}</span>
      </div>
    </div>
  );
};

export default Widget;
