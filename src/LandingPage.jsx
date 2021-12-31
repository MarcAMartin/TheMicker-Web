import React, { useState, useEffect } from "react";
import ReactCodeInput from "react-code-input";
import FadeIn from "react-fade-in";
import { isBrowser } from "react-device-detect";

export default function LandingPage() {
  const [, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const props = {
    inputStyle: {
      fontFamily: "monospace",
      margin: "4px",
      MozAppearance: "textfield",
      width: "15px",
      borderRadius: "3px",
      fontSize: "14px",
      height: "26px",
      paddingLeft: "7px",
      backgroundColor: "black",
      color: "lightskyblue",
      border: "1px solid lightskyblue",
    },
    inputStyleInvalid: {
      fontFamily: "monospace",
      margin: "4px",
      MozAppearance: "textfield",
      width: "15px",
      borderRadius: "3px",
      fontSize: "14px",
      height: "26px",
      paddingLeft: "7px",
      backgroundColor: "black",
      color: "red",
      border: "1px solid red",
    },
  };

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      setIsLoading(false);
    }
    getData();
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ position: "relative", textAlign: "center" }}>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "20vh",
            display: "flex",
          }}
        >
          <FadeIn delay={10} transitionDuration={1000}>
            <h1 style={{ fontSize: isBrowser ? "75px" : "40px" }}>
              The Micker
            </h1>
          </FadeIn>
        </div>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "30vh",
            display: "flex",
          }}
        >
          <FadeIn delay={20} transitionDuration={2000}>
            <h2
              style={{
                fontWeight: "400",
                fontSize: isBrowser ? "35px" : "20px",
                transition: "opacity 0.5s",
                opacity: 1,
                height: "25vh",
                width: "80vw",
              }}
            >
              Sentient trading platform that utilizes human sentiment, social
              trends and culture to facilitate programmatic trades within the
              market. <br />{" "}
              <span
                style={{
                  textAlign: "right",
                  fontSize: isBrowser ? "15px" : '10px',
                  fontWeight: "200",
                }}
              >
                Powered by Alpaca Securities LLC and IEX Cloud
              </span>
            </h2>
          </FadeIn>
        </div>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "20vh",
            display: "flex",
          }}
        >
          <div>
            <FadeIn delay={30} transitionDuration={3000}>
              <h3 style={{ fontWeight: "200" }}> Access Code </h3>
              <ReactCodeInput
                inputStyle={{ width: "15px", fontSize: "14px" }}
                onChange={(value) => setIsValid(value.length !== 8)}
                isValid={isValid}
                fields={8}
                type="text"
                {...props}
              />
            </FadeIn>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "end",
            width: "100vw",
            height: "20vh",
            display: "flex",
          }}
        >
          <FadeIn delay={40} transitionDuration={4000}>
            <h3> A Privately Held Trading Platform</h3>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
