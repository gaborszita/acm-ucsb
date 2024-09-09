"use client";
import events from "../../../../../public/data/events";

const EventsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-36">
      <h1>Upcoming Events!</h1>
      <div className="flex flex-row flex-wrap justify-center">
        {events.map((event, index) => {
          return (
            <div
              key={index}
              className="w-96 h-64 flex flex-col items-center rounded-lg shadow-md bg-blue-100 m-4"
            >
              <h2>{event.name}</h2>
              <p className="text-center">{event.description}</p>
              <p>
                <b>{"When: "}</b>
                {event.date ?? "TBD"}
              </p>
              <p>
                <b>{"Where: "}</b>
                {event.location ?? "TBD"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventsSection;
