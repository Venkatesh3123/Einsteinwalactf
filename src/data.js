import "../src/data.css";
import { useState } from "react";
import "../src/navrbar.css";
export default function Data() {
  const [percentage, setPercentage] = useState(0);
  const [flag11, setFlag1] = useState("");
  const [flag12, setFlag12] = useState("");
  const [flag13, setFlag13] = useState("");
  const [flag14, setFlag14] = useState("");
  const [hint1, setHint1] = useState(false);
  const [hint11, setHint11] = useState(false);
  const [hint2, setHint2] = useState(false);
  const [hint22, setHint22] = useState(false);
  const [hint3, setHint3] = useState(false);
  const [hint33, setHint33] = useState(false);
  const [hint4, setHint4] = useState(false);
  const [hint44, setHint44] = useState(false);
  const [form, setForm] = useState(true);
  const [form2, setForm2] = useState(true);
  const [form3, setForm3] = useState(true);
  const [form4, setForm4] = useState(true);
  const per = percentage.toString();
  const res = per.slice(0, 3);
  const flag1 = (e) => {
    setFlag1(e.target.value);
  };
  const flag1Submit = (e) => {
    if (flag11 === "root1") {
      if (percentage < 100) {
        setPercentage(percentage + 25);
        setHint1(false);
        setForm(false);
        setHint11(true);
      }
    } else {
      setHint1(true);
      setForm(false);
      setTimeout(() => {
        setHint1(false);
        setForm(true);
      }, 400);
    }
  };
  const flag2 = (e) => {
    setFlag12(e.target.value);
  };
  const flag2Submit = (e) => {
    if (flag12 === "root2") {
      if (percentage < 100) {
        setPercentage(percentage + 25);
        setHint2(false);
        setForm2(false);
        setHint22(true);
      }
    } else {
      setHint2(true);
      setForm2(false);
      setTimeout(() => {
        setHint2(false);
        setForm2(true);
      }, 400);
    }
  };
  const flag3 = (e) => {
    setFlag13(e.target.value);
  };
  const flag3Submit = (e) => {
    if (flag13 === "root3") {
      if (percentage < 100) {
        setPercentage(percentage + 25);
        setHint3(false);
        setForm3(false);
        setHint33(true);
      }
    } else {
      setHint3(true);
      setForm3(false);
      setTimeout(() => {
        setHint3(false);
        setForm3(true);
      }, 400);
    }
  };
  const flag4 = (e) => {
    setFlag14(e.target.value);
  };
  const flag4Submit = (e) => {
    if (flag14 === "root4") {
      if (percentage < 100) {
        setPercentage(percentage + 25);
        setHint4(false);
        setForm4(false);
        setHint44(true);
      }
    } else {
      setHint4(true);
      setForm4(false);
      setTimeout(() => {
        setHint4(false);
        setForm4(true);
      }, 400);
    }
  };
  const progressBarStyle = {
    background: `conic-gradient(
    #90EE90 ${percentage}%,
      #ecf0f1 ${percentage}%
    )`,
  };
  //   const cardClick = () => {
  //     if (hint1) {
  //       setForm(true);

  //       setHint1(false);
  //       setHint11(false);
  //     } else if (hint11) {
  //       setForm(false);
  //     }
  //   };

  return (
    <>
      <div>
        <nav className="navbar">
          <div className="navbar-brand">
            <img
              src="https://images.icompaas.com/i/ic-logo.png"
              height="30px"
            ></img>
            <span>iCompaas CTF</span>
          </div>
        </nav>
        <div className="each-card">
          <div className="circular-progress-container">
            <div className="circular-progress-bar" style={progressBarStyle}>
              <div className="circular-progress-text1"></div>

              <div className="circular-progress-text">{res}%</div>
            </div>
          </div>
          <h1>CTF flag submission</h1>
          {form ? (
            <div className="inputDiv">
              <label className="label">Flag1:</label>
              <br></br>
              <input type="textbox" onChange={flag1} value={flag11}></input>
              <div className="buttonDiv">
                {" "}
                <button className="button-1">Hint</button>
                <button className="button-2" onClick={flag1Submit}>
                  Submit Flag 1
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          {hint1 ? (
            <>
              <div className="hint1Div">INCORRECT!</div>
            </>
          ) : (
            ""
          )}
          {hint11 ? (
            <>
              <div className="hint1Div1">CORRECT</div>
            </>
          ) : (
            ""
          )}
          {form2 ? (
            <div className="inputDiv">
              <label className="label">Flag2:</label>
              <br></br>
              <input type="textbox" onChange={flag2} value={flag12}></input>
              <div className="buttonDiv">
                {" "}
                <button className="button-1">Hint</button>
                <button className="button-2" onClick={flag2Submit}>
                  Submit Flag 2
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          {hint2 ? (
            <>
              <div className="hint1Div">INCORRECT!</div>
            </>
          ) : (
            ""
          )}
          {hint22 ? (
            <>
              <div className="hint1Div1">CORRECT</div>
            </>
          ) : (
            ""
          )}
          {form3 ? (
            <div className="inputDiv">
              <label className="label">Flag3:</label>
              <br></br>
              <input type="textbox" onChange={flag3} value={flag13}></input>
              <div className="buttonDiv">
                {" "}
                <button className="button-1">Hint</button>
                <button className="button-2" onClick={flag3Submit}>
                  Submit Flag 3
                </button>
              </div>
            </div>
          ) : (
            ""
          )}

          {hint3 ? (
            <>
              <div className="hint1Div">INCORRECT!</div>
            </>
          ) : (
            ""
          )}
          {hint33 ? (
            <>
              <div className="hint1Div1">CORRECT</div>
            </>
          ) : (
            ""
          )}

          {form4 ? (
            <div className="inputDiv">
              <label className="label">Flag4:</label>
              <br></br>
              <input type="textbox" onChange={flag4}></input>
              <div className="buttonDiv">
                {" "}
                <button className="button-1">Hint</button>
                <button
                  className="button-2"
                  onClick={flag4Submit}
                  value={flag14}
                >
                  Submit Flag 4
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          {hint4 ? (
            <>
              <div className="hint1Div">INCORRECT!</div>
            </>
          ) : (
            ""
          )}
          {hint44 ? (
            <>
              <div className="hint1Div1">CORRECT</div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
