import React from "react";
import "./mainStyles.css";
import { Container, Row, Carousel } from "react-bootstrap";
import HourlyForeCast from "./HourlyForecast";
import { isTomorrow } from "date-fns";
import { isToday } from "date-fns";
import { getMonthString } from "../../helpers/dates";
import { handleBackgroundImage } from "../../helpers/switchCases.js";

function MainCarousel({ forecast, weather }) {
  if (!forecast || !weather) {
    return null;
  }

  const dataList = forecast?.list;

  let today = new Date();
  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <Container id="main">
      <Carousel
        interval={null}
        controls={false}
        // indicators={false}
        fade
      >
        <Carousel.Item>
          <Row className="carousel-item-main-display">
            <img
              src={handleBackgroundImage(weather.weather[0].main)}
              alt="background"
            />
            <h6 className="carousel-date">
              {getMonthString(today.getMonth()).toUpperCase() +
                " " +
                today.getDate()}
            </h6>
            <div className="carousel-description">
              <span className="carousel-description-title">
                {weather.weather[0].main}
              </span>
              <span className="carousel-description-temp">
                {Math.floor(parseInt(weather.main.temp) - 273.15)}℃
              </span>
            </div>
          </Row>
          <Row className="carousel-item-detailed-display">
            {dataList
              ?.filter((today) => isToday(new Date(today.dt_txt)))
              ?.map((data, i) => (
                <HourlyForeCast key={i} data={data} />
              ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="carousel-item-main-display">
            <div className="background-image">
              <img
                src={handleBackgroundImage(
                  dataList
                    ?.filter((today) => isTomorrow(new Date(today.dt_txt)))
                    ?.map((data) => data)
                    ?.slice(0, 1)[0].weather[0].main
                )}
                alt="background"
              />
            </div>
            <h6 className="carousel-date">
              {getMonthString(tomorrow.getMonth()).toUpperCase() +
                " " +
                tomorrow.getDate()}
            </h6>
            <div className="carousel-description">
              <span className="carousel-description-title">
                {dataList
                  ?.filter((today) => isTomorrow(new Date(today.dt_txt)))
                  ?.map((data) => data.weather[0].main)
                  ?.slice(0, 1)}
              </span>
              <span className="carousel-description-temp">
                {Math.floor(
                  parseInt(
                    dataList?.filter((today) =>
                      isTomorrow(new Date(today.dt_txt))
                    )[4].main.temp - 273.15
                  )
                )}
                ℃
              </span>
            </div>
          </Row>
          <Row className="carousel-item-detailed-display">
            {dataList
              ?.filter((today) => isTomorrow(new Date(today.dt_txt)))
              ?.map((data, i) => (
                <HourlyForeCast key={i} data={data} />
              ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default MainCarousel;
