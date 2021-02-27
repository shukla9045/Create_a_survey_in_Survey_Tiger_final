// import { Button } from "react-bootstrap";
import "./index.css";
const Publish = ({
  collectSingledata,
  setCollectSingleData,
  collectMultidata,
  setCollectMultiData
}) => {
  // const handleChange = () => {
  //   console.log(collectMultidata);
  //   console.log(collectSingledata);
  // };
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  return (
    <>
      <div>
        <h4 style={mystyle}>Multi-Select Information</h4>
        <ol>
          {collectMultidata.map((item, key) => (
            <div>
              {key % 2 === 0 ? (
                <li>
                  <h4>{item.quest}</h4>
                </li>
              ) : (
                item.map((it) => (
                  <div>
                    <ul>
                      <h6>{it.options}</h6>
                    </ul>
                  </div>
                ))
              )}
            </div>
          ))}
        </ol>
      </div>
      <div>
        <h4 style={mystyle}>Single-Select Information</h4>
        <ol>
          {collectSingledata.map((item, key) => (
            <div>
              {key % 2 === 0 ? (
                <li>
                  <h4>{item.quest}</h4>
                </li>
              ) : (
                item.map((it) => (
                  <div>
                    <ul>
                      <h6>{it.options}</h6>
                    </ul>
                  </div>
                ))
              )}
            </div>
          ))}
        </ol>
      </div>
    </>
  );
};
export default Publish;
